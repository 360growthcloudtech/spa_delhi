"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ENQUIRE_URL = "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.";

/**
 * Site-wide theme effects:
 *  - Avataar-style vertical "Enquire" tab pinned to the right edge
 *  - back-to-top button with a scroll-progress ring
 *  - mobile-only bottom action bar (Call / WhatsApp / Prices) so booking is always one tap away
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
        className={`fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 size-12 md:size-14 rounded-full bg-white shadow-xl shadow-black/10 flex items-center justify-center text-ink transition-all duration-500 hover:bg-primary hover:text-white ${progress > 0.04 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
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

      {/* Mobile action bar, plus a spacer so it never covers the end of the page */}
      <div className="h-[72px] md:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick booking"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-amber-100 bg-white/95 px-3 pt-2 shadow-[0_-8px_30px_rgba(43,24,16,0.12)] backdrop-blur md:hidden"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <a href="tel:+918799716197" className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[11px] font-semibold text-amber-900 active:bg-amber-50">
          <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Call
        </a>
        <a
          href={ENQUIRE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-5 flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#15803d] py-2.5 text-[11px] font-bold text-white shadow-lg shadow-green-900/30 active:bg-[#166534]"
        >
          <FaWhatsapp className="size-6" />
          WhatsApp
        </a>
        <a href="/spa-price-in-delhi" className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[11px] font-semibold text-amber-900 active:bg-amber-50">
          <span className="font-title text-base font-bold leading-5 text-primary" aria-hidden="true">₹</span>
          Prices
        </a>
      </nav>
    </>
  );
}
