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
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "A private room for two",
    desc: "One room, two therapists, working in sync — not two separate cubicles. You relax together, not just at the same time.",
  },
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Minutes from Select Citywalk",
    desc: "Perfect for a date that starts with a movie at PVR and ends with a proper wind-down, close to Select Citywalk Mall.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified, considerate therapists",
    desc: "Trained in Swedish and aromatherapy technique, so the pace stays calm and unhurried for both of you.",
  },
];

const benefits = [
  { title: "Shared Relaxation", desc: "You're both in the room together — a genuinely shared experience, not two solo sessions that happen to overlap in time." },
  { title: "Reduced Stress, Together", desc: "Unwinding side by side after a long week does something a solo massage just can't, especially when work has kept you both too busy to properly connect." },
  { title: "Quality Time", desc: "A quiet, screen-free hour that's genuinely rare in a normal week — no calls, no scrolling, no half-attention, just each other." },
  { title: "A Memorable Date", desc: "Pair it with Select Citywalk or a PVR showtime nearby for a full evening out that isn't just dinner and a movie again." },
  { title: "Muscle Tension Relief", desc: "Both partners get proper Swedish or deep tissue work from a dedicated therapist, not a watered-down version to accommodate two people at once." },
  { title: "A Private, Judgement-Free Space", desc: "Our couple rooms are fully private — just the two of you and your therapists, with the door closed for the entire session." },
];

const nearbyAreas = [
  {
    title: "Select Citywalk",
    image: "/images/Couple Massage.webp",
    description: "Located inside Saket itself — pair your couple massage with a movie or dinner at Select Citywalk without leaving the neighbourhood.",
  },
  {
    title: "MGF Metropolitan Mall",
    image: "/images/fpkdl.com_960_1758982921_two-female-friends-relaxing-spa-holding-cocktails_1157-49807.jpg",
    description: "A few minutes from MGF Metropolitan Mall, right here in Saket — easy to fit in before or after a shopping trip.",
  },
  {
    title: "The Suryaa New Delhi",
    image: "/images/TheSuryaaNewDelhi(NFC).webp",
    description: "Staying at The Suryaa? We can send two therapists straight to your room for an in-room couple massage.",
  },
  {
    title: "Saket Metro Station",
    image: "/images/fpkdl.com_960_1758982027_two-asian-young-woman-friends-lying-down-relaxing-massage-bed-prepared_470400-431.jpg",
    description: "Steps from Saket Metro Station on the Yellow Line, making our outlet easy to reach without a car.",
  },
];

