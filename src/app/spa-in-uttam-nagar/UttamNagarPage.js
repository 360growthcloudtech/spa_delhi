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
  FaLeaf,
  FaPhoneAlt,
  FaRupeeSign,
  FaShoePrints,
  FaSpa,
  FaStar,
  FaSwimmer,
  FaTelegram,
  FaTint,
  FaWhatsapp,
} from "react-icons/fa";
import WhatsappFloat from "../components/WhatsappFloat";

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Genuine Spa in Uttam Nagar",
    desc: "A real body spa in Uttam Nagar — trained therapists, premium oils, and a private room for every session.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Minutes From the Metro",
    desc: "Close to both Uttam Nagar East and West Metro Stations on the Blue Line, easy to reach from across West Delhi.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, Home & Hotel Spa Options",
    desc: "Visit our Uttam Nagar spa outlet, or book a spa in Uttam Nagar home service anywhere across West Delhi.",
  },
];

const services = [
  { title: "Full Body Massage", desc: "A complete full body massage in Uttam Nagar that eases muscle tension and leaves you feeling refreshed.", href: "/full-body-massage-in-delhi" },
  { title: "Thai Massage", desc: "A traditional thai massage session using stretching and pressure-point technique to ease stiffness.", href: "/thai-massage-in-delhi" },
  { title: "Deep Tissue Massage", desc: "Firm, focused pressure that targets chronic knots in the back, neck, and shoulders.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Couples Massage", desc: "One private room, two therapists — a shared spa experience for two.", href: "/couple-massage" },
  { title: "Sandwich Massage", desc: "A two-therapist session that delivers deeper relaxation and faster stress relief.", href: "/sandwich-massage" },
  { title: "B2B Massage", desc: "A specialised B2B therapy performed with premium oils for complete relaxation.", href: "/b2b-massage-in-delhi" },
];

