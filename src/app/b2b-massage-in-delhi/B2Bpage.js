"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCrown,
  FaHandSparkles,
  FaHotel,
  FaInfoCircle,
  FaRupeeSign,
  FaSpa,
  FaStar,
  FaTelegram,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import WhatsappFloat from "../components/WhatsappFloat";

const topDelhiLocations = [
  { name: "Connaught Place", image: "/images/spa-in-Connaught-place.png" },
  { name: "Karol Bagh", image: "/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg" },
  { name: "Paharganj", image: "/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg" },
  { name: "Rohini", image: "/images/fpkdl.com_960_1758981900_woman-getting-back-massage-from-masseur_23-2150461404.jpg" },
  { name: "Dwarka", image: "/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg" },
  { name: "Saket", image: "/images/Reflexology.jpg" },
  { name: "Aerocity", image: "/images/ibis-new-delhi-aerocity.jpg" },
  { name: "Lajpat Nagar", image: "/images/spa-in-lajpat-nagar.webp" },
  { name: "Rajouri Garden", image: "/images/spa-in-Rajouri-Garden.webp" },
  { name: "Vasant Kunj", image: "/images/pexels-olly-3673941.jpg" },
  { name: "Greater Kailash", image: "/images/SkincareTreatments.jpg" },
  { name: "Pitampura", image: "/images/spa-in-pitampura.png" },
];

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Stress Relief & Relaxation",
    desc: "Our B2B massage in Delhi reduces stress and anxiety the natural way — gentle, controlled strokes that calm the nervous system.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Improved Blood Circulation",
    desc: "The warmth and pressure of a genuine B2B massage boosts circulation, leaving your whole body feeling noticeably more energetic.",
  },
  {
    icon: <FaHotel className="text-2xl text-rose-500" />,
    title: "24+ Outlets Across Delhi NCR",
    desc: "From Karol Bagh to Connaught Place, Dwarka, and Saket — plus home and hotel spa options anywhere in the city.",
  },
];

