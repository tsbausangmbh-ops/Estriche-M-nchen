import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
      });

      return res.status(201).json({ 
        success: true, 
        message: "Anfrage erfolgreich gesendet" 
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
