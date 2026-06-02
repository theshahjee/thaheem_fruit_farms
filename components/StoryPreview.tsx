import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function StoryPreview() {
  return (
    <section className="section relative overflow-hidden bg-cream-100">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem] ring-1 ring-bark/10 shadow-soft">
              <Image
                src="/images/farm/orchard-rows.svg"
                alt="Rows of mango trees at Thaheem Fruit Farms"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-3xl border border-bark/10 bg-cream-50 p-5 shadow-soft md:block">
              <p className="font-display text-3xl text-bark">42+ years</p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-farm-600">
                Of farming heritage
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">Our Story</span>
          <h2 className="h-display mt-3">
            Rooted In Tradition.
            <br />
            <span className="text-mango-600">Growing For The Future.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bark/75 md:text-lg">
            Thaheem Fruit Farms began in 1982 on the fertile lands near Multan.
            For generations our family has cultivated mangoes here — learning
            the soil, the seasons and the secrets of every variety we grow.
          </p>
          <p className="mt-5 text-base leading-relaxed text-bark/70">
            Today we blend that hard-earned knowledge with modern packaging,
            careful logistics and direct online ordering — so our mangoes
            arrive at your home exactly as they leave the orchard.
          </p>

          <Link href="/about" className="btn-primary mt-9">
            Read Our Story <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
