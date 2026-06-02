import { brand } from "@/lib/brand";

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
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] ring-4 ring-white/40 transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M19.11 17.49c-.27-.13-1.6-.79-1.84-.88s-.43-.13-.61.14-.7.88-.86 1.06-.32.2-.59.07a7.45 7.45 0 0 1-2.2-1.36 8.21 8.21 0 0 1-1.52-1.89c-.16-.27 0-.41.12-.55s.27-.32.41-.48a1.85 1.85 0 0 0 .27-.46.5.5 0 0 0 0-.48c-.07-.13-.61-1.47-.84-2s-.45-.46-.61-.47h-.52a1 1 0 0 0-.73.34 3.06 3.06 0 0 0-1 2.28 5.32 5.32 0 0 0 1.11 2.82 12.1 12.1 0 0 0 4.65 4.11 16 16 0 0 0 1.55.57 3.73 3.73 0 0 0 1.71.11 2.8 2.8 0 0 0 1.84-1.3 2.28 2.28 0 0 0 .16-1.3c-.07-.11-.25-.18-.52-.31zM16 5.33A10.66 10.66 0 0 0 7 21.6L5.33 26.67l5.23-1.66A10.66 10.66 0 1 0 16 5.33zm0 19.34a8.65 8.65 0 0 1-4.41-1.2l-.31-.19-3.26 1 1-3.21-.21-.33a8.68 8.68 0 1 1 7.19 3.93z" />
      </svg>
    </a>
  );
}
