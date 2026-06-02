import {
  Award,
  BadgeCheck,
  Box,
  Globe2,
  Heart,
  Leaf,
  ShieldCheck,
  Sun,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Export Quality Varieties Only",
    body: "We grow and select exclusively premium export-grade mango varieties — nothing else makes it into our boxes.",
  },
  {
    icon: ShieldCheck,
    title: "Human-Safe Crop Protection",
    body: "Responsible, human-safe farming practices protect our trees, our soil and your family.",
  },
  {
    icon: BadgeCheck,
    title: "Export Standards End-to-End",
    body: "From harvesting and ripening to grading and packing — every step follows strict export protocols.",
  },
  {
    icon: Box,
    title: "Premium Packaging",
    body: "Each box is purpose-built for our mangoes — ventilated, branded and tested for safe transit.",
  },
  {
    icon: Sun,
    title: "Farm Direct Freshness",
    body: "No middlemen. No cold storage chains. Mangoes leave our orchard and reach your doorstep.",
  },
  {
    icon: Heart,
    title: "Open Farm Visits",
    body: "We invite you to see our standards yourself. Walk the orchard, see the packing, taste the quality.",
  },
  {
    icon: Globe2,
    title: "3+ Years Serving Online Customers",
    body: "What was once a wholesale-only farm now delivers directly to homes across Pakistan.",
  },
  {
    icon: Leaf,
    title: "Heritage Since 1982",
    body: "Four decades of family knowledge and care behind every mango we send.",
  },
];

export default function WhyUs() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bark/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Thaheem Fruit Farms?"
          description="Quality begins at the roots. It continues through every stage of cultivation, selection, packaging and delivery — and is sealed by the family standing behind it."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-bark/10 bg-cream-50 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-mango-300 hover:shadow-glow">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mango-100 text-mango-700 transition-colors duration-500 group-hover:bg-mango-500 group-hover:text-cream-50">
                  <r.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bark/70">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
