"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Initialiseer GA4/Meta Pixel hier na toestemming
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50">
      <div className="glass rounded-2xl p-5 border border-white/10 shadow-2xl">
        <p className="text-white text-sm font-semibold mb-1">
          🍪 Cookies & privacy
        </p>
        <p className="text-white/50 text-xs leading-relaxed mb-4">
          We gebruiken analytische cookies (GA4) om de site te verbeteren. Geen
          tracking zonder toestemming.
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-accent hover:bg-accent-hover text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
          >
            Accepteren
          </button>
          <button
            onClick={decline}
            className="flex-1 border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-xs font-medium py-2.5 rounded-xl transition-colors"
          >
            Weigeren
          </button>
        </div>
      </div>
    </div>
  );
}
