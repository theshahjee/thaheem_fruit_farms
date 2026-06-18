import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import VarietiesPreview from "@/components/VarietiesPreview";
import StoryPreview from "@/components/StoryPreview";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";
import { homeFaqs } from "@/lib/faqs";

export const metadata = {
  title: "Premium Export Mangoes — Pre-Book Season 2026",
  description:
    "Thaheem Fruit Farms is a family-owned mango orchard near Multan, growing premium export-quality Sindhri, Anwar Ratool, Royal Chaunsa, White Chaunsa and 12 No Ratool. Pre-book farm-direct delivery across Pakistan.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <TrustStrip />
      <VarietiesPreview />
      <StoryPreview />
      <WhyUs />
      <FAQ />
      <CTABanner />
    </>
  );
}
