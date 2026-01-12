import nodemailer from "nodemailer";
import type { ContactInquiry } from "@shared/schema";

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "info@estriche-muenchen.de";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    console.warn("SMTP configuration incomplete. Email sending disabled.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function formatBudgetSummary(budgetSummary: string): string {
  try {
    const budget = JSON.parse(budgetSummary);
    return `
      <h3 style="margin-top: 20px; color: #333;">Kostenvoranschlag</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Estrichart</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${budget.estrichType || "-"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Fläche</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${budget.squareMeters || "-"} m²</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Stockwerk</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${budget.floor || "-"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Geschätzter Preis</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #e07800;">${budget.totalPrice || "-"} €</td>
        </tr>
        ${budget.options && budget.options.length > 0 ? `
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Optionen</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${budget.options.join(", ")}</td>
        </tr>
        ` : ""}
      </table>
    `;
  } catch {
    return `<p><strong>Kostenvoranschlag:</strong> ${budgetSummary}</p>`;
  }
}

export async function sendContactNotification(inquiry: ContactInquiry): Promise<{ success: boolean; error?: string }> {
  const transporter = createTransporter();
  
  if (!transporter) {
    return { success: false, error: "SMTP not configured" };
  }

  const budgetHtml = inquiry.budgetSummary ? formatBudgetSummary(inquiry.budgetSummary) : "";

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #e07800; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Neue Kontaktanfrage</h1>
        <p style="margin: 5px 0 0;">Estrich München</p>
      </div>
      
      <div style="padding: 20px; background-color: #fff;">
        <h2 style="color: #333; border-bottom: 2px solid #e07800; padding-bottom: 10px;">Kontaktdaten</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; width: 40%;"><strong>Name:</strong></td>
            <td style="padding: 8px 0;">${inquiry.firstName} ${inquiry.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>E-Mail:</strong></td>
            <td style="padding: 8px 0;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Telefon:</strong></td>
            <td style="padding: 8px 0;"><a href="tel:${inquiry.phone}">${inquiry.phone}</a></td>
          </tr>
        </table>

        <h2 style="color: #333; border-bottom: 2px solid #e07800; padding-bottom: 10px; margin-top: 30px;">Projektdetails</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; width: 40%;"><strong>Projektart:</strong></td>
            <td style="padding: 8px 0;">${inquiry.projectType || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Estrichart:</strong></td>
            <td style="padding: 8px 0;">${inquiry.estrichType || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Fläche:</strong></td>
            <td style="padding: 8px 0;">${inquiry.squareMeters ? `${inquiry.squareMeters} m²` : "-"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Stockwerk:</strong></td>
            <td style="padding: 8px 0;">${inquiry.floor || "-"}</td>
          </tr>
        </table>

        ${inquiry.message ? `
        <h2 style="color: #333; border-bottom: 2px solid #e07800; padding-bottom: 10px; margin-top: 30px;">Nachricht</h2>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${inquiry.message}</p>
        ` : ""}

        ${budgetHtml}
      </div>
      
      <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">Diese E-Mail wurde automatisch generiert.</p>
        <p style="margin: 5px 0 0;">Mustafa Sakar - Estrich München | Hardenbergstr. 4 | 80992 München</p>
      </div>
    </body>
    </html>
  `;

  const textBody = `
Neue Kontaktanfrage - Estrich München

KONTAKTDATEN
Name: ${inquiry.firstName} ${inquiry.lastName}
E-Mail: ${inquiry.email}
Telefon: ${inquiry.phone}

PROJEKTDETAILS
Projektart: ${inquiry.projectType || "-"}
Estrichart: ${inquiry.estrichType || "-"}
Fläche: ${inquiry.squareMeters ? `${inquiry.squareMeters} m²` : "-"}
Stockwerk: ${inquiry.floor || "-"}

${inquiry.message ? `NACHRICHT\n${inquiry.message}\n` : ""}
${inquiry.budgetSummary ? `KOSTENVORANSCHLAG\n${inquiry.budgetSummary}\n` : ""}

---
Diese E-Mail wurde automatisch generiert.
Mustafa Sakar - Estrich München | Hardenbergstr. 4 | 80992 München
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: CONTACT_RECIPIENT,
      subject: `Neue Kontaktanfrage: ${inquiry.firstName} ${inquiry.lastName}`,
      text: textBody,
      html: htmlBody,
    });

    console.log(`Contact notification email sent for ${inquiry.firstName} ${inquiry.lastName}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
    return { success: false, error: String(error) };
  }
}
