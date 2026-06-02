import type { Metadata } from "next";
import { Fraunces, Manrope, Newsreader, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/lib/brand";

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
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${editorial.variable} ${sans.variable} ${stamp.variable}`}
    >
      <body className="paper-bg flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
