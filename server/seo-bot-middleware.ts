import { Request, Response, NextFunction } from "express";
import { generateStaticSEOContent } from "./seo-static-content";

const BOT_USER_AGENTS = [
  'googlebot',
  'google-inspectiontool',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'sogou',
  'exabot',
  'facebot',
  'facebookexternalhit',
  'ia_archiver',
  'linkedinbot',
  'twitterbot',
  'pinterest',
  'semrushbot',
  'ahrefsbot',
  'mj12bot',
  'dotbot',
  'petalbot',
  'screaming frog',
  'rogerbot',
  'applebot',
];

export function isBot(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

export function seoBotMiddleware(req: Request, res: Response, next: NextFunction) {
  const userAgent = req.headers['user-agent'];
  
  if (req.path.startsWith('/api')) {
    return next();
  }
  
  if (req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|map)$/)) {
    return next();
  }
  
  if (isBot(userAgent)) {
    console.log(`[SEO] Bot detected: ${userAgent?.substring(0, 50)}... serving static content for ${req.path}`);
    
    const html = generateStaticSEOContent(req.path);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('X-Robots-Tag', 'index, follow');
    return res.send(html);
  }
  
  next();
}
