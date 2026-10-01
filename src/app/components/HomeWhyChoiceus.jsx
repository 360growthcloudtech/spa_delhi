"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Clock, 
  Sparkles, 
  Globe2,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const features = [
  {
    num: "01",
    icon: Building2,
    badge: "Delhi NCR Wide",
    title: "24+ Luxury Spa Outlets",
    desc: "Conveniently located across premier destinations in Delhi NCR, 5-star partner hotels, and private suites. In-room hotel visits & home spa delivered directly to your doorstep.",
    tag: "5-Star & Private Outlets",
  },
  {
    num: "02",
    icon: Clock,
    badge: "Always Open",
    title: "24/7 VIP Concierge & Booking",
    desc: "Seamless round-the-clock booking assistance with instant confirmation. Book same-day or in advance with complete transparency and zero hidden surprises.",
    tag: "Instant 24/7 Response",
  },
  {
    num: "03",
    icon: Sparkles,
    badge: "Bespoke Therapies",
    title: "Signature Russian & B2B Spa",
    desc: "Experience world-class Body-to-Body, Sandwich, Couples, and Swedish therapies designed to release deep-seated stress, rejuvenate muscles, and calm the mind.",
    tag: "100% Private & Hygienic",
  },
  {
    num: "04",
    icon: Globe2,
    badge: "Certified Staff",
    title: "International & Russian Therapists",
    desc: "Handpicked, certified therapists from Russia, Europe, and India. Expertly trained in authentic holistic healing techniques with unmatched warmth and hospitality.",
    tag: "Verified Global Specialists",
  },
];

const stats = [
  { value: "24+", label: "Spa Outlets", note: "Premium outlets across top locations" },
  { value: "5★", label: "Hotel Partners", note: "Collaborations with luxury five-star hotels" },
  { value: "20k+", label: "Happy Clients", note: "Thousands trust us for relaxation & wellness" },
  { value: "4.9/5", label: "Guest Rating", note: "Loved for privacy, hygiene & expert care" },
];

export default function HomeWhyChoiceus() {
  return (
    <section className="relative bg-[#0d0907] px-4 py-20 md:px-10 lg:px-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden -z-0">
        <div className="absolute top-1/4 left-1/4 size-[450px] rounded-full bg-amber-600/15 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 size-[400px] rounded-full bg-rose-700/10 blur-[130px]" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-amber-500/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-500/25 to-amber-500/15 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)]"
          >
            <Sparkles className="size-4 text-amber-400 animate-pulse" />
            <span>The Luxury Russian Spa Difference</span>
          </motion.div>

          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight leading-[1.15] mb-6"
          >
            Why We Are{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent italic font-serif">
              The Best Massage Centre
            </span>{" "}
            in Delhi
          </motion.h2>

          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Luxury Russian Spa combines timeless European wellness traditions with modern 5-star comfort. Discover why discerning guests, couples, and travelers choose our{" "}
            <a
              href="/full-body-massage-in-delhi"
              className="text-amber-400 font-medium underline decoration-amber-400/40 underline-offset-4 hover:text-amber-300 hover:decoration-amber-300 transition-colors"
            >
              full-body massage in Delhi
            </a>{" "}
            for complete physical restoration and absolute peace of mind.
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent p-7 backdrop-blur-xl border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(245,158,11,0.15)]"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/40 group-hover:via-amber-400 to-transparent transition-all duration-500" />

                <div>
                  {/* Top Bar: Icon + Number Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative size-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white transition-all duration-500">
                      <Icon className="size-7 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.75} />
                    </div>
                    <span className="font-serif text-3xl font-bold text-white/20 group-hover:text-amber-400/40 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-3">
                    {item.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tag / Feature Highlight */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-300/80 font-medium">
                  <span>✦ {item.tag}</span>
                  <ArrowRight className="size-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <dl className="mt-12 grid grid-cols-2 gap-y-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-md lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col px-2 text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
              <dt className="mt-1 text-sm font-semibold uppercase tracking-wider text-white">{s.label}</dt>
              <dd className="order-first font-serif text-4xl md:text-5xl font-bold text-amber-300">{s.value}</dd>
              <dd className="mt-1 text-xs text-white/55">{s.note}</dd>
            </div>
          ))}
        </dl>

        {/* Action Buttons */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://api.whatsapp.com/send?phone=+91 8799716197"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-base shadow-[0_10px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <FaWhatsapp className="text-xl" />
            <span>Book Your Luxury Session</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="https://t.me/+yulqEcJa2dxhM2I9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FaTelegram className="text-xl text-sky-400" />
            <span>View Available Therapists</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
