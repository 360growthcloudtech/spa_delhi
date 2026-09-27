"use client";

import { useEffect, useState } from "react";

const ENQUIRE_URL = "https://api.whatsapp.com/send?phone=919217255113";

/**
 * Site-wide theme effects:
 *  - Avataar-style vertical "Enquire" tab pinned to the right edge
 *  - back-to-top button with a scroll-progress ring
 */
export default function ThemeEffects() {
  const [progress, setProgress] = useState(0);

  // Scroll progress for the back-to-top button
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 22;
  const c = 2 * Math.PI * r;

  return (
    <>
      {/* Vertical Enquire tab (Avataar) */}
      <a
        href={ENQUIRE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-0 top-1/2 z-40 hidden md:block -translate-y-1/2 rounded-l-lg bg-black px-2.5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition-colors duration-300 hover:bg-primary [writing-mode:vertical-rl] rotate-180"
      >
        Enquire
      </a>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 size-14 rounded-full bg-white shadow-xl shadow-black/10 flex items-center justify-center text-ink transition-all duration-500 hover:bg-primary hover:text-white ${
          progress > 0.04 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r={r} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="3" />
          <circle
            cx="28"
            cy="28"
            r={r}
            fill="none"
            stroke="#9c5232"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - progress)}
          />
        </svg>
        <svg className="relative size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
