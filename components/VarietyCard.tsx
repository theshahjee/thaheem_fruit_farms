"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Variety } from "@/lib/varieties";
import { imgPath } from "@/lib/imgPath";

const accentBg: Record<Variety["accent"], string> = {
  mango: "from-mango-100/80 via-mango-50 to-paper-100",
  khaki: "from-khaki-100/80 via-khaki-50 to-paper-100",
  farm: "from-farm-100/70 via-farm-50 to-paper-100",
};

type Props = { variety: Variety; index?: number };

export default function VarietyCard({ variety, index = 0 }: Props) {
  const img = `/images/varieties/photos/${variety.slug}.jpg`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[6px] border border-ink/15 bg-paper-50 shadow-ink"
    >
      {/* Vintage label header strip */}
      <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3">
        <span className="font-stamp text-[10px] font-medium uppercase tracking-stamp text-ink/65">
          № {number} · Varietal
        </span>
        <span className="font-stamp text-[10px] font-medium uppercase tracking-stamp text-mango-700">
          Export Grade
        </span>
      </div>

      {/* Mango stage — real photo or painterly illustration */}
      <div
        className={`relative aspect-[5/4] w-full overflow-hidden bg-gradient-to-br ${
          accentBg[variety.accent]
        }`}
      >
        <Image
          src={imgPath(img)}
          alt={`${variety.name} mangoes — export-quality ${variety.shortName} from Thaheem Fruit Farms, Multan`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />

        {/* hand-stamped seal */}
        <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border border-ink/25 bg-paper/80 text-[8.5px] font-medium uppercase tracking-stamp text-ink/70 backdrop-blur-sm font-stamp">
          <div className="text-center leading-tight">
            <div>Hand</div>
            <div>Graded</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className="font-display text-[24px] font-medium leading-tight tracking-[-0.015em] text-ink sm:text-[28px]"
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 36' }}
          >
            <Link
              href={`/varieties/${variety.slug}/`}
              className="transition-colors hover:text-mango-700"
            >
              {variety.name}
            </Link>
          </h3>
        </div>

        <p className="editorial mt-3 text-[15px] leading-relaxed text-ink/75">
          {variety.description}
        </p>

        <div className="mt-6 space-y-3 border-t border-ink/10 pt-5">
          <Row label="Taste" value={variety.taste} />
          <Row label="Harvest" value={variety.season} />
          <Row label="Packed" value={variety.packaging.join(" · ")} />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href={`/varieties/${variety.slug}/`}
            className="inline-flex items-center gap-2 border-b border-ink pb-0.5 font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink transition-all duration-300 hover:gap-3 hover:border-mango-600 hover:text-mango-700"
          >
            Explore variety
            <ArrowUpRight size={13} />
          </Link>
          <Link
            href={`/pre-booking?variety=${variety.slug}`}
            className="inline-flex items-center gap-2 font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-mango-700 transition-all duration-300 hover:gap-3"
          >
            Reserve
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[80px_1fr] items-baseline gap-4">
      <dt className="font-stamp text-[9.5px] font-medium uppercase tracking-stamp text-ink/55">
        {label}
      </dt>
      <dd className="font-editorial text-[14px] leading-snug text-ink/85">
        {value}
      </dd>
    </div>
  );
}
