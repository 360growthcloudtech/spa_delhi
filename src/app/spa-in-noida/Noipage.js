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
    title: "Genuine Massage Spa in Noida",
    desc: "A real massage spa in Noida — trained therapists, premium oils, and a private room for every session.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Covers Every Sector & Greater Noida",
    desc: "From Sector 18 to Sector 104 and out to Greater Noida, our outlets and home spa keep you covered.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Hotel Spa at Top Noida Properties",
    desc: "In-room body spa in Noida at Radisson Blu, Crowne Plaza, and other leading hotels — no need to leave your room.",
  },
];

const services = [
  { title: "Full Body Massage", desc: "A classic head-to-toe session using smooth, flowing strokes — the most-booked treatment at our Noida spa centre.", href: "/full-body-massage-in-delhi" },
  { title: "B2B Massage", desc: "A specialised, full-contact therapy performed with premium oils for genuinely deep relaxation.", href: "/b2b-massage-in-delhi" },
  { title: "Aromatherapy Massage", desc: "Scented essential oils paired with massage technique for a calmer, more sensory session.", href: "/aromatherapy-massage-in-noida" },
  { title: "Couples Massage", desc: "One private room, two therapists — a genuinely shared spa experience for two.", href: "/couples-massage-in-delhi" },
  { title: "Deep Tissue Massage", desc: "Firm, focused pressure that targets chronic knots in the back, neck, and shoulders.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Sandwich Massage", desc: "A two-therapist session that delivers deeper relaxation and faster stress relief.", href: "/sandwich-massage-in-delhi" },
];

