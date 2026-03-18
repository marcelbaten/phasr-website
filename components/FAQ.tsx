"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Phasr echt gratis?",
    a: "Ja. De core-app — trainingsplannen genereren, Garmin sync, Apple Health, weekplanning — is volledig gratis en blijft dat ook. AI Coach is een optionele betaalde upgrade die binnenkort beschikbaar komt.",
  },
  {
    q: "Hoe werkt de Garmin-synchronisatie?",
    a: "Verbind je Garmin-account eenmalig via Garmin Connect. Phasr haalt automatisch je activiteiten, HRV, VO2max en herstelscore op om je trainingsplan te personaliseren.",
  },
  {
    q: "Werkt Phasr ook zonder Garmin-horloge?",
    a: "Absoluut. Phasr werkt ook met Apple Health. Heb je een Apple Watch of iPhone met GPS? Dan importeert Phasr je workouts direct. Een Garmin is geen vereiste.",
  },
  {
    q: "Kan ik meerdere disciplines tegelijk trainen?",
    a: "Ja — het triatlonplan combineert zwemmen, fietsen en hardlopen al in één schema. Voor Hyrox en hardlopen kun je aparte plannen kiezen en ze naast elkaar volgen.",
  },
  {
    q: "Op welke iPhone werkt Phasr?",
    a: "Phasr vereist iOS 16 of hoger. Dat omvat de iPhone 8 en nieuwer.",
  },
  {
    q: "Hoe verschilt Phasr van apps zoals TrainingPeaks of Garmin Coach?",
    a: "Phasr is gebouwd voor de recreatieve maar serieuze atleet die geen coach wil betalen. Geen complexe TSS-getallen, geen ingewikkelde interface — gewoon een helder plan dat zich automatisch aanpast aan je leven en herstelstatus.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-navy-deeper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Veelgestelde vragen
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-white font-semibold text-sm pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {open === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="text-white/60 text-sm leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/40 text-sm">
            Andere vraag?{" "}
            <a
              href="mailto:support@phasr.app"
              className="text-accent hover:underline"
            >
              support@phasr.app
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
