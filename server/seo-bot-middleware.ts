import { Request, Response, NextFunction } from "express";
import { generateStaticSEOContent } from "./seo-static-content";

const BOT_USER_AGENTS = [
  'googlebot',
  'google-inspectiontool',
  'googleweblight',
  'storebot-google',
  'adsbot-google',
  'mediapartners-google',
  'bingbot',
  'bingpreview',
  'msnbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'yandexmobilebot',
  'sogou',
  'exabot',
  'facebot',
  'facebookexternalhit',
  'ia_archiver',
  'linkedinbot',
  'twitterbot',
  'pinterest',
  'pinterestbot',
  'semrushbot',
  'ahrefsbot',
  'mj12bot',
  'dotbot',
  'petalbot',
  'screaming frog',
  'rogerbot',
  'applebot',
  'discordbot',
  'telegrambot',
  'whatsapp',
  'slackbot',
  'redditbot',
  'yeti',
  'seznambot',
  'archive.org_bot',
  'headlesschrome',
  'phantomjs',
  'prerender',
  'lighthouse',
  'chrome-lighthouse',
  'pagespeed',
];

const HEADLESS_SIGNALS = [
  'headlesschrome',
  'phantomjs',
  'puppeteer',
  'playwright',
  'selenium',
  'webdriver',
];

const HTML_CACHE = new Map<string, { html: string; timestamp: number }>();
const CACHE_TTL = 3600000; // 1 hour in milliseconds
const MAX_CACHE_SIZE = 100;

function evictOldestCacheEntry(): void {
  if (HTML_CACHE.size >= MAX_CACHE_SIZE) {
    let oldestKey: string | null = null;
    let oldestTime = Infinity;
    
    HTML_CACHE.forEach((value, key) => {
      if (value.timestamp < oldestTime) {
        oldestTime = value.timestamp;
        oldestKey = key;
      }
    });
    
    if (oldestKey) {
      HTML_CACHE.delete(oldestKey);
    }
  }
}

function getCachedHTML(path: string): string | null {
  const cached = HTML_CACHE.get(path);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.html;
  }
  if (cached) {
    HTML_CACHE.delete(path);
  }
  return null;
}

function setCachedHTML(path: string, html: string): void {
  evictOldestCacheEntry();
  HTML_CACHE.set(path, { html, timestamp: Date.now() });
}

export function isBot(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

export function isHeadless(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return HEADLESS_SIGNALS.some(signal => ua.includes(signal));
}

export function detectBotByHeaders(req: Request): boolean {
  const accept = req.headers['accept'] || '';
  const acceptLanguage = req.headers['accept-language'];
  
  if (typeof accept === 'string' && !accept.includes('text/html')) {
    return false;
  }
  
  if (!acceptLanguage) {
    return true;
  }
  
  return false;
}

let botRequestCount = 0;
let lastLogTime = Date.now();

function logBotRequest(userAgent: string, path: string, cached: boolean): void {
  botRequestCount++;
  const now = Date.now();
  
  if (now - lastLogTime > 60000) {
    console.log(`[SEO] Bot requests in last minute: ${botRequestCount}`);
    botRequestCount = 0;
    lastLogTime = now;
  }
  
  const shortUA = userAgent?.substring(0, 60) || 'unknown';
  console.log(`[SEO] Bot: ${shortUA}... | Path: ${path} | Cached: ${cached}`);
}

export function seoBotMiddleware(req: Request, res: Response, next: NextFunction) {
  const userAgent = req.headers['user-agent'];
  
  if (req.path.startsWith('/api')) {
    return next();
  }
  
  if (req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|map|json|xml|txt)$/)) {
    return next();
  }
  
  const isBotUA = isBot(userAgent);
  const isHeadlessUA = isHeadless(userAgent);
  const hasNoAcceptLanguage = !req.headers['accept-language'];
  
  const shouldServeStatic = isBotUA || isHeadlessUA || (hasNoAcceptLanguage && !userAgent?.includes('curl'));
  
  if (shouldServeStatic) {
    let cachedHTML = getCachedHTML(req.path);
    const wasCached = !!cachedHTML;
    
    if (!cachedHTML) {
      cachedHTML = generateStaticSEOContent(req.path);
      setCachedHTML(req.path, cachedHTML);
    }
    
    logBotRequest(userAgent || '', req.path, wasCached);
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('X-Robots-Tag', 'index, follow');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-SSR-Cache', wasCached ? 'HIT' : 'MISS');
    return res.send(cachedHTML);
  }
  
  next();
}

export function clearSSRCache(): void {
  HTML_CACHE.clear();
  console.log('[SEO] SSR cache cleared');
}

export function getSSRCacheStats(): { size: number; keys: string[] } {
  return {
    size: HTML_CACHE.size,
    keys: Array.from(HTML_CACHE.keys())
  };
}
