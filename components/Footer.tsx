"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-darker border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-xl overflow-hidden bg-[#192240]">
                <Image
                  src="/logo.png"
                  alt="Phasr"
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-bold text-lg text-white">Phasr</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Train smarter. Race faster.
              <br />
              {t.footer.tagline}
            </p>
            {/* App Store badge */}
            <a
              href="https://apps.apple.com/us/app/phasr-endurance-coach/id6761650788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl px-3 py-2 transition-colors"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-white/40 text-[10px] leading-none mb-0.5">{t.footer.appStoreLabel}</div>
                <div className="text-white text-xs font-semibold leading-none">{t.footer.appStoreName}</div>
              </div>
            </a>
          </div>

          {/* App */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              {t.footer.sections.app}
            </p>
            <ul className="space-y-2.5">
              {[
                ["#features", "Features"],
                ["#disciplines", "Disciplines"],
                ["#pricing", "Pricing"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              {t.footer.sections.company}
            </p>
            <ul className="space-y-2.5">
              {t.footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              {t.footer.sections.legal}
            </p>
            <ul className="space-y-2.5">
              {t.footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {currentYear} Phasr. {t.footer.rights}
          </p>
          <p className="text-white/25 text-xs">
            Made with ❤️ by athletes, for athletes.
          </p>
        </div>
      </div>
    </footer>
  );
}
