"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-navy-deeper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            {t.faq.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            {t.faq.heading}
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((faq, i) => (
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
            {t.faq.contactText}{" "}
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
