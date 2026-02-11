import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import { createRequire } from "module";
import { seoBotMiddleware } from "./seo-bot-middleware";
import compression from "compression";

const require = createRequire(import.meta.url);

const app = express();
const httpServer = createServer(app);

// Enable gzip/brotli compression for all responses
app.use(compression());

// Security & Performance Headers (Google 2026 Optimized)
app.use((req, res, next) => {
  // Cache fingerprinted assets (with hash in filename) aggressively
  if (req.path.match(/\.[a-f0-9]{8,}\.(js|css)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } 
  // Cache other static assets with shorter duration (1 week)
  else if (req.path.match(/\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
  }
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Google 2026 Core Web Vitals hints
  if (req.path === '/' || req.path.startsWith('/leistungen')) {
    res.setHeader('Accept-CH', 'Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion, Viewport-Width, DPR');
    res.setHeader('Critical-CH', 'Sec-CH-Prefers-Color-Scheme');
  }
  
  next();
});

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

app.use(seoBotMiddleware);

// Prerender.io as fallback for bots not caught by our SSR middleware
if (process.env.PRERENDER_TOKEN) {
  const prerenderNode = require('prerender-node');
  app.use(prerenderNode
    .set('prerenderToken', process.env.PRERENDER_TOKEN)
    .set('protocol', 'https')
    .set('host', 'estriche-muenchen.de')
    .blacklisted(['^/api/'])
  );
  console.log('[Prerender.io] Middleware active as SSR fallback');
} else {
  console.log('[Prerender.io] No PRERENDER_TOKEN set - running without prerender.io fallback');
}

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
