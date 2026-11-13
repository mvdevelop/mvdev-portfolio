import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // In production, integrate with Resend or another email service:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    // For now, log the submission (in production you'd send an actual email)
    console.log("Contact form submission:", validatedData);

    // Return success even without email integration
    // The frontend will show success message to user
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
