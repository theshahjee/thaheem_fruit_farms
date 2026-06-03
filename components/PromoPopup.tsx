"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { imgPath } from "@/lib/imgPath";

const STORAGE_KEY = "tff_promo_seen_v1";
const COOLDOWN_DAYS = 14;
const APPEAR_DELAY_MS = 1500;

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (seen) {
        const t = Number(seen);
        if (
          Number.isFinite(t) &&
          Date.now() - t < COOLDOWN_DAYS * 86400 * 1000
        ) {
          return;
        }
      }
    } catch {}
    const id = window.setTimeout(() => setOpen(true), APPEAR_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={dismiss}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Returning-customer offer"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream-50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-ink/10"
          >
            <button
              onClick={dismiss}
              aria-label="Close offer"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft transition hover:bg-white"
            >
              <X size={16} />
            </button>

            <div className="relative aspect-square w-full">
              <Image
                src={imgPath("/images/promo/repetitive-customer.png")}
                alt="5% off on 3 export-quality mango boxes for returning customers"
                fill
                sizes="(min-width:640px) 28rem, 100vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-ink/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink/55">
                Returning customer · Limited time
              </p>
              <Link href="/pre-booking" onClick={dismiss} className="btn-mango">
                Order Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
