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
    icon: <FaHotTub className="text-2xl text-amber-600" />,
    title: "Firm, focused pressure",
    desc: "Real deep tissue technique, not a light rubdown — slow, controlled strokes that work into the muscle layers behind chronic pain.",
  },
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Steps from Karol Bagh Metro",
    desc: "Our outlet sits close to Karol Bagh Metro Station on the Blue Line, an easy stop whether you're coming from the market or the office.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified, trained therapists",
    desc: "Every therapist is trained specifically in deep tissue work, so pressure stays controlled instead of just being 'harder.'",
  },
];

const benefits = [
  { title: "Chronic Pain Relief", desc: "Targets long-standing back, neck, and shoulder pain that a relaxation massage never quite reaches, working through the deeper muscle layers where that pain actually lives." },
  { title: "Muscle Knot Release", desc: "Breaks up the tight adhesions that build up from a full day on your feet at the Karol Bagh market, hours of driving, or being hunched over a desk near Rajendra Place." },
  { title: "Better Posture", desc: "Loosens the muscles around your spine and shoulders, making it noticeably easier to sit and stand without slouching by the end of the week." },
  { title: "Faster Recovery", desc: "Deeper circulation helps flush out tension after a long, physically demanding day, so you're not carrying yesterday's stiffness into tomorrow." },
  { title: "Reduced Stiffness", desc: "Regular sessions keep joints more mobile — especially useful if you're commuting through Central Delhi traffic or standing for hours at a stretch." },
  { title: "Better Sleep", desc: "Releasing deep-seated tension helps your body relax fully at the end of the day, making it easier to actually fall and stay asleep." },
];

const nearbyAreas = [
  {
    title: "Rajendra Place",
    image: "/images/imagee22.webp",
    description: "Working near Rajendra Place? Our Karol Bagh outlet for deep tissue massage is just minutes away after a long day at the office.",
  },
  {
    title: "Patel Nagar",
    image: "/images/staff10.jpg",
    description: "Guests from Patel Nagar often book deep tissue sessions here for stiff shoulders and lower back tension.",
  },
  {
    title: "Jhandewalan",
    image: "/images/foreignetherapist.webp",
    description: "A short ride from Jhandewalan, this is a popular stop for a proper deep tissue session before heading home.",
  },
  {
    title: "Paharganj",
    image: "/images/fpkdl.com_750_1758780040_content-european-woman-lies-comfortably-massage_1036891-1866.jpg",
    description: "Travellers and locals near Paharganj choose us for firm, focused deep tissue work in a clean, private setting.",
  },
];

