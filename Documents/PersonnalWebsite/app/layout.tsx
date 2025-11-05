import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { profile } from "@/data/profile";
import Script from "next/script";
import { neueMontreal } from "@/lib/fonts";

// Inter font as primary (Neue Montreal can be enabled when font files are added)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaury-lechapelain.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Amaury Lechapelain — Aerospace Engineer",
    template: "%s — Amaury Lechapelain",
  },
  description:
    "Aerospace engineer focused on UAV systems, flight testing, autonomy, and composites. I build, fly, and iterate fast. Specialized in rapid prototyping, field testing, and practical engineering solutions.",
  keywords: [
    "aerospace engineer",
    "UAV systems",
    "drone engineering",
    "flight testing",
    "autonomous systems",
    "composite materials",
    "aerospace engineering",
    "UAV navigation",
    "flight simulation",
    "aerospace engineer France",
  ],
  authors: [{ name: "Amaury Lechapelain" }],
  creator: "Amaury Lechapelain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Amaury Lechapelain",
    title: "Amaury Lechapelain — Aerospace Engineer",
    description:
      "Aerospace engineer focused on UAV systems, flight testing, autonomy, and composites. I build, fly, and iterate fast.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amaury Lechapelain — Aerospace Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaury Lechapelain — Aerospace Engineer",
    description:
      "Aerospace engineer focused on UAV systems, flight testing, autonomy, and composites. I build, fly, and iterate fast.",
    images: ["/images/og-image.jpg"],
    creator: "@amaury_lechapelain",
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en" className={`${neueMontreal.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
        {plausibleDomain && (
          <Script
            strategy="afterInteractive"
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

