import { preload } from "react-dom";
import { CalendarCheck, Phone, Sparkles } from "lucide-react";
import { WHATSAPP_URL as WHATSAPP, PHONE_LINK, PHONE_LABEL } from "./siteContact";

// Pure-CSS crossfade (no slider JS): the first image sits underneath and is visible on the very
// first paint, so it is the LCP image; the other two fade in on top of it in turn (hero-slide-* in globals.css).
// Slides are pre-resized static files in /images/hero (640/828/1252px) rather than next/image: the on-demand
// optimizer made the LCP image wait seconds whenever its cache was cold, which swung the mobile score red/yellow.
const slides = [
  { name: "hb1", alt: "Relaxing full body massage at Luxury Russian Spa in Delhi" },
  { name: "hb2", alt: "Private 5-star hotel spa suite in Delhi NCR", className: "hero-slide-2" },
  { name: "hb3", alt: "Certified therapist giving a body massage at a spa in Delhi", className: "hero-slide-3" },
];
const heroSrcSet = (name) => [640, 828, 1252].map((w) => `/images/hero/${name}-${w}.webp ${w}w`).join(", ");

export default function HomeBanner() {
  // Puts <link rel="preload"> for the LCP slide in <head> so it starts downloading before the CSS is parsed
  preload(`/images/hero/hb1-828.webp`, {
    as: "image",
    imageSrcSet: heroSrcSet("hb1"),
    imageSizes: "100vw",
    fetchPriority: "high",
  });

  return (
    <section
        aria-labelledby="home-hero-title"
        className="relative w-full overflow-hidden bg-dark min-h-[640px] md:min-h-[700px] lg:h-screen lg:min-h-[720px] lg:max-h-[900px]"
      >
        {slides.map((slide, i) => (
          <div key={slide.name} className={`absolute inset-0 overflow-hidden ${slide.className ?? ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/hero/${slide.name}-828.webp`}
              srcSet={heroSrcSet(slide.name)}
              sizes="100vw"
              alt={slide.alt}
              width={1252}
              height={834}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding={i === 0 ? "sync" : "async"}
              className={`absolute inset-0 h-full w-full object-cover ${i === 0 ? "animate-zoom-slow" : ""}`}
            />
          </div>
        ))}

        {/* Even dark wash so centered text stays readable on any slide */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/55" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/60" aria-hidden="true" />

        <div className="relative z-[2] min-h-[inherit] lg:h-full max-w-5xl mx-auto px-5 md:px-10 pt-16 pb-24 flex flex-col items-center justify-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 mb-6 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Delhi&apos;s Trusted Luxury Spa <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="home-hero-title"
            className="font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-[84px] lg:leading-[1.05] bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Luxury Russian Spa
            <span className="block">in Delhi NCR</span>
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl lg:text-[28px] text-white">
            Full Body Massage <span className="text-secondary" aria-hidden="true">·</span> Couple Spa <span className="text-secondary" aria-hidden="true">·</span> Home &amp; Hotel Sessions
          </p>

          <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/85">
            Long day? Our Indian and Russian therapists will take it from here. As a luxury spa in Delhi NCR
            with 24+ outlets and partner 5-star hotels, there&apos;s usually one close to you. Swedish, deep
            tissue, Thai or aromatherapy, in a private room, from just ₹1999.
          </p>

          <div className="mt-9 flex w-full flex-col sm:w-auto sm:flex-row gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#d97a52] px-9 py-4 text-base font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:bg-primary hover:-translate-y-0.5 sm:min-w-[260px]"
            >
              <CalendarCheck className="size-5" /> Book Appointment
            </a>
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa at ${PHONE_LABEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-ink hover:-translate-y-0.5 sm:min-w-[260px]"
            >
              <Phone className="size-5 text-secondary" /> {PHONE_LABEL}
            </a>
          </div>
        </div>

        {/* Bottom tagline pill */}
        <p className="absolute bottom-6 left-1/2 z-[2] w-max max-w-[calc(100%-32px)] -translate-x-1/2 rounded-full bg-black/55 px-5 py-2 text-center text-[11px] sm:text-[13px] font-medium text-white/85">
          Luxury Russian Spa — Where Calm Meets Comfort, 24/7
        </p>
    </section>
  );
}
