import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://telev8.tv";

// Original description, kept here for fast revert:
//   "telev8 is a cloud-based TV-as-a-Service platform that runs on the
//    consumer televisions and existing wiring already in your property —
//    and turns TV from a cost center into a recurring revenue line."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "telev8 — Cut The Cost. Not The Cord.",
    template: "%s | telev8",
  },
  description:
    "Cloud-based TV for commercial venues that runs on existing wiring and consumer TVs — with dynamic ad insertion that turns TV from cost to revenue.",
  applicationName: "telev8",
  keywords: [
    "TVaaS",
    "commercial television",
    "hospitality TV",
    "multi-family",
    "senior living",
    "out-of-home",
    "dynamic ad insertion",
    "TiVo",
    "Android TV hospitality",
  ],
  authors: [{ name: "telev8, LLC" }],
  creator: "telev8, LLC",
  publisher: "telev8, LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "telev8",
    title: "telev8 — Cut The Cost. Not The Cord.",
    description:
      "Cloud-based TV for commercial venues that runs on existing wiring and consumer TVs — with dynamic ad insertion that turns TV from cost to revenue.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "telev8 — transforming commercial television",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "telev8 — Cut The Cost. Not The Cord.",
    description:
      "Cloud-based TV for commercial venues. Existing wiring. Consumer TVs. Ad-revenue on day one.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#08101F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700,800&display=swap"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-cta-bg)] focus:px-4 focus:py-2 focus:text-[var(--color-cta-text)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
