import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sprout, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { brand } from "@/lib/brand";
import { imgPath } from "@/lib/imgPath";

export const metadata = {
  title: "About Us",
  description:
    "The story of Thaheem Fruit Farms — a family-owned mango farm near Multan, Pakistan, growing premium export-quality mangoes since 1982.",
};

const milestones = [
  {
    year: "1982",
    title: "The First Trees",
    body: "Our family planted the first mango orchards on the fertile lands of Ghouspur Thaheem.",
  },
  {
    year: "1990s",
    title: "Expanding the Orchards",
    body: "Generations of learning, grafting and selection sharpened our focus on premium varieties.",
  },
  {
    year: "2020s",
    title: "Direct to Your Doorstep",
    body: "We brought the farm online — delivering export-quality mangoes directly to families across Pakistan.",
  },
];

const pillars = [
  {
    icon: Sprout,
    title: "Heritage Knowledge",
    body: "Four decades of family farming — every harvest reflects what we have learned from the land.",
  },
  {
    icon: ShieldCheck,
    title: "Human-Safe Practices",
    body: "Responsible crop protection — safe for our farm workers, our families and yours.",
  },
  {
    icon: Leaf,
    title: "Export-Only Varieties",
    body: "We grow only premium cultivars worthy of the Thaheem name.",
  },
  {
    icon: Truck,
    title: "Farm to Doorstep",
    body: "Mangoes leave the orchard, get hand-graded, packed and dispatched — no middlemen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Rooted In Tradition. Growing For The Future."
        description="A family farm with deep roots near Multan — and an unwavering commitment to quality, integrity and the people who eat our fruit."
      />

      {/* Narrative + image */}
      <section className="section">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem] ring-1 ring-bark/10 shadow-soft">
              <Image
                src={imgPath("/images/farm/orchard-rows.svg")}
                alt="The Thaheem orchard"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Since 1982</span>
            <h2 className="h-display mt-3">A family. A farm. A standard.</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-bark/75 md:text-lg">
              <p>
                Thaheem Fruit Farms is a family-owned mango farm with roots
                dating back to 1982. For generations, our ancestors have
                cultivated mangoes on the fertile lands near Multan — slowly
                refining our craft season after season.
              </p>
              <p>
                What started as traditional farming has evolved into a modern
                farm-to-customer experience. While preserving our farming
                heritage, we have embraced technology and online commerce to
                deliver premium export-quality mangoes directly to families
                across Pakistan.
              </p>
              <p>
                We believe quality begins at the roots and continues through
                every stage of cultivation, selection, packaging and delivery.
                Today, we focus exclusively on premium export varieties — and
                invite you to visit our farm and witness our standards firsthand.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-cream-100">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Journey"
            title="Four decades, one mission"
            description="A short walk through the milestones that shaped Thaheem Fruit Farms into the family-run, export-grade operation it is today."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <article className="relative h-full rounded-3xl border border-bark/10 bg-cream-50 p-8 shadow-soft">
                  <span className="font-display text-5xl text-mango-500">
                    {m.year}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-bark">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark/70">
                    {m.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every box"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="h-full rounded-3xl border border-bark/10 bg-cream-50 p-7 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-farm-100 text-farm-600">
                    <p.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark/70">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-[2.5rem] border border-bark/10 bg-cream-100 p-10 md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="eyebrow">An open farm</span>
                <h2 className="h-display mt-3 text-3xl md:text-4xl">
                  Come visit us in {brand.address.split(",")[0]}.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-bark/70">
                  Quality should be experienced — not just promised. Walk the
                  orchard, watch the packing, taste the difference.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link href="/farm-visit" className="btn-primary">
                  Plan a Visit <ArrowRight size={16} />
                </Link>
                <Link href="/varieties" className="btn-ghost">
                  See Varieties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
