"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-navy-deeper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            {t.pricing.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.pricing.heading1}
            <br />
            <span className="gradient-text">{t.pricing.heading2}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            {t.pricing.subline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="glass rounded-3xl p-8 border border-white/10">
            <div className="mb-6">
              <p className="text-white/50 text-sm font-medium mb-1">{t.pricing.freeLabel}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">€0</span>
                <span className="text-white/40 text-sm">/maand</span>
              </div>
              <p className="text-white/40 text-xs mt-1">{t.pricing.freeNote}</p>
            </div>

            <a
              href="#download"
              className="block text-center border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-2xl transition-colors text-sm mb-8"
            >
              {t.pricing.downloadBtn}
            </a>

            <ul className="space-y-3">
              {t.pricing.freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-white/40 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro / AI Coach */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-br from-accent/20 to-navy-light border border-accent/40 overflow-hidden">
            {/* Coming soon badge */}
            <div className="absolute top-5 right-5 bg-accent/20 border border-accent/40 text-accent text-xs font-bold px-3 py-1 rounded-full">
              {t.pricing.comingSoon}
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6 relative">
              <p className="text-accent text-sm font-medium mb-1">{t.pricing.aiLabel}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">€9</span>
                <span className="text-white/40 text-sm">/maand</span>
              </div>
              <p className="text-white/40 text-xs mt-1">
                {t.pricing.aiNote}
              </p>
            </div>

            <a
              href="#waitlist"
              className="relative block text-center bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-2xl transition-colors text-sm mb-8 glow"
            >
              {t.pricing.joinWaitlist}
            </a>

            <ul className="space-y-3 relative">
              {t.pricing.proFeatures.map((f, i) => (
                <li key={f} className="flex items-center gap-3">
                  <svg
                    className={`w-4 h-4 flex-shrink-0 ${
                      i === 0 ? "text-white/40" : "text-accent"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className={`text-sm ${
                      i === 0 ? "text-white/50" : "text-white/80"
                    }`}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
