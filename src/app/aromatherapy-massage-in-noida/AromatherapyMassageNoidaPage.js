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
    title: "Pure essential oil blends",
    desc: "Lavender, eucalyptus, rosemary, and chamomile — chosen for how you want to feel afterward, not a one-size-fits-all oil.",
  },
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Built for Noida's IT crowd",
    desc: "A calming counterpoint to long screen hours and back-to-back calls at the Sector 62 and Sector 63 tech hubs.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Certified, considerate therapists",
    desc: "Trained in aromatherapy blending and gentle massage technique, so the whole session feels intentional, not routine.",
  },
];

const benefits = [
  { title: "Deep Stress Relief", desc: "The combination of touch and calming scents like lavender helps quiet a busy, screen-fatigued mind after back-to-back meetings." },
  { title: "Better Sleep Quality", desc: "Calming oils such as lavender and chamomile are widely used to support more restful sleep after long work hours in front of a screen." },
  { title: "Mood Boost", desc: "Certain essential oils genuinely lift mood, useful after a demanding week of deadlines, standups, and client calls." },
  { title: "Muscle Relaxation", desc: "Gentle strokes combined with warm oils ease the neck and shoulder tension that builds up from hours at a desk." },
  { title: "Headache & Tension Relief", desc: "Peppermint and eucalyptus oils are often used to ease tension headaches from long screen time and poor posture." },
  { title: "Nourished Skin", desc: "Natural oils moisturise and nourish your skin, leaving it feeling soft and refreshed well after your session ends." },
];

const nearbyAreas = [
  { title: "Sector 18", image: "/images/noidahotel.jpeg", description: "A short drive from Sector 18's DLF Mall of India and Atta Market brings you to our Noida outlet." },
  { title: "Sector 62", image: "/images/SandalSuitesbyLemonTreeHotels_Noida.jpg", description: "Guests from the Sector 62 IT hub regularly book aromatherapy sessions after long work days." },
  { title: "City Centre", image: "/images/Sandal_Suites_by_Lemon_Tree_Hotels.jpg", description: "Close to Noida City Centre Metro Station, an easy stop on your way home." },
  { title: "Sector 63", image: "/images/Crowne_Plaza_Greater_Noida.jpg", description: "A quick drive from the Sector 63 office belt brings you to our hygienic, professionally staffed outlet." },
];

