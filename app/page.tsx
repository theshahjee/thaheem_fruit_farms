import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import VarietiesPreview from "@/components/VarietiesPreview";
import StoryPreview from "@/components/StoryPreview";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <VarietiesPreview />
      <StoryPreview />
      <WhyUs />
      <CTABanner />
    </>
  );
}
