import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="download"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper via-navy to-navy-dark" />

      {/* Radial glow behind content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                Nu beschikbaar in de App Store
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              <span className="text-white">Train smarter.</span>
              <br />
              <span className="gradient-text">Race faster.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Slimme trainingsplannen voor hardlopers, triatleten en
              Hyrox-atleten. Gesynchroniseerd met Garmin en Apple Health.
              Gebouwd door atleten, voor atleten.
            </p>

            {/* App Store button */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="https://apps.apple.com/app/phasr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-navy font-semibold px-6 py-3.5 rounded-2xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-navy/60 leading-none mb-0.5">
                    Download in de
                  </div>
                  <div className="text-sm font-bold leading-none">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#features"
                className="text-white/60 hover:text-white text-sm underline underline-offset-4 transition-colors"
              >
                Bekijk alle features →
              </a>
            </div>

            {/* Social proof mini */}
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["bg-blue-400", "bg-green-400", "bg-purple-400", "bg-orange-400"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-navy-deeper ${color}`}
                    />
                  )
                )}
              </div>
              <p className="text-white/50 text-sm">
                <span className="text-white font-semibold">500+</span> atleten
                al actief
              </p>
            </div>
          </div>

          {/* Right: app mockup placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[580px] bg-navy-light rounded-[44px] border-2 border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Screen content placeholder */}
                <div className="absolute inset-2 bg-navy-deeper rounded-[38px] flex flex-col items-center justify-center gap-4 p-6">
                  <Image
                    src="/logo.png"
                    alt="Phasr"
                    width={80}
                    height={80}
                    className="rounded-2xl opacity-80"
                  />
                  <div className="text-white/30 text-xs text-center">
                    App screenshots
                    <br />
                    hier invoegen
                  </div>

                  {/* Fake metrics */}
                  <div className="w-full mt-4 space-y-2">
                    {[
                      { label: "Weekvolume", value: "62 km", color: "bg-accent" },
                      { label: "Zone 2", value: "74%", color: "bg-green-500" },
                      { label: "Herstel", value: "85%", color: "bg-orange-400" },
                    ].map((m) => (
                      <div key={m.label} className="glass rounded-xl p-3">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-white/50 text-xs">{m.label}</span>
                          <span className="text-white text-xs font-bold">
                            {m.value}
                          </span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${m.color} rounded-full`}
                            style={{ width: m.value.includes("%") ? m.value : "70%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-navy-deeper rounded-full" />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-16 glass rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-accent text-xs font-semibold">Garmin</div>
                <div className="text-white text-xs">Gesynchroniseerd ✓</div>
              </div>
              <div className="absolute -left-6 bottom-24 glass rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-green-400 text-xs font-semibold">
                  Apple Health
                </div>
                <div className="text-white text-xs">Verbonden ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
        <span className="text-xs">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
