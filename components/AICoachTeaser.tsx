"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AICoachTeaser() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 bg-navy relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/15 border border-accent/30 rounded-2xl mb-6">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
            />
          </svg>
        </div>

        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-wide">
            {t.aiCoach.badge}
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          {t.aiCoach.heading1}{" "}
          <span className="gradient-text">{t.aiCoach.heading2}</span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
          {t.aiCoach.subline}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {t.aiCoach.features.map((item) => (
            <div key={item.text} className="glass rounded-2xl px-4 py-4 text-sm">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white/60">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Waitlist form */}
        {submitted ? (
          <div className="glass rounded-2xl px-8 py-6 border border-green-500/30">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-white font-semibold text-lg mb-1">
              {t.aiCoach.successTitle}
            </p>
            <p className="text-white/50 text-sm">
              {t.aiCoach.successText}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.aiCoach.placeholder}
              className="flex-1 bg-white/5 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent/60 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors text-sm whitespace-nowrap glow"
            >
              {loading ? t.aiCoach.loadingBtn : t.aiCoach.joinBtn}
            </button>
          </form>
        )}

        <p className="text-white/25 text-xs mt-4">
          {t.aiCoach.gdprNote}
        </p>
      </div>
    </section>
  );
}
