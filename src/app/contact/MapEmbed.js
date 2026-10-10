"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Click-to-load Google Map. The embed pulls in ~600 KB of Google scripts even with loading="lazy",
 * so we show a light placeholder first and only load the real map when the visitor asks for it.
 */
export default function MapEmbed({ query, title, label }) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        title={title}
        src={`https://maps.google.com/maps?q=${query}&t=m&z=15&output=embed`}
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShow(true)}
      className="group absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden bg-[#f3ece4] p-6 text-center"
    >
      {/* Simple street-grid pattern so the placeholder reads as a map */}
      <span
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#e4d8ca 2px, transparent 2px), linear-gradient(90deg, #e4d8ca 2px, transparent 2px), linear-gradient(35deg, transparent 48%, #d8c6b2 48%, #d8c6b2 52%, transparent 52%)",
          backgroundSize: "56px 56px, 56px 56px, 100% 100%",
        }}
        aria-hidden="true"
      />
      <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-transform group-hover:-translate-y-1">
        <MapPin className="size-8" />
      </span>
      <span className="relative max-w-xs text-sm font-semibold text-amber-900">{label}</span>
      <span className="relative rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow ring-1 ring-amber-200 transition-colors group-hover:bg-primary group-hover:text-white">
        Show Map
      </span>
    </button>
  );
}
