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

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Two therapists, one session",
    desc: "A sandwich massage means two therapists working in sync on both sides of your body at once — deeper relaxation in the same amount of time.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-teal-600" />,
    title: "Close to Cyber Hub",
    desc: "A short drive from Cyber Hub and MG Road, easy to fit in after work or between meetings.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified, coordinated therapists",
    desc: "Our sandwich massage teams train together so both therapists move in sync, not just working independently side by side.",
  },
];

const benefits = [
  { title: "Deeper Relaxation, Faster", desc: "Two therapists working in sync cover more ground in less time than a single-therapist session, so you leave more thoroughly relaxed." },
  { title: "Relief for Long Work Hours", desc: "Gurgaon's corporate pace means long days at a desk — a sandwich massage tackles tension on both sides of your body at once instead of one area at a time." },
  { title: "A Genuinely Different Experience", desc: "If you've had a standard massage before, the coordinated two-therapist technique feels noticeably different from the very first few minutes." },
  { title: "Improved Circulation", desc: "The layered, synchronized strokes encourage healthy blood flow more thoroughly than a single-therapist session ever could." },
  { title: "Time-Efficient Relaxation", desc: "For busy professionals with limited free time, this is a way to get a more complete session without booking extra hours you don't have." },
  { title: "Premium, Memorable Experience", desc: "A popular choice for guests wanting something beyond a routine massage — genuinely worth trying at least once." },
];

const nearbyAreas = [
  { title: "Hyatt Regency Gurgaon", image: "/images/Hyatt_Regency_Gurgaon.jpg", description: "Staying at Hyatt Regency? We can send two therapists straight to your room for an in-room sandwich massage." },
  { title: "Radisson Gurgaon", image: "/images/Radisson_Gurgaon_Udyog_Vihar.jpg", description: "A short drive from Radisson, Udyog Vihar — hotel spa bookings available if you'd rather not travel." },
  { title: "The Oberoi, Gurgaon", image: "/images/The_Oberoi,_Gurgaon.jpg", description: "Guests at The Oberoi can book our outlet or request a coordinated two-therapist session in their room." },
  { title: "Trident, Gurgaon", image: "/images/Trident,_Gurgaon.jpg", description: "Close to Trident, with hotel spa sessions available on request for a premium, private experience." },
];

