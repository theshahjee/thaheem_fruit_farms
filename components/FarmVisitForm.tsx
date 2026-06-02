"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/brand";

export default function FarmVisitForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [groupSize, setGroupSize] = useState(2);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const message = useMemo(
    () =>
      [
        "Assalamualaikum Thaheem Fruit Farms,",
        "I'd like to plan a farm visit:",
        "",
        `• Name: ${name || "(please fill)"}`,
        `• Phone: ${phone || "(please fill)"}`,
        `• Group size: ${groupSize}`,
        `• Preferred date: ${date || "(flexible)"}`,
        notes ? `• Notes: ${notes}` : "",
        "",
        "Please confirm a suitable time. Shukriya!",
      ]
        .filter(Boolean)
        .join("\n"),
    [name, phone, groupSize, date, notes]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(href, "_blank", "noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2.5rem] border border-bark/10 bg-cream-50 p-8 shadow-soft md:p-12"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="fv-name">Full name</label>
          <input
            id="fv-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="field-input"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="fv-phone">Phone</label>
          <input
            id="fv-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03xx xxxxxxx"
            className="field-input"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="fv-group">Group size</label>
          <input
            id="fv-group"
            type="number"
            min={1}
            max={50}
            value={groupSize}
            onChange={(e) => setGroupSize(Number(e.target.value))}
            className="field-input"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="fv-date">Preferred date</label>
          <input
            id="fv-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="field-input"
          />
        </div>
        <div className="md:col-span-2">
          <label className="field-label" htmlFor="fv-notes">
            Anything we should know? (optional)
          </label>
          <textarea
            id="fv-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Coming from out of city, dietary preferences, special interests..."
            className="field-input resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7 w-full md:w-auto">
        <MessageCircle size={16} /> Request Farm Visit via WhatsApp
      </button>

      {sent && (
        <p className="mt-4 rounded-2xl bg-farm-50 px-4 py-3 text-sm text-farm-700">
          Opening WhatsApp with your visit request. We will confirm a time
          shortly.
        </p>
      )}
    </form>
  );
}
