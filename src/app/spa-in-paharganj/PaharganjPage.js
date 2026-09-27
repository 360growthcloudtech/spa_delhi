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
  FaRupeeSign,
  FaSpa,
  FaStar,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import WhatsappFloat from "../components/WhatsappFloat";

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Genuine Spa Center in Paharganj",
    desc: "A real massage spa in Paharganj — trained therapists, premium oils, and a private room for every session.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Minutes From New Delhi Station",
    desc: "Right next to New Delhi Railway Station and a short walk from Main Bazaar and Connaught Place.",
  },
  {
    icon: <FaLeaf className="text-2xl text-teal-600" />,
    title: "24 Hours Booking Support",
    desc: "Our 24 hours spa in Paharganj desk is open on WhatsApp and Telegram, day or night.",
  },
];

const services = [
  { title: "Full Body Massage", desc: "A complete full body massage in Paharganj that eases muscle tension and leaves you feeling refreshed.", href: "/full-body-massage-in-delhi" },
  { title: "B2B Massage", desc: "Our B2B spa Paharganj session is a full-contact, full-body therapy for genuine deep relaxation.", href: "/b2b-massage-in-delhi" },
  { title: "Thai Massage", desc: "A traditional Thai spa in Paharganj session using stretching and pressure to ease stiffness.", href: "/thai-massage-in-delhi" },
  { title: "Deep Tissue Massage", desc: "Firm, focused pressure that targets chronic knots in the back, neck, and shoulders.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Couples Massage", desc: "One private room, two therapists — a shared spa experience for two.", href: "/couples-massage-in-delhi" },
  { title: "Sandwich Massage", desc: "A two-therapist session that delivers deeper relaxation and faster stress relief.", href: "/sandwich-massage-in-delhi" },
];

const nearbyAreas = [
  {
    title: "New Delhi Railway Station",
    image: "/images/fpkdl.com_750_1758779588_beautiful-young-girl-spa-salon_392895-8485.jpg",
    description: "A short walk from the station — easy to fit in before or after a train journey.",
  },
  {
    title: "Main Bazaar Paharganj",
    image: "/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg",
    description: "Steps from the markets and guesthouses of Main Bazaar.",
  },
  {
    title: "Connaught Place",
    image: "/images/fpkdl.com_750_1758779863_woman-having-massage-spa-salon_952135-8315.jpg",
    description: "A short ride from Connaught Place, ideal for a break in Central Delhi.",
  },
  {
    title: "Ramakrishna Ashram Metro",
    image: "/images/fpkdl.com_750_1758962478_woman-receives-neck-massage-from-hands-physical-therapisthealthy-therapy-conceptcopy-space_1144978-6056.jpg",
    description: "Close to the metro station, easy to reach without a car.",
  },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private massage session at our Paharganj outlet.", features: ["Oil Massage", "Cream Massage", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Spa", price: "₹15000", desc: "The same genuine body massage spa in Paharganj, delivered to your home.", features: ["Therapist of Choice", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Spa", price: "₹20000", desc: "A longer, more indulgent session at your hotel near Paharganj or Connaught Place.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "Is there a spa in Paharganj?", answer: "Yes, Spa Delhi runs a genuine spa in Paharganj, right next to New Delhi Railway Station, offering full body, B2B, Thai, and couple massage in a private, hygienic setting." },
  { question: "Do you offer a 24 hours spa in Paharganj?", answer: "Yes, our booking desk runs 24 hours — message us on WhatsApp or Telegram anytime and we'll confirm your massage in Paharganj session." },
  { question: "Where can I find a body massage spa in Paharganj?", answer: "Our Paharganj spa center is a short walk from New Delhi Railway Station and Main Bazaar, offering full body, B2B, and Thai spa options." },
  { question: "Do you provide home spa service near Paharganj?", answer: "Yes, alongside our outlet, we send a therapist to your home anywhere in Central Delhi, including areas around Paharganj." },
  { question: "How much does a body spa in Paharganj cost?", answer: "A session at our Paharganj outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000." },
  { question: "Do you provide spa services at hotels near Paharganj?", answer: "Yes, we regularly serve guests staying at hotels around Paharganj and Connaught Place — just share your hotel and room details when booking." },
];

