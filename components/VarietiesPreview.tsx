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
          index="02"
          eyebrow="The Varietals"
          title="Five cultivars. One uncompromising standard."
          description="We grow only the varieties our family has spent decades learning — and box only the fruit our family would eat themselves."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {varieties.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.06}>
              <VarietyCard variety={v} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/varieties" className="btn-ghost">
            See the full varietal index <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
