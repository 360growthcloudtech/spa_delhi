"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ShieldCheck, Hotel, Clock, Sparkles, UserCheck, Home } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const WHATSAPP = "https://api.whatsapp.com/send?phone=919217255113";

const slides = [
  {
    title: "Welcome to Luxury Russian Spa — 5 Star Hotel Spa In Delhi",
    image: "/images/hb1.webp",
  },
  {
    title: "Explore Luxury Russian Spa With 12+ Spa Outlets in Delhi NCR",
    image: "/images/hb2.webp",
  },
  {
    title: "Book Massage at the Best Massage Centre in Delhi",
    image: "/images/hb3.webp",
  },
];

const stats = [
  { value: "24+", label: "Spa Outlets" },
  { value: "24/7", label: "Booking Support" },
  { value: "₹1999", label: "Sessions From" },
];

const badges = [
  { icon: UserCheck, line1: "Certified", line2: "Therapists" },
  { icon: Hotel, line1: "5-Star Hotel", line2: "Outlets" },
  { icon: ShieldCheck, line1: "100% Private", line2: "& Hygienic" },
  { icon: Home, line1: "Home & Hotel", line2: "Sessions" },
  { icon: Clock, line1: "Open", line2: "24/7" },
  { icon: Sparkles, line1: "Premium", line2: "Oils" },
];

function Mandala({ className = "" }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="100" cy="100" r="96" strokeWidth="1" />
      <circle cx="100" cy="100" r="88" strokeWidth="0.6" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="30" strokeWidth="1" />
      <circle cx="100" cy="100" r="12" strokeWidth="1" />
      {petals.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <path d="M100 30c10 14 10 30 0 44-10-14-10-30 0-44z" strokeWidth="1" />
          <path d="M100 8c6 8 6 16 0 22-6-6-6-14 0-22z" strokeWidth="0.8" />
          <circle cx="100" cy="80" r="2" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

export default function HomeBanner() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black h-[640px] md:h-[720px] lg:h-screen lg:min-h-[720px] lg:max-h-[940px]">
        {/* Background slider */}
        <Swiper
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          pagination={{ el: ".hero-dots", clickable: true }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          className="!absolute inset-0 w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className={`object-cover ${active === i ? "animate-zoom-slow" : ""}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left-to-right dark gradient (Avataar hero) */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/55 to-black/0" aria-hidden="true" />

        {/* Gold mandala ornaments (Avataar festive corners) */}
        <Mandala className="pointer-events-none absolute -bottom-24 -left-24 z-[1] size-72 md:size-96 text-[#c9a27a] opacity-60 animate-[spin_80s_linear_infinite]" />
        <Mandala className="pointer-events-none absolute -top-28 -right-28 z-[1] hidden lg:block size-80 text-[#c9a27a] opacity-30 animate-[spin_120s_linear_infinite_reverse]" />

        <div className="relative z-[2] h-full max-w-7xl mx-auto px-5 md:px-16 pt-[72px] lg:pt-[92px] flex flex-col justify-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/70 bg-black/15 px-5 py-1.5 mb-5 font-display italic font-semibold text-lg text-sand animate-fade-in-up">
              <Sparkles className="size-4" /> Relax. Restore. Rejuvenate.
            </span>

            <p className="font-title text-white font-bold text-4xl leading-[1.15] sm:text-5xl lg:text-[62px] lg:leading-[72px] animate-fade-in-up [animation-delay:120ms]" aria-hidden="true">
              Luxury Russian Spa
              <span className="block italic text-secondary">In Delhi NCR</span>
            </p>

            {/* Headline synced with the background slide (all titles stay in the HTML for SEO) */}
            <div className="relative grid mt-4">
              {slides.map((slide, i) => (
                <h2
                  key={i}
                  className={`[grid-area:1/1] font-sans text-white/95 text-base md:text-lg font-medium leading-relaxed transition-all duration-500 ${
                    active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  {slide.title}
                </h2>
              ))}
            </div>
            <p className="text-white/75 text-sm md:text-base mt-1 mb-8">
              Certified therapists · Private rooms · In-spa, hotel &amp; home sessions
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up [animation-delay:240ms]">
              <a href={WHATSAPP} className="site-button light sm:w-[230px]">
                Book Your Session <FiArrowRight />
              </a>
              <a href="/massage-service-in-delhi" className="site-button outline sm:w-[230px]">
                Explore Services
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-8 hidden sm:flex items-center gap-5 text-white animate-fade-in-up [animation-delay:360ms]">
              <div className="flex items-center gap-3">
                <Hotel className="size-8 text-secondary" strokeWidth={1.4} />
                <span className="text-sm leading-tight">
                  <span className="block text-lg font-semibold">24+ Outlets</span>
                  in 5-star hotels
                </span>
              </div>
              <span className="h-10 w-px bg-white/40" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <UserCheck className="size-8 text-secondary" strokeWidth={1.4} />
                <span className="text-sm leading-tight">
                  <span className="block text-lg font-semibold">Certified</span>
                  Indian &amp; international therapists
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows + dots */}
        <button type="button" aria-label="Previous slide" className="hero-prev absolute left-4 top-1/2 z-[3] -translate-y-1/2 hidden md:flex size-10 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-white hover:text-black cursor-pointer">
          <FiChevronLeft size={20} />
        </button>
        <button type="button" aria-label="Next slide" className="hero-next absolute right-4 top-1/2 z-[3] -translate-y-1/2 hidden md:flex size-10 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-white hover:text-black cursor-pointer">
          <FiChevronRight size={20} />
        </button>
        <div className="hero-dots absolute !bottom-6 !left-0 !top-auto z-[3] flex w-full justify-center gap-1 [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:!opacity-50 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet]:transition-all" />
      </section>

      {/* Stats bar + trust badges (Avataar) */}
      <section className="bg-white" aria-label="Why guests choose us">
        <div className="bg-cream border-y border-black/5">
          <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-black/10">
            {stats.map((s) => (
              <div key={s.label} className="py-4 md:py-5 text-center">
                <span className="block font-semibold text-primary text-base md:text-xl leading-tight">{s.value}</span>
                <span className="block text-[11px] md:text-[13px] text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden py-5">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...badges, ...badges, ...badges, ...badges].map(({ icon: Icon, line1, line2 }, i) => (
              <div
                key={i}
                className="mx-2 flex min-w-[140px] items-center gap-3 rounded-2xl bg-cream px-4 py-2.5"
                aria-hidden={i >= badges.length ? "true" : undefined}
              >
                <Icon className="size-6 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-[12px] leading-tight text-ink">
                  {line1}
                  <br />
                  {line2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
