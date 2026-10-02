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
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Traditional stretching technique",
    desc: "Genuine Thai massage combines acupressure and assisted stretching, not just kneading — a proper full-body reset.",
  },
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Minutes from Central Market",
    desc: "Close to Lajpat Nagar Metro Station, easy to reach whether you're coming from a shopping trip or heading home from work.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Certified, experienced therapists",
    desc: "Trained specifically in Thai stretching and pressure technique, so the session actually improves flexibility, not just relaxes you.",
  },
];

const benefits = [
  { title: "Improved Flexibility", desc: "The assisted stretching in Thai massage loosens tight joints and muscles more than a standard oil massage ever could, especially in the hips and shoulders." },
  { title: "Better Circulation", desc: "Rhythmic pressure along the body's energy lines encourages healthy blood flow from head to toe, leaving your whole body feeling lighter." },
  { title: "Relief From Shopping Fatigue", desc: "A long day walking through Central Market leaves your legs and back stiff — Thai massage targets exactly that kind of full-body tiredness rather than one isolated spot." },
  { title: "Stress Relief", desc: "The combination of stretching and steady pressure calms the nervous system as much as it works the muscles, leaving you noticeably more relaxed." },
  { title: "Joint Mobility", desc: "Regular sessions keep hips, shoulders, and knees moving more freely, especially useful if you're on your feet a lot or sit at a desk most of the week." },
  { title: "A Different Kind of Relaxation", desc: "If Swedish massage feels too passive for you, Thai massage's active stretching style is a genuinely different, more engaging experience." },
];

const nearbyAreas = [
  { title: "Eros Hotel", image: "/images/ErosHotel_lajpatnagar.jpg", description: "Staying at Eros Hotel? We can send a therapist straight to your room for an in-room Thai massage." },
  { title: "The Oberoi, New Delhi", image: "/images/TheOberoi_lajpatnagar.jpg", description: "A short drive from The Oberoi — hotel spa bookings available if you'd rather not travel to our outlet." },
  { title: "Crowne Plaza", image: "/images/crowne-plaza-lajpatnagar.jpg", description: "Guests at Crowne Plaza can book our Lajpat Nagar outlet or request a therapist directly to their room." },
  { title: "Taj Mahal Hotel", image: "/images/tajmahalhotel_lajpatnagar.jpg", description: "Close to the Taj Mahal Hotel, with hotel spa sessions available on request." },
];

