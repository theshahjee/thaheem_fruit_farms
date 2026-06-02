import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Props = {
  size?: number;
  withText?: boolean;
  variant?: "light" | "dark";
};

export default function Logo({
  size = 56,
  withText = true,
  variant = "dark",
}: Props) {
  const textColor = variant === "light" ? "text-cream-50" : "text-bark";
  const tagColor = variant === "light" ? "text-cream-100/80" : "text-farm-600";
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${brand.name} — Home`}
    >
      <span
        className="relative overflow-hidden rounded-full ring-1 ring-bark/10 shadow-soft transition-transform duration-500 group-hover:rotate-6"
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
            className={`block font-display text-lg font-semibold tracking-wide ${textColor}`}
          >
            Thaheem Fruit Farms
          </span>
          <span
            className={`block text-[10px] font-semibold uppercase tracking-[0.3em] ${tagColor}`}
          >
            Since 1982 · Multan
          </span>
        </span>
      )}
    </Link>
  );
}
