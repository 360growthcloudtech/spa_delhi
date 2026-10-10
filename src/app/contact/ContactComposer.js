"use client";

import { useMemo, useState } from "react";
import { CheckCheck, Mail, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER_URL = "https://wa.me/918799716197";

const massages = [
  "Not sure yet",
  "Full Body Massage",
  "Deep Tissue Massage",
  "Thai Massage",
  "Swedish Massage",
  "Aromatherapy Massage",
  "Couple Massage",
  "Sandwich Massage",
  "B2B Massage",
];

const places = [
  { id: "outlet", label: "At an outlet" },
  { id: "home", label: "At my home" },
  { id: "hotel", label: "At my hotel" },
];

const inputClass =
  "mt-1.5 w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-ink ring-1 ring-amber-200 placeholder:text-bodycolor/60 focus:outline-none focus:ring-2 focus:ring-primary";

/**
 * Builds a WhatsApp message from a few fields and shows a live preview of it. Sending opens WhatsApp
 * with the message filled in, so nothing is stored on our side and nothing gets lost.
 */
export default function ContactComposer({ email }) {
  const [form, setForm] = useState({ name: "", massage: massages[0], place: "outlet", area: "", when: "", note: "" });
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const message = useMemo(() => {
    const placeLabel = places.find((p) => p.id === form.place)?.label.toLowerCase();
    const lines = [`Hi! ${form.name ? `I'm ${form.name.trim()}. ` : ""}I'd like to book a massage.`];
    lines.push(`Massage: ${form.massage}`);
    lines.push(`Where: ${placeLabel}${form.area ? `, ${form.area.trim()}` : ""}`);
    if (form.when) lines.push(`When: ${form.when.trim()}`);
    if (form.note) lines.push(`Note: ${form.note.trim()}`);
    lines.push("Please share the price and available slots.");
    return lines.join("\n");
  }, [form]);

  const whatsappHref = `${WHATSAPP_NUMBER_URL}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent("Booking enquiry")}&body=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappHref, "_blank", "noopener,noreferrer");
        }}
        className="rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100 md:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-amber-900">
            Your name <span className="font-normal text-bodycolor">(optional)</span>
            <input type="text" value={form.name} onChange={set("name")} placeholder="e.g. Rahul" autoComplete="given-name" className={inputClass} />
          </label>
          <label className="block text-sm font-semibold text-amber-900">
            Which massage?
            <select value={form.massage} onChange={set("massage")} className={inputClass}>
              {massages.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-amber-900">Where would you like it?</legend>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {places.map((p) => (
              <label
                key={p.id}
                className={`cursor-pointer rounded-xl px-3 py-3 text-center text-sm font-semibold ring-1 transition-colors ${
                  form.place === p.id ? "bg-primary text-white ring-primary" : "bg-white text-amber-900 ring-amber-200 hover:ring-amber-400"
                }`}
              >
                <input type="radio" name="place" value={p.id} checked={form.place === p.id} onChange={set("place")} className="sr-only" />
                {p.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-amber-900">
            Your area
            <input type="text" value={form.area} onChange={set("area")} placeholder="e.g. Saket, or hotel name" className={inputClass} />
          </label>
          <label className="block text-sm font-semibold text-amber-900">
            When?
            <input type="text" value={form.when} onChange={set("when")} placeholder="e.g. Today, 7 pm" className={inputClass} />
          </label>
        </div>

        <label className="mt-5 block text-sm font-semibold text-amber-900">
          Anything else? <span className="font-normal text-bodycolor">(optional)</span>
          <textarea
            value={form.note}
            onChange={set("note")}
            rows={3}
            placeholder="e.g. Female therapist please, firm pressure"
            className={`${inputClass} resize-none`}
          />
        </label>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#15803d] px-6 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-white shadow-lg shadow-green-900/20 transition-colors hover:bg-[#166534]"
          >
            <FaWhatsapp className="size-5" /> Send on WhatsApp
          </button>
          <a
            href={mailHref}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-amber-900 ring-1 ring-amber-300 transition-colors hover:bg-white"
          >
            <Mail className="size-4" /> Email instead
          </a>
        </div>
      </form>

      {/* Live preview, styled like a WhatsApp chat */}
      <div className="flex flex-col overflow-hidden rounded-3xl bg-[#efe7dd] shadow-[0_20px_50px_rgba(43,24,16,0.12)] ring-1 ring-amber-100">
        <div className="flex items-center gap-3 bg-[#075e54] px-5 py-4 text-white">
          <span className="flex size-10 items-center justify-center rounded-full bg-white/15">
            <FaWhatsapp className="size-5" />
          </span>
          <span>
            <span className="block font-semibold">Luxury Russian Spa</span>
            <span className="text-xs text-white/75">Usually replies within minutes</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-3 p-5" aria-live="polite">
          <p className="self-start rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-ink shadow-sm">
            Hello! 👋 Tell us what you&apos;d like and we&apos;ll get you booked.
          </p>
          <p className="max-w-[90%] self-end whitespace-pre-line rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-4 py-2.5 text-sm text-ink shadow-sm">
            {message}
            <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-bodycolor">
              Preview <CheckCheck className="size-3.5 text-sky-500" />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3 border-t border-black/5 bg-white/60 px-4 py-3 text-xs text-bodycolor">
          <Send className="size-4 text-[#075e54]" /> This is exactly what we&apos;ll receive when you tap send.
        </div>
      </div>
    </div>
  );
}