const processSteps = [
  { number: "01", title: "Tell us your goal", text: "Flexibility, relaxation, or both — let us know so your therapist can adjust the stretching intensity.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Warm-up stretches", text: "Your session starts with gentle stretching to prepare your joints before deeper work begins.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Full traditional session", text: "Acupressure and assisted stretching along the body's energy lines, start to finish.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Thai Massage Outlet", price: "₹1999", desc: "A traditional Thai session at our Lajpat Nagar outlet, close to Central Market.", features: ["Acupressure & Stretching", "Warm Oil Add-on", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Thai Spa", price: "₹15000", desc: "The same traditional technique delivered to your home anywhere near Lajpat Nagar.", features: ["Full Body Technique", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Thai Spa", price: "₹20000", desc: "A longer, more thorough Thai session at your hotel with added treatments.", features: ["Foreign Therapist", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is the first visit offer for Thai massage in Lajpat Nagar?", answer: "Our Thai massage in Lajpat Nagar starts at just ₹1999 for a first-visit outlet session, close to Central Market." },
  { question: "Is your Thai massage spa near Lajpat Nagar Metro Station?", answer: "Yes, our outlet is a short walk from Lajpat Nagar Metro Station, easy to reach from Central Market, Moolchand, and Defence Colony." },
  { question: "Is Thai massage painful?", answer: "Thai massage involves firm pressure and stretching, so you may feel intensity in tight areas, but it should never be sharply painful. Your therapist adjusts to your comfort throughout." },
  { question: "How is Thai massage different from a regular full body massage?", answer: "Thai massage combines acupressure and assisted stretching along the body's energy lines, improving flexibility as well as relaxation — a regular massage focuses mainly on kneading muscles." },
  { question: "Do you have Russian or other foreign therapists trained in Thai technique?", answer: "Yes, our Russian, Thai, and Uzbek therapists are trained in traditional Thai stretching alongside our experienced Indian staff, with sessions available from ₹2,800." },
  { question: "Can I book a night Thai massage appointment in Lajpat Nagar?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
  { question: "Do you offer home Thai massage near Lajpat Nagar?", answer: "Yes, alongside our outlet, we send a therapist to your home anywhere in and around Lajpat Nagar for the same traditional technique." },
  { question: "How much does a Thai massage cost in Lajpat Nagar?", answer: "A Thai massage at our Lajpat Nagar outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹15,000 depending on duration." },
];

export default function ThaiMassageLajpatNagarPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> LAJPAT NAGAR OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Thai Massage in <span className="text-amber-700">Lajpat Nagar</span> Near Central Market
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Our Thai massage in Lajpat Nagar brings genuine traditional stretching and acupressure technique to South Delhi's busiest shopping district — a short walk from Central Market and Lajpat Nagar Metro Station, performed by certified therapists. First visit from ₹1999.
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
                <Image src="/images/lajpatnagar.jpg" alt="Thai massage session in Lajpat Nagar" fill className="object-cover" />
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why This Combination Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Traditional Thai technique, right where South Delhi shops.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Thai Massage in Lajpat Nagar — Technique, Pricing & What to Expect</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/fpkdl.com_960_1758980524_tranquil-oasis-with-plush-massage-table-adorned-with_1126694-2523.jpg" alt="Traditional Thai massage technique in Lajpat Nagar" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Active Stretching, Not Just Kneading</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Unlike a standard oil massage, <Link href="/thai-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Thai massage</Link> combines acupressure with assisted stretching, working the whole body actively.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Minutes From Central Market</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Close to Lajpat Nagar Metro, Moolchand, and Defence Colony. First visit from ₹1999, with home and hotel spa options too.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Real Thai-Trained Therapists</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our Russian, Thai, and Uzbek therapists specialise in traditional stretching technique — not a Swedish routine with a different label.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">What First-Timers Should Know</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Wear loose, stretchy clothing. Mention any joint issues or old injuries so your therapist can adjust intensity accordingly.
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Thai Massage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">A different kind of relief.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <motion.div key={b.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Thai Massage Delivered to Your Lajpat Nagar Hotel Room</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our Lajpat Nagar outlet offers? Visit our <Link href="/spa-in-lajpat-nagar" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Lajpat Nagar</Link> page for all services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Hotel spa near ${area.title} Lajpat Nagar`} fill className="object-cover transition duration-500 group-hover:scale-105" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">From booking to a proper stretch and reset.</h2>
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
      </section>

      <section id="Pricing" className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Transparent pricing for every visit.</h2>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Luxury Russian Spa</p>
          <h2 className="mt-3 text-2xl font-bold text-[#1f1a17] md:text-3xl">The most trusted Thai massage in Lajpat Nagar.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            More than a decade of experience, with{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. Genuine Thai technique takes real training to get right — done poorly, it's just uncomfortable stretching with no real benefit. Our therapists have put in the hours to actually know the difference.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            If you'd like to explore other treatments while you're in the area, our{" "}
            <Link href="/spa-in-lajpat-nagar" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Lajpat Nagar page</Link>{" "}
            covers the full range, from full body to B2B and sandwich massage.
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

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Related Services & Locations</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Spa in Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
            { title: "Thai Massage in Delhi", href: "/thai-massage-in-delhi" },
            { title: "Deep Tissue Massage", href: "/deep-tissue-massage-in-delhi" },
            { title: "Swedish Massage", href: "/swedish-massage-in-delhi" },
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
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Stretch it out in Lajpat Nagar today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Whether it's your outlet, hotel, or home, our therapists bring traditional Thai technique to you.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f1a17] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+yulqEcJa2dxhM2I9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
