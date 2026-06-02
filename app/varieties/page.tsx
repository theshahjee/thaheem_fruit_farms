import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VarietyCard from "@/components/VarietyCard";
import CTABanner from "@/components/CTABanner";
import { varieties } from "@/lib/varieties";

export const metadata = {
  title: "Our Varieties",
  description:
    "Premium export-quality mango varieties from Thaheem Fruit Farms — Sindhri, Anwar Ratool, Royal Chaunsa, White Chaunsa, 12 No Ratool.",
};

export default function VarietiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Varieties"
        title="Five varieties. One standard."
        description="We focus only on what our family knows best — premium export cultivars, grown on our own orchards and hand-selected for every box we send."
      />

      <section className="section">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {varieties.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.08}>
              <VarietyCard variety={v} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
