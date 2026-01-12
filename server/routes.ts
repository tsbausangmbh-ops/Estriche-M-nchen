import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { sendContactNotification } from "./email";

const SITE_URL = "https://estriche-muenchen.de";

const sitemapRoutes = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/leistungen/zementestrich", priority: 0.9, changefreq: "monthly" },
  { url: "/leistungen/fliessestrich", priority: 0.9, changefreq: "monthly" },
  { url: "/leistungen/industrieboeden", priority: 0.9, changefreq: "monthly" },
  { url: "/leistungen/fussbodenheizung", priority: 0.9, changefreq: "monthly" },
  { url: "/leistungen/waermedaemmung", priority: 0.9, changefreq: "monthly" },
  { url: "/leistungen/sanierung", priority: 0.9, changefreq: "monthly" },
  { url: "/angebot", priority: 0.8, changefreq: "weekly" },
  { url: "/kontakt", priority: 0.8, changefreq: "monthly" },
  { url: "/preise", priority: 0.8, changefreq: "monthly" },
  { url: "/rechner", priority: 0.8, changefreq: "monthly" },
  { url: "/faq", priority: 0.7, changefreq: "monthly" },
  { url: "/impressum", priority: 0.3, changefreq: "yearly" },
  { url: "/datenschutz", priority: 0.3, changefreq: "yearly" },
  { url: "/agb", priority: 0.3, changefreq: "yearly" },
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

  // SEO: robots.txt
  app.get("/robots.txt", (req, res) => {
    const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml

# Disallow admin/API routes
Disallow: /api/
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
