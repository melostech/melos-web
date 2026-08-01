import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/app/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, domain, requirement } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["melostechsolution@gmail.com"],
      subject: `New Inquiry from ${name} - ${domain}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Domain:</strong> ${domain}</p>
        <p><strong>Requirement:</strong></p>
        <p>${requirement}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}
