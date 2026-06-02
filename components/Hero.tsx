"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { imgPath } from "@/lib/imgPath";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section className="relative isolate overflow-hidden pt-24 sm:pt-28 md:pt-36 lg:pt-40">
      {/* top metadata bar */}
      <div className="container-page">
        <motion.div
          {...rise(0)}
          className="flex flex-wrap items-center justify-between gap-y-3 border-b border-ink/15 pb-5"
        >
          <p className="font-stamp text-[9.5px] font-medium uppercase tracking-stamp text-ink/60 sm:text-[10.5px]">
            <span className="text-ink">Vol. 42</span> · Season 2026 · Multan
          </p>
          <p className="hidden font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink/60 sm:block">
            Family-grown · Hand-graded · Farm-direct
          </p>
        </motion.div>
      </div>

      {/* Hero body */}
      <div className="container-page relative grid gap-10 pt-10 sm:pt-12 md:pt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div {...rise(0.05)} className="section-index">
            <span>§ 01 — The Orchard</span>
          </motion.div>

          <motion.h1
            {...rise(0.1)}
            className="title-flex mt-6 font-display text-[clamp(2.25rem,7.2vw,7rem)] font-medium leading-[0.95] tracking-[-0.025em] text-ink"
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 144' }}
          >
            The mango,{" "}
            <em className="font-display italic text-mango-600">
              from family
            </em>
            <br />
            hands.
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="editorial mt-8 max-w-xl"
          >
            For four decades our orchard near Multan has been a place of slow,
            patient work. We grow only premium export varieties — and deliver
            them, hand-graded, straight from our trees to your home.
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/pre-booking" className="btn-primary">
              Pre-Book the Season <ArrowRight size={14} />
            </Link>
            <Link href="/varieties" className="btn-ghost">
              View Varieties
            </Link>
          </motion.div>

          {/* Heritage signature */}
          <motion.div
            {...rise(0.4)}
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/15 pt-6 md:mt-14"
          >
            <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/55 sm:text-[10.5px]">
              Est. 1982
            </span>
            <span className="h-3 w-px bg-ink/25" />
            <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/55 sm:text-[10.5px]">
              Ghouspur Thaheem
            </span>
            <span className="h-3 w-px bg-ink/25" />
            <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/55 sm:text-[10.5px]">
              Punjab · Pakistan
            </span>
          </motion.div>
        </div>

        {/* Right column — hero image with floating editorial label */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative">
            {/* Top stamp band */}
            <div className="mb-3 flex items-center justify-between">
              <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/55">
                № 01 / 05
              </span>
              <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/55">
                Export Grade
              </span>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] ring-1 ring-ink/15 shadow-ink">
              <Image
                src={imgPath("/images/hero/hero-orchard.svg")}
                alt="Sunset over the Thaheem Fruit Farms orchard"
                fill
                priority
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
              />
              {/* paper grain inside frame */}
              <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25 grain-frame" />
              {/* Vintage caption strip */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-ink/10 bg-cream-50/85 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-stamp text-[9.5px] uppercase tracking-stamp text-ink/70">
                  Plate I — Orchard at golden hour
                </span>
                <span className="font-stamp text-[9.5px] uppercase tracking-stamp text-ink/55">
                  May ’26
                </span>
              </div>
            </div>

            {/* Floating wax-seal logo */}
            <motion.div
              animate={reduce ? {} : { rotate: [-6, 6, -6] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 hidden h-32 w-32 overflow-hidden rounded-full ring-4 ring-paper shadow-seal md:block"
            >
              <Image
                src={imgPath("/images/logo/logo.jpeg")}
                alt="Thaheem Fruit Farms seal"
                fill
                sizes="128px"
                className="object-cover"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
