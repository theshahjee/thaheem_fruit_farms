"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/brand";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const body = useMemo(
    () =>
      [
        "Assalamualaikum Thaheem Fruit Farms,",
        "",
        `• Name: ${name || "(please fill)"}`,
        `• Phone: ${phone || "(please fill)"}`,
        `• City: ${city || "(not specified)"}`,
        "",
        message,
      ].join("\n"),
    [name, phone, city, message]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
      body
    )}`;
    window.open(href, "_blank", "noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2.5rem] border border-bark/10 bg-cream-50 p-8 shadow-soft md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="c-name">Name</label>
          <input
            id="c-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="field-input"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="c-phone">Phone</label>
          <input
            id="c-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03xx xxxxxxx"
            className="field-input"
          />
        </div>
        <div className="md:col-span-2">
          <label className="field-label" htmlFor="c-city">City</label>
          <input
            id="c-city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Karachi"
            className="field-input"
          />
        </div>
        <div className="md:col-span-2">
          <label className="field-label" htmlFor="c-msg">Message</label>
          <textarea
            id="c-msg"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            className="field-input resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7 w-full md:w-auto">
        <MessageCircle size={16} /> Send via WhatsApp
      </button>

      {sent && (
        <p className="mt-4 rounded-2xl bg-farm-50 px-4 py-3 text-sm text-farm-700">
          Opening WhatsApp with your message prepared.
        </p>
      )}
    </form>
  );
}