export default function PaharganjPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5fdfc] text-[#113435]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> PAHARGANJ OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#113435] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Paharganj</span> Near New Delhi Station
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a spa in Paharganj? Spa Delhi runs a genuine massage spa in Paharganj right next to New Delhi Railway Station, offering full body, B2B, and Thai massage in a clean, private setting. First visit from ₹1999.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
                <FaWhatsapp /> Book on WhatsApp
              </a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50">
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
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative flex items-center">
            <div className="w-full rounded-[32px] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative h-[410px] overflow-hidden rounded-[24px]">
                <Image src="/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg" alt="Therapist giving a massage at our spa in Paharganj" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="font-semibold text-amber-700">₹1999 first visit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Advantages</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Why Choose Our Spa in Paharganj?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#113435]">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple about section */}
      <section className="bg-[#e6f7f6] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#113435] md:text-4xl">Your Trusted Spa Center in Paharganj</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Our Paharganj spa center offers a full range of treatments, from a relaxing body massage in Paharganj to a specialised B2B spa Paharganj session. Whether you want a full body massage in Paharganj, a Thai spa in Paharganj, or a quick body spa in Paharganj between meetings, our massage spa in Paharganj covers it all.
            </p>
            <p>
              Searching for a spa near Paharganj? Our outlet is a short walk from New Delhi Railway Station and Main Bazaar, with home and hotel spa options across Central Delhi. Our booking desk runs as a 24 hours spa in Paharganj service — message us anytime and we'll confirm your session in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-[#113435] md:text-4xl">What to Expect at Our Paharganj Spa</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Choosing a spa is about more than booking a massage. At our Paharganj spa center, we focus on creating a calm, comfortable experience where you can take a break from your journey or your day.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Whether you're passing through New Delhi Railway Station, dealing with travel fatigue, or simply want some personal time, our spa experience is built around your comfort.
            </p>
            <h3 className="mt-6 font-semibold text-[#113435]">What you can expect:</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><span className="font-semibold text-[#113435]">Experienced Therapists</span> — Professional care, including foreigner therapists, with attention to your comfort and preferences.</li>
              <li><span className="font-semibold text-[#113435]">Range of Massage Therapies</span> — Full body, B2B, Thai, and more, suited to different relaxation needs.</li>
              <li><span className="font-semibold text-[#113435]">Clean &amp; Private Spaces</span> — Comfortable treatment rooms for a peaceful spa experience.</li>
              <li><span className="font-semibold text-[#113435]">Convenient Location</span> — Minutes from New Delhi Railway Station and Main Bazaar.</li>
              <li><span className="font-semibold text-[#113435]">Personalised Experience</span> — Your session tailored around your preferred treatment and comfort level.</li>
              <li><span className="font-semibold text-[#113435]">₹1999 First-Visit Offer</span> — Selected spa treatments available with our first-visit offer.</li>
            </ul>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#113435] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#113435]">
              <FaTelegram /> See Available Staff
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#113435] to-[#346065] p-6 text-center text-white shadow-lg">
              <FaLeaf className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">Experienced Therapists</h4>
              <p className="mt-2 text-sm text-white/85">Skilled therapists deliver personalised massage with expert care for complete relaxation.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#113435] to-[#346065] p-6 text-center text-white shadow-lg">
              <FaRupeeSign className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">₹1999 First Visit Offer</h4>
              <p className="mt-2 text-sm text-white/85">Enjoy our first-visit offer with premium spa therapies and exceptional value.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#113435] to-[#346065] p-6 text-center text-white shadow-lg">
              <FaClock className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">24x7 Booking</h4>
              <p className="mt-2 text-sm text-white/85">Available 24x7 for outlet, home, and hotel spa bookings.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#113435] to-[#346065] p-6 text-center text-white shadow-lg">
              <FaHeart className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">Private &amp; Hygienic Rooms</h4>
              <p className="mt-2 text-sm text-white/85">Every session ensures complete hygiene, comfort, and privacy for every guest.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services — chip-style row */}
      {/* <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
        <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Related Services</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { title: "Full Body Massage in Delhi", icon: <FaSpa />, href: "/full-body-massage-in-delhi" },
            { title: "B2B Massage in Delhi", icon: <FaHandSparkles />, href: "/b2b-massage-in-delhi" },
            { title: "Thai Massage in Delhi", icon: <FaHotTub />, href: "/thai-massage-in-delhi" },
            { title: "Deep Tissue Massage in Delhi", icon: <FaCheckCircle />, href: "/deep-tissue-massage-in-delhi" },
            { title: "Couples Massage in Delhi", icon: <FaHeart />, href: "/couples-massage-in-delhi" },
            { title: "Sandwich Massage in Delhi", icon: <FaSpa />, href: "/sandwich-massage-in-delhi" },
            { title: "Aromatherapy Massage in Delhi", icon: <FaLeaf />, href: "/aromatherapy-massage-in-delhi" },
            { title: "Spa Price in Delhi", icon: <FaRupeeSign />, href: "/spa-price-in-delhi" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-amber-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-md"
            >
              <span className="text-amber-500">{item.icon}</span> {item.title}
            </Link>
          ))}
        </div>
      </section> */}

      {/* Meet Our Therapists */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Meet Our Therapists</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Trained Hands Behind Every Session</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A mix of skilled Indian and foreigner therapists, so you get real variety in technique.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { role: "Senior Massage Therapist", specialty: "Full Body & Deep Tissue", experience: "8+ yrs", image: "/images/staff5.jpg" },
            { role: "B2B Massage Specialist", specialty: "Full-Contact Technique", experience: "6+ yrs", image: "/images/staff8.jpg" },
            { role: "Foreigner Therapist", specialty: "Thai & Aromatherapy", experience: "5+ yrs", image: "/images/staff9.jpg" },
            { role: "Wellness Therapist", specialty: "Foot & Body Relief", experience: "7+ yrs", image: "/images/staff11.jpg" },
          ].map((t, index) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative h-80 overflow-hidden rounded-[24px] shadow-lg"
            >
              <Image src={t.image} alt={`${t.role} at Spa Delhi Paharganj`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2526] via-[#0b2526]/40 to-transparent" />
              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">
                <FaStar className="text-amber-500" /> {t.experience}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-semibold text-white">{t.role}</h3>
                <p className="mt-1 text-sm text-amber-300">{t.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#edf9f8] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Explore Our Massage Services in Paharganj</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#113435]">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
                <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline">
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Amenities */}
      <section className="bg-[#e6f7f6] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#113435] md:text-4xl">100% Hygienic &amp; Professional Spa Centre in Paharganj — Your Safety First</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From a hot shower to a full steam bath, these are the small details that turn a massage into a complete spa visit.
          </p>
          <div className="mt-10 grid grid-cols-2 justify-items-center gap-x-6 gap-y-10 sm:grid-cols-5 sm:gap-x-10">
            {[
              { label: "Shower", image: "/images/icons8-shower-64.webp" },
              { label: "Hammam", image: "/images/icons8-bathhouse-64.webp" },
              { label: "Jacuzzi Bath", image: "/images/icons8-jacuzzi-64.webp" },
              { label: "Steam Bath", image: "/images/icons8-spa-care-64.webp" },
              { label: "Sauna", image: "/images/icons8-sauna-64.webp" },
            ].map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border border-amber-200 bg-white shadow-sm">
                  <Image src={item.image} alt={item.label} fill className="object-contain p-5" />
                </div>
                <p className="mt-3 text-sm font-medium text-[#113435]">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <Link href="/massage-service-in-delhi" className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Landmarks Nearby */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Landmarks Nearby</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Minutes From These Paharganj Landmarks</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {nearbyAreas.map((area) => (
            <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <Image src={area.image} alt={`Spa near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#113435]">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#e6f7f6] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Spa in Paharganj Pricing — Transparent &amp; Affordable</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#effffe] to-[#f5fdfc]" : "border-amber-100 bg-white"}`}>
                <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.highlight ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-700"}`}>{plan.badge}</div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">{plan.icon}</div>
                <h3 className="text-2xl font-semibold text-[#113435]">{plan.title}</h3>
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
                <a href="https://api.whatsapp.com/send?phone=919217255113" className="mt-6 block rounded-full bg-amber-600 py-3 text-center font-semibold text-white transition hover:bg-amber-700">
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Your Spa in Paharganj Questions, Answered</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-white p-5">
              <button onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} className="flex w-full items-center justify-between text-left">
                <span className="text-lg font-semibold text-[#113435]">{faq.question}</span>
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
      </section>

      {/* Other Spa Locations — location pagination */}
      <section className="bg-[#edf9f8] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Other Locations</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Spa Locations Across Delhi NCR</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not based in Paharganj? We run 24+ outlets across Delhi NCR — find the one closest to you.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Spa in Connaught Place", href: "/spa-in-connaught-place" },
              { title: "Spa in Karol Bagh", href: "/spa-in-karol-bagh" },
              { title: "Spa in Rohini", href: "/spa-in-rohini" },
              { title: "Spa in Pitampura", href: "/spa-in-pitampura" },
              { title: "Spa in Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
              { title: "Spa in Dwarka", href: "/spa-in-dwarka" },
              { title: "Spa in Saket", href: "/spa-in-saket" },
              { title: "Spa in Aerocity", href: "/spa-in-aerocity" },
              { title: "Spa in Noida", href: "/spa-in-noida" },
              { title: "Spa in Gurgaon", href: "/spa-in-gurgaon" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#113435] to-[#346065] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Book the Best Spa in Paharganj — Today</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in near New Delhi Railway Station, or connect with us for a home or hotel spa booking.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full bg-white px-6 py-3 font-semibold text-[#113435] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
