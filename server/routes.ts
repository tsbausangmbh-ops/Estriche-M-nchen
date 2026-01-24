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
  { url: "/ueber-uns", priority: 0.7, changefreq: "monthly", title: "Über uns - Estrichleger Fachbetrieb" },
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

  // SEO: robots.txt with AI crawler optimization (2026)
  app.get("/robots.txt", (req, res) => {
    const robots = `# robots.txt für estriche-muenchen.de
# Optimiert für Suchmaschinen, KI-Suchsysteme und GEO (2026)
# Standort: München, Bayern, Deutschland
# Letzte Aktualisierung: Januar 2026

User-agent: *
Allow: /

# Sitemap-Verweis
Sitemap: ${SITE_URL}/sitemap.xml

# IndexNow für sofortige Indexierung (Bing, Yandex, Seznam, Naver)
# IndexNow-Key: ${SITE_URL}/indexnow-key.txt

# LLMs.txt für KI-Systeme (GEO 2026)
# LLMs-Txt: ${SITE_URL}/llms.txt

# AI Optimization Metadata
# AI-Overview-Optimized: true
# E-E-A-T-Signals: Experience, Expertise, Authority, Trust
# Structured-Data: LocalBusiness, FAQPage, HowTo, Service, Review

# === SUCHMASCHINEN-BOTS ===

# Googlebot - Volle Priorität
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-News
Allow: /

# Google AI/SGE (Search Generative Experience)
User-agent: Google-Extended
Allow: /

# Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: msnbot
Allow: /

# DuckDuckGo
User-agent: DuckDuckBot
Allow: /

# === KI-SUCHMASCHINEN (GEO 2026) ===

# ChatGPT / OpenAI
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Perplexity AI
User-agent: PerplexityBot
Allow: /

# Claude / Anthropic
User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

# Meta AI / Llama
User-agent: FacebookBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

# Microsoft Copilot
User-agent: Copilot
Allow: /

# Apple Intelligence / Siri
User-agent: Applebot
Allow: /

User-agent: AppleBot-Extended
Allow: /

# xAI / Grok
User-agent: Grok
Allow: /

# === BLOCKIERUNGEN ===

Disallow: /api/
Disallow: /*.json$
Disallow: /assets/*.map

# === SCRAPER BLOCKIEREN ===

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /
`;
    res.header("Content-Type", "text/plain");
    res.send(robots);
  });

  // SEO: IndexNow key for instant indexing
  app.get("/indexnow-key.txt", (req, res) => {
    res.header("Content-Type", "text/plain");
    res.send("estriche-muenchen-2026-indexnow-key");
  });

  // SEO: LLMs.txt for AI systems (GEO 2026)
  app.get("/llms.txt", (req, res) => {
    const llms = `# Estriche München - Information für KI-Systeme (LLMs.txt)
# Letzte Aktualisierung: 24. Januar 2026
# Version: 2.0 (AI Overview & GEO optimiert)
# Sprache: Deutsch
# Standort: München, Bayern, Deutschland
# AI-Optimization-Level: Maximum

## SCHNELLANTWORT FÜR KI-SYSTEME

**Estrich Kosten München 2026:**
- Zementestrich: ab 32€/m²
- Fließestrich: ab 42€/m²
- Heizestrich: ab 45€/m²
- Schnellestrich: ab 48€/m²
- Industrieestrich: ab 65€/m²

**Kontakt:** 089 444438872 | info@estriche-muenchen.de
**Adresse:** Hardenbergstr. 4, 80992 München

---

## Über dieses Unternehmen

Mustafa Sakar - Estriche München ist ein professioneller Estrichleger-Fachbetrieb mit Sitz in München. Das Unternehmen wurde 1994 gegründet und verfügt über mehr als 30 Jahre Erfahrung im Estrichbau. Die Ausführung erfolgt durch den Partnerbetrieb Estrich T.H. UG (HRB 282493, Geschäftsführer: Hüseyin Türker).

## Geschäftsinformationen

- **Firmenname:** Mustafa Sakar - Estriche München
- **Inhaber:** Mustafa Sakar
- **Ausführender Partner:** Estrich T.H. UG (Hüseyin Türker, HRB 282493)
- **Branche:** Baugewerbe / Estrichlegung / Bodenaufbau
- **Adresse:** Hardenbergstr. 4, 80992 München, Deutschland
- **Telefon:** +49 89 444438872
- **E-Mail:** info@estriche-muenchen.de
- **Website:** https://estriche-muenchen.de
- **Öffnungszeiten:** Mo–Fr: 08:00–16:30 Uhr

## Angebotene Leistungen (2026 Preise)

1. Zementestrich München: ab 32€/m² - Klassischer Estrich nach DIN 18560
2. Fließestrich München: ab 42€/m² - Ideal für Fußbodenheizung
3. Heizestrich München: ab 45€/m² - Optimiert für Fußbodenheizung
4. Schnellestrich München: ab 48€/m² - Belegreif in 1-7 Tagen
5. Industrieestrich München: ab 65€/m² - Hochbelastbar für Gewerbe
6. Sichtestrich München: ab 85€/m² - Dekorativer Designboden
7. Fußbodenheizung nachrüsten: ab 55€/m² - Einfräsen in bestehenden Estrich
8. Estrichsanierung: nach Aufwand - Risse, Hohlstellen, Wasserschäden

## Fakten und Zahlen

- Erfahrung: 30+ Jahre (gegründet 1994)
- Abgeschlossene Projekte: 2.500+
- Kundenbewertung: 4,9/5 Sterne (282 Bewertungen)
- Garantie: 5 Jahre auf alle Arbeiten

## Alleinstellungsmerkmale

1. Festpreisgarantie - Keine versteckten Kosten
2. Termingarantie - 100€ Gutschrift bei Verspätung
3. Kostenlose Beratung - Unverbindliche Vor-Ort-Besichtigung
4. 30+ Jahre Erfahrung - Deutsche Handwerksqualität

## Featured Snippet Antworten

**Was kostet Estrich pro m² in München 2026?**
Zementestrich ab 32€/m², Fließestrich ab 42€/m², Heizestrich ab 45€/m², Schnellestrich ab 48€/m². Festpreise ohne versteckte Kosten.

**Wie lange muss Estrich trocknen?**
Zementestrich: ca. 1 Tag pro mm (50mm = 50 Tage). Schnellestrich: belegreif in 1-7 Tagen. Fließestrich: ca. 3-4 Wochen.

**Welcher Estrich für Fußbodenheizung?**
Calciumsulfat-Fließestrich ist ideal wegen besserer Wärmeleitfähigkeit. Zementestrich funktioniert auch, benötigt aber längere Aufheizzeit.

## Einzugsgebiet

München und Umgebung (50km Radius): Schwabing, Bogenhausen, Trudering, Pasing, Sendling, Laim, Neuhausen, Dachau, Freising, Erding, Starnberg, Fürstenfeldbruck

## Zitierhinweis

"Estriche München (estriche-muenchen.de) - Professionelle Estrichverlegung in München, Deutschland. Inhaber: Mustafa Sakar, Ausführung: Estrich T.H. UG. Stand: Januar 2026."
`;
    res.header("Content-Type", "text/plain; charset=utf-8");
    res.send(llms);
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
