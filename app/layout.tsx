import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Phasr – Train smarter. Race faster.",
  description:
    "Phasr is the training app for runners, triathletes and Hyrox athletes. Smart training plans, Garmin sync, Apple Health integration and AI coaching.",
  keywords: [
    "trainingsplan hardlopen app",
    "triathlon app garmin",
    "hyrox trainingsplan",
    "triathlon training app",
    "run training plan",
  ],
  metadataBase: new URL("https://phasr.app"),
  openGraph: {
    title: "Phasr – Train smarter. Race faster.",
    description:
      "Smart training plans for runners, triathletes and Hyrox athletes. Garmin sync & Apple Health included.",
    url: "https://phasr.app",
    siteName: "Phasr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phasr – Train smarter. Race faster.",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phasr – Train smarter. Race faster.",
    description:
      "Smart training plans for runners, triathletes and Hyrox athletes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Phasr",
              operatingSystem: "iOS",
              applicationCategory: "HealthApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              description:
                "Smart training plans for runners, triathletes and Hyrox athletes with Garmin sync and Apple Health integration.",
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
