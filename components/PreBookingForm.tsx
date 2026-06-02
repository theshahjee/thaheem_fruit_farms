"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, MessageCircle, Phone } from "lucide-react";
import { varieties } from "@/lib/varieties";
import { brand } from "@/lib/brand";

const boxOptions = [
  { value: "8kg", label: "8 kg Premium Box", caption: "Ideal for small families" },
  { value: "10kg", label: "10 kg Premium Box", caption: "Best value box" },
];

const cities = [
  "Karachi",
  "Lahore",
  "Islamabad / Rawalpindi",
  "Multan",
  "Faisalabad",
  "Peshawar",
  "Hyderabad",
  "Gujranwala",
  "Sialkot",
  "Other",
];

export default function PreBookingForm() {
  const params = useSearchParams();
  const initialVariety = params.get("variety") ?? varieties[0].slug;

  const [variety, setVariety] = useState(initialVariety);
  const [box, setBox] = useState(boxOptions[0].value);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(cities[0]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(() => {
    const v = varieties.find((x) => x.slug === variety)?.name ?? variety;
    return [
      `Assalamualaikum Thaheem Fruit Farms,`,
      `I'd like to pre-book the following:`,
      ``,
      `• Variety: ${v}`,
      `• Box size: ${box}`,
      `• Quantity: ${quantity}`,
      `• Name: ${name || "(please fill)"}`,
      `• Phone: ${phone || "(please fill)"}`,
      `• City: ${city}`,
      notes ? `• Notes: ${notes}` : "",
      ``,
      `Please confirm availability and total. Shukriya!`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [variety, box, quantity, name, phone, city, notes]);

  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappHref, "_blank", "noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-10 rounded-[2.5rem] border border-bark/10 bg-cream-50 p-8 shadow-soft md:p-12 lg:grid-cols-5"
    >
      <div className="lg:col-span-3">
        <div>
          <label className="field-label">Select variety</label>
          <div className="grid gap-3 sm:grid-cols-2">
            {varieties.map((v) => (
              <label
                key={v.slug}
                className={`group relative cursor-pointer rounded-2xl border p-4 transition ${
                  variety === v.slug
                    ? "border-mango-500 bg-mango-50 ring-2 ring-mango-500/30"
                    : "border-bark/15 hover:border-bark/30"
                }`}
              >
                <input
                  type="radio"
                  name="variety"
                  value={v.slug}
                  checked={variety === v.slug}
                  onChange={(e) => setVariety(e.target.value)}
                  className="sr-only"
                />
                <span className="block text-sm font-semibold text-bark">
                  {v.shortName}
                </span>
                <span className="mt-0.5 block text-xs text-bark/60">
                  {v.season}
                </span>
                {variety === v.slug && (
                  <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-mango-500 text-cream-50">
                    <Check size={14} />
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <label className="field-label">Box size</label>
          <div className="grid gap-3 sm:grid-cols-2">
            {boxOptions.map((b) => (
              <label
                key={b.value}
                className={`relative cursor-pointer rounded-2xl border p-4 transition ${
                  box === b.value
                    ? "border-farm-500 bg-farm-50 ring-2 ring-farm-500/30"
                    : "border-bark/15 hover:border-bark/30"
                }`}
              >
                <input
                  type="radio"
                  name="box"
                  value={b.value}
                  checked={box === b.value}
                  onChange={(e) => setBox(e.target.value)}
                  className="sr-only"
                />
                <span className="block text-sm font-semibold text-bark">
                  {b.label}
                </span>
                <span className="mt-0.5 block text-xs text-bark/60">
                  {b.caption}
                </span>
                {box === b.value && (
                  <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-farm-500 text-cream-50">
                    <Check size={14} />
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <label className="field-label" htmlFor="qty">
            Quantity ({box} boxes)
          </label>
          <div className="inline-flex items-center gap-3 rounded-full border border-bark/15 bg-cream-50 p-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-10 w-10 rounded-full bg-cream-100 text-lg font-semibold text-bark"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span
              id="qty"
              className="min-w-[2.5rem] text-center font-display text-xl text-bark"
            >
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              className="h-10 w-10 rounded-full bg-mango-500 text-lg font-semibold text-bark"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div>
          <label className="field-label" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="field-input"
          />
        </div>
        <div className="mt-5">
          <label className="field-label" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03xx xxxxxxx"
            className="field-input"
          />
        </div>
        <div className="mt-5">
          <label className="field-label" htmlFor="city">
            Delivery city
          </label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="field-input"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          <label className="field-label" htmlFor="notes">
            Special instructions (optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Delivery address, preferred ripeness, gift note..."
            className="field-input resize-none"
          />
        </div>

        <button type="submit" className="btn-primary mt-7 w-full">
          <MessageCircle size={16} /> Send via WhatsApp
        </button>
        <a
          href={`tel:${brand.phone}`}
          className="btn-ghost mt-3 w-full"
        >
          <Phone size={16} /> Call {brand.phone}
        </a>

        {submitted && (
          <p className="mt-4 rounded-2xl bg-farm-50 px-4 py-3 text-sm text-farm-700">
            Opening WhatsApp with your pre-booking details prepared. We will
            confirm shortly.
          </p>
        )}
      </div>
    </form>
  );
}
