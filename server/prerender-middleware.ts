import { Request, Response, NextFunction } from "express";
import { generateStaticSEOContent } from "./seo-static-content";

const PRERENDER_SERVICE = 'https://service.prerender.io/';
const PRERENDER_TIMEOUT = 5000;
const SITE_BASE = 'https://estriche-muenchen.de';

const BOT_USER_AGENTS = [
  'googlebot', 'google-inspectiontool', 'googleweblight', 'storebot-google',
  'adsbot-google', 'apis-google', 'mediapartners-google', 'google-extended',
  'googleother', 'google-safety',
  'gptbot', 'chatgpt-user', 'oai-searchbot',
  'claudebot', 'claude-web', 'anthropic-ai',
  'perplexitybot', 'perplexity-user', 'cohere-ai',
  'meta-externalagent', 'bytespider', 'ccbot', 'diffbot',
  'youbot', 'you.com', 'amazonbot', 'qwantbot', 'applebot-extended',
  'bingbot', 'bingpreview', 'msnbot', 'microsoftpreview',
  'slurp', 'duckduckbot', 'baiduspider', 'yandexbot', 'yandexmobilebot',
  'sogou', 'exabot',
  'facebot', 'facebookexternalhit', 'ia_archiver', 'linkedinbot',
  'twitterbot', 'pinterest', 'pinterestbot',
  'semrushbot', 'ahrefsbot', 'mj12bot', 'dotbot', 'petalbot',
  'screaming frog', 'rogerbot',
  'applebot', 'discordbot', 'telegrambot', 'whatsapp', 'slackbot',
  'redditbot', 'yeti', 'seznambot', 'archive.org_bot',
  'headlesschrome', 'phantomjs', 'prerender', 'lighthouse',
  'chrome-lighthouse', 'pagespeed', 'gtmetrix', 'webpagetest',
];

const HEADLESS_SIGNALS = [
  'headlesschrome', 'phantomjs', 'puppeteer', 'playwright', 'selenium', 'webdriver',
];

const STATIC_EXT = /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|map|json|xml|txt|webp|avif|mp4|webm|pdf)$/;

function isCrawler(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot)) ||
    HEADLESS_SIGNALS.some(sig => ua.includes(sig));
}

function setSSRHeaders(res: Response, source: string, cached: boolean = false): void {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-SSR-Rendered', 'true');
  res.setHeader('X-SSR-Source', source);
  res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Vary', 'User-Agent');
  res.setHeader('Link', [
    '</logo.webp>; rel=preload; as=image; type=image/webp',
    '<https://fonts.googleapis.com>; rel=preconnect',
    '<https://fonts.gstatic.com>; rel=preconnect; crossorigin'
  ].join(', '));
}

function extractJsonLd(html: string): string | null {
  const match = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g);
  return match ? match.join('\n') : null;
}

function extractMetaTags(html: string): string | null {
  const tags: string[] = [];
  const titleMatch = html.match(/<title>[^<]+<\/title>/);
  if (titleMatch) tags.push(titleMatch[0]);
  const metaMatches = html.match(/<meta\s+(?:name|property)="[^"]*"\s+content="[^"]*"\s*\/?>/g);
  if (metaMatches) tags.push(...metaMatches);
  const canonicalMatch = html.match(/<link\s+rel="canonical"[^>]*>/);
  if (canonicalMatch) tags.push(canonicalMatch[0]);
  const hreflangMatches = html.match(/<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="[^"]*"\s*\/?>/g);
  if (hreflangMatches) tags.push(...hreflangMatches);
  return tags.length > 0 ? tags.join('\n  ') : null;
}

function enrichHtmlWithSSR(prerenderHtml: string, ssrHtml: string): string {
  let enriched = prerenderHtml;
  if (!prerenderHtml.includes('application/ld+json')) {
    const jsonLd = extractJsonLd(ssrHtml);
    if (jsonLd) {
      enriched = enriched.replace('</head>', `  ${jsonLd}\n</head>`);
    }
  }
  if (!prerenderHtml.includes('rel="canonical"')) {
    const metaTags = extractMetaTags(ssrHtml);
    if (metaTags) {
      enriched = enriched.replace('</head>', `  ${metaTags}\n</head>`);
    }
  }
  return enriched;
}

