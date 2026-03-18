export default function SocialProof() {
  const testimonials = [
    {
      name: "Thomas V.",
      sport: "Triatleet",
      quote:
        "Eindelijk een app die mijn Garmin-data écht gebruikt om mijn trainingsplan aan te passen.",
    },
    {
      name: "Sara M.",
      sport: "Hardloopster",
      quote:
        "In 8 weken naar mijn PR op de halve marathon. Het plan was perfect afgestemd op mijn schema.",
    },
    {
      name: "Joris K.",
      sport: "Hyrox-atleet",
      quote:
        "De Hyrox-plannen zijn super specifiek. Geen app doet dit zo goed als Phasr.",
    },
  ];

  return (
    <section className="bg-navy-darker py-16 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          <p className="text-white/30 text-xs uppercase tracking-widest w-full text-center mb-2">
            Werkt naadloos samen met
          </p>

          {/* Garmin logo (text-based) */}
          <div className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" fill="none" stroke="#1B2A44" strokeWidth="2" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#1B2A44" strokeWidth="1.5" />
            </svg>
            <span className="text-white font-bold text-lg tracking-tight">
              GARMIN
            </span>
          </div>

          <div className="w-px h-6 bg-white/10" />

          {/* Apple Health */}
          <div className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-white font-bold text-lg tracking-tight">
              Apple Health
            </span>
          </div>

          <div className="w-px h-6 bg-white/10" />

          {/* iOS */}
          <div className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-white font-bold text-lg tracking-tight">
              iOS 16+
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.sport}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
