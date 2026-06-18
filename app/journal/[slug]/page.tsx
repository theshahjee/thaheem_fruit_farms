import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { journal, journalBySlug } from "@/lib/journal";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { imgPath } from "@/lib/imgPath";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const p = journalBySlug[params.slug];
  if (!p) return {};
  const url = `https://thaheemfruitfarms.com/journal/${p.slug}/`;
  const og = `/og/journal/${p.slug}.jpg`;
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/journal/${p.slug}/` },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: "article",
      publishedTime: p.date,
      images: [{ url: og, width: 1200, height: 630, alt: p.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
      images: [og],
    },
  };
}

export default function JournalPost({ params }: Params) {
  const p = journalBySlug[params.slug];
  if (!p) notFound();

  const related = journal.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: p.title,
            description: p.description,
            slug: p.slug,
            date: p.date,
            image: p.image,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal/" },
            { name: p.title, path: `/journal/${p.slug}/` },
          ]),
        ]}
      />

      <article className="section pt-[120px] sm:pt-[140px]">
        <div className="container-page">
          <Reveal>
            <Link
              href="/journal/"
              className="inline-flex items-center gap-1.5 font-stamp text-[10.5px] uppercase tracking-stamp text-bark/60 transition-colors hover:text-mango-700"
            >
              <ArrowLeft size={12} /> Back to the journal
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-3 font-stamp text-[10.5px] uppercase tracking-stamp text-bark/55">
              <Clock size={12} /> {p.readingMinutes} min read
              <span className="h-3 w-px bg-bark/25" />
              <time dateTime={p.date}>
                {new Date(p.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1
              className="h-display mt-6 max-w-3xl break-words font-medium"
              style={{ fontVariationSettings: '"SOFT" 60, "opsz" 144' }}
            >
              {p.title}
            </h1>
            <p className="editorial mt-6 max-w-2xl text-[17px] text-bark/80 sm:text-[19px]">
              {p.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-bark/10 shadow-soft sm:mt-14">
              <Image
                src={imgPath(p.image)}
                alt={p.imageAlt}
                fill
                priority
                sizes="(min-width:1024px) 70vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-14 max-w-3xl">
              {p.body.map((section) => (
                <div key={section.heading} className="mt-10 first:mt-0">
                  <h2 className="font-display text-2xl font-medium text-bark sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-[16px] leading-relaxed text-bark/80 sm:text-[17px]">
                    {section.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bg-cream-100">
          <div className="container-page">
            <span className="eyebrow">More from the journal</span>
            <h2 className="h-display mt-3 text-3xl">Keep reading</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/journal/${r.slug}/`}
                  className="group flex items-start gap-5 rounded-3xl border border-bark/10 bg-cream-50 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-mango-300"
                >
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={imgPath(r.image)}
                      alt={r.imageAlt}
                      fill
                      sizes="100px"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-medium leading-snug text-bark">
                      {r.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-stamp text-[10px] uppercase tracking-stamp text-mango-700">
                      Read <ArrowUpRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
