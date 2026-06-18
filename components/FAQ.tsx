"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { homeFaqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section className="section bg-cream-100" id="faq">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Questions"
          title="What customers ask before they pre-book"
          description="Season, varieties, delivery cities, packing — the answers we share most. Don't see your question? WhatsApp us and we'll reply within the hour."
        />
        <Reveal>
          <ul className="mx-auto mt-14 max-w-3xl divide-y divide-bark/10 rounded-3xl border border-bark/10 bg-cream-50 shadow-soft">
            {homeFaqs.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function FAQItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((x) => !x)}
        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
      >
        <span
          className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bark/15 bg-cream-100 text-bark transition-transform duration-300 ${
            open ? "rotate-45 border-mango-400 bg-mango-100 text-mango-700" : ""
          }`}
          aria-hidden
        >
          <Plus size={14} />
        </span>
        <span className="flex-1">
          <h3 className="font-display text-[17px] font-medium leading-snug text-bark sm:text-[19px]">
            {q}
          </h3>
          <div
            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
              open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="min-h-0 text-[15px] leading-relaxed text-bark/75">
              {a}
            </p>
          </div>
        </span>
      </button>
    </li>
  );
}
