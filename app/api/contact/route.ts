import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "465", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL || "contact@dooh.et";
  const from = process.env.SMTP_FROM_EMAIL || `Fetan DOOH <${smtpUser}>`;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  let data: z.infer<typeof contactSchema>;
  try {
    data = contactSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    return Response.json(
      { error: "Invalid request data." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `New Campaign Inquiry from ${data.name} — ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded-radius: 8px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">New Campaign Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #475569;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
              <td style="padding: 8px 0; color: #0f172a;">${data.company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 8px 0; color: #0f172a;"><strong>${data.service}</strong></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569;">Message:</p>
            <p style="margin: 0; color: #0f172a; white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent automatically from Fetan DOOH Website Contact Form
          </p>
        </div>
      `,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send message.";
    console.error("Contact form SMTP error:", err);
    return Response.json({ error: message }, { status: 502 });
  }

  return Response.json({ success: true });
}

