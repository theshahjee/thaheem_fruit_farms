import Image from "next/image";
import { brand } from "@/lib/brand";
import { imgPath } from "@/lib/imgPath";

export default function WhatsAppButton() {
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Assalamualaikum! I'd like to know more about Thaheem Fruit Farms mangoes."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      style={{ right: "1.25rem", bottom: "1.25rem" }}
      className="group fixed z-50 block h-14 w-14 overflow-hidden rounded-[26%] shadow-[0_12px_32px_-6px_rgba(37,176,82,0.55)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:h-16 sm:w-16"
    >
      <Image
        src={imgPath("/images/icons/wa-whatsapp.svg")}
        alt=""
        fill
        sizes="64px"
        priority
        className="object-cover"
      />
    </a>
  );
}