const processSteps = [
  { number: "01", title: "Book your slot", text: "Share your preferred time — evenings and weekends fill up fast in Gurgaon, so a little notice helps.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Meet both therapists", text: "A quick consultation with both therapists so they know exactly where to focus.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Synchronized session", text: "Two therapists work in coordinated rhythm on both sides of your body for the full session.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Sandwich Outlet", price: "₹2999", desc: "A synchronized two-therapist session at our Gurgaon outlet, close to Cyber Hub.", features: ["Two Therapists", "Oil or Cream Massage", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Sandwich Spa", price: "₹18000", desc: "The same two-therapist experience delivered to your home anywhere in Gurgaon.", features: ["Two Therapists", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Sandwich Spa", price: "₹25000", desc: "A longer, indulgent sandwich session at your Gurgaon hotel with added treatments.", features: ["Foreign Therapists", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is the first visit offer for sandwich massage in Gurgaon?", answer: "Our sandwich massage in Gurgaon starts at ₹2999 for a first-visit session at our outlet, close to Cyber Hub." },
  { question: "What exactly is a sandwich massage?", answer: "A sandwich massage involves two therapists working in sync on both sides of your body at once, delivering deeper, more layered relaxation than a single-therapist session." },
  { question: "Is your sandwich massage spa near Cyber Hub or MG Road?", answer: "Yes, our Gurgaon outlet is a short drive from Cyber Hub, MG Road, and Golf Course Road, making it an easy stop after work." },
  { question: "Do you have Russian or other foreign therapists for sandwich massage in Gurgaon?", answer: "Yes, our Russian, Thai, and Uzbek therapists are available for sandwich sessions alongside our experienced Indian staff, from ₹2,800 per therapist depending on the package." },
  { question: "Can I book a night sandwich massage appointment in Gurgaon?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
  { question: "Do you offer home sandwich massage near Gurgaon?", answer: "Yes, alongside our outlet, we send two therapists to your home anywhere in and around Gurgaon for the same synchronized experience." },
  { question: "Is sandwich massage worth trying if I've never had one?", answer: "Most first-timers say it's noticeably different from a standard massage — the coordinated, two-therapist technique is worth trying at least once." },
  { question: "How much does a sandwich massage cost in Gurgaon?", answer: "A sandwich massage at our Gurgaon outlet starts from ₹2999 for the first visit. Home and hotel packages start from ₹18,000 depending on duration." },
];

export default function SandwichMassageGurgaonPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> GURGAON OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Sandwich Massage in <span className="text-amber-700">Gurgaon</span> Near Cyber Hub
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Our sandwich massage in Gurgaon brings a genuinely different kind of relaxation to the city's corporate district — two therapists working in sync, minutes from Cyber Hub and MG Road. First visit from ₹2999.
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
                <Image src="/images/Hyatt_Regency_Gurgaon.jpg" alt="Sandwich massage session in Gurgaon" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="font-semibold text-amber-700">₹2999 first visit</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why This Combination Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">A premium experience for Gurgaon's corporate pace.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f1a17]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">The Full Picture</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Sandwich Massage in Gurgaon — What It Is & Why It Fits Here</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Two Therapists, Twice the Depth</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our <Link href="/sandwich-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">sandwich massage</Link> is built for people who want a genuinely deeper session without sitting twice as long.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Close to Cyber Hub</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  A short drive from Cyber Hub, MG Road, Golf Course Road, and Udyog Vihar. First visit from ₹2999, home and hotel spa available.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Genuinely Coordinated Teams</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our sandwich teams train together, not two therapists who just happen to share a room. Russian, Thai, and Uzbek therapists available on request.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">First Time? Don't Overthink It</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  It takes a few minutes to adjust to two sets of hands at once — then it just feels like a more complete, efficient massage.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg" alt="Sandwich massage technique in Gurgaon" fill className="object-cover" />
            </motion.div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            We're used to short-notice bookings between meetings —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Sandwich Massage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">More relaxation, in the same amount of time.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1f1a17]">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff6ee] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">5-Star Hotels Nearby</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Sandwich Massage Delivered to Your Gurgaon Hotel Room</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our Gurgaon outlet offers? Visit our <Link href="/spa-in-gurgaon" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Gurgaon</Link> page for all services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Sandwich massage near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1f1a17]">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Fast to book, easy to fit around a busy schedule.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
              <div className="mb-3 text-amber-700">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f1a17]">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="Pricing" className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Transparent pricing, no surprises.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff3e8] to-[#fffaf5]" : "border-amber-100 bg-white"}`}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Luxury Russian Spa</p>
          <h2 className="mt-3 text-2xl font-bold text-[#1f1a17] md:text-3xl">The most trusted sandwich massage near Cyber Hub.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            More than a decade of experience, with{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. Coordinating two therapists for one guest takes real practice — our teams have been doing it long enough that the timing feels effortless from your side of the table.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            For the full range of services at our Gurgaon outlet beyond sandwich massage, our{" "}
            <Link href="/spa-in-gurgaon" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Gurgaon page</Link>{" "}
            has everything you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Everything before you book.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-[#fffaf5] p-5">
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

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Related Services & Locations</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Spa in Gurgaon", href: "/spa-in-gurgaon" },
            { title: "Sandwich Massage in Delhi", href: "/sandwich-massage-in-delhi" },
            { title: "Full Body Massage", href: "/full-body-massage-in-delhi" },
            { title: "B2B Massage", href: "/b2b-massage-in-delhi" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your session</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Experience it for yourself in Gurgaon.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Book our outlet, or have two therapists come straight to your home or hotel.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f1a17] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
