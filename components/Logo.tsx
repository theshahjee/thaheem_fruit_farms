import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Props = {
  size?: number;
  withText?: boolean;
  variant?: "light" | "dark";
};

export default function Logo({
  size = 48,
  withText = true,
  variant = "dark",
}: Props) {
  const textColor = variant === "light" ? "text-cream-50" : "text-ink";
  const tagColor = variant === "light" ? "text-cream-100/70" : "text-ink/55";
  return (
    <Link
      href="/"
      className="group flex items-center gap-3.5"
      aria-label={`${brand.name} — Home`}
    >
      <span
        className="relative overflow-hidden rounded-full ring-1 ring-ink/15 shadow-seal transition-transform duration-500 group-hover:rotate-[8deg]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo/logo.jpeg"
          alt={`${brand.name} logo`}
          fill
          sizes={`${size}px`}
          priority
          className="object-cover"
        />
      </span>
      {withText && (
        <span className="leading-tight">
          <span
            className={`block font-display text-[19px] font-semibold tracking-[-0.01em] ${textColor}`}
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 24' }}
          >
            Thaheem Fruit Farms
          </span>
          <span
            className={`mt-0.5 block font-stamp text-[9.5px] font-medium uppercase tracking-stamp ${tagColor}`}
          >
            Est · 1982 · Multan
          </span>
        </span>
      )}
    </Link>
  );
}
