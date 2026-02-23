import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, projectType, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Thistle Interiors <hello@thistleinterior.com>",
    to: "hello@thistleinterior.com",
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\n${message}`,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
