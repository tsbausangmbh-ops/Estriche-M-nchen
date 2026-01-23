import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { sendContactNotification } from "./email";

const SITE_URL = "https://estriche-muenchen.de";

const sitemapRoutes = [
  { url: "/", priority: 1.0, changefreq: "weekly", title: "Estrich München" },
  { url: "/leistungen/zementestrich", priority: 0.9, changefreq: "monthly", title: "Zementestrich München" },
  { url: "/leistungen/fliessestrich", priority: 0.9, changefreq: "monthly", title: "Fließestrich München" },
  { url: "/leistungen/heizestrich", priority: 0.9, changefreq: "monthly", title: "Heizestrich München" },
  { url: "/leistungen/industrieboeden", priority: 0.9, changefreq: "monthly", title: "Industrieboden München" },
  { url: "/leistungen/sichtestrich", priority: 0.9, changefreq: "monthly", title: "Sichtestrich München" },
  { url: "/leistungen/fussbodenheizung", priority: 0.9, changefreq: "monthly", title: "Fußbodenheizung nachrüsten München" },
  { url: "/leistungen/waermedaemmung", priority: 0.9, changefreq: "monthly", title: "Wärmedämmung Estrich München" },
  { url: "/leistungen/sanierung", priority: 0.9, changefreq: "monthly", title: "Estrichsanierung München" },
  { url: "/leistungen/schnellestrich", priority: 0.9, changefreq: "monthly", title: "Schnellestrich München" },
  { url: "/ueber-uns", priority: 0.7, changefreq: "monthly", title: "Über uns - Estrichleger Meisterbetrieb" },
  { url: "/angebot", priority: 0.8, changefreq: "weekly", title: "Estrich Angebot München" },
  { url: "/kontakt", priority: 0.8, changefreq: "monthly", title: "Kontakt Estrich München" },
  { url: "/preise", priority: 0.8, changefreq: "monthly", title: "Estrich Preise München" },
  { url: "/rechner", priority: 0.95, changefreq: "weekly", title: "Estrich Kostenrechner München" },
  { url: "/ablauf", priority: 0.7, changefreq: "monthly", title: "Ablauf Estrichverlegung" },
  { url: "/faq", priority: 0.7, changefreq: "monthly", title: "Estrich FAQ München" },
  { url: "/blog", priority: 0.6, changefreq: "weekly", title: "Estrich Blog" },
  { url: "/impressum", priority: 0.3, changefreq: "yearly", title: "Impressum" },
  { url: "/datenschutz", priority: 0.3, changefreq: "yearly", title: "Datenschutz" },
  { url: "/agb", priority: 0.3, changefreq: "yearly", title: "AGB" },
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // SEO: XML Sitemap
  app.get("/sitemap.xml", (req, res) => {
    const today = new Date().toISOString().split("T")[0];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  // SEO: robots.txt with enhanced directives
  app.get("/robots.txt", (req, res) => {
    const robots = `# Estrich München - robots.txt
# https://estriche-muenchen.de

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow admin/API routes
Disallow: /api/

# Crawl-delay for polite crawling
Crawl-delay: 1

# Googlebot specific
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bingbot specific  
User-agent: Bingbot
Allow: /
Crawl-delay: 1
`;
    res.header("Content-Type", "text/plain");
    res.send(robots);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactInquirySchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          error: "Validation error", 
          details: validationError.toString() 
        });
      }

      const inquiry = await storage.createContactInquiry(result.data);
      
      console.log("New contact inquiry received:", {
        name: `${inquiry.firstName} ${inquiry.lastName}`,
        email: inquiry.email,
        projectType: inquiry.projectType,
        estrichType: inquiry.estrichType,
        squareMeters: inquiry.squareMeters,
        floor: inquiry.floor,
        budgetSummary: inquiry.budgetSummary ? "Included" : "None",
      });

      const emailResult = await sendContactNotification(inquiry);
      
      if (!emailResult.success) {
        console.warn("Email notification failed:", emailResult.error);
      }

      return res.status(201).json({ 
        success: true, 
        message: "Anfrage erfolgreich gesendet",
        emailSent: emailResult.success
      });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      return res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      return res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      return res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  return httpServer;
}
