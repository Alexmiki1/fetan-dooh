import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL ?? "contact@dooh.et";
  const from =
    process.env.SMTP_FROM_EMAIL ?? `Fetan DOOH <${smtpUser}>`;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
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
        { status: 400 },
      );
    }
    return Response.json(
      { error: "Invalid request data." },
      { status: 400 },
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
      subject: `New inquiry from ${data.name} — ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
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
