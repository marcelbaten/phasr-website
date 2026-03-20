"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: March 2026",
    sections: [
      {
        heading: "Who we are",
        body: "Phasr is a training app for runners, triathletes, and Hyrox athletes, operated from the Netherlands. Questions about this policy? Email us at support@gophasr.com.",
      },
      {
        heading: "What data we collect",
        body: "We collect your email address when you sign up for the AI Coach waitlist. We do not collect any other personal data through our website.",
      },
      {
        heading: "Why we collect it",
        body: "We use your email address solely to notify you when the AI Coach feature becomes available. The legal basis for processing is your consent (Article 6(1)(a) GDPR).",
      },
      {
        heading: "How long we keep it",
        body: "We keep your email address until the AI Coach feature launches and we have notified you, or until you ask us to delete it — whichever comes first.",
      },
      {
        heading: "Who we share it with",
        body: "We use Resend (resend.com) to send transactional emails. Your email address is shared with Resend for this purpose only. Resend is GDPR-compliant and processes data within the EU. We do not sell or share your data with any other parties.",
      },
      {
        heading: "Your rights",
        body: "Under the GDPR you have the right to access, correct, or delete your personal data, to object to processing, and to withdraw consent at any time. To exercise any of these rights, email us at support@gophasr.com. We will respond within 30 days.",
      },
      {
        heading: "Complaints",
        body: "If you believe we are not handling your data properly, you have the right to file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at autoriteitpersoonsgegevens.nl.",
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    updated: "Laatste update: maart 2026",
    sections: [
      {
        heading: "Wie zijn wij",
        body: "Phasr is een trainingsapp voor hardlopers, triatleten en Hyrox-atleten, gevestigd in Nederland. Vragen over dit beleid? Stuur een e-mail naar support@gophasr.com.",
      },
      {
        heading: "Welke gegevens wij verzamelen",
        body: "We verzamelen je e-mailadres wanneer je je aanmeldt voor de wachtlijst van de AI Coach. Via onze website verzamelen we verder geen persoonsgegevens.",
      },
      {
        heading: "Waarom we dit verzamelen",
        body: "We gebruiken je e-mailadres uitsluitend om je te informeren zodra de AI Coach-functie beschikbaar is. De rechtsgrondslag voor de verwerking is je toestemming (artikel 6, lid 1, sub a AVG).",
      },
      {
        heading: "Hoe lang we het bewaren",
        body: "We bewaren je e-mailadres totdat de AI Coach-functie beschikbaar is en we je hebben geïnformeerd, of totdat je ons vraagt het te verwijderen — wat het eerst plaatsvindt.",
      },
      {
        heading: "Met wie we het delen",
        body: "We gebruiken Resend (resend.com) voor het versturen van e-mails. Je e-mailadres wordt uitsluitend voor dit doel aan Resend doorgegeven. Resend is AVG-compliant en verwerkt gegevens binnen de EU. We verkopen of delen je gegevens niet met andere partijen.",
      },
      {
        heading: "Jouw rechten",
        body: "Op grond van de AVG heb je het recht op inzage, correctie of verwijdering van je persoonsgegevens, het recht om bezwaar te maken tegen verwerking en het recht om je toestemming op elk moment in te trekken. Om een van deze rechten uit te oefenen, stuur je een e-mail naar support@gophasr.com. We reageren binnen 30 dagen.",
      },
      {
        heading: "Klachten",
        body: "Als je van mening bent dat we niet correct omgaan met je gegevens, heb je het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.",
      },
    ],
  },
};

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const c = content[locale] ?? content.en;

  return (
    <main className="bg-navy-deeper min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          {c.title}
        </h1>
        <p className="text-white/30 text-sm mb-16">{c.updated}</p>

        <div className="space-y-12">
          {c.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-white font-bold text-lg mb-3">
                {section.heading}
              </h2>
              <p className="text-white/60 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
