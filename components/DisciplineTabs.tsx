"use client";

import { useState } from "react";

const disciplines = [
  {
    id: "hardlopen",
    label: "Hardlopen",
    emoji: "🏃",
    headline: "Van 5K tot marathon",
    description:
      "Phasr genereert een trainingsplan op basis van jouw huidige niveau, doelafstand en racedatum. Het plan past zich wekelijks aan op basis van jouw Garmin/Apple Health data: herstelstatus, HRV en trainingslast.",
    features: [
      "Plannen voor 5K, 10K, halve marathon en marathon",
      "Zone-gebaseerde training (Z1–Z5)",
      "Automatische tapering voor je race",
      "Strava & Garmin Connect sync",
    ],
    keywords: "trainingsplan hardlopen app",
  },
  {
    id: "triathlon",
    label: "Triathlon",
    emoji: "🏊",
    headline: "Sprint tot Ironman",
    description:
      "Drie disciplines, één plan. Phasr balanceert zwemmen, fietsen en hardlopen op basis van jouw zwakste discipline en je raceformaat. Garmin Multi-Sport sync geeft je alle data op één plek.",
    features: [
      "Sprint, Olympic, 70.3 en full Ironman plannen",
      "Garmin Multi-Sport integratie",
      "Discipline-balans op basis van je zwaktes",
      "Brick-workouts en race-pace sessions",
    ],
    keywords: "triathlon app garmin",
  },
  {
    id: "hyrox",
    label: "Hyrox",
    emoji: "⚡",
    headline: "Built for Hyrox",
    description:
      "Het eerste specifieke Hyrox-trainingsplan in een app. Phasr traint je op de acht rox-stations én de 1km hardloopintervals. Gebouwd op basis van de meest voorkomende zwaktes van Hyrox-atleten.",
    features: [
      "Station-specifieke krachtsessies (SkiErg, Sled, Burpees...)",
      "Running-conditionering voor de 8×1km",
      "Open en Pro categorieplannen",
      "Peakweek protocol voor racedag",
    ],
    keywords: "hyrox trainingsplan",
  },
];

export default function DisciplineTabs() {
  const [active, setActive] = useState("hardlopen");
  const current = disciplines.find((d) => d.id === active)!;

  return (
    <section id="disciplines" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Disciplines
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Jouw sport,{" "}
            <span className="gradient-text">jouw plan</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Phasr is gebouwd voor drie specifieke sporten, geen generieke
            fitnessapp.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === d.id
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "glass text-white/60 hover:text-white"
              }`}
            >
              <span>{d.emoji}</span>
              {d.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-3xl font-black text-white mb-3">
                {current.headline}
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                {current.description}
              </p>
              <a
                href="#download"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Start met {current.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              {current.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 bg-white/5 rounded-2xl px-5 py-4"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
