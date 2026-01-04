import { type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.contactInquiries = new Map();
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      id,
      firstName: insertInquiry.firstName,
      lastName: insertInquiry.lastName,
      phone: insertInquiry.phone,
      email: insertInquiry.email,
      projectType: insertInquiry.projectType,
      estrichType: insertInquiry.estrichType,
      squareMeters: insertInquiry.squareMeters ?? null,
      floor: insertInquiry.floor ?? null,
      message: insertInquiry.message,
      budgetSummary: insertInquiry.budgetSummary ?? null,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

export const storage = new MemStorage();