const processSteps = [
  { number: "01", title: "Pick your slot", text: "Tell us your preferred day and time — weekday evenings and weekends are both popular, so a little notice helps.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Choose your styles", text: "You and your partner can each pick a technique — Swedish for one, deep tissue for the other, no need to match.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Relax, together", text: "Settle into the private room and let two therapists work in sync while you actually enjoy the moment.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Couple Outlet", price: "₹3999", desc: "A private couple room at our Saket outlet, near Select Citywalk.", features: ["Two Therapists", "Private Room", "Oil or Cream Massage", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Couple Spa", price: "₹18000", desc: "The same couple experience delivered to your home anywhere near Saket.", features: ["Two Therapists", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Couple Spa", price: "₹25000", desc: "A longer, indulgent couple session at your hotel with added treatments.", features: ["Foreign Therapists", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is the first visit offer for couple massage in Saket?", answer: "Our couple massage in Saket starts at ₹3999 for a first-visit session at our outlet, near Select Citywalk." },
  { question: "Is your couple spa near Select Citywalk Mall?", answer: "Yes, our Saket outlet is a short drive from Select Citywalk, so it's easy to combine a movie or dinner with your couple massage." },
  { question: "Do we get one room or two separate rooms?", answer: "One private room for both of you, with two therapists working at the same time — a genuinely shared experience, not two separate sessions." },
  { question: "Can each of us choose a different massage style?", answer: "Yes, you don't need to match — one partner can choose Swedish while the other goes for deep tissue, based on what each of you actually needs." },
  { question: "Do you have Russian or other foreign therapists for couple massage in Saket?", answer: "Yes, our Russian, Thai, and Uzbek therapists are available for couple sessions alongside our experienced Indian staff, from ₹2,800 per therapist depending on the package." },
  { question: "Can we book a night couple massage appointment in Saket?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
  { question: "Do you offer home couple massage near Saket?", answer: "Yes, alongside our outlet, we send two therapists to your home anywhere in and around Saket for the same private couple experience." },
  { question: "How much does a couple massage cost in Saket?", answer: "A couple massage at our Saket outlet starts from ₹3999 for the first visit. Home and hotel packages start from ₹18,000 depending on duration." },
  { question: "How long does a couple massage session last?", answer: "Our standard couple massage session runs 60 minutes at the outlet, with 90-minute home spa and 120-minute hotel spa options for a longer, more indulgent experience." },
  { question: "Is couple massage a good gift for an anniversary or birthday?", answer: "Yes — couple massage is one of our most-booked anniversary and birthday experiences, especially paired with an aromatherapy add-on and a dinner or movie at Select Citywalk." },
  { question: "Do both partners have to choose the same massage type?", answer: "No, each partner can pick a different technique — Swedish, deep tissue, or aromatherapy — since you're each assigned a dedicated therapist." },
  { question: "Is couple massage only for married couples?", answer: "No, couple massage is open to any two adults booking together — partners, friends, or family members are all welcome." },
  { question: "Do you need advance booking for a couple massage in Saket?", answer: "Weekday slots are often available same-day, but weekends fill up faster, so we recommend booking a few hours ahead over WhatsApp or Telegram." },
];

export default function CoupleMassageSaketPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> SAKET COUPLE SPECIAL
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Couple Massage in <span className="text-amber-700">Saket</span> Near Select Citywalk
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Dinner and a movie is fine, but it's not exactly relaxing. Our couple massage in Saket gives you an hour that's actually about the two of you — one private room, two therapists, minutes from Select Citywalk if you want to make it a full evening out.
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
                <Image src="/images/couple-bathrobes-posing-embraced.jpg" alt="Couple massage session in Saket" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="font-semibold text-amber-700">₹3999 for two</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why This Combination Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">A couple-focused spa, right where South Delhi goes for a date.</h2>
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

      {/* Long-form SEO content — scannable card layout */}
      <section className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">The Full Picture</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Couple Massage in Saket — What to Expect & How to Book</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHeart /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Actually Shared, Not Just Side-by-Side</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  One room, two therapists working together — our <Link href="/couple-massage" className="font-medium text-amber-700 underline hover:text-amber-800">couple massage</Link> is a genuinely shared experience.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Close to Select Citywalk</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Steps from Select Citywalk, MGF Metropolitan Mall, and Saket Metro Station. From ₹3999 for two — pick different treatments if you like.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Real Variety in Technique</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Russian, Thai, and Uzbek therapists available alongside our Indian staff. Same hygiene standard for every guest, every time.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Planned Around Your Evening</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Anniversary, date night, or just an unhurried hour together — we'll time it around your dinner or movie plans.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/fpkdl.com_960_1758982953_pleasant-ladies-enjoy-drinking-champagne-spa-three-beautiful-women-wearing-bathrobes-having-cool-resting-holidays_183219-7172.jpg" alt="Couple massage relaxation room in Saket" fill className="object-cover" />
            </motion.div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Weekends fill up faster, so a little notice helps —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Luxury Russian Spa</p>
          <h2 className="mt-3 text-2xl font-bold text-[#1f1a17] md:text-3xl">The most trusted couple spa near Select Citywalk.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            More than a decade in, with{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. Couple sessions are one of the easiest treatments to get wrong logistically — two people, two therapists, one room, needing to finish at roughly the same time so nobody's left waiting. We've done enough of these to get the timing and coordination right without either of you noticing the effort behind it.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            If you'd like the full range of what's on offer at our Saket outlet — solo sessions, deep tissue, aromatherapy — our{" "}
            <Link href="/spa-in-saket" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Saket page</Link>{" "}
            covers everything beyond the couple experience.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Every therapist pair on our couple massage team trains together before they're ever booked as a duo — matching pressure, pacing, and timing so neither of you finishes early and sits there waiting. It's a small detail most spas skip, but it's the difference between a couple spa session that feels genuinely synchronized and one that just happens to have two people in the same room.
          </p>
        </div>
      </section>

      {/* How It Compares */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How It Compares</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Couple massage vs. our other Saket treatments.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Booking for two but not sure which style to pick? Here's a quick, honest comparison.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
            <h3 className="text-lg font-semibold text-[#1f1a17]">vs. Full Body Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              A <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>{" "}
              is our standard solo, head-to-toe session — book it separately if only one of you wants a treatment.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
            <h3 className="text-lg font-semibold text-[#1f1a17]">vs. Deep Tissue Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Deep tissue massage</Link>{" "}
              is firmer, muscle-focused work — either partner can request this instead of Swedish within the same couple session.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
            <h3 className="text-lg font-semibold text-[#1f1a17]">vs. Aromatherapy Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/aromatherapy-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Aromatherapy massage</Link>{" "}
              adds scented essential oils for a calmer, more sensory session — popular as an add-on for anniversaries and celebrations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Couple Massage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">More than relaxation — a shared reset.</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Hotel & Landmark Access</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Couple Massage Near The Suryaa & Saket's Favourite Spots</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our Saket outlet offers? Visit our <Link href="/spa-in-saket" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Saket</Link> page for all services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Couple massage in Saket near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">From booking to relaxing together.</h2>
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">First Time Here?</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What to expect during your couple session.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Arrival & Preferences</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A short chat with both of you about pressure, technique, and any occasion you're celebrating — nothing is assumed.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">One Private Room</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">You're settled in together, side by side, with the door closed for the entire session — no shared waiting areas, no interruptions.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Two Therapists, In Sync</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Trained to start and finish together, so neither of you is left sitting around waiting for the other to wrap up.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1f1a17]">Unwind Before You Leave</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A few quiet minutes afterward with water, before you head out for dinner or a movie nearby.</p>
          </div>
        </div>
      </section>

      <section id="Pricing" className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Transparent pricing for two.</h2>
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
            { title: "Spa in Saket", href: "/spa-in-saket" },
            { title: "Couples Massage in Delhi", href: "/couple-massage" },
            { title: "Sandwich Massage", href: "/sandwich-massage" },
            { title: "Aromatherapy Massage", href: "/aromatherapy-massage-in-delhi" },
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Plan a proper evening in Saket.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Reserve your couple massage before or after Select Citywalk, or have us come to your home or hotel.</p>
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
