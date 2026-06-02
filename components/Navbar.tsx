"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/brand";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-[76px] items-center justify-between">
        <Logo size={44} />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 font-stamp text-[10.5px] font-medium uppercase tracking-stamp transition-colors duration-300",
                  active
                    ? "text-ink"
                    : "text-ink/55 hover:text-ink"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-5 -bottom-0.5 h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Link href="/pre-booking" className="btn-mango">
            Pre-Book Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper-50 text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-ink/10 bg-paper/95 backdrop-blur-md transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-6">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 font-stamp text-[11px] font-medium uppercase tracking-stamp",
                  active
                    ? "bg-mango-100 text-ink"
                    : "text-ink/75 hover:bg-paper-100"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/pre-booking" className="btn-mango mt-3">
            Pre-Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
