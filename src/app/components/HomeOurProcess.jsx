"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  PhoneCall, 
  Hotel, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ShieldCheck,
  CalendarCheck
} from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function HomeOurProcess() {
  const processSteps = [
    {
      step: "STEP 01",
      number: "01",
      title: "Choose Your Therapy",
      subtitle: "Select Treatment & Therapist",
      description:
        "Browse our signature Russian, B2B, Sandwich, or Couple massages. Select your ideal session duration and therapist preference that matches your wellness goals.",
      image: "/images/about-luxury-russian-spa.jpg",
      icon: Sparkles,
      time: "Takes 1 Min",
      highlights: ["20+ Signature Therapies", "Russian & Indian Experts", "Transparent Packages"],
    },
    {
      step: "STEP 02",
      number: "02",
      title: "Instant 24/7 Booking",
      subtitle: "WhatsApp or Telegram Confirmation",
      description:
        "Connect directly with our 24/7 booking desk. Receive live therapist catalogs, room availability, and immediate confirmation with zero hidden charges.",
      image: "/images/317.webp",
      icon: PhoneCall,
      time: "Instant Confirmation",
      highlights: ["24/7 Live Concierge", "Discreet & Private", "Zero Advance Needed"],
    },
    {
      step: "STEP 03",
      number: "03",
      title: "Unwind in Pure Luxury",
      subtitle: "Private Spa Suite or Hotel Room",
      description:
        "Arrive at one of our 24+ luxury spa outlets across Delhi NCR, or relax as our therapist visits your 5-star hotel room or home for a private session.",
      image: "/images/hotel-andaz-delhi.jpg",
      icon: Hotel,
      time: "Pure Relaxation",
      highlights: ["5-Star Hotel Outlets", "In-Room Hotel Service", "100% Sanitized & Safe"],
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white via-[#fffaf5] to-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] -z-0">
        <div className="absolute top-10 left-10 size-80 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute top-40 right-10 size-96 rounded-full bg-rose-200/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 size-72 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full mb-4 shadow-sm backdrop-blur-sm">
            <span className="size-2 bg-amber-600 rounded-full animate-pulse" />
            <span className="text-amber-800 font-semibold tracking-wider uppercase text-xs">
              Effortless 3-Step Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-5">
            How To Book a{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent italic font-serif">
              Luxury Spa in Delhi
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Booking your rejuvenating session takes less than two minutes. Experience discreet, high-end hospitality from first message to final relaxation.
          </p>
        </motion.div>

        {/* Process Cards Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-amber-100/80 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(217,119,6,0.12)] hover:border-amber-300 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Step pill & Number Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-bold tracking-wider">
                    <span className="size-1.5 rounded-full bg-amber-600"></span>
                    {step.step}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-100/70 px-2.5 py-1 rounded-full">
                    <Clock className="size-3 text-amber-600" />
                    <span>{step.time}</span>
                  </div>
                </div>

                {/* Media frame with overlay */}
                <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 shadow-md bg-amber-50 group-hover:shadow-lg transition-all duration-500">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  
                  {/* Floating Icon in Media Frame */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="size-10 rounded-xl bg-white/95 backdrop-blur-md text-amber-700 flex items-center justify-center shadow-lg border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-white text-xs font-semibold drop-shadow-md">
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Watermark Step Number */}
                  <span className="absolute top-2 right-4 font-serif text-5xl font-black text-white/30 pointer-events-none">
                    {step.number}
                  </span>
                </div>

                {/* Content details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-amber-800 transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlights list */}
                <div className="pt-4 border-t border-amber-50/80 space-y-2 mt-auto">
                  {step.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <CheckCircle2 className="size-3.5 text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA action strip */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-amber-900 via-[#3b2214] to-amber-900 p-8 md:p-10 shadow-2xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Ambient lighting */}
          <div className="absolute -right-20 -top-20 size-64 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left max-w-xl">
            <span className="text-amber-300 font-semibold text-xs tracking-widest uppercase block mb-1">
              ✦ Ready for Instant Relaxation?
            </span>
            <h4 className="text-2xl md:text-3xl font-serif font-bold">
              Book Your Session in 60 Seconds
            </h4>
            <p className="text-white/75 text-sm mt-1">
              Available 24/7 across all 24+ Delhi outlets and 5-star partner hotels.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://api.whatsapp.com/send?phone=9310xxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              <span>Book via WhatsApp</span>
            </a>

            <a
              href="https://t.me/+a5Bu6FBPN9FlOWM9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <FaTelegram className="text-lg text-sky-400" />
              <span>Available Staff on Telegram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}