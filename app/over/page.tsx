import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Over ons – Phasr",
  description:
    "Phasr is gebouwd door duursporters die de app die ze zochten niet konden vinden. Dus bouwden we hem zelf.",
  openGraph: {
    title: "Over ons – Phasr",
    description:
      "Gebouwd door atleten, voor atleten. Het verhaal achter Phasr.",
    url: "https://phasr.app/over",
  },
};

export default function OverPage() {
  return (
    <main className="bg-navy-deeper min-h-screen">
      <Navbar />

      {/* Hero foto */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="De finishlijn passeren bij Ironman 70.3 Knokke-Heist België"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-navy-deeper" />

        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Over Phasr
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Gebouwd door atleten,
            <br />
            voor atleten.
          </h1>
        </div>
      </section>

      {/* Inhoud */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        {/* Blok 1 */}
        <div className="mb-14">
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            Wij zijn duursporters. Al jaren leggen we kilometers af op de weg,
            op de fiets, in het water. We hebben 70.3 finishes gehaald, personal
            records gebroken en wedstrijden gehad waarvoor we simpelweg niet
            klaar waren.
          </p>
        </div>

        {/* Blok 2 */}
        <div className="mb-14 border-l-2 border-accent pl-6">
          <p className="text-white/80 text-lg leading-relaxed">
            Niet omdat we niet hard genoeg trainden. Maar omdat we geen app
            hadden die echt meedacht.
          </p>
        </div>

        {/* Blok 3 */}
        <div className="mb-14">
          <p className="text-white/90 text-lg leading-relaxed">
            We wilden één ding: een app die een slim trainingsplan maakt, dat
            aanpast op basis van ons niveau en onze resultaten, en die prettig
            samenwerkt met de apparatuur die we al gebruiken. Zonder dat het een
            dagtaak wordt om bij te houden. En voor een prijs die voor elke
            atleet haalbaar is.
          </p>
        </div>

        {/* Blok 4 */}
        <div className="mb-20">
          <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
            Die app bestond niet. Dus bouwden we hem zelf.
          </p>
        </div>

        {/* Waarden */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: "🏅",
              title: "Atleet voorop",
              text: "Elke feature begint met één vraag: helpt dit je echt beter trainen?",
            },
            {
              icon: "🎯",
              title: "Specifiek, niet generiek",
              text: "Phasr is gebouwd voor hardlopers, triatleten en Hyrox atleten. Niet voor iedereen, niet voor alles.",
            },
            {
              icon: "💶",
              title: "Betaalbaar",
              text: "Een goed trainingsplan hoeft niet evenveel te kosten als een personal coach. De kern van Phasr is gratis, voor altijd.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="glass rounded-2xl p-6"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        {/* Afsluitende zin */}
        <p className="text-white/60 text-base leading-relaxed mb-16">
          Of je nu je eerste 5K afwerkt of je voorbereidt op een halve triathlon,
          wij begrijpen waar je naartoe werkt. Want wij werken er zelf ook
          naartoe.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://apps.apple.com/app/phasr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-full transition-colors glow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Phasr gratis
          </a>
          <a
            href="mailto:support@gophasr.com"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Neem contact op
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
