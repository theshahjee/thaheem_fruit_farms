import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { varieties } from "@/lib/varieties";
import VarietyCard from "./VarietyCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function VarietiesPreview() {
  return (
    <section className="section" id="varieties">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Mangoes"
          title="A select collection of export-grade varieties"
          description="Five exceptional cultivars — each grown, hand-selected and packed to export standards. We focus only on the varieties our family knows best."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {varieties.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.08}>
              <VarietyCard variety={v} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/varieties" className="btn-ghost">
            View All Varieties <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
