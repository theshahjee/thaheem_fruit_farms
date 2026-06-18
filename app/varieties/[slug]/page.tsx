import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, Leaf, MapPin, Package, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { varieties, varietyBySlug, type Variety } from "@/lib/varieties";
import { breadcrumbSchema, productSchema } from "@/lib/seo";
import { imgPath } from "@/lib/imgPath";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return varieties.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: Params) {
  const v = varietyBySlug[params.slug];
  if (!v) return {};
  const title = `${v.name} — Premium Export-Quality ${v.shortName} Mangoes`;
  const description = `${v.description} Hand-graded at Thaheem Fruit Farms near Multan and pre-bookable for ${v.season}.`;
  const url = `https://thaheemfruitfarms.com/varieties/${v.slug}/`;
  const img = `/images/varieties/photos/${v.slug}.jpg`;
  return {
    title,
    description,
    keywords: v.searchKeywords,
    alternates: { canonical: `/varieties/${v.slug}/` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: img, alt: `${v.name} mango from Thaheem Fruit Farms` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}

export default function VarietyPage({ params }: Params) {
  const v = varietyBySlug[params.slug];
  if (!v) notFound();

  const related = varieties.filter((x) => x.slug !== v.slug).slice(0, 3);
  const img = `/images/varieties/photos/${v.slug}.jpg`;

  return (
    <>
      <JsonLd
        data={[
          productSchema(v),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Varieties", path: "/varieties/" },
            { name: v.shortName, path: `/varieties/${v.slug}/` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Variety · ${v.shortName}`}
        title={v.name}
        description={v.description}
      />

      <section className="section pt-0">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-bark/10 shadow-soft">
                <Image
                  src={imgPath(img)}
                  alt={`${v.name} mangoes hand-graded at Thaheem Fruit Farms, Multan`}
                  fill
                  priority
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-paper/40 bg-ink/55 px-3 py-1 font-stamp text-[10px] uppercase tracking-stamp text-paper backdrop-blur-sm">
                  <Sparkles size={12} /> Export Grade
                </span>
              </div>
            </Reveal>
          </div>

          {/* Facts column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <dl className="grid gap-5 sm:grid-cols-2">
                <Fact icon={Leaf} label="Taste" value={v.taste} />
                <Fact icon={Calendar} label="Harvest window" value={v.season} />
                <Fact icon={Package} label="Packaging" value={v.packaging.join(" · ")} />
                {v.origin && <Fact icon={MapPin} label="Origin" value={v.origin} />}
                {v.appearance && <Fact icon={Sparkles} label="Appearance" value={v.appearance} />}
                {v.storage && <Fact icon={Leaf} label="Storage" value={v.storage} />}
              </dl>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={`/pre-booking?variety=${v.slug}`}
                  className="btn-primary"
                >
                  Pre-Book {v.shortName} <ArrowRight size={14} />
                </Link>
                <Link href="/varieties" className="btn-ghost">
                  See all varieties
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Long-form description */}
      {v.longDescription && v.longDescription.length > 0 && (
        <section className="section bg-cream-100">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <span className="eyebrow">About {v.shortName}</span>
                <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                  Why this variety matters
                </h2>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-bark/80 md:text-lg">
                  {v.longDescription.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {v.pairings && (
                  <p className="mt-6 rounded-2xl border border-bark/10 bg-cream-50 p-5 text-sm text-bark/75">
                    <span className="font-semibold text-bark">Goes well with:</span>{" "}
                    {v.pairings}
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related varieties */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Also from our orchard</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Other premium varieties
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Reveal key={r.slug} delay={0.05}>
                <RelatedCard variety={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Leaf;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-bark/10 bg-cream-50 p-5 shadow-soft">
      <div className="flex items-center gap-2 font-stamp text-[10px] uppercase tracking-stamp text-bark/55">
        <Icon size={13} className="text-mango-600" />
        {label}
      </div>
      <p className="mt-2 font-editorial text-[15px] leading-snug text-bark">
        {value}
      </p>
    </div>
  );
}

function RelatedCard({ variety }: { variety: Variety }) {
  const img = `/images/varieties/photos/${variety.slug}.jpg`;
  return (
    <Link
      href={`/varieties/${variety.slug}/`}
      className="group relative block overflow-hidden rounded-3xl border border-bark/10 bg-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-mango-300"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <Image
          src={imgPath(img)}
          alt={`${variety.name} mangoes from Thaheem Fruit Farms`}
          fill
          sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-medium text-bark">
          {variety.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-stamp text-bark/55">
          {variety.season}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-stamp text-[10.5px] uppercase tracking-stamp text-mango-700">
          Explore <ArrowUpRight size={12} />
        </span>
      </div>
    </Link>
  );
}
