"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ENQUIRE_URL = "https://api.whatsapp.com/send?phone=919217255113";

/**
 * Site-wide theme effects:
 *  - gentle scroll reveal for section headings and grid cards
 *  - Avataar-style vertical "Enquire" tab pinned to the right edge
 *  - back-to-top button with a scroll-progress ring
 *
 * Everything is progressive: content is only hidden after JS tags it, and
 * only when it is still below the fold, so nothing flashes and crawlers
 * always see the full page.
 */
export default function ThemeEffects() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  // Scroll reveal
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const tag = (el, delay = 0) => {
      if (el.dataset.trvReveal) return;
      el.dataset.trvReveal = "1";
      // Framer Motion already animates these; leave them alone.
      if (el.style && el.style.opacity !== "") return;
      // Only hide things that are still below the fold.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.classList.add("trv-reveal");
      if (delay) el.style.transitionDelay = `${delay}ms`;
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll("main section, main > div > section").forEach((section, i) => {
        if (i === 0) return; // hero
        section.querySelectorAll(":scope h2").forEach((h) => tag(h));
        section.querySelectorAll(".grid").forEach((grid) => {
          Array.from(grid.children)
            .slice(0, 12)
            .forEach((child, idx) => tag(child, (idx % 4) * 80));
        });
      });
    };

    scan();
    let t;
    const mo = new MutationObserver(() => {
      clearTimeout(t);
      t = setTimeout(scan, 120);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

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