async function fetchFromPrerender(path: string): Promise<string | null> {
  const token = process.env.PRERENDER_TOKEN;
  if (!token) return null;

  const url = `${SITE_BASE}${path}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), PRERENDER_TIMEOUT);

    const response = await fetch(`${PRERENDER_SERVICE}${url}`, {
      headers: {
        'X-Prerender-Token': token,
        'User-Agent': 'Mozilla/5.0 (compatible; PrerenderFetch/1.0)',
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (response.ok) {
      return await response.text();
    }
    console.log(`[Prerender] API ${response.status} für ${path}`);
    return null;
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unbekannt';
    console.log(`[Prerender] Fehler für ${path}: ${msg}`);
    return null;
  }
}

async function handleCrawler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const path = req.path;
  const ua = (req.headers['user-agent'] || '').substring(0, 60);
  console.log(`[SSR] Crawler: ${ua}... | Path: ${path}`);

  const prerenderHtml = await fetchFromPrerender(path);

  if (prerenderHtml) {
    const ssrContent = generateStaticSEOContent(path);

    if (ssrContent) {
      const enriched = enrichHtmlWithSSR(prerenderHtml, ssrContent);
      setSSRHeaders(res, 'prerender.io+enriched');
      res.send(enriched);
      return;
    }

    setSSRHeaders(res, 'prerender.io');
    res.send(prerenderHtml);
    return;
  }

  const ssrContent = generateStaticSEOContent(path);
  if (ssrContent) {
    console.log(`[SSR] Fallback auf eigene SSR für ${path}`);
    setSSRHeaders(res, 'own-ssr-fallback');
    res.send(ssrContent);
    return;
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('X-SSR-Rendered', 'true');
  res.status(404).send(`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seite nicht gefunden | Estriche München</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="canonical" href="${SITE_BASE}/">
</head>
<body>
  <h1>Seite nicht gefunden</h1>
  <p>Die angeforderte Seite existiert nicht. Besuchen Sie unsere <a href="/">Startseite</a> oder kontaktieren Sie uns unter <a href="tel:+4989444438872">089 / 444 43 887 2</a>.</p>
</body>
</html>`);
}

function generateHeadInjection(path: string): string | null {
  const ssrHtml = generateStaticSEOContent(path);
  if (!ssrHtml) return null;

  const parts: string[] = [];

  const jsonLd = extractJsonLd(ssrHtml);
  if (jsonLd) parts.push(jsonLd);

  const metaTags = extractMetaTags(ssrHtml);
  if (metaTags) parts.push(metaTags);

  return parts.length > 0 ? `\n  <!-- SSR-Injection -->\n  ${parts.join('\n  ')}\n  <!-- /SSR-Injection -->` : null;
}

function handleNormalVisitor(req: Request, res: Response, next: NextFunction): void {
  const injection = generateHeadInjection(req.path);
  if (!injection) {
    return next();
  }

  let injected = false;

  const originalEnd = res.end.bind(res);
  const originalWrite = res.write.bind(res);
  const originalSend = res.send.bind(res);

  function injectIntoHtml(chunk: any): any {
    if (injected) return chunk;
    if (typeof chunk === 'string' && chunk.includes('</head>')) {
      injected = true;
      res.setHeader('X-SSR-Injection', 'true');
      return chunk.replace('</head>', `${injection}\n</head>`);
    }
    if (Buffer.isBuffer(chunk)) {
      const str = chunk.toString('utf-8');
      if (str.includes('</head>')) {
        injected = true;
        res.setHeader('X-SSR-Injection', 'true');
        return Buffer.from(str.replace('</head>', `${injection}\n</head>`), 'utf-8');
      }
    }
    return chunk;
  }

  res.send = function (body: any): Response {
    return originalSend(injectIntoHtml(body));
  } as any;

  res.write = function (chunk: any, ...args: any[]): boolean {
    return originalWrite(injectIntoHtml(chunk), ...args);
  } as any;

  res.end = function (chunk?: any, ...args: any[]): Response {
    if (chunk) {
      return originalEnd(injectIntoHtml(chunk), ...args) as any;
    }
    return originalEnd(...args) as any;
  } as any;

  next();
}

export function unifiedSSRMiddleware(req: Request, res: Response, next: NextFunction): void {
  if (req.path.startsWith('/api')) {
    return next();
  }

  if (STATIC_EXT.test(req.path)) {
    return next();
  }

  if (isCrawler(req.headers['user-agent'])) {
    handleCrawler(req, res, next);
    return;
  }

  handleNormalVisitor(req, res, next);
}
