/**
 * Luxury Russian Spa wordmark: lotus badge + script "Luxury" over "Russian Spa".
 * `light` switches to the on-dark colour scheme (scrolled header, drawer, footer).
 */
export function LogoMark({ className = "size-11" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#066168" />
      <circle cx="24" cy="24" r="19.5" fill="none" stroke="#85d200" strokeWidth="1" strokeDasharray="2 3" />
      {/* lotus */}
      <path d="M24 12c-3.2 3.4-4.6 7.6-4.6 11.2 0 3.3 1.8 6 4.6 7.8 2.8-1.8 4.6-4.5 4.6-7.8 0-3.6-1.4-7.8-4.6-11.2z" fill="#85d200" />
      <path d="M13 20c.4 5.6 3.6 10.4 11 11-2.6-3.6-5.2-8.6-11-11zM35 20c-.4 5.6-3.6 10.4-11 11 2.6-3.6 5.2-8.6 11-11z" fill="#ffffff" />
      <path d="M13.5 33.5c3.2 1.9 6.8 2.8 10.5 2.8s7.3-.9 10.5-2.8" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5 select-none">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg ${light ? "text-secondary" : "text-primary"}`}>Luxury</span>
        <span className={`font-title text-[22px] font-bold uppercase tracking-[0.08em] ${light ? "text-white" : "text-dark"}`}>
          Russian Spa
        </span>
      </span>
    </span>
  );
}
