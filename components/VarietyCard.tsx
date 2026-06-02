"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Variety } from "@/lib/varieties";
import { cn } from "@/lib/cn";

const accentMap = {
  mango: "from-mango-50 to-mango-100 ring-mango-200/60",
  khaki: "from-khaki-50 to-khaki-100 ring-khaki-200/60",
  farm: "from-farm-50 to-farm-100 ring-farm-200/60",
} as const;

const accentText = {
  mango: "text-mango-700",
  khaki: "text-khaki-500",
  farm: "text-farm-600",
} as const;

const slugToImage: Record<string, string> = {
  "export-royal-sindhri": "/images/varieties/sindhri.svg",
  "aseel-anwar-ratool": "/images/varieties/anwar-ratool.svg",
  "royal-chaunsa-export": "/images/varieties/royal-chaunsa.svg",
  "white-chaunsa-export": "/images/varieties/white-chaunsa.svg",
  "12-no-ratool": "/images/varieties/12-no-ratool.svg",
};

export default function VarietyCard({ variety }: { variety: Variety }) {
  const img = slugToImage[variety.slug] ?? "/images/varieties/mango-illustration.svg";
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-bark/10 bg-cream-50 shadow-soft"
    >
      <div
        className={cn(
          "relative aspect-[4/3] w-full bg-gradient-to-br ring-1",
          accentMap[variety.accent]
        )}
      >
        <Image
          src={img}
          alt={variety.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-cream-50/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-bark backdrop-blur">
          Export Grade
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-semibold text-bark">
          {variety.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-bark/70">
          {variety.description}
        </p>

        <dl className="mt-5 grid grid-cols-1 gap-3 text-xs">
          <div>
            <dt
              className={cn(
                "font-semibold uppercase tracking-[0.18em]",
                accentText[variety.accent]
              )}
            >
              Taste
            </dt>
            <dd className="mt-1 text-bark/75">{variety.taste}</dd>
          </div>
          <div>
            <dt
              className={cn(
                "font-semibold uppercase tracking-[0.18em]",
                accentText[variety.accent]
              )}
            >
              Harvest
            </dt>
            <dd className="mt-1 text-bark/75">{variety.season}</dd>
          </div>
          <div>
            <dt
              className={cn(
                "font-semibold uppercase tracking-[0.18em]",
                accentText[variety.accent]
              )}
            >
              Packaging
            </dt>
            <dd className="mt-1 text-bark/75">
              {variety.packaging.join(" · ")}
            </dd>
          </div>
        </dl>

        <Link
          href={`/pre-booking?variety=${variety.slug}`}
          className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-bark px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream-50 transition-all duration-300 hover:bg-farm-600"
        >
          Pre-Order
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
