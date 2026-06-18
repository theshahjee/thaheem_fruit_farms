import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VarietyCard from "@/components/VarietyCard";
import CTABanner from "@/components/CTABanner";
import { varieties } from "@/lib/varieties";

export const metadata = {
  title: "Mango Varieties — Sindhri, Anwar Ratool, Chaunsa & More",
  description:
    "Five premium export-quality mango varieties from Thaheem Fruit Farms near Multan — Export Royal Sindhri, Aseel Anwar Ratool, Royal Chaunsa, White Chaunsa and 12 No Ratool. Hand-graded, farm-direct.",
  alternates: { canonical: "/varieties/" },
  openGraph: {
    title: "Our Mango Varieties — Thaheem Fruit Farms",
    description:
      "Five premium export-quality cultivars, hand-graded on our family orchard near Multan.",
    url: "https://thaheemfruitfarms.com/varieties/",
    type: "website",
  },
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
