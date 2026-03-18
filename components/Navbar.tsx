"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Phasr"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="font-bold text-xl text-white tracking-tight">
            Phasr
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#disciplines"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Disciplines
          </a>
          <a
            href="#pricing"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors glow"
          >
            Download gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {["#features", "#disciplines", "#pricing", "#faq"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-white/80 hover:text-white text-sm capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {href.replace("#", "").charAt(0).toUpperCase() +
                href.replace("#", "").slice(1)}
            </a>
          ))}
          <a
            href="#download"
            className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download gratis
          </a>
        </div>
      )}
    </nav>
  );
}