const processSteps = [
  { number: "01", title: "Choose your oil blend", text: "Lavender for calm, peppermint for a refresh, or let your therapist recommend one based on how you want to feel.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Warm oil application", text: "Your session starts with warm, scented oil and gentle Swedish-style strokes to ease you into relaxation.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Full body session", text: "Calming strokes work through your entire body while the essential oils do their part.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Aromatherapy Outlet", price: "₹1999", desc: "A calming first session at our Noida outlet, close to Sector 18.", features: ["Essential Oil Blend", "Gentle Full Body Technique", "Warm Oil Massage", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Aromatherapy Spa", price: "₹15000", desc: "The same calming technique delivered to your home anywhere in Noida.", features: ["Custom Oil Selection", "Private Setting", "Full Body Technique", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Aromatherapy Spa", price: "₹20000", desc: "A longer, more indulgent session at your Noida hotel with added treatments.", features: ["Foreign Therapist", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is the first visit offer for aromatherapy massage in Noida?", answer: "Our aromatherapy massage in Noida starts at just ₹1999 for a first-visit outlet session, close to Sector 18." },
  { question: "Is your aromatherapy spa near Noida City Centre?", answer: "Yes, our outlet is close to Noida City Centre Metro Station, easy to reach from Sector 18, Sector 62, and Sector 63." },
  { question: "Which essential oils do you use for aromatherapy massage in Noida?", answer: "We offer lavender for relaxation, eucalyptus and peppermint for a refreshing effect, and chamomile for calming, sensitive skin — your therapist can recommend the right blend." },
  { question: "Is aromatherapy massage safe for people with allergies?", answer: "We always ask about allergies and skin sensitivities before your session, and can adjust the oil blend or skip aromatherapy oils altogether if needed." },
  { question: "Do you have Russian or other foreign therapists for aromatherapy massage in Noida?", answer: "Yes, our Russian, Thai, and Uzbek therapists are trained in aromatherapy blending alongside our experienced Indian staff, with sessions available from ₹2,800." },
  { question: "Can I book a night aromatherapy massage appointment in Noida?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
  { question: "Do you offer home aromatherapy massage near Noida?", answer: "Yes, alongside our outlet, we send a therapist to your home anywhere in Noida for the same calming, essential-oil-based technique." },
  { question: "How much does an aromatherapy massage cost in Noida?", answer: "An aromatherapy massage at our Noida outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹15,000 depending on duration." },
];

export default function AromatherapyMassageNoidaPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5fdfc] text-[#113435]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> NOIDA OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#113435] md:text-5xl lg:text-5xl">
              Aromatherapy Massage in <span className="text-amber-700">Noida</span> Near Sector 18
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Our aromatherapy massage in Noida blends calming essential oils with gentle massage technique — a proper reset for the city's IT and corporate crowd, close to Sector 18 and Noida City Centre. First visit from ₹1999.
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
                <Image src="/images/noidahotel.jpeg" alt="Aromatherapy massage session in Noida" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Calming, scent-guided relaxation for a screen-heavy city.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#113435]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#e6f7f6] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">The Full Picture</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Aromatherapy Massage in Noida — Oils, Benefits & How to Book</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#113435]">Built for Noida's Screen-Heavy Days</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our <Link href="/aromatherapy-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">aromatherapy massage</Link> blends gentle strokes with essential oils chosen for how you want to feel.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#113435]">Close to Noida City Centre</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Easy to reach from Sector 18, Sector 62, and Sector 63. First visit from ₹1999, home and hotel spa options too.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#113435]">Real Oils, Chosen With Intent</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Lavender for relaxation, peppermint for a lift, rosemary for clarity, chamomile for sensitive skin — blended by trained therapists.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#113435]">Safe for Sensitive Skin</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  We check for allergies before every session, so your therapist can pick oils that are genuinely safe and comfortable for you.
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
              <Image src="/images/fpkdl.com_750_1758980084_composition-various-objects-used-spa-treatments_138888-664.jpg" alt="Essential oils used for aromatherapy massage in Noida" fill className="object-cover" />
            </motion.div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Many guests book monthly, timed around demanding project phases —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Aromatherapy Massage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Essential oils and touch, working together.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#113435]">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#edf9f8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Areas We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Conveniently located across Noida.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our Noida outlet offers? Visit our <Link href="/spa-in-noida" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Noida</Link> page for all services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Aromatherapy massage near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#113435]">{area.title}</h3>
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Fast to book, tailored to how you want to feel.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
              <div className="mb-3 text-amber-700">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#113435]">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="Pricing" className="bg-[#e6f7f6] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Transparent pricing for every kind of calm.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#effffe] to-[#f5fdfc]" : "border-amber-100 bg-white"}`}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Spa Delhi</p>
          <h2 className="mt-3 text-2xl font-bold text-[#113435] md:text-3xl">The most trusted aromatherapy massage near Sector 18.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            More than a decade of experience, with{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. Genuine aromatherapy takes real knowledge of which oils do what — our therapists don't just splash scented oil on and call it a day, they choose blends deliberately based on what you actually need.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            For the full range of services at our Noida outlet beyond aromatherapy, our{" "}
            <Link href="/spa-in-noida" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Noida page</Link>{" "}
            covers everything.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Everything before you book.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-[#f5fdfc] p-5">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Related Services & Locations</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Spa in Noida", href: "/spa-in-noida" },
            { title: "Aromatherapy Massage in Delhi", href: "/aromatherapy-massage-in-delhi" },
            { title: "Swedish Massage", href: "/swedish-massage-in-delhi" },
            { title: "Full Body Massage", href: "/full-body-massage-in-delhi" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#113435] to-[#346065] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your session</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reset properly in Noida today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Whether it's your outlet, hotel, or home, our therapists bring calming aromatherapy technique to you.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full bg-white px-6 py-3 font-semibold text-[#113435] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
