const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Disciplines",
    subtitle: "Hardlopen · Triathlon · Hyrox",
    description:
      "Specifieke plannen per sport. Van 5K-beginner tot Ironman en Hyrox open. Elk plan is afgestemd op jouw doel en niveau.",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Sync",
    subtitle: "Garmin · Apple Health",
    description:
      "Jouw trainingsdata stroomt automatisch binnen. HRV, hartslag, VO2max en slaap: Phasr leest het allemaal en past je plan aan.",
    color: "from-green-500/20 to-green-600/5",
    accent: "text-green-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Planning",
    subtitle: "Slim · Adaptief · Persoonlijk",
    description:
      "Geef je racedag op en Phasr bouwt achteruit. Periodisering, tapering en herstelweken worden automatisch ingepland op basis van jouw beschikbaarheid.",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "text-purple-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-navy-deeper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Waarom Phasr?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Alles wat je nodig hebt
            <br />
            <span className="gradient-text">in één app</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Geen losse trackers, geen spreadsheets. Phasr combineert planning,
            data en coaching op één plek.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glass rounded-3xl p-8 bg-gradient-to-br ${f.color} hover:border-white/15 transition-all hover:-translate-y-1`}
            >
              <div className={`${f.accent} mb-5`}>{f.icon}</div>
              <h3 className="text-white text-xl font-bold mb-1">{f.title}</h3>
              <p className={`${f.accent} text-xs font-medium mb-3`}>
                {f.subtitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
