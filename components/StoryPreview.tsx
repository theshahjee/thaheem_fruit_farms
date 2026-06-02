import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function StoryPreview() {
  return (
    <section className="section relative overflow-hidden border-y border-ink/10 bg-paper-100">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] ring-1 ring-ink/15 shadow-ink">
              <Image
                src="/images/farm/orchard-rows.svg"
                alt="Rows of mango trees at Thaheem Fruit Farms"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-ink/10 bg-cream-50/85 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-stamp text-[9.5px] uppercase tracking-stamp text-ink/70">
                  Plate II — Orchard rows
                </span>
                <span className="font-stamp text-[9.5px] uppercase tracking-stamp text-ink/55">
                  Khanewal
                </span>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-5 hidden rotate-[-3deg] border border-ink/15 bg-paper-50 px-5 py-4 shadow-soft md:block">
              <p
                className="font-display text-3xl font-medium leading-none text-ink"
                style={{ fontVariationSettings: '"SOFT" 60, "opsz" 60' }}
              >
                42 years
              </p>
              <p className="mt-1 font-stamp text-[9.5px] uppercase tracking-stamp text-ink/55">
                Of orchard knowledge
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="section-index">
            <span>§ 03 — The Heritage</span>
          </div>

          <h2
            className="h-display mt-6 font-medium"
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 96' }}
          >
            Rooted in <em className="font-display italic text-mango-600">tradition</em>.
            Growing for the future.
          </h2>

          <div className="editorial mt-8 max-w-xl space-y-5">
            <p>
              Thaheem Fruit Farms began in 1982 on the fertile lands near Multan.
              For generations our family has cultivated mangoes here — learning
              the soil, the seasons and the secrets of every variety we grow.
            </p>
            <p className="text-ink/65">
              Today we blend that hard-earned knowledge with modern packaging,
              careful logistics and direct online ordering — so our mangoes
              arrive at your home exactly as they leave the orchard.
            </p>
          </div>

          <Link href="/about" className="btn-primary mt-9">
            Read the full story <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
