export type Locale = "en" | "nl";

export const translations = {
  en: {
    nav: {
      features: "Features",
      disciplines: "Disciplines",
      pricing: "Pricing",
      faq: "FAQ",
      download: "Download free",
    },
    hero: {
      badge: "Now available in the App Store",
      headline1: "Train smarter.",
      headline2: "Race faster.",
      subline:
        "Smart training plans for runners, triathletes and Hyrox athletes. Synced with Garmin and Apple Health. Built by athletes, for athletes.",
      appStoreLabel: "Download on the",
      appStoreName: "App Store",
      viewFeatures: "View all features →",
      socialProof: "athletes already active",
      syncedLabel: "Synced ✓",
      connectedLabel: "Connected ✓",
    },
    socialProof: {
      partnerLabel: "Works seamlessly with",
      testimonials: [
        {
          name: "Thomas V.",
          sport: "Triathlete",
          quote:
            "Finally an app that actually uses my Garmin data to adjust my training plan.",
        },
        {
          name: "Sara M.",
          sport: "Runner",
          quote:
            "PR at the half marathon in 8 weeks. The plan was perfectly tailored to my schedule.",
        },
        {
          name: "Joris K.",
          sport: "Hyrox athlete",
          quote:
            "The Hyrox plans are super specific. No app does this as well as Phasr.",
        },
      ],
    },
    features: {
      eyebrow: "Why Phasr?",
      heading1: "Everything you need",
      heading2: "in one app",
      subline:
        "No separate trackers, no spreadsheets. Phasr combines planning, data and coaching in one place.",
      items: [
        {
          title: "Disciplines",
          subtitle: "Running · Triathlon · Hyrox",
          description:
            "Specific plans per sport. From 5K beginner to Ironman and Hyrox open. Every plan is tailored to your goal and level.",
        },
        {
          title: "Sync",
          subtitle: "Garmin · Apple Health",
          description:
            "Workouts sync automatically in the background. HRV, resting heart rate, VO2max and training load are tracked with 14-day charts and zone indicators, so you always know how your body is responding.",
        },
        {
          title: "Planning",
          subtitle: "Smart · Adaptive · Personal",
          description:
            "Enter your race date and Phasr builds backwards. Periodization, tapering and recovery weeks are automatically scheduled based on your availability.",
        },
      ],
    },
    disciplines: {
      eyebrow: "Disciplines",
      heading1: "Your sport,",
      heading2: "your plan",
      subline: "Phasr is built for three specific sports, not a generic fitness app.",
      startWith: "Start with",
      items: [
        {
          id: "running",
          label: "Running",
          emoji: "🏃",
          headline: "From 5K to marathon",
          description:
            "Phasr generates a training plan based on your current level, target distance and race date. Your workouts sync automatically via Garmin Connect and Apple Health.",
          features: [
            "Plans for 5K, 10K, half marathon and marathon",
            "Zone-based training (Z1–Z5)",
            "Automatic tapering before your race",
            "Garmin Connect sync",
          ],
        },
        {
          id: "triathlon",
          label: "Triathlon",
          emoji: "🏊",
          headline: "Sprint to Ironman",
          description:
            "Three disciplines, one plan. Phasr balances swimming, cycling and running based on your weakest discipline and race format. Completed workouts sync via Garmin Connect and Apple Health.",
          features: [
            "Sprint, Olympic, 70.3 and full Ironman plans",
            "Garmin Connect sync",
            "Discipline balance based on your weaknesses",
            "Brick workouts and race-pace sessions",
          ],
        },
        {
          id: "hyrox",
          label: "Hyrox",
          emoji: "⚡",
          headline: "Built for Hyrox",
          description:
            "The first specific Hyrox training plan in an app. Phasr trains you on all eight rox stations and the 1km running intervals. Built based on the most common weaknesses of Hyrox athletes.",
          features: [
            "Station-specific strength sessions (SkiErg, Sled, Burpees...)",
            "Running conditioning for the 8×1km",
            "Open and Pro category plans",
            "Peak week protocol for race day",
          ],
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      heading1: "Start free,",
      heading2: "upgrade when you want",
      subline:
        "The core of Phasr is free. AI Coach is coming soon for serious athletes.",
      freeLabel: "Free",
      freeNote: "Free forever",
      downloadBtn: "Download now",
      aiLabel: "AI Coach",
      aiNote: "Early access discount for waitlist",
      comingSoon: "Coming soon",
      joinWaitlist: "Join the waitlist",
      freeFeatures: [
        "Unlimited training plan generation",
        "Running, Triathlon & Hyrox",
        "Garmin Connect sync",
        "Apple Health integration",
        "Weekly planning & calendar",
        "Health dashboard (HRV, VO2max, training load)",
      ],
      proFeatures: [
        "Everything in Free",
        "AI Coach: real-time plan adjustments",
        "Voice coaching during workouts",
        "Advanced HRV & recovery analysis",
        "Unlimited race goals simultaneously",
        "Priority support",
      ],
    },
    aiCoach: {
      badge: "Coming soon",
      heading1: "Meet",
      heading2: "AI Coach",
      subline:
        "Imagine a coach that tracks your HRV, adjusts your training when you're tired, and motivates you with real-time feedback. That's AI Coach.",
      features: [
        { icon: "🧠", text: "Adaptive plan based on your data" },
        { icon: "🎙️", text: "Voice coaching during your workout" },
        { icon: "📊", text: "Advanced recovery & HRV analysis" },
      ],
      placeholder: "your@email.com",
      joinBtn: "Join the waitlist",
      loadingBtn: "Just a moment...",
      successTitle: "You're on the list!",
      successText:
        "We'll send you an email as soon as AI Coach is available, including an early-access discount.",
      gdprNote: "No spam. Unsubscribe anytime. GDPR compliant.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Frequently asked questions",
      contactText: "Other question?",
      items: [
        {
          q: "Is Phasr really free?",
          a: "Yes. The core app (training plan generation, Garmin sync, Apple Health, weekly planning) is completely free and will stay that way. AI Coach is an optional paid upgrade coming soon.",
        },
        {
          q: "How does Garmin sync work?",
          a: "Connect your Garmin account once via Garmin Connect. Phasr sends your scheduled workouts directly to your Garmin device. Health metrics like HRV, VO2max and resting heart rate are read from Apple Health.",
        },
        {
          q: "Does Phasr work without a Garmin watch?",
          a: "Yes. Phasr works with Apple Health. Workouts recorded with an Apple Watch or iPhone automatically appear in Phasr. A Garmin is not required.",
        },
        {
          q: "Can I follow multiple training plans at the same time?",
          a: "Currently Phasr supports one active training plan at a time. The triathlon plan already combines swimming, cycling and running in one schedule.",
        },
        {
          q: "Which iPhone does Phasr support?",
          a: "Phasr requires iOS 16 or higher. That includes the iPhone 8 and newer.",
        },
        {
          q: "How does Phasr differ from apps like TrainingPeaks or Garmin Coach?",
          a: "Phasr is built for the recreational but serious athlete who doesn't want to pay for a coach. Where TrainingPeaks leaves you to figure out TSS and ATL yourself, Phasr explains every metric in plain language, from training load (TSB, ATL, CTL) to health trends like HRV and VO2max. A clear plan that adapts to your schedule and recovery.",
        },
      ],
    },
    footer: {
      tagline: "Built by athletes, for athletes.",
      appStoreLabel: "Download on the",
      appStoreName: "App Store",
      sections: {
        app: "App",
        company: "Company",
        legal: "Legal",
      },
      companyLinks: [
        { href: "/about", label: "About us" },
        { href: "/blog", label: "Blog" },
        { href: "mailto:support@gophasr.com", label: "Contact" },
      ],
      legalLinks: [
        { href: "/privacy", label: "Privacy policy" },
        { href: "/terms", label: "Terms of service" },
        { href: "/cookies", label: "Cookie policy" },
      ],
      rights: "All rights reserved.",
    },
    cookieBanner: {
      text: "We use cookies to improve your experience.",
      accept: "Accept",
      decline: "Decline",
    },
  },

  nl: {
    nav: {
      features: "Features",
      disciplines: "Disciplines",
      pricing: "Pricing",
      faq: "FAQ",
      download: "Download gratis",
    },
    hero: {
      badge: "Nu beschikbaar in de App Store",
      headline1: "Train smarter.",
      headline2: "Race faster.",
      subline:
        "Slimme trainingsplannen voor hardlopers, triatleten en Hyrox-atleten. Gesynchroniseerd met Garmin en Apple Health. Gebouwd door atleten, voor atleten.",
      appStoreLabel: "Download in de",
      appStoreName: "App Store",
      viewFeatures: "Bekijk alle features →",
      socialProof: "atleten al actief",
      syncedLabel: "Gesynchroniseerd ✓",
      connectedLabel: "Verbonden ✓",
    },
    socialProof: {
      partnerLabel: "Werkt naadloos samen met",
      testimonials: [
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
      ],
    },
    features: {
      eyebrow: "Waarom Phasr?",
      heading1: "Alles wat je nodig hebt",
      heading2: "in één app",
      subline:
        "Geen losse trackers, geen spreadsheets. Phasr combineert planning, data en coaching op één plek.",
      items: [
        {
          title: "Disciplines",
          subtitle: "Hardlopen · Triathlon · Hyrox",
          description:
            "Specifieke plannen per sport. Van 5K-beginner tot Ironman en Hyrox open. Elk plan is afgestemd op jouw doel en niveau.",
        },
        {
          title: "Sync",
          subtitle: "Garmin · Apple Health",
          description:
            "Workouts worden automatisch op de achtergrond gesynchroniseerd. HRV, rusthartslag, VO2max en trainingsbelasting worden bijgehouden met 14-daagse grafieken en zone-indicatoren, zodat je altijd weet hoe je lichaam reageert.",
        },
        {
          title: "Planning",
          subtitle: "Slim · Adaptief · Persoonlijk",
          description:
            "Geef je racedag op en Phasr bouwt achteruit. Periodisering, tapering en herstelweken worden automatisch ingepland op basis van jouw beschikbaarheid.",
        },
      ],
    },
    disciplines: {
      eyebrow: "Disciplines",
      heading1: "Jouw sport,",
      heading2: "jouw plan",
      subline: "Phasr is gebouwd voor drie specifieke sporten, geen generieke fitnessapp.",
      startWith: "Start met",
      items: [
        {
          id: "hardlopen",
          label: "Hardlopen",
          emoji: "🏃",
          headline: "Van 5K tot marathon",
          description:
            "Phasr genereert een trainingsplan op basis van jouw huidige niveau, doelafstand en racedatum. Je workouts synchroniseren automatisch via Garmin Connect en Apple Health.",
          features: [
            "Plannen voor 5K, 10K, halve marathon en marathon",
            "Zone-gebaseerde training (Z1–Z5)",
            "Automatische tapering voor je race",
            "Garmin Connect sync",
          ],
        },
        {
          id: "triathlon",
          label: "Triathlon",
          emoji: "🏊",
          headline: "Sprint tot Ironman",
          description:
            "Drie disciplines, één plan. Phasr balanceert zwemmen, fietsen en hardlopen op basis van jouw zwakste discipline en je raceformaat. Voltooide workouts synchroniseren via Garmin Connect en Apple Health.",
          features: [
            "Sprint, Olympic, 70.3 en full Ironman plannen",
            "Garmin Connect sync",
            "Discipline-balans op basis van je zwaktes",
            "Brick-workouts en race-pace sessions",
          ],
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
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      heading1: "Begin gratis,",
      heading2: "upgrade wanneer je wilt",
      subline:
        "De core van Phasr is gratis. AI Coach is binnenkort beschikbaar voor serieuze atleten.",
      freeLabel: "Gratis",
      freeNote: "Voor altijd gratis",
      downloadBtn: "Download nu",
      aiLabel: "AI Coach",
      aiNote: "Early access korting voor wachtlijst",
      comingSoon: "Binnenkort",
      joinWaitlist: "Join de wachtlijst",
      freeFeatures: [
        "Onbeperkt trainingsplannen genereren",
        "Hardlopen, Triathlon & Hyrox",
        "Garmin Connect sync",
        "Apple Health integratie",
        "Weekplanning & kalender",
        "Gezondheids- en trainingsbelasting dashboard (HRV, VO2max, TSB)",
      ],
      proFeatures: [
        "Alles van Gratis",
        "AI Coach: real-time plan aanpassing",
        "Spraak-coaching tijdens workouts",
        "Geavanceerde HRV & herstelanalyse",
        "Onbeperkte race-doelen tegelijk",
        "Prioriteit support",
      ],
    },
    aiCoach: {
      badge: "Binnenkort beschikbaar",
      heading1: "Maak kennis met",
      heading2: "AI Coach",
      subline:
        "Stel je voor: een coach die jouw HRV bijhoudt, je training aanpast als je moe bent, en je motiveert met real-time feedback. Dat is AI Coach.",
      features: [
        { icon: "🧠", text: "Adaptief plan op basis van jouw data" },
        { icon: "🎙️", text: "Spraakcoaching tijdens je workout" },
        { icon: "📊", text: "Geavanceerde herstel- & HRV-analyse" },
      ],
      placeholder: "jouw@email.com",
      joinBtn: "Join de wachtlijst",
      loadingBtn: "Even wachten...",
      successTitle: "Je staat op de lijst!",
      successText:
        "We sturen je een e-mail zodra AI Coach beschikbaar is, inclusief een early-access korting.",
      gdprNote: "Geen spam. Uitschrijven kan altijd. GDPR-compliant.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Veelgestelde vragen",
      contactText: "Andere vraag?",
      items: [
        {
          q: "Is Phasr echt gratis?",
          a: "Ja. De core-app (trainingsplannen genereren, Garmin sync, Apple Health, weekplanning) is volledig gratis en blijft dat ook. AI Coach is een optionele betaalde upgrade die binnenkort beschikbaar komt.",
        },
        {
          q: "Hoe werkt de Garmin-synchronisatie?",
          a: "Verbind je Garmin-account eenmalig via Garmin Connect. Phasr stuurt geplande workouts rechtstreeks naar je Garmin-apparaat. Gezondheidsmetingen zoals HRV, VO2max en rusthartslag worden gelezen vanuit Apple Health.",
        },
        {
          q: "Werkt Phasr ook zonder Garmin-horloge?",
          a: "Ja. Phasr werkt met Apple Health. Workouts opgenomen met een Apple Watch of iPhone verschijnen automatisch in Phasr. Een Garmin is geen vereiste.",
        },
        {
          q: "Kan ik meerdere trainingsplannen tegelijk volgen?",
          a: "Momenteel ondersteunt Phasr één actief trainingsplan tegelijk. Het triatlonplan combineert zwemmen, fietsen en hardlopen al in één schema.",
        },
        {
          q: "Op welke iPhone werkt Phasr?",
          a: "Phasr vereist iOS 16 of hoger. Dat omvat de iPhone 8 en nieuwer.",
        },
        {
          q: "Hoe verschilt Phasr van apps zoals TrainingPeaks of Garmin Coach?",
          a: "Phasr is gebouwd voor de recreatieve maar serieuze atleet die geen coach wil betalen. Waar TrainingPeaks je laat uitzoeken wat TSS en ATL betekenen, legt Phasr elke meting in duidelijke taal uit, van trainingsbelasting (TSB, ATL, CTL) tot gezondheidsmetingen als HRV en VO2max. Een helder plan dat zich aanpast aan jouw schema en herstel.",
        },
      ],
    },
    footer: {
      tagline: "Gebouwd door atleten, voor atleten.",
      appStoreLabel: "Download in de",
      appStoreName: "App Store",
      sections: {
        app: "App",
        company: "Bedrijf",
        legal: "Juridisch",
      },
      companyLinks: [
        { href: "/over", label: "Over ons" },
        { href: "/blog", label: "Blog" },
        { href: "mailto:support@gophasr.com", label: "Contact" },
      ],
      legalLinks: [
        { href: "/privacy", label: "Privacybeleid" },
        { href: "/terms", label: "Algemene voorwaarden" },
        { href: "/cookies", label: "Cookiebeleid" },
      ],
      rights: "Alle rechten voorbehouden.",
    },
    cookieBanner: {
      text: "We gebruiken cookies om je ervaring te verbeteren.",
      accept: "Accepteren",
      decline: "Weigeren",
    },
  },
} as const;

export type Translations = typeof translations.en;
