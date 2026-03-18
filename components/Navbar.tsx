"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#disciplines", label: t.nav.disciplines },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Phasr" width={36} height={36} className="rounded-xl" />
          <span className="font-bold text-xl text-white tracking-tight">Phasr</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: language switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1 py-1">
            {(["en", "nl"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all ${
                  locale === l ? "bg-white text-navy" : "text-white/50 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#download" className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors glow">
            {t.nav.download}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/80 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white/80 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            {(["en", "nl"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  locale === l ? "bg-white text-navy border-white" : "text-white/50 border-white/20 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#download" className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            {t.nav.download}
          </a>
        </div>
      )}
    </nav>
  );
}