const nearbyAreas = [
  {
    title: "Janakpuri",
    href: "/spa-in-janakpuri",
    image: "/images/potliMassage.jpg",
    description: "Guests from Janakpuri regularly visit our Uttam Nagar outlet for a relaxing full body or deep tissue massage session.",
  },
  {
    title: "Dwarka Mor",
    image: "/images/spa-therapist-team.jpg",
    description: "A short drive from Dwarka Mor Metro Station brings you to our hygienic, professionally staffed Uttam Nagar outlet.",
  },
  {
    title: "Nawada",
    image: "/images/multiplemodel.jpg",
    description: "Residents near Nawada Metro Station appreciate the short travel time and calm, private setting at our Uttam Nagar spa.",
  },
  {
    title: "Najafgarh",
    image: "/images/SkincareTreatments.jpg",
    description: "A quick drive from Najafgarh and the surrounding areas brings you to our hygienic, professionally staffed Uttam Nagar outlet.",
  },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private body spa in Uttam Nagar session at our outlet, with premium oils and complete privacy.", features: ["Oil Massage", "Cream Massage", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Spa", price: "₹14999", desc: "Our popular spa in Uttam Nagar home service, delivered to your residence anywhere in West Delhi.", features: ["Therapist of Choice", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Flexible" },
  { title: "5 Star Hotel Spa", price: "₹19999", desc: "A longer, more indulgent hotel spa session delivered anywhere near Uttam Nagar and West Delhi.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
];

const faqs = [
  { question: "Is there a good spa in Uttam Nagar near the metro?", answer: "Yes, Luxury Russian Spa runs a genuine spa in Uttam Nagar, close to both Uttam Nagar East and West Metro Stations on the Blue Line, offering full body, Thai, and deep tissue massage in a private, hygienic setting." },
  { question: "What makes Luxury Russian Spa the best spa in Uttam Nagar?", answer: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Uttam Nagar for residents across West Delhi." },
  { question: "Do you offer body massage spa in Uttam Nagar for both men and women?", answer: "Yes, our body massage spa in Uttam Nagar welcomes both men and women, with male and female therapist options — just mention your preference when booking your session." },
  { question: "Is home service available — spa in Uttam Nagar home service?", answer: "Yes, alongside our outlet, we offer spa in Uttam Nagar home service across West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence." },
  { question: "What is the Luxury Russian Spa Uttam Nagar spa contact number?", answer: "You can reach our Uttam Nagar spa contact number on WhatsApp or call at +91 8799716197, available 24/7 to help you book outlet, home, or hotel spa sessions." },
  { question: "Do you have Thai massage or foreign therapists in Uttam Nagar?", answer: "Yes, thai massage is one of our most requested treatments in Uttam Nagar, delivered by experienced Thai, Russian, and Uzbek therapists alongside our skilled Indian staff." },
  { question: "Can I book a couple massage in Uttam Nagar?", answer: "Yes, our Uttam Nagar outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort." },
  { question: "How much does a body spa in Uttam Nagar cost?", answer: "A body spa in Uttam Nagar at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment." },
];

export default function UttamNagarPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> UTTAM NAGAR OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Uttam Nagar</span> Near the Metro
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a spa in Uttam Nagar? Uttam Nagar spa seekers trust Luxury Russian Spa for genuine full body, Thai massage, and body massage spa in Uttam Nagar sessions, just minutes from Uttam Nagar East and West Metro Stations. Every body spa in Uttam Nagar session is performed by certified therapists in a clean, private setting. First visit from ₹1999.
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
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative flex items-center">
            <div className="w-full rounded-[32px] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative h-[410px] overflow-hidden rounded-[24px]">
                <Image src="/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg" alt="Therapist giving a massage at our spa in Uttam Nagar" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What Makes Our Uttam Nagar Spa Different?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#1f1a17]">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sector spotlight — image collage + signature treatments */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 overflow-hidden rounded-[32px] border border-amber-100 bg-white p-6 shadow-lg lg:grid-cols-2 lg:items-center lg:p-10">
          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative min-h-[420px]">
            <div className="absolute left-0 top-0 z-10 w-40">
              <p className="font-serif text-lg text-[#1f1a17]">Genuine Spa with</p>
              <p className="font-serif text-3xl italic text-amber-700">Home Service</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">Outlet, Home &amp; Hotel Spa in Uttam Nagar</p>
            </div>

            <div className="absolute right-0 top-0 w-[55%] overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 p-2 shadow-xl sm:w-[60%]">
              <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40">
                <Image src="/images/fpkdl.com_750_1758981239_hotel-with-sunset-background_1000124-308478.jpg" alt="Luxury hotel spa in Uttam Nagar" fill className="object-cover" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-64 w-[65%] overflow-hidden rounded-[24px] border-4 border-white shadow-xl sm:h-72">
              <Image src="/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg" alt="Body spa in Uttam Nagar" fill className="object-cover" />
            </div>

            <div className="absolute bottom-4 right-0 text-5xl text-amber-200/70" aria-hidden="true">✿</div>
          </motion.div>

          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-6 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">1st Visit @ ₹1999</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Best Body Spa in Uttam Nagar Near the Metro</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Looking for a body spa in Uttam Nagar? Our spa centre sits close to Uttam Nagar East and West Metro Stations, offering calm interiors, soothing music, and premium aromatic oils. Whether after a hectic workday or a weekend outing, our body massage spa in Uttam Nagar ensures complete rejuvenation.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Our therapists are trained professionals from India and abroad, specialising in traditional and modern massage technique. Whether you prefer a gentle Thai massage, an invigorating deep tissue massage, or a full body massage, every session is personalised to your body's needs — and our spa in Uttam Nagar home service brings the same treatment to your door.
            </p>
            <h3 className="mt-6 font-semibold text-[#1f1a17]">Signature Treatments:</h3>
            <ul className="mt-3 grid gap-2 text-gray-700 sm:grid-cols-2">
              {["Full Body Massage", "Thai Massage", "Deep Tissue Massage", "B2B Massage", "Sandwich Massage", "Couples Massage"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-600" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://t.me/+yulqEcJa2dxhM2I9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              <FaTelegram /> Join Telegram Channel
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome section — intro + amenity icon row */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1f1a17] md:text-4xl">Best Spa in Uttam Nagar — Get Full Body Massage at Home &amp; Hotel</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-600">
            Welcome to Luxury Russian Spa — the best spa in Uttam Nagar. If you're tired, stressed, or need a refreshing break, our body spa in Uttam Nagar is your perfect wellness destination. We offer a clean, luxury, and 100% hygienic ambience with a calm and secure environment for complete relaxation.
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600">
            With 24+ spa outlets across Delhi NCR, we're right here for you near Uttam Nagar East and West Metro Stations. Whether you want a quick stress-relief session or a deep muscle relaxation therapy, our certified and professional therapists at Luxury Russian Spa ensure a world-class spa experience every time.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Natural Mask", icon: <FaLeaf /> },
              { label: "Foot Treatment", icon: <FaShoePrints /> },
              { label: "Essential Oils", icon: <FaTint /> },
              { label: "Body Scrub", icon: <FaHandSparkles /> },
              { label: "Relaxation Spa", icon: <FaSpa /> },
              { label: "Pool Session", icon: <FaSwimmer /> },
            ].map((item) => (
              <motion.div key={item.label} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200 bg-white text-2xl text-amber-700 shadow-sm">
                  {item.icon}
                </div>
                <p className="mt-3 text-sm font-medium text-[#1f1a17]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple about section */}
      <section className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#1f1a17] md:text-4xl">Uttam Nagar Spa — Your Trusted Wellness Destination</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              If you've been searching for a genuine spa in Uttam Nagar, Luxury Russian Spa is here to help you relax and recharge. We offer a complete range of treatments, from a relaxing body massage spa in Uttam Nagar to a traditional Thai massage — full body, deep tissue, sandwich, couple, and B2B massage are all available at prices starting from just ₹1999 for your first visit.
            </p>
            <p>
              Many guests tell us we run the best spa in Uttam Nagar for a reason — every body spa in Uttam Nagar session is performed by certified, experienced hands. Prefer to stay home? Our spa in Uttam Nagar home service brings the same quality treatment straight to your door anywhere in West Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Why Choose Luxury Russian Spa in Uttam Nagar?</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Choosing a spa is about more than booking a massage. At our Uttam Nagar outlet, we focus on creating a calm, comfortable experience where you can take a proper break from your day.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Whether you're coming from Janakpuri, Dwarka Mor, or just want some personal time after work, our spa experience is built around your comfort.
            </p>
            <h3 className="mt-6 font-semibold text-[#1f1a17]">Why guests choose us:</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><span className="font-semibold text-[#1f1a17]">Experienced Therapists</span> — Professional care, including Thai and international therapists, with attention to your comfort and preferences.</li>
              <li><span className="font-semibold text-[#1f1a17]">Range of Massage Therapies</span> — Full body, Thai, B2B, deep tissue, and more, suited to different relaxation needs.</li>
              <li><span className="font-semibold text-[#1f1a17]">Clean &amp; Private Spaces</span> — Comfortable treatment rooms for a peaceful spa experience.</li>
              <li><span className="font-semibold text-[#1f1a17]">Convenient Location</span> — Minutes from Uttam Nagar East and West Metro Stations.</li>
              <li><span className="font-semibold text-[#1f1a17]">Spa in Uttam Nagar Home Service</span> — Same quality treatment delivered to your residence across West Delhi.</li>
              <li><span className="font-semibold text-[#1f1a17]">₹1999 First-Visit Offer</span> — Selected spa treatments available with our first-visit offer.</li>
            </ul>
            <a href="https://t.me/+yulqEcJa2dxhM2I9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1f1a17] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#1f1a17]">
              <FaTelegram /> See Available Staff
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaLeaf className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">Experienced Therapists</h4>
              <p className="mt-2 text-sm text-white/85">Skilled therapists deliver personalised massage with expert care for complete relaxation.</p>
            </motion.div>
            <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaRupeeSign className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">₹1999 First Visit Offer</h4>
              <p className="mt-2 text-sm text-white/85">Enjoy our first-visit offer with premium spa therapies and exceptional value.</p>
            </motion.div>
            <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaClock className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">24x7 Booking</h4>
              <p className="mt-2 text-sm text-white/85">Available 24x7 for outlet, home, and hotel spa bookings.</p>
            </motion.div>
            <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaHeart className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">Private &amp; Hygienic Rooms</h4>
              <p className="mt-2 text-sm text-white/85">Every session ensures complete hygiene, comfort, and privacy for every guest.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Therapists */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Meet Our Therapists</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Meet Our Expert Massage Therapists in Uttam Nagar</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A mix of skilled Indian and international therapists, so you get real variety in technique.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { role: "Senior Massage Therapist", specialty: "Full Body & Deep Tissue", experience: "8+ yrs", image: "/images/staff5.jpg" },
            { role: "Thai Massage Specialist", specialty: "Traditional Thai Technique", experience: "6+ yrs", image: "/images/staff9.jpg" },
            { role: "B2B Massage Specialist", specialty: "Signature Technique", experience: "7+ yrs", image: "/images/staff3.jpg" },
            { role: "Wellness Therapist", specialty: "Foot & Body Relief", experience: "5+ yrs", image: "/images/staff10.jpg" },
          ].map((t, index) => (
            <motion.div
              key={t.role}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative h-80 overflow-hidden rounded-[24px] shadow-lg"
            >
              <Image src={t.image} alt={`${t.role} at Luxury Russian Spa Uttam Nagar`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f09] via-[#1c0f09]/40 to-transparent" />
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
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Explore Our Massage Services in Uttam Nagar</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f1a17]">{service.title}</h3>
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
      <section className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1f1a17] md:text-4xl">100% Hygienic &amp; Professional Spa in Uttam Nagar — Your Safety First</h2>
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
              <motion.div key={item.label} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border border-amber-200 bg-white shadow-sm">
                  <Image src={item.image} alt={item.label} fill className="object-contain p-5" />
                </div>
                <p className="mt-3 text-sm font-medium text-[#1f1a17]">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <Link href="/massage-in-delhi" className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Areas We Serve</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Conveniently Located Near These Uttam Nagar Neighbourhoods</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Prefer another part of the city? Browse <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">all Luxury Russian Spa outlets in Delhi NCR</Link>.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {nearbyAreas.map((area) => (
            <motion.div key={area.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <Image src={area.image} alt={`Spa near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1f1a17]">
                  {area.href ? (
                    <Link href={area.href} className="hover:text-amber-700 hover:underline">{area.title}</Link>
                  ) : (
                    area.title
                  )}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Spa in Uttam Nagar Pricing — Transparent &amp; Affordable</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff3e8] to-[#fffaf5]" : "border-amber-100 bg-white"}`}>
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
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Your Spa in Uttam Nagar Questions, Answered</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-white p-5">
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
      </section>

      {/* Other Spa Locations */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Other Locations</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Spa Locations Across Delhi NCR</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not based in Uttam Nagar? We run 24+ outlets across Delhi NCR — find the one closest to you.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Spa in Janakpuri", href: "/spa-in-janakpuri" },
              { title: "Spa in Dwarka", href: "/spa-in-dwarka" },
              { title: "Spa in Rajouri Garden", href: "/spa-in-rajouri-garden" },
              { title: "Spa in Karol Bagh", href: "/spa-in-karol-bagh" },
              { title: "Spa in Connaught Place", href: "/spa-in-connaught-place" },
              { title: "Spa in Rohini", href: "/spa-in-rohini" },
              { title: "Spa in Paharganj", href: "/spa-in-paharganj" },
              { title: "Spa in Saket", href: "/spa-in-saket" },
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
        <div className="rounded-[32px] bg-gradient-to-r from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Book the Best Spa in Uttam Nagar — Today</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in near the metro, or connect with us for a home or hotel spa booking anywhere in Uttam Nagar and West Delhi.</p>
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