const luxuryHotels = [
  {
    name: "Radisson Blu MBD Hotel, Noida",
    location: "Noida",
    image: "/images/Radisson_Blu_MBD_Hotel,_Noida.jpg",
    desc: "Staying at Radisson Blu? We send a therapist straight to your room for a private body spa in Noida.",
  },
  {
    name: "Sandal Suites by Lemon Tree Hotels, Noida",
    location: "Noida",
    image: "/images/SandalSuitesbyLemonTreeHotels_Noida.jpg",
    desc: "A short drive from Sandal Suites — hotel spa bookings available if you'd rather not travel to our outlet.",
  },
  {
    name: "Crowne Plaza, Greater Noida",
    location: "Greater Noida",
    image: "/images/Crowne_Plaza_Greater_Noida.jpg",
    desc: "Guests at Crowne Plaza can book our spa in Greater Noida or request a therapist directly to their room.",
  },
  {
    name: "Jaypee Greens Golf & Spa Resort, Greater Noida",
    location: "Greater Noida",
    image: "/images/Jaypee_Greens_Golf_Spa_Resort_Greater_Noida.jpg",
    desc: "Close to Jaypee Greens, with discreet, private hotel spa sessions available on request.",
  },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private massage session at our Noida spa centre.", features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Spa in Noida", price: "₹15000", desc: "The same genuine massage delivered to your home anywhere in Noida.", features: ["Therapist of Choice", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Spa", price: "₹20000", desc: "A longer, more indulgent session at your hotel in Noida or Greater Noida.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "Do you have a massage spa in Noida?", answer: "Yes, we operate a genuine massage spa in Noida with certified therapists, private rooms, and multiple treatment options including full body, B2B, and aromatherapy massage." },
  { question: "Is there a spa in Greater Noida?", answer: "Yes, our spa in Greater Noida serves hotels like Crowne Plaza and Jaypee Greens, along with home spa bookings across the area." },
  { question: "Do you offer spa services in Noida Sector 18?", answer: "Yes, our spa in Noida Sector 18 is available by female and male therapists, offering top-notch massage service in a private, hygienic room." },
  { question: "What is included in a body spa in Noida?", answer: "A body spa in Noida session includes a consultation, full body massage using premium oils, and a private room for the full duration — with optional add-ons like aromatherapy." },
  { question: "How much does a massage spa in Noida cost?", answer: "Sessions at our spa centre in Noida start from ₹1999 for the first visit. Home spa starts from ₹15,000 and five-star hotel spa from ₹20,000, depending on duration." },
  { question: "Do you provide home spa service in Noida?", answer: "Yes, we offer home spa in Noida at affordable prices with certified, well-trained therapists visiting your address." },
  { question: "Which hotels in Noida offer your spa service?", answer: "We're available at Radisson Blu, Sandal Suites by Lemon Tree, Crowne Plaza Greater Noida, and Jaypee Greens Golf & Spa Resort, among others." },
  { question: "Can I book a night appointment at your massage spa in Noida?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
];

export default function Noipage() {
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
              <FaStar className="text-amber-500" /> NOIDA OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#113435] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Noida</span> — Sector 18 to Greater Noida
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a genuine massage spa in Noida? Spa Delhi runs a trusted spa centre in Noida covering Sector 18, Sector 62, Greater Noida, and every major hotel in between — plus home spa options anywhere in the city. Certified therapists, private rooms. First visit from ₹1999.
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
                <Image src="/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg" alt="Therapist giving a massage at our spa in Noida" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Experience the Best Spa in Noida &amp; Greater Noida</h2>
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

      {/* Sector-by-sector coverage — targets each long-tail sector search individually */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Sector-Wise Coverage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Book Spa in Noida — Sector 18, 62, 63, 104 &amp; Greater Noida</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Outlet, home spa, and hotel spa — the same standard, wherever you are in Noida or Greater Noida.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { sector: "Spa in Noida Sector 18", desc: "Minutes from the Sector 18 market, home to some of Noida's busiest hotels and offices." },
            { sector: "Spa in Noida Sector 50", desc: "Covered by the same certified therapists and hygiene standard as our outlet." },
            { sector: "Spa in Noida Sector 52", desc: "A short ride from our outlet, popular with residents and offices nearby." },
            { sector: "Spa in Noida Sector 62", desc: "Close to the IT and corporate hub, with home spa visits to your office or residence." },
            { sector: "Spa in Noida Sector 63", desc: "Serving the industrial and residential belt with outlet, home, and hotel spa options." },
            { sector: "Spa in Noida Sector 104", desc: "Near the Noida Expressway, with quick home spa booking to your exact address." },
            { sector: "Spa in Greater Noida", desc: "Serving Crowne Plaza, Jaypee Greens, and homes across Greater Noida West." },
          ].map((item) => (
            <motion.div key={item.sector} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-[#113435]">{item.sector}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sector 18 spotlight — image collage + signature treatments */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 overflow-hidden rounded-[32px] border border-amber-100 bg-white p-6 shadow-lg lg:grid-cols-2 lg:items-center lg:p-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative min-h-[420px]">
            <div className="absolute left-0 top-0 z-10 w-40">
              <p className="font-serif text-lg text-[#113435]">Luxury Spa with</p>
              <p className="font-serif text-3xl italic text-amber-700">Luxury Hotel</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">Luxury Spa Outlet in 5-Star Hotels</p>
            </div>

            <div className="absolute right-0 top-0 w-[55%] overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 p-2 shadow-xl sm:w-[60%]">
              <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40">
                <Image src="/images/Radisson_Blu_MBD_Hotel,_Noida.jpg" alt="Luxury hotel spa in Noida" fill className="object-cover" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-64 w-[65%] overflow-hidden rounded-[24px] border-4 border-white shadow-xl sm:h-72">
              <Image src="/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg" alt="Massage spa in Noida Sector 18" fill className="object-cover" />
            </div>

            <div className="absolute bottom-4 right-0 text-5xl text-amber-200/70" aria-hidden="true">✿</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-6 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">1st Visit @ ₹1999</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Best Massage Spa in Noida Sector 18</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Looking for a spa in Noida Sector 18? Our spa centre sits close to Sector 18's malls and corporate hubs, offering calm interiors, soothing music, and premium aromatic oils. Whether it's after a hectic workday or a weekend outing, our massage spa in Noida ensures complete rejuvenation.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Our therapists are trained professionals from India and abroad, specialising in traditional and modern massage technique. Whether you prefer a gentle aromatherapy massage, an invigorating deep tissue massage, or a full body massage, every session is personalised to your body's needs.
            </p>
            <h3 className="mt-6 font-semibold text-[#113435]">Signature Treatments:</h3>
            <ul className="mt-3 grid gap-2 text-gray-700 sm:grid-cols-2">
              {["Full Body Massage", "Deep Tissue Massage", "Thai Massage", "Aromatherapy Massage", "B2B Massage", "Sandwich Massage"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-600" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              <FaTelegram /> Join Telegram Channel
            </a>
          </motion.div>
        </div>
      </section>

      {/* Simple about section */}
      <section className="bg-[#e6f7f6] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#113435] md:text-4xl">Relax &amp; Rejuvenate at the Best Massage Spa in Noida</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Our spa centre in Noida offers a full range of treatments, from a relaxing full body massage to a specialised B2B massage session. Whether you want a body spa in Noida near Sector 18, a session in Sector 62 or 104, or a quick body spa in Noida between meetings, our massage spa in Noida covers it all.
            </p>
            <p>
              Searching for a spa near Noida? Our outlet is easy to reach from across the city, with home and hotel spa options extending all the way to Greater Noida. Our booking desk runs 24/7 — message us anytime and we'll confirm your session in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Why Choose Spa Delhi in Noida?</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Choosing a spa is about more than booking a massage. At our Noida outlet, we focus on creating a calm, comfortable experience wherever you are in the city.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Whether you're near Sector 18, working out of Sector 62, or based further out in Greater Noida, our spa experience is built around your comfort.
            </p>
            <h3 className="mt-6 font-semibold text-[#113435]">Why guests choose us:</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><span className="font-semibold text-[#113435]">Experienced Therapists</span> — Professional care, including foreigner therapists, with attention to your comfort and preferences.</li>
              <li><span className="font-semibold text-[#113435]">Range of Massage Therapies</span> — Full body, B2B, deep tissue, and more, suited to different relaxation needs.</li>
              <li><span className="font-semibold text-[#113435]">Clean &amp; Private Spaces</span> — Comfortable treatment rooms for a peaceful spa experience.</li>
              <li><span className="font-semibold text-[#113435]">Citywide Coverage</span> — From Sector 18 to Greater Noida, the same certified team and standard.</li>
              <li><span className="font-semibold text-[#113435]">Home Spa in Noida</span> — Same quality treatment delivered to your address anywhere in the city.</li>
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

      {/* Meet Our Therapists */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Meet Our Therapists</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Meet Our Expert Massage Therapists in Noida</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A mix of skilled Indian and foreigner therapists, so you get real variety in technique.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { role: "Senior Massage Therapist", specialty: "Full Body & Deep Tissue", experience: "8+ yrs", image: "/images/staff4.jpg" },
            { role: "Foreigner Therapist", specialty: "Aromatherapy & Thai", experience: "6+ yrs", image: "/images/staff9.jpg" },
            { role: "B2B Massage Specialist", specialty: "Full-Contact Technique", experience: "7+ yrs", image: "/images/staff7.jpg" },
            { role: "Wellness Therapist", specialty: "Foot & Body Relief", experience: "5+ yrs", image: "/images/staff12.jpg" },
          ].map((t, index) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative h-80 overflow-hidden rounded-[24px] shadow-lg"
            >
              <Image src={t.image} alt={`${t.role} at Spa Delhi Noida`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
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
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Explore Our Massage Services in Noida</h2>
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
          <h2 className="text-3xl font-bold text-[#113435] md:text-4xl">100% Hygienic &amp; Professional Spa in Noida — Your Safety First</h2>
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

      {/* Real hotel showcase */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Hotels We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">In-Room Body Spa at Noida &amp; Greater Noida Hotels</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Staying at one of these hotels? We send a therapist straight to your room.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {luxuryHotels.map((hotel) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={hotel.image} alt={`Spa near ${hotel.name}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#113435]">{hotel.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-600">{hotel.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{hotel.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#e6f7f6] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Spa in Noida Pricing — Transparent &amp; Affordable</h2>
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Your Spa in Noida Questions, Answered</h2>
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

      {/* Other Spa Locations */}
      <section className="bg-[#edf9f8] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Other Locations</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Spa Locations Across Delhi NCR</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not based in Noida? We run 24+ outlets across Delhi NCR — find the one closest to you.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Spa in Gurgaon", href: "/spa-in-gurgaon" },
              { title: "Spa in Connaught Place", href: "/spa-in-connaught-place" },
              { title: "Spa in Karol Bagh", href: "/spa-in-karol-bagh" },
              { title: "Spa in Rohini", href: "/spa-in-rohini" },
              { title: "Spa in Paharganj", href: "/spa-in-paharganj" },
              { title: "Spa in Dwarka", href: "/spa-in-dwarka" },
              { title: "Spa in Saket", href: "/spa-in-saket" },
              { title: "Spa in Aerocity", href: "/spa-in-aerocity" },
              { title: "Spa in Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
              { title: "Spa in Pitampura", href: "/spa-in-pitampura" },
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your session</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Book the Best Spa in Noida — Today</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk into our outlet, or have us come to your hotel or home anywhere in Noida and Greater Noida.</p>
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
