"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../components/siteContact";

const filters = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms & Ambience" },
  { id: "massage", label: "Massage Sessions" },
  { id: "couples", label: "Couples" },
  { id: "therapies", label: "Therapies & Details" },
  { id: "outlets", label: "Our Outlets" },
];

/**
 * Filterable masonry grid with a lightbox. Every photo is in the server HTML (filters only hide
 * the others), so search engines can still see all images and their alt text.
 */
export default function GalleryGrid({ photos }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null); // index into `visible`
  const touchX = useRef(null);

  const visible = filter === "all" ? photos : photos.filter((p) => p.category === filter);
  const counts = Object.fromEntries(filters.map((f) => [f.id, f.id === "all" ? photos.length : photos.filter((p) => p.category === f.id).length]));

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + visible.length) % visible.length)), [visible.length]);

  // Keyboard controls and body scroll lock while the lightbox is open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : visible[open];

  return (
    <>
      {/* Filters */}
      <div role="tablist" aria-label="Filter photos" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {filters.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-white text-amber-900 ring-1 ring-amber-200 hover:ring-amber-400"
              }`}
            >
              {f.label}
              <span className={`rounded-full px-2 py-0.5 text-[11px] ${active ? "bg-white text-primary" : "bg-amber-50 text-amber-700"}`}>{counts[f.id]}</span>
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <ul className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {photos.map((p) => {
          const index = visible.indexOf(p);
          const shown = index !== -1;
          return (
            <li key={p.id} hidden={!shown} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setOpen(index)}
                aria-label={`Open photo: ${p.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl bg-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.08)] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/gallery/${p.id}-sm.webp`}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-left sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <span className="text-xs sm:text-sm font-semibold text-white drop-shadow">{p.caption}</span>
                  <span className="hidden size-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-primary sm:flex">
                    <Expand className="size-4" />
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white" style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}>
            <span className="text-sm text-white/70">
              {open + 1} / {visible.length}
            </span>
            <button type="button" onClick={close} aria-label="Close" className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
              <X className="size-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-2 sm:px-16" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.id}
              src={`/images/gallery/${current.id}-lg.webp`}
              alt={current.alt}
              className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl animate-fade-in"
            />
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 sm:flex"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 sm:flex"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <div
            className="flex flex-col items-center gap-3 px-4 pt-4 text-center"
            style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-title text-lg text-white">{current.caption}</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white sm:hidden">
                <ChevronLeft className="size-5" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#166534]"
              >
                <FaWhatsapp className="size-4" /> Book This Experience
              </a>
              {current.href && (
                <a href={current.href} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
                  Visit Outlet <ArrowRight className="size-4" />
                </a>
              )}
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white sm:hidden">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
