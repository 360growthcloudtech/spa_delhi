"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { CalendarCheck, Phone, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import { WHATSAPP_URL as WHATSAPP, PHONE_LINK, PHONE_LABEL } from "./siteContact";

const slides = [
  { image: "/images/hb1.webp", alt: "Relaxing full body massage at Luxury Russian Spa in Delhi" },
  { image: "/images/hb2.webp", alt: "Private 5-star hotel spa suite in Delhi NCR" },
  { image: "/images/hb3.webp", alt: "Certified therapist giving a body massage at a spa in Delhi" },
];

export default function HomeBanner() {
  const [active, setActive] = useState(0);

  return (
    <section
        aria-labelledby="home-hero-title"
        className="relative w-full overflow-hidden bg-dark min-h-[640px] md:min-h-[700px] lg:h-screen lg:min-h-[720px] lg:max-h-[900px]"
      >
        {/* Background image slider (decorative fade) */}
        <Swiper
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade]}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          className="!absolute inset-0 w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.image}>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className={`object-cover ${active === i ? "animate-zoom-slow" : ""}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Even dark wash so centered text stays readable on any slide */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/55" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/60" aria-hidden="true" />

        <div className="relative z-[2] min-h-[inherit] lg:h-full max-w-5xl mx-auto px-5 md:px-10 pt-16 pb-24 flex flex-col items-center justify-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-white/10 backdrop-blur-sm px-5 py-2 mb-6 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white animate-fade-in-up">
            <Sparkles className="size-3.5 text-secondary" /> Delhi&apos;s Trusted Luxury Spa <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="home-hero-title"
            className="font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-[84px] lg:leading-[1.05] bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] animate-fade-in-up [animation-delay:120ms]"
          >
            Luxury Russian Spa
            <span className="block">in Delhi NCR</span>
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl lg:text-[28px] text-white animate-fade-in-up [animation-delay:200ms]">
            Full Body Massage <span className="text-secondary" aria-hidden="true">·</span> Couple Spa <span className="text-secondary" aria-hidden="true">·</span> Home &amp; Hotel Sessions
          </p>

          <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/85 animate-fade-in-up [animation-delay:280ms]">
            Long day? Let our certified Indian and Russian therapists take the stress away. Choose from
            Swedish, deep tissue, Thai and aromatherapy massage in private, spotless rooms at 24+ outlets
            across Delhi, Noida and Gurgaon. Sessions start at just ₹1999.
          </p>

          <div className="mt-9 flex w-full flex-col sm:w-auto sm:flex-row gap-4 animate-fade-in-up [animation-delay:360ms]">
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
        <p className="absolute bottom-6 left-1/2 z-[2] w-max max-w-[calc(100%-32px)] -translate-x-1/2 rounded-full bg-black/45 backdrop-blur-sm px-5 py-2 text-center text-[11px] sm:text-[13px] font-medium text-white/85">
          Luxury Russian Spa — Where Calm Meets Comfort, 24/7
        </p>
    </section>
  );
}