const processSteps = [
  { number: "01", title: "Tell us what hurts", text: "A quick chat about which areas are tight or painful — back, neck, shoulders, legs — so we know where to focus.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Warm-up & pressure check", text: "Your therapist starts lighter to warm the muscles, then gradually increases pressure to what you can actually handle.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Targeted deep work", text: "Slow, firm strokes work through the problem areas — this is where the real relief happens.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Deep Tissue Outlet", price: "₹1999", desc: "A focused first session at our Karol Bagh outlet — firm pressure, warm oils, full privacy.", features: ["Firm Pressure Technique", "Trigger Point Focus", "Warm Oil Massage", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Deep Tissue Spa", price: "₹15000", desc: "The same firm technique delivered to your home anywhere near Karol Bagh or Central Delhi.", features: ["Firm Pressure Technique", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Deep Tissue", price: "₹20000", desc: "A longer, more thorough deep tissue session at your hotel with added treatments.", features: ["Foreign Therapist", "Private Suite", "Facial Session", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is the first visit offer for deep tissue massage in Karol Bagh?", answer: "Our deep tissue massage in Karol Bagh starts at just ₹1999 for a first-visit outlet session — a good way to see if the technique suits you before booking anything longer." },
  { question: "Is your deep tissue massage spa near Karol Bagh Metro Station?", answer: "Yes, our outlet is a short walk from Karol Bagh Metro Station on the Blue Line, easy to reach from Rajendra Place, Patel Nagar, and Jhandewalan." },
  { question: "Is deep tissue massage painful?", answer: "You may feel some soreness in tight areas, but it should stay within a 'good hurt' range, never sharp. Your therapist checks in throughout and adjusts pressure to what you can actually handle." },
  { question: "How is deep tissue massage different from a regular full body massage?", answer: "A regular full body massage uses lighter, flowing strokes mainly for relaxation. Deep tissue works more slowly and with real pressure, specifically targeting chronic muscle tension and knots." },
  { question: "Do you have Russian or other foreign therapists trained in deep tissue technique?", answer: "Yes, our Russian, Thai, and Uzbek therapists are trained in deep tissue work alongside our experienced Indian staff, with sessions available from ₹2,800." },
  { question: "Can I book a night deep tissue massage appointment in Karol Bagh?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk, subject to therapist availability." },
  { question: "Do you offer home deep tissue massage near Karol Bagh?", answer: "Yes, alongside our outlet, we send a therapist to your home anywhere in and around Karol Bagh for the same firm, focused technique." },
  { question: "How much does a deep tissue massage cost in Karol Bagh?", answer: "A deep tissue massage at our Karol Bagh outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹15,000 depending on duration." },
];

export default function DeepTissueKarolBaghPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> KAROL BAGH SPECIALITY
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Deep Tissue Massage in <span className="text-amber-700">Karol Bagh</span> for Real Pain Relief
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Still carrying that tight knot in your shoulder from last week? A light massage won't touch it. Our deep tissue massage in Karol Bagh uses slow, firm pressure to actually reach it — steps from Karol Bagh Metro Station, with a certified therapist who knows the difference between firm and painful.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.link/gdjc65" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
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
                <Image src="/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg" alt="Deep tissue massage session in Karol Bagh" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Deep tissue technique, delivered right in Central Delhi.</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Deep Tissue Massage in Karol Bagh — Technique, Pricing & What to Expect</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/446979.jpg" alt="Deep tissue massage technique in Karol Bagh" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Real Pressure, Not a Light Rubdown</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Unlike a <Link href="/swedish-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Swedish massage</Link>, deep tissue work uses slow, deliberate strokes to reach the muscle layers actually holding your tension.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Close to Karol Bagh Metro</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Easy to reach from Ajmal Khan Road, Rajendra Place, and Patel Nagar. First visit from ₹1999, home and hotel spa too.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Trained in Deep Tissue, Not Just "Firmer"</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Russian, Thai, and Uzbek therapists apply controlled, firm pressure — a "good hurt," never sharp pain, with check-ins throughout.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Built Around Where It Hurts</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Tell us where it hurts when you book. Curious which technique fits you? Read our{" "}
                  <Link href="/swedish-massage-vs-deep-tissue-massage" className="font-medium text-amber-700 underline hover:text-amber-800">comparison guide</Link>.
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

      {/* Why choose us */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Luxury Russian Spa</p>
          <h2 className="mt-3 text-2xl font-bold text-[#1f1a17] md:text-3xl">The most trusted deep tissue massage in Karol Bagh.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            We've been doing this for more than a decade, with{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. That matters here specifically, because deep tissue work is easy to get wrong — too little pressure and it does nothing, too much and it's just painful. Our therapists are trained to find that line and stay on it, session after session, guest after guest.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Karol Bagh is our original outlet, and it's still where a lot of our most experienced deep tissue therapists work. If you'd rather explore other treatments while you're here, our{" "}
            <Link href="/spa-in-karol-bagh" className="font-medium text-amber-700 underline hover:text-amber-800">Karol Bagh spa page</Link>{" "}
            covers the full range, from Swedish and aromatherapy to couple sessions.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Deep Tissue</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What regular sessions can do for chronic pain and stiffness.</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Areas We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Conveniently located near these Karol Bagh neighbourhoods.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our Karol Bagh outlet offers? Visit our <Link href="/spa-in-karol-bagh" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Karol Bagh</Link> page for all services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Deep tissue massage near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">From booking to real relief.</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Focused pain-relief sessions, transparent pricing.</h2>
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
            { title: "Spa in Karol Bagh", href: "/spa-in-karol-bagh" },
            { title: "Deep Tissue Massage in Delhi", href: "/deep-tissue-massage-in-delhi" },
            { title: "Full Body Massage", href: "/full-body-massage-in-delhi" },
            { title: "Swedish vs Deep Tissue", href: "/swedish-massage-vs-deep-tissue-massage" },
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
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Get real relief in Karol Bagh today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Whether it's your outlet, hotel, or home, our therapists bring proper deep tissue technique to you.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.link/gdjc65" className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f1a17] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+yulqEcJa2dxhM2I9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
