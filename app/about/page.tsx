import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About us – Phasr",
  description:
    "Phasr is built by endurance athletes who couldn't find the app they were looking for. So we built it ourselves.",
  openGraph: {
    title: "About us – Phasr",
    description:
      "Built by athletes, for athletes. The story behind Phasr.",
    url: "https://phasr.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-navy-deeper min-h-screen">
      <Navbar />

      {/* Hero photo */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Crossing the finish line at Ironman 70.3 Knokke-Heist Belgium"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay: dark at bottom so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-navy-deeper" />

        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            About Phasr
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Built by athletes,
            <br />
            for athletes.
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        {/* Block 1 */}
        <div className="mb-14">
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            We are endurance athletes. For years we have been putting in the
            kilometres: on the road, on the bike, in the water. We have crossed
            70.3 finish lines, set personal records, and shown up to races we
            simply were not ready for.
          </p>
        </div>

        {/* Block 2 */}
        <div className="mb-14 border-l-2 border-accent pl-6">
          <p className="text-white/80 text-lg leading-relaxed">
            Not because we did not train hard enough. But because we did not have
            an app that truly kept up with us.
          </p>
        </div>

        {/* Block 3 */}
        <div className="mb-14">
          <p className="text-white/90 text-lg leading-relaxed">
            We wanted one thing: an app that builds a smart training plan, adapts
            it based on our level and results, and works seamlessly with the gear
            we already use. Without it becoming a second job to manage. At a price
            that works for every athlete.
          </p>
        </div>

        {/* Block 4 */}
        <div className="mb-20">
          <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
            That app did not exist. So we built it.
          </p>
        </div>

        {/* Values row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: "🏅",
              title: "Athlete first",
              text: "Every feature starts with one question: does this actually help you train better?",
            },
            {
              icon: "🎯",
              title: "Specific, not generic",
              text: "Phasr is built for runners, triathletes and Hyrox athletes. Not everyone, not everything.",
            },
            {
              icon: "💶",
              title: "Affordable",
              text: "A great training plan should not cost what a personal coach does. The core of Phasr is free, forever.",
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

        {/* Closing line */}
        <p className="text-white/60 text-base leading-relaxed mb-16">
          Whether you are finishing your first 5K or preparing for a half
          triathlon: we understand what you are working towards, because we are
          working towards it too.
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
            Download Phasr free
          </a>
          <a
            href="mailto:support@phasr.app"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
