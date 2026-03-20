import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Stuur email naar support@gophasr.com via Resend (gratis tot 3000/maand)
  // Voeg RESEND_API_KEY toe als environment variable in Vercel
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Geen API key: log en geef success terug zodat de form werkt tijdens dev
    console.log("Waitlist signup (no API key configured):", email);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Phasr Waitlist <noreply@gophasr.com>",
      to: ["support@gophasr.com"],
      subject: "Nieuwe AI Coach aanmelding",
      html: `<p>Nieuw e-mailadres op de wachtlijst: <strong>${email}</strong></p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return NextResponse.json({ error: "Mail failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
