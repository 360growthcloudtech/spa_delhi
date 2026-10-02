"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCrown,
  FaHandSparkles,
  FaHeart,
  FaHotel,
  FaHotTub,
  FaLeaf,
  FaPhoneAlt,
  FaSpa,
  FaStar,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import WhatsappFloat from "../components/WhatsappFloat";

const luxuryHotels = [
  {
    name: "Andaz Delhi",
    location: "Aerocity, New Delhi",
    image: "/images/hotel-andaz-delhi.jpg",
    desc: "Staying at Andaz Delhi? We send a therapist straight to your room for a private full body massage, no need to travel to our outlet.",
  },
  {
    name: "The Park, Connaught Place",
    location: "Connaught Place, New Delhi",
    image: "/images/hotel-resort-pool.jpg",
    desc: "A short walk from The Park — hotel spa bookings available if you'd rather have your full body massage right in your room.",
  },
  {
    name: "The Suryaa, NFC",
    location: "New Friends Colony, New Delhi",
    image: "/images/hotel-grand-palace.jpg",
    desc: "Guests at The Suryaa can book our outlet nearby or request a therapist directly to their room for a genuine session.",
  },
  {
    name: "JW Marriott / Grand Vista, Aerocity",
    location: "Aerocity, New Delhi",
    image: "/images/hotel-grand-vista.jpg",
    desc: "Close to luxury 5-star hotels in Aerocity, with discreet, private hotel spa sessions available for guests on request.",
  },
];

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Genuinely Affordable",
    desc: "An affordable full body massage in Delhi that doesn't cut corners — first visit from ₹1999, with clear pricing before you book.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Head-to-Toe, Not One Spot",
    desc: "Back, shoulders, arms, legs, and feet — a proper full body massage in Delhi, not a rushed session that skips half your body.",
  },
  {
    icon: <FaHotTub className="text-2xl text-rose-500" />,
    title: "Luxury Hotel Options",
    desc: "A luxury full body massage in Delhi at five-star hotels across the city, delivered straight to your room.",
  },
  {
    icon: <FaLeaf className="text-2xl text-teal-600" />,
    title: "Certified, Considerate Therapists",
    desc: "Every therapist follows proper technique and hygiene protocol — a real wellness session, not a guessing game.",
  },
];

const benefits = [
  { title: "Deep Relaxation", desc: "A full body massage helps release tension more completely than working just one area, especially after a physically draining week." },
  { title: "Improved Circulation", desc: "The warmth and pressure of the session encourages healthy blood flow throughout, leaving your whole body feeling looser afterward." },
  { title: "Muscle Recovery", desc: "Helps ease the physical fatigue that builds up from long working hours, travel, or too many hours in a desk chair or gym." },
  { title: "Better Sleep", desc: "A proper head-to-toe session calms the nervous system, which is why many regular clients notice better sleep afterward." },
  { title: "A Fully Private Setting", desc: "Every session takes place in a private, closed room — no shared spaces, no interruptions, from booking to checkout." },
  { title: "Professional, Judgement-Free Care", desc: "Handled the same way as any other treatment on our menu — professionally, hygienically, and respectfully." },
];

