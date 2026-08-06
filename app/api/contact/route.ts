import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/app/config/site";
import { contactSchema } from "@/app/lib/schemas";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[character] as string)
  );

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          "Project inquiries are not configured yet. Please use the email link instead.",
      },
      { status: 503 }
    );
  }

  try {
    const result = contactSchema.safeParse(await request.json());

    if (!result.success) {
      return NextResponse.json(
        { error: "Please review the form fields and try again." },
        { status: 400 }
      );
    }

    const { name, email, projectType, message, website } = result.data;

    // Honeypot field - if filled, treat as bot
    if (website) {
      return NextResponse.json({ success: true });
    }

    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: [siteConfig.email],
      replyTo: email,
      subject: `New ${projectType} inquiry from ${name}`,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        {
          error:
            "We could not send your inquiry. Please try again or use the email link.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "We could not process your inquiry. Please try again." },
      { status: 500 }
    );
  }
}