import type { Metadata } from "next";
import { Fraunces, Manrope, Newsreader, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SideRail from "@/components/SideRail";
import PromoPopup from "@/components/PromoPopup";
import JsonLd from "@/components/JsonLd";
import { brand } from "@/lib/brand";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

const display = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const editorial = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const stamp = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-stamp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thaheemfruitfarms.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Family-owned mango farm near Multan, Pakistan. Premium export-quality Sindhri, Anwar Ratool, Chaunsa, White Chaunsa and 12 No Ratool mangoes — pre-book farm-direct delivery across Pakistan since 1982.",
  keywords: [
    "Thaheem Fruit Farms",
    "premium mangoes Pakistan",
    "export quality mangoes",
    "Multan mangoes",
    "Sindhri mango",
    "Anwar Ratool mango",
    "Chaunsa mango",
    "White Chaunsa",
    "12 No Ratool",
    "pre-book mangoes Pakistan",
    "buy mangoes online Pakistan",
    "farm direct mangoes",
    "mango delivery Karachi",
    "mango delivery Lahore",
    "mango delivery Islamabad",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Premium export-quality mangoes delivered directly from our orchards near Multan. Pre-book Sindhri, Anwar Ratool, Chaunsa and White Chaunsa for Season 2026.",
    type: "website",
    url: "https://thaheemfruitfarms.com/",
    siteName: brand.name,
    locale: "en_PK",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Thaheem Fruit Farms orchard at golden hour — Multan, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Premium export-quality mangoes from our family orchard near Multan — pre-book the Season 2026 harvest.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
  category: "food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-PK"
      className={`${display.variable} ${editorial.variable} ${sans.variable} ${stamp.variable}`}
    >
      <body className="paper-bg flex min-h-screen flex-col">
        <JsonLd
          data={[
            organizationSchema(),
            websiteSchema(),
            localBusinessSchema(),
          ]}
        />
        <Navbar />
        <SideRail />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <PromoPopup />
      </body>
    </html>
  );
}