const processSteps = [
  { number: "01", title: "Reach out", text: "Message us on WhatsApp or Telegram with your preferred outlet, hotel, or home address — we're used to same-day requests.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Confirm your slot", text: "We confirm timing and pricing upfront over chat — no surprises when your therapist arrives or when you walk in.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Relax, privately", text: "Your session takes place in a private, closed room with a trained therapist, from consultation to checkout.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private full body massage session at any of our 24+ Delhi NCR outlets.", features: ["Head-to-Toe Coverage", "Premium Oils", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Massage Spa", price: "₹15000", desc: "Our full body massage at home in Delhi price, delivered anywhere in Delhi NCR — same technique, same hygiene standard.", features: ["Therapist of Choice", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "Luxury Hotel Spa", price: "₹20000", desc: "A longer, more indulgent luxury full body massage in Delhi at your five-star hotel.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is a full body massage spa in Delhi?", answer: "A full body massage spa in Delhi is an outlet offering a complete head-to-toe massage — back, shoulders, arms, legs, and feet — performed by trained therapists in a private room." },
  { question: "Do you offer luxury full body massage in Delhi?", answer: "Yes, our luxury full body massage in Delhi is available at select five-star hotels across the city, with a longer session, private suite, and optional facial add-on." },
  { question: "What is the difference between body massage and full body massage in Delhi?", answer: "Body massage is often used loosely to mean any massage service, while a full body massage in Delhi specifically covers every major muscle group — not just one targeted area." },
  { question: "What is the full body massage price in Delhi?", answer: "Our full body massage price in Delhi starts from ₹1999 at the outlet, ₹15,000 for home spa, and ₹20,000 for luxury hotel spa, depending on duration and location." },
  { question: "What is the full body massage at home in Delhi price?", answer: "Full body massage at home in Delhi starts from ₹15,000 for a 90-minute session, with the same certified therapists and premium oils used at our outlets." },
  { question: "Do you offer full body massage by a female therapist in Delhi?", answer: "Yes, full body massage by a female therapist in Delhi is available at all our outlets and for home and hotel bookings — just mention your therapist preference when you book." },
  { question: "Can I book a full body massage at a hotel in Delhi?", answer: "Yes, we regularly serve guests staying at hotels across Delhi, including Roseate House, The Oberoi, and The Suryaa — just share your hotel and room details when booking." },
];

export default function Fullbodypage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> SIGNATURE TREATMENT
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Full Body Massage in <span className="text-amber-700">Delhi</span> — Affordable Luxury
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for an affordable full body massage in Delhi? Luxury Russian Spa runs a genuine full body massage spa in Delhi across 24+ outlets — with luxury full body massage options at five-star hotels and home visits anywhere in Delhi NCR, including Mahipalpur, Lajpat Nagar, Saket, and Rohini. A transparent full body massage price in Delhi, certified therapists, private rooms. First visit from ₹1999.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
                <FaWhatsapp /> Book on WhatsApp
              </a>
              <a href="https://t.me/+yulqEcJa2dxhM2I9" className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50">
                <FaTelegram /> Meet Our Team
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["12+", "Years of spa expertise"], ["4.9/5", "Guest comfort rating"], ["24/7", "Booking support"]].map(([value, label], index) => (
                <div key={index} className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-xl font-bold text-amber-700">{value}</p>
                  <p className="mt-1 text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Landing at IGI Airport?{" "}
              <Link href="/full-body-massage-in-aerocity" className="font-semibold text-amber-700 underline">Book full body massage in Aerocity</Link>{" "}
              for hotel spa minutes from Terminal 3.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative flex items-center">
            <div className="w-full rounded-[32px] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative h-[410px] overflow-hidden rounded-[24px]">
                <Image src="/images/MassageSession.webp" alt="Full body massage in Delhi" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="font-semibold text-amber-700">₹1999 first visit</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why It Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">A genuine full body massage, done properly.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f1a17]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-form SEO content — scannable card layout */}
      <section className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">The Full Picture</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Full Body Massage in Delhi — What It Is & How to Book</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/6745.jpg" alt="Full body massage spa in Delhi" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Head-to-Toe, Every Time</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Back, shoulders, arms, legs, and feet — not just whichever area feels worst. A real body massage in Delhi covers all of it.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Affordable, Not Compromised</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  From ₹1999 at any of our{" "}
                  <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotel /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Luxury Hotel Option</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Want the luxury version? Book our five-star hotel spa for a longer, more indulgent session in your room.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Home Spa, Same Standard</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Can't travel? A therapist comes to your home anywhere in Delhi NCR — same hygiene, same technique.
                </p>
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Evening and night appointments available through our 24/7 desk —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      {/* Why choose us — trust banner */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Why Choose Luxury Russian Spa</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Delhi's Trusted Full Body Massage Spa</h2>
            <p className="mt-4 leading-relaxed text-white/80">
              More than a decade in, with{" "}
              <Link href="/outlets" className="font-medium text-amber-300 underline hover:text-amber-200">24+ outlets across Delhi NCR</Link> — hygiene and professionalism aren't optional extras, they're the baseline for every session.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["12+", "Years of experience"], ["24+", "Outlets in Delhi NCR"], ["₹1999", "Affordable first visit"], ["24/7", "Booking support"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-amber-300">{value}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { icon: <FaHandSparkles />, text: "Trained therapists follow proper technique and hygiene protocol on every full body massage in Delhi." },
              { icon: <FaHotel />, text: "Luxury full body massage in Delhi available at select five-star hotels, delivered straight to your room." },
              { icon: <FaCheckCircle />, text: "Same standard whether you book our outlet, home spa, or hotel spa." },
              { icon: <FaSpa />, text: "See our full range of Delhi NCR treatments beyond full body massage." },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">{item.icon}</span>
                <p className="text-sm leading-relaxed text-white/85">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/massage-service-in-delhi" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              See All Delhi NCR Services <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* How It Compares */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How It Compares</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Full body massage vs. our other treatments.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not sure which session is right for you? Here's a quick, honest comparison.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
            <h3 className="text-lg font-semibold text-[#1f1a17]">vs. B2B Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link>{" "}
              is a signature full body technique — a different, more intensive format than the hands-only full body session.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
            <h3 className="text-lg font-semibold text-[#1f1a17]">vs. Deep Tissue Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Deep tissue massage</Link>{" "}
              uses firmer pressure on stiff, knotted muscles — better for targeted recovery than general full body relaxation.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHeart /></div>
            <h3 className="text-lg font-semibold text-[#1f1a17]">vs. Couples Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/couple-massage" className="font-medium text-amber-700 underline hover:text-amber-800">Couples massage</Link>{" "}
              is a shared, side-by-side session for two — a better pick for a date or anniversary than a solo session.
            </p>
          </div>
        </div>
      </section>

      {/* Locations We Cover */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Locations We Cover</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Full body massage across Delhi NCR.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A full body massage in Delhi shouldn't mean a long commute — including in-room service at these Delhi 5-star hotels.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/spa-in-mahipalpur" className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <Image src="/images/RoseateHouse.jpg" alt="Body massage near Roseate House Mahipalpur" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#1f1a17]">Roseate House, Mahipalpur</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">A Russian body spa in Mahipalpur is one of our most-booked in-room packages here, close to IGI Airport.</p>
            </div>
          </Link>
          <Link href="/spa-in-lajpat-nagar" className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <Image src="/images/TheOberoi_Lajpatnagar.webp" alt="Body massage near The Oberoi Lajpat Nagar" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#1f1a17]">The Oberoi, Lajpat Nagar</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Body massage in Lajpat Nagar at our outlet, or in-room service if you're staying at The Oberoi nearby.</p>
            </div>
          </Link>
          <Link href="/spa-in-saket" className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <Image src="/images/TheSuryaaNewDelhi(NFC).webp" alt="Body massage near The Suryaa Saket" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#1f1a17]">The Suryaa, Saket</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Body massage in Saket close to Select Citywalk, with in-room bookings for guests at The Suryaa.</p>
            </div>
          </Link>
          <Link href="/spa-in-rohini" className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <Image src="/images/fpkdl.com_750_1758779588_beautiful-young-girl-spa-salon_392895-8485.jpg" alt="Full body massage in Rohini" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#1f1a17]">Full Body Massage in Rohini</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Full body massage in Rohini, Delhi is covered across every major sector, plus home spa on request.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#fff6ee] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Full Body Massage</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What a proper session can do for you.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <motion.div key={b.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f1a17]">{b.title}</h3>
                <p className="mt-2 text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real hotel showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">5-Star Hotels in Delhi</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Luxury Hotel Spa for Full Body Massage in Delhi</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Staying at one of these hotels? We send a therapist straight to your room for a private full body massage.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {luxuryHotels.map((hotel) => (
              <motion.div
                key={hotel.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={hotel.image} alt={`Full body massage near ${hotel.name}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1f1a17]">{hotel.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-600">{hotel.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{hotel.desc}</p>
                  <a
                    href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 font-medium text-white shadow-lg transition-all hover:from-amber-700 hover:to-amber-800"
                  >
                    <FaTelegram className="text-lg" />
                    See available staff
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">First Time Here?</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What to expect during your session.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Check-in & Consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A quick chat about pressure, oil preference, and anything you'd rather your therapist avoid.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Private, Closed Room</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Your room stays closed for the full session — no shared spaces, no interruptions from booking to checkout.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Head-to-Toe Coverage</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Back, shoulders, arms, legs, and feet — the full session, not a shortened version.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Aftercare & Checkout</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A few minutes to ease back before you head out — plus water and a quiet space if you'd like to sit for a bit.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#fff6ee] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Simple, discreet, professional.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <motion.div key={step.number} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
                <div className="mb-3 text-amber-700">{step.icon}</div>
                <h3 className="text-xl font-semibold text-[#1f1a17]">{step.title}</h3>
                <p className="mt-3 text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Transparent pricing, no surprises.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff3e8] to-[#fffaf5]" : "border-amber-100 bg-white"}`}>
                <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.highlight ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-700"}`}>{plan.badge}</div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">{plan.icon}</div>
                <h3 className="text-2xl font-semibold text-[#1f1a17]">{plan.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{plan.desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold text-amber-700">{plan.price}</span>
                  <span className="pb-1 text-sm font-medium text-gray-500">/ session</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-amber-600" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." className="mt-6 block rounded-full bg-amber-600 py-3 text-center font-semibold text-white transition hover:bg-amber-700">
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Everything before you book.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-[#fffaf5] p-5">
                <button onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} className="flex w-full items-center justify-between text-left">
                  <span className="text-lg font-semibold text-[#1f1a17]">{faq.question}</span>
                  <FaArrowRight className={`text-amber-700 transition ${activeIndex === index ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="mt-3 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Related Services</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "B2B Massage in Delhi", href: "/b2b-massage-in-delhi" },
            { title: "Deep Tissue Massage in Delhi", href: "/deep-tissue-massage-in-delhi" },
            { title: "Couples Massage in Delhi", href: "/couple-massage" },
            { title: "Thai Massage in Delhi", href: "/thai-massage-in-delhi" },
            { title: "Swedish Massage in Delhi", href: "/swedish-massage-in-delhi" },
            { title: "Sandwich Massage in Delhi", href: "/sandwich-massage" },
            { title: "Aromatherapy Massage in Delhi", href: "/aromatherapy-massage-in-delhi" },
            { title: "Full Body Massage in Aerocity", href: "/full-body-massage-in-aerocity" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your session</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve your full body massage in Delhi today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk into any of our 24+ outlets, or have us come to your hotel or home anywhere in Delhi NCR.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f1a17] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+yulqEcJa2dxhM2I9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
