"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const content = {
  en: {
    title: "Cookie Policy",
    updated: "Last updated: March 2026",
    sections: [
      {
        heading: "What are cookies?",
        body: "Cookies are small text files stored on your device by your browser. Some websites also use browser storage (such as localStorage) to store small pieces of data locally. We use the latter on this website.",
      },
      {
        heading: "What we store",
        body: "We currently store one item in your browser: your cookie consent preference (accepted or declined). This is stored in localStorage so we do not ask for your preference on every visit. It is not a tracking cookie and does not leave your device.",
      },
      {
        heading: "Analytics and tracking",
        body: "We currently do not use any analytics, advertising, or tracking cookies or scripts. No data is sent to third-party advertising or analytics platforms.",
      },
      {
        heading: "Future changes",
        body: "We may add privacy-friendly analytics tools in the future to understand which features are most useful. If we do so, we will update this policy, inform you, and ask for your consent before activating any non-essential tracking.",
      },
      {
        heading: "Your choices",
        body: "You can clear your browser storage at any time through your browser settings. Doing so will reset your cookie preference and the consent banner will appear again on your next visit. You can also decline non-essential cookies using the banner at the bottom of the page.",
      },
      {
        heading: "Contact",
        body: "Questions about our use of cookies? Email us at support@gophasr.com.",
      },
    ],
  },
  nl: {
    title: "Cookiebeleid",
    updated: "Laatste update: maart 2026",
    sections: [
      {
        heading: "Wat zijn cookies?",
        body: "Cookies zijn kleine tekstbestanden die door je browser op je apparaat worden opgeslagen. Sommige websites maken ook gebruik van browseropslag (zoals localStorage) om kleine hoeveelheden gegevens lokaal op te slaan. Wij gebruiken dit laatste op onze website.",
      },
      {
        heading: "Wat wij opslaan",
        body: "We slaan momenteel één item op in je browser: je cookievoorkeur (geaccepteerd of geweigerd). Dit wordt opgeslagen in localStorage zodat we niet bij elk bezoek opnieuw om je voorkeur hoeven te vragen. Dit is geen tracking-cookie en verlaat je apparaat niet.",
      },
      {
        heading: "Analytics en tracking",
        body: "We maken momenteel geen gebruik van analytics-, reclame- of trackingcookies of -scripts. Er worden geen gegevens naar externe advertentie- of analyseplatforms verzonden.",
      },
      {
        heading: "Toekomstige wijzigingen",
        body: "We kunnen in de toekomst privacyvriendelijke analysetools toevoegen om inzicht te krijgen in welke functies het meest worden gebruikt. Als we dat doen, zullen we dit beleid bijwerken, je informeren en om toestemming vragen voordat we niet-essentiële tracking activeren.",
      },
      {
        heading: "Jouw keuzes",
        body: "Je kunt je browseropslag op elk moment wissen via de instellingen van je browser. Hierdoor wordt je cookievoorkeur gereset en verschijnt de cookiebanner bij je volgende bezoek opnieuw. Je kunt ook niet-essentiële cookies weigeren via de banner onderaan de pagina.",
      },
      {
        heading: "Contact",
        body: "Vragen over ons gebruik van cookies? Stuur een e-mail naar support@gophasr.com.",
      },
    ],
  },
};

export default function CookiesPage() {
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
