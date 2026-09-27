"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTelegram, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Welcome to The Spa Delhi — 5 Star Hotel Spa In Delhi",
    image: "/images/hb1.webp",
  },
  {
    title: "Explore Spa Delhi With 12+ Spa Outlets in Delhi NCR",
    image: "/images/hb2.webp",
  },
  {
    title: "Book Massage at the Best Massage Centre in Delhi",
    image: "/images/hb3.webp",
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/delhi.luxury_spa/", icon: FaInstagram },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=919217255113", icon: FaWhatsapp },
  { label: "Telegram", href: "https://t.me/+a5Bu6FBPN9FlOWM9", icon: FaTelegram },
];

// Drifting leaves (spa take on Travlla's floating hero elements)
const leaves = [
  { left: "12%", delay: "0s", duration: "16s", size: 22 },
  { left: "38%", delay: "4s", duration: "19s", size: 16 },
  { left: "63%", delay: "8s", duration: "15s", size: 20 },
  { left: "86%", delay: "2s", duration: "21s", size: 14 },
];

function Leaf({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 3C9 3 4 9 4 16c0 1.7.4 3.2 1 4.5C6 15 9.5 11 15 9c-4.4 2.6-7.4 6.2-8.8 11.6C7.4 21.5 8.9 22 10.5 22 17 22 21 16 20 3z"
        fill="#85d200"
        fillOpacity="0.85"
      />
    </svg>
  );
}

export default function HomeBanner() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-dark h-[620px] sm:h-[680px] lg:h-[760px]">
      {/* Background slider with slow Ken Burns zoom */}
      <Swiper
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
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
                className="object-cover animate-zoom-in-zoom-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Falling leaves */}
      <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden max-sm:hidden" aria-hidden="true">
        {leaves.map((leaf, i) => (
          <span
            key={i}
            className="absolute -top-10 animate-leaf-fall"
            style={{ left: leaf.left, animationDelay: leaf.delay, animationDuration: leaf.duration }}
          >
            <Leaf size={leaf.size} />
          </span>
        ))}
      </div>

      {/* Inset rounded glass panel (Travlla banner style one) */}
      <div className="relative z-[2] h-full lg:m-8 lg:h-[calc(100%-4rem)] lg:rounded-3xl bg-gradient-to-r from-black/70 via-black/45 to-black/10 overflow-hidden">
        {/* Rotating orbit rings */}
        <div className="absolute inset-0 z-[3] overflow-hidden max-lg:hidden" aria-hidden="true">
          <div className="absolute top-1/2 -translate-y-1/2 -right-[360px] size-[700px]">
            <span className="block size-full rounded-full border border-white/30 animate-rotate-center relative after:content-[''] after:absolute after:size-3.5 after:rounded-full after:bg-white after:right-9 after:top-1/4" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-[480px] size-[900px]">
            <span className="block size-full rounded-full border border-white/25 animate-rotate-slow relative after:content-[''] after:absolute after:size-3.5 after:rounded-full after:bg-secondary after:right-20 after:bottom-1/5" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-[620px] size-[1100px]">
            <span className="block size-full rounded-full border border-white/20 animate-rotate-center relative after:content-[''] after:absolute after:size-3.5 after:rounded-full after:bg-citrusyellow after:left-1 after:top-2/5" style={{ animationDuration: "40s" }} />
          </div>
        </div>

        <div className="relative z-[4] h-full max-w-7xl mx-auto px-5 md:px-12 flex flex-col justify-center">
          <span className="font-display text-aquamist text-3xl md:text-5xl lg:pl-10 block">Relax &amp; Rejuvenate</span>

          <div className="relative my-2 lg:animate-slide-left" aria-hidden="true">
            <p className="font-display text-stroke-white text-6xl sm:text-8xl lg:text-[128px] leading-[1.15] absolute left-2 top-2 lg:left-3 lg:top-3 opacity-50">
              Spa Delhi
            </p>
            <p className="font-display text-white text-6xl sm:text-8xl lg:text-[128px] leading-[1.15] relative">
              Spa Delhi
            </p>
          </div>

          {/* Headline synced with the background slide (all titles stay in the HTML for SEO) */}
          <div className="relative grid max-w-2xl mt-4">
            {slides.map((slide, i) => (
              <h2
                key={i}
                className={`[grid-area:1/1] text-white text-2xl md:text-3xl font-semibold leading-tight transition-all duration-700 ${
                  active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                {slide.title}
              </h2>
            ))}
          </div>

          <p className="text-white/80 text-lg max-w-xl mt-2 mb-8">
            Luxury body massage by certified therapists across 24+ outlets in Delhi NCR — in-spa, hotel &amp; home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/massage-service-in-delhi" className="site-button">
              Explore Services
            </a>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" target="_blank" rel="noopener noreferrer" className="site-button outline">
              <FaTelegram /> Join Updates
            </a>
          </div>
        </div>

        {/* Follow us */}
        <div className="absolute bottom-7 right-5 sm:right-10 z-[4] flex items-center text-white">
          <span className="max-sm:hidden pr-24 text-xs tracking-[0.2em] uppercase relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-white after:right-4 after:top-1/2">
            Follow Us
          </span>
          <ul className="flex gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block text-xl text-white transition duration-500 hover:text-secondary hover:-translate-y-1"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