const services = [
  { title: "Full Body Massage", desc: "A classic head-to-toe session using smooth, flowing strokes for complete relaxation.", href: "/full-body-massage-in-delhi" },
  { title: "Deep Tissue Massage", desc: "Firm, focused pressure that targets chronic knots and stiffness in tight muscles.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Couples Massage", desc: "One private room, two therapists — a shared spa experience for two.", href: "/couple-massage" },
  { title: "Thai Massage", desc: "Traditional stretching and pressure-point technique for deep, active relaxation.", href: "/thai-massage-in-delhi" },
  { title: "Swedish Massage", desc: "Long, gliding strokes designed to ease tension and improve circulation.", href: "/swedish-massage-in-delhi" },
  { title: "Sandwich Massage", desc: "A two-therapist session that delivers deeper relaxation and faster stress relief.", href: "/sandwich-massage" },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private B2B massage session at any of our 24+ Delhi NCR outlets.", features: ["Signature B2B Technique", "Premium Oils", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home B2B Spa", price: "₹15000", desc: "Genuine B2B massage at home in Delhi, delivered anywhere across Delhi NCR.", features: ["Signature B2B Technique", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel B2B Spa", price: "₹20000", desc: "A longer, more indulgent session at your hotel — popular with guests staying at Delhi's five-star properties.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "Is there a B2B massage spa in Delhi?", answer: "Yes, Luxury Russian Spa operates 24+ B2B massage spa locations across Delhi and Delhi NCR, including Karol Bagh, Connaught Place, Dwarka, and Saket, alongside home and five-star hotel spa options." },
  { question: "What happens in a B2B massage?", answer: "After a short consultation about your preferences, your therapist applies premium oils and uses a signature full body technique with smooth, controlled movements — performed in a private, closed room from start to finish." },
  { question: "Are B2B massages legal in India?", answer: "Yes, B2B massage is a legal wellness treatment in India when offered by a professional, licensed spa following proper hygiene and conduct standards. Read our detailed guide on whether B2B massage is legal in India for the full picture." },
  { question: "What does a B2B massage include?", answer: "A standard session includes a consultation, full body massage using premium aromatherapy-grade oils, and a private room for the full duration — with optional add-ons like aromatherapy or a facial depending on your package." },
  { question: "How much does a B2B massage cost in Delhi?", answer: "A B2B massage at our Delhi outlets starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and five-star hotel spa from ₹20,000, depending on duration and location." },
  { question: "Do you provide B2B massage at hotels in Delhi?", answer: "Yes, we regularly serve guests at five-star hotels across Delhi, including Andaz, The Park, The Suryaa, and JW Marriott — just share your hotel and room details when booking." },
  { question: "Do you have Russian or other foreign therapists for B2B massage?", answer: "Yes, our Russian, Thai, and Uzbek therapists are available for B2B sessions alongside our experienced Indian staff, depending on the package you choose." },
  { question: "Do you offer full body massage by a female therapist in Delhi?", answer: "Yes, full body massage by a female therapist in Delhi is available at all our outlets, along with male and female therapist options — just mention your preference when booking." },
];

export default function B2Bpage() {
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
              <FaStar className="text-amber-500" /> SIGNATURE TREATMENT
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Best B2B Massage in <span className="text-amber-700">Delhi</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for the best B2B massage in Delhi? Our signature technique is available at 24+ outlets across Delhi NCR — from Connaught Place to Dwarka, Saket, and near IGI Airport — plus B2B massage at home and five-star hotel spa options. Certified therapists, premium oils, fully private rooms. First visit from ₹1999.
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
              {[["24+", "Outlets in Delhi NCR"], ["4.9/5", "Guest comfort rating"], ["24/7", "Booking support"]].map(([value, label], index) => (
                <div key={index} className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-xl font-bold text-amber-700">{value}</p>
                  <p className="mt-1 text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Wondering about the legality of B2B massage?{" "}
              <Link href="/is-b2b-massage-legal-in-india" className="font-semibold text-amber-700 underline">Read our guide on Is B2B Massage Legal in India</Link>.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative flex items-center">
            <div className="w-full rounded-[32px] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative h-[410px] overflow-hidden rounded-[24px]">
                <Image src="/images/fpkdl.com_960_1758982727_woman-getting-back-massage-from-female-masseur_23-2150461428.jpg" alt="Therapist giving a B2B massage in Delhi" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What Makes Our B2B Massage in Delhi Different?</h2>
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

      {/* Simple about section */}
      <section className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#1f1a17] md:text-4xl">Delhi's Trusted B2B Massage Spa</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              A B2B massage in Delhi is a signature technique using premium oils and controlled, smooth movements — built for genuine deep relaxation, not a rushed rubdown. Book at any of our{" "}
              <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>{" "}
              — Karol Bagh, Connaught Place, Dwarka, Saket, or near IGI Airport.
            </p>
            <p>
              Staying at a hotel or would rather not travel? We send a therapist straight to your room, anywhere in Delhi NCR. Curious about the legal side of things?{" "}
              <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">Read our legal guide</Link>{" "}
              before booking — or see our{" "}
              <Link href="/b2b-massage-in-connaught-place" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage in Connaught Place</Link>{" "}
              page for our Rajiv Chowk-area outlet in detail.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">Premium Wellness Experience</span>
          <h2 className="mt-4 text-3xl font-bold text-[#1f1a17] md:text-4xl">Why Choose Luxury Russian Spa for B2B Massage?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-700">
            Luxury Russian Spa is a trusted name for B2B massage in Delhi. We focus on authentic technique, premium ingredients, and personalized care that revitalizes your mind and body.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col">
            <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl text-amber-700"><FaUser /></div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f1a17]">Expert Therapists</h3>
                  <p className="mt-1 text-amber-700">Trained hands, genuine care, every session.</p>
                </div>
              </div>
              <p className="text-gray-700">
                Our therapists are trained in authentic B2B technique with over 10 years of experience across our{" "}
                <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ Delhi NCR outlets</Link>. Every session is performed with proper hygiene and careful control, so it feels genuinely relaxing rather than rushed. We respect your comfort and privacy at every step, from consultation to checkout.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["10+ Years Experience", "Signature Technique", "Certified Therapists"].map((tag) => (
                  <span key={tag} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative mt-6 h-64 flex-1 overflow-hidden rounded-2xl shadow-sm">
              <Image src="/images/staff2.jpg" alt="Expert B2B massage therapist in Delhi" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col">
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-sm">
              <Image src="/images/staff3.jpg" alt="Premium oils used for B2B massage in Delhi" fill className="object-cover" />
            </div>
            <div className="mt-6 flex-1 rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl text-amber-700"><FaInfoCircle /></div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f1a17]">Premium Oils &amp; Blends</h3>
                  <p className="mt-1 text-amber-700">Aromatherapy-grade, chosen for you.</p>
                </div>
              </div>
              <p className="text-gray-700">
                We use premium, aromatherapy-grade massage oils selected for skin comfort and smooth movement — your therapist can adjust based on any preference or sensitivity. The right blend makes every B2B massage in Delhi feel more complete, not just physically but as a proper reset.
              </p>
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-amber-800">Signature Oil Blends</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                  {["Lavender Dream", "Eucalyptus Renewal", "Rosemary Harmony", "Sandalwood Serenity", "Jasmine Bliss", "Frankincense Balance"].map((oil) => (
                    <div key={oil} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> {oil}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Therapists */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Meet Our Therapists</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Trained Hands Behind Every Session</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">A mix of skilled Indian and international therapists, so you get real variety in technique.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { role: "Senior B2B Therapist", specialty: "Signature Technique", experience: "10+ yrs", image: "/images/staff7.jpg" },
              { role: "International Therapist", specialty: "Russian & Thai Style", experience: "6+ yrs", image: "/images/staff12.jpg" },
              { role: "Full Body Specialist", specialty: "Deep Tissue & Swedish", experience: "8+ yrs", image: "/images/staff2.jpg" },
              { role: "Wellness Therapist", specialty: "Aromatherapy Blends", experience: "5+ yrs", image: "/images/staff3.jpg" },
            ].map((t, index) => (
              <motion.div
                key={t.role}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative h-80 overflow-hidden rounded-[24px] shadow-lg"
              >
                <Image src={t.image} alt={`${t.role} at Luxury Russian Spa`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
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
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Explore Our Massage Services in Delhi</h2>
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
      </section>

      {/* Hygiene & Amenities */}
      <section className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1f1a17] md:text-4xl">100% Hygienic &amp; Professional Spa in Delhi — Your Safety First</h2>
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

      {/* Delhi locations showcase — dark overlay tile grid */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Delhi's Top Locations</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">B2B Massage Across Delhi's Top Locations</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">We serve outlets, homes, and hotels across every major Delhi location — wherever you're staying, we can reach you.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {topDelhiLocations.map((loc) => (
              <motion.a
                key={loc.name}
                href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                target="_blank"
                rel="noopener noreferrer"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group relative block h-32 overflow-hidden rounded-2xl shadow-lg"
              >
                <Image src={loc.image} alt={`B2B massage in ${loc.name}, Delhi`} fill className="object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f09] via-[#1c0f09]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-sm font-bold uppercase tracking-wide text-white">{loc.name}</p>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/outlets" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              View All Outlets <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">B2B Massage in Delhi Pricing — Transparent &amp; Affordable</h2>
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
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Your B2B Massage Questions, Answered</h2>
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

      {/* More Services */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">More Massage Services in Delhi</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Looking for something specific? Explore our other massage services across Delhi NCR.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Full Body Massage in Delhi", href: "/full-body-massage-in-delhi" },
              { title: "Deep Tissue Massage in Delhi", href: "/deep-tissue-massage-in-delhi" },
              { title: "Couples Massage in Delhi", href: "/couple-massage" },
              { title: "Thai Massage in Delhi", href: "/thai-massage-in-delhi" },
              { title: "Swedish Massage in Delhi", href: "/swedish-massage-in-delhi" },
              { title: "Sandwich Massage in Delhi", href: "/sandwich-massage" },
              { title: "Aromatherapy Massage in Delhi", href: "/aromatherapy-massage-in-delhi" },
              { title: "B2B Massage in Connaught Place", href: "/b2b-massage-in-connaught-place" },
              { title: "Spa Price in Delhi", href: "/spa-price-in-delhi" },
              { title: "All Massage Services in Delhi", href: "/massage-in-delhi" },
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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[32px] bg-gradient-to-r from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your session</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Book the Best B2B Massage in Delhi — Today</h3>
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
