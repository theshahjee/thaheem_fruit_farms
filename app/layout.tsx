import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/lib/brand";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thaheemfruitfarms.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Family-owned mango farm near Multan, Pakistan. Premium export-quality Sindhri, Anwar Ratool, Chaunsa and White Chaunsa mangoes — farm direct since 1982.",
  keywords: [
    "Thaheem Fruit Farms",
    "premium mangoes",
    "export quality mangoes",
    "Multan mangoes",
    "Sindhri",
    "Anwar Ratool",
    "Chaunsa",
    "pre-book mangoes Pakistan",
  ],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Premium export-quality mangoes delivered directly from our orchards near Multan.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
