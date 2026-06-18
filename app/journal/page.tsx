import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { journal } from "@/lib/journal";
import { breadcrumbSchema } from "@/lib/seo";
import { imgPath } from "@/lib/imgPath";

export const metadata = {
  title: "Journal — Guides To Pakistani Mangoes & Our Farm",
  description:
    "Practical, grower-written guides — how to store mangoes at home, the Pakistan mango season calendar, picking a great mango, and notes from our orchard near Multan.",
  alternates: { canonical: "/journal/" },
  openGraph: {
    title: "Journal · Thaheem Fruit Farms",
    description:
      "Grower-written guides on Pakistani mango varieties, storage and the season calendar.",
    url: "https://thaheemfruitfarms.com/journal/",
    type: "website",
  },
};

export default function JournalIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal/" },
        ])}
      />

      <PageHero
        eyebrow="The Journal"
        title="Notes from the orchard."
        description="Practical guides on Pakistani mango varieties, storage, ripening and the season calendar — written from the farm."
      />

      <section className="section pt-0">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {journal.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/journal/${p.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-bark/10 bg-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-mango-300"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden">
                  <Image
                    src={imgPath(p.image)}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 font-stamp text-[10px] uppercase tracking-stamp text-bark/55">
                    <Clock size={12} /> {p.readingMinutes} min read
                  </div>
                  <h2 className="mt-3 font-display text-xl font-medium leading-snug text-bark">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-bark/70">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-stamp text-[10.5px] uppercase tracking-stamp text-mango-700">
                    Read the guide <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
