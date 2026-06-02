"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle, Phone, Plus, Trash2 } from "lucide-react";
import { varieties } from "@/lib/varieties";
import { brand } from "@/lib/brand";

const boxOptions = [
  { value: "8kg", label: "8 kg Premium Box" },
  { value: "10kg", label: "10 kg Premium Box" },
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

type OrderItem = {
  id: number;
  variety: string;
  box: string;
  qty: number;
};

let nextId = 1;
const makeItem = (variety: string): OrderItem => ({
  id: nextId++,
  variety,
  box: boxOptions[0].value,
  qty: 1,
});

export default function PreBookingForm() {
  const params = useSearchParams();
  const initialVariety = params.get("variety") ?? varieties[0].slug;

  const [items, setItems] = useState<OrderItem[]>([makeItem(initialVariety)]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(cities[0]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalBoxes = items.reduce((sum, it) => sum + it.qty, 0);

  const updateItem = (id: number, patch: Partial<OrderItem>) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, ...patch } : it))
    );
  const removeItem = (id: number) =>
    setItems((prev) => (prev.length === 1 ? prev : prev.filter((it) => it.id !== id)));
  const addItem = () => setItems((prev) => [...prev, makeItem(varieties[0].slug)]);

  const message = useMemo(() => {
    const lines = items.map((it, i) => {
      const v = varieties.find((x) => x.slug === it.variety)?.name ?? it.variety;
      return `${i + 1}. ${v} — ${it.box} × ${it.qty}`;
    });
    return [
      `Assalamualaikum Thaheem Fruit Farms,`,
      `I'd like to pre-book the following:`,
      ``,
      ...lines,
      ``,
      `• Total boxes: ${totalBoxes}`,
      `• Name: ${name || "(please fill)"}`,
      `• Phone: ${phone || "(please fill)"}`,
      `• City: ${city}`,
      notes ? `• Notes: ${notes}` : "",
      ``,
      `Please confirm availability and total. Shukriya!`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [items, totalBoxes, name, phone, city, notes]);

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
      className="grid gap-8 rounded-[2rem] border border-ink/10 bg-cream-50 p-5 shadow-soft sm:p-8 md:p-12 lg:grid-cols-5 lg:gap-12"
    >
      <div className="lg:col-span-3">
        <div className="flex items-baseline justify-between gap-3">
          <label className="field-label !mb-0">Your order</label>
          <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/50">
            {totalBoxes} box{totalBoxes === 1 ? "" : "es"}
          </span>
        </div>

        <div className="mt-4 space-y-4">
          {items.map((it, idx) => {
            const v = varieties.find((x) => x.slug === it.variety);
            return (
              <div
                key={it.id}
                className="rounded-2xl border border-ink/15 bg-paper-50 p-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-stamp text-[10px] uppercase tracking-stamp text-ink/55">
                    № {String(idx + 1).padStart(2, "0")}
                  </span>
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(it.id)}
                      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-ink/15 px-3 font-stamp text-[10px] uppercase tracking-stamp text-ink/60 transition hover:border-ink/35 hover:text-ink"
                      aria-label={`Remove item ${idx + 1}`}
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  )}
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor={`variety-${it.id}`}
                      className="field-label !mb-1.5"
                    >
                      Variety
                    </label>
                    <select
                      id={`variety-${it.id}`}
                      value={it.variety}
                      onChange={(e) =>
                        updateItem(it.id, { variety: e.target.value })
                      }
                      className="field-input !py-3"
                    >
                      {varieties.map((vv) => (
                        <option key={vv.slug} value={vv.slug}>
                          {vv.shortName}
                        </option>
                      ))}
                    </select>
                    {v && (
                      <p className="mt-1.5 font-stamp text-[9.5px] uppercase tracking-stamp text-ink/45">
                        Harvest · {v.season}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`box-${it.id}`}
                      className="field-label !mb-1.5"
                    >
                      Box size
                    </label>
                    <select
                      id={`box-${it.id}`}
                      value={it.box}
                      onChange={(e) =>
                        updateItem(it.id, { box: e.target.value })
                      }
                      className="field-input !py-3"
                    >
                      {boxOptions.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <label className="field-label !mb-0">Quantity</label>
                  <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-50 p-1">
                    <button
                      type="button"
                      onClick={() =>
                        updateItem(it.id, { qty: Math.max(1, it.qty - 1) })
                      }
                      className="h-9 w-9 rounded-full bg-paper-100 text-lg font-semibold text-ink transition hover:bg-paper-200"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span
                      className="min-w-[2rem] text-center font-display text-lg text-ink"
                      aria-live="polite"
                    >
                      {it.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateItem(it.id, { qty: Math.min(99, it.qty + 1) })
                      }
                      className="h-9 w-9 rounded-full bg-mango-500 text-lg font-semibold text-ink transition hover:bg-mango-400"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={addItem}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/25 bg-transparent py-3.5 font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink/70 transition hover:border-ink/50 hover:bg-paper-100 hover:text-ink"
        >
          <Plus size={14} /> Add another variety
        </button>
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
        <a href={`tel:${brand.phone}`} className="btn-ghost mt-3 w-full">
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
