"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "./siteContact";

/**
 * "How are you feeling today?" picker used on the location pages. Each page passes its own `moods`
 * ({ id, label, emoji, pick, time, why, points, href }). Every option and its suggestion is in the
 * server HTML (only one is visible at a time), so search engines still read all of it.
 */

export default function MassagePicker({ moods, defaultId = moods[0].id }) {
  const [active, setActive] = useState(defaultId);

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
            {m.href && (
              <a
                href={m.href}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
              >
                About {m.pick} <ArrowRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
