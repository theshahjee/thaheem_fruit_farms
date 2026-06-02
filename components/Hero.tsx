"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  { icon: Sparkles, label: "Since 1982" },
  { icon: ShieldCheck, label: "Export Grade" },
  { icon: Leaf, label: "Farm Direct" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 pt-32 md:pt-40">
      {/* Decorative gradient + grain */}
      <div className="absolute inset-0 -z-10 bg-radial-mango" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(42,26,12,0.6)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="container-page grid items-center gap-14 pb-24 lg:grid-cols-12 lg:gap-12 lg:pb-32">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-bark/15 bg-cream-50/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-farm-600 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mango-500" />
            Hand-picked · Family farmed
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-bark sm:text-6xl lg:text-7xl"
          >
            Premium Export Quality{" "}
            <span className="relative whitespace-nowrap text-mango-600">
              Mangoes
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <path
                  d="M2 8 C 50 2 150 2 198 8"
                  fill="none"
                  stroke="#F5A623"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            From Multan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-bark/70 md:text-lg"
          >
            Generations of farming expertise. Carefully selected export-quality
            mangoes delivered directly from our orchards to your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/pre-booking" className="btn-primary">
              Pre-Book Now <ArrowRight size={16} />
            </Link>
            <Link href="/varieties" className="btn-ghost">
              Explore Varieties
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {stats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-bark/70"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mango-100 text-mango-700">
                  <Icon size={16} />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Outer gold ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mango-300 via-mango-500 to-farm-600 p-[6px] shadow-glow">
              <div className="h-full w-full overflow-hidden rounded-full bg-cream-50">
                <Image
                  src="/images/hero/hero-orchard.svg"
                  alt="Sunset over the Thaheem Fruit Farms orchard"
                  fill
                  priority
                  sizes="(min-width:1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating logo badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 hidden h-32 w-32 overflow-hidden rounded-full ring-4 ring-cream-50 shadow-soft md:block"
            >
              <Image
                src="/images/logo/logo.jpeg"
                alt="Thaheem Fruit Farms logo"
                fill
                sizes="128px"
                className="object-cover"
              />
            </motion.div>

            {/* Floating quality badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 hidden rounded-2xl bg-cream-50 px-4 py-3 shadow-soft md:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-farm-600">
                Export Quality
              </p>
              <p className="mt-0.5 font-display text-xl text-bark">100%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* bottom curve */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-cream-100/60" />
    </section>
  );
}
