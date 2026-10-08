"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../components/siteContact";

/**
 * "How are you feeling today?" picker. Every option and its suggestion is in the server HTML
 * (only one is visible at a time), so search engines still read all of it.
 */
const moods = [
  {
    id: "sore",
    label: "Sore back & neck",
    emoji: "😣",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "Firm, slow pressure on the knots that build up after long hours at a desk or behind the wheel.",
    points: ["Works on shoulders, neck and lower back", "Tell us how firm you want it", "You'll feel looser the same evening"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "stressed",
    label: "Stressed & tired",
    emoji: "😮‍💨",
    pick: "Full Body Massage",
    time: "60–90 min",
    why: "Warm oil, long strokes, head to toe. The one most guests book when they just need to switch off.",
    points: ["Our most booked massage in Lajpat Nagar", "Soft music, dim lights, no rush", "Good for better sleep that night"],
    href: "/full-body-massage-in-delhi",
  },
  {
    id: "couple",
    label: "Coming as a couple",
    emoji: "💑",
    pick: "Couple Massage",
    time: "60–120 min",
    why: "Two tables in one private room, two therapists, same time. Nice for an anniversary or a lazy Sunday.",
    points: ["Private room for just the two of you", "Choose the same or different massages", "Add a longer session if you like"],
    href: "/couple-massage",
  },
  {
    id: "shopping",
    label: "Legs tired from shopping",
    emoji: "🛍️",
    pick: "Thai Massage",
    time: "60 min",
    why: "Stretching and pressure points on a mat, no oil. Perfect after a long walk round Central Market.",
    points: ["No oil, so no need to shower after", "Great for tight hips and legs", "Done in an hour"],
    href: "/thai-massage-in-lajpat-nagar",
  },
  {
    id: "treat",
    label: "Want a real treat",
    emoji: "✨",
    pick: "B2B or Sandwich Massage",
    time: "60–90 min",
    why: "Our premium body spa options in a fully private room. Ask us on WhatsApp and we'll explain each one.",
    points: ["Fully private room", "Choose your therapist", "Price confirmed before you come"],
    href: "/b2b-massage-in-delhi",
  },
];

export default function MassagePicker() {
  const [active, setActive] = useState(moods[1].id);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
      <div role="tablist" aria-label="How are you feeling today?" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {moods.map((m) => {
          const selected = m.id === active;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              id={`mood-tab-${m.id}`}
              aria-selected={selected}
              aria-controls={`mood-panel-${m.id}`}
              onClick={() => setActive(m.id)}
              className={`flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                selected
                  ? "bg-primary text-white shadow-[0_15px_35px_rgba(156,82,50,0.35)]"
                  : "bg-white text-amber-900 ring-1 ring-amber-100 hover:-translate-y-0.5 hover:ring-amber-300"
              }`}
            >
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-2xl ${selected ? "bg-white/15" : "bg-amber-50"}`}
                aria-hidden="true"
              >
                {m.emoji}
              </span>
              <span className="font-semibold">{m.label}</span>
              <ArrowRight className={`ml-auto size-4 shrink-0 transition-transform ${selected ? "translate-x-1" : "opacity-40"}`} />
            </button>
          );
        })}
      </div>

      {moods.map((m) => (
        <div
          key={m.id}
          id={`mood-panel-${m.id}`}
          role="tabpanel"
          aria-labelledby={`mood-tab-${m.id}`}
          hidden={m.id !== active}
          className="rounded-3xl bg-dark p-7 md:p-10 text-white shadow-[0_25px_60px_rgba(43,24,16,0.3)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">We&apos;d suggest</p>
          <h3 className="mt-3 font-title text-3xl md:text-4xl font-bold">{m.pick}</h3>
          <p className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{m.time}</p>
          <p className="mt-5 leading-relaxed text-white/85">{m.why}</p>
          <ul className="mt-6 space-y-3">
            {m.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-white/90">
                <Check className="mt-0.5 size-4 shrink-0 text-secondary" strokeWidth={3} /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-white"
            >
              <FaWhatsapp className="size-4" /> Book This Massage
            </a>
            <a
              href={m.href}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              About {m.pick} <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
