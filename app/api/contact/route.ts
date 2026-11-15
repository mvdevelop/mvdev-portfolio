import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
});

// Rate limiting in-memory store (resets on server restart)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recentRequests = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend API key is configured, send real email
    if (resendApiKey && resendApiKey !== "re_seu_token_aqui") {
      try {
        const resend = new Resend(resendApiKey);

        const { data, error } = await resend.emails.send({
          from: "MvDev Portfolio <onboarding@resend.dev>",
          to: ["marcosvmdilly@gmail.com"],
          subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName || ""}`,
          text: `Name: ${validatedData.firstName} ${validatedData.lastName || ""}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}
Service: ${validatedData.service || "General inquiry"}

Message:
${validatedData.message}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #4d8be9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                  .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #4d8be9; }
                  .message { background: white; padding: 15px; border-radius: 6px; margin-top: 10px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>New Contact Form Submission</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <span class="label">Name:</span><br>
                      ${validatedData.firstName} ${validatedData.lastName || ""}
                    </div>
                    <div class="field">
                      <span class="label">Email:</span><br>
                      <a href="mailto:${validatedData.email}">${validatedData.email}</a>
                    </div>
                    <div class="field">
                      <span class="label">Phone:</span><br>
                      ${validatedData.phone || "Not provided"}
                    </div>
                    <div class="field">
                      <span class="label">Service Interest:</span><br>
                      ${validatedData.service || "General inquiry"}
                    </div>
                    <div class="field">
                      <span class="label">Message:</span>
                      <div class="message">${validatedData.message.replace(/\n/g, "<br>")}</div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        if (error) {
          console.error("Resend error:", error);
          // Fallback to logging if email fails
          console.log("Contact form submission (fallback):", validatedData);
          return NextResponse.json({ success: true });
        }

        console.log("Email sent successfully:", data.id);
        return NextResponse.json({ success: true, messageId: data.id });
      } catch (resendError) {
        console.error("Resend exception:", resendError);
        // Continue with fallback
      }
    }

    // Fallback: log the submission
    console.log("Contact form submission (logged):", validatedData);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0];
      return NextResponse.json(
        { error: firstError?.message || "Validation failed" },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
