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
  FaPlaneDeparture,
  FaSpa,
  FaStar,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaHandSparkles className="text-2xl text-teal-600" />,
    title: "Complete head-to-toe coverage",
    desc: "A genuine full body session — back, shoulders, arms, legs, and feet — not a rushed version squeezed into a layover.",
  },
  {
    icon: <FaPlaneDeparture className="text-2xl text-sky-600" />,
    title: "Built for the hotel district",
    desc: "Minutes from every major hotel in Aerocity, with hotel spa as one of our most requested services here.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified, experienced therapists",
    desc: "Trained in full body technique, so the pace and pressure stay consistent from start to finish.",
  },
];

const benefits = [
  { title: "Complete Relaxation", desc: "Works through your entire body — back, shoulders, arms, legs, feet — rather than focusing on just one problem area." },
  { title: "Eases Travel Fatigue", desc: "A long flight or a packed meeting schedule leaves your whole body stiff, not just one spot — full body massage addresses all of it at once." },
  { title: "Improved Circulation", desc: "Long, flowing strokes across the whole body encourage healthy blood flow after hours of sitting on a plane or in meetings." },
  { title: "Reduced Jet Lag Symptoms", desc: "Many travellers find a full body session genuinely helps them reset their body clock after a long-haul flight." },
  { title: "Stress Relief Before or After Flights", desc: "A calm, unhurried session to bookend a stressful travel day, whether you're arriving frazzled or departing anxious." },
  { title: "Better Sleep That Night", desc: "A relaxed body makes it easier to get real rest, whether you're flying out again soon or staying the night at your hotel." },
];

const nearbyAreas = [
  {
    title: "Pullman Aerocity",
    image: "/images/pullmanAerocity.jpg",
    description: "Staying at Pullman? We can send a therapist straight to your room for an in-room full body massage.",
  },
  {
    title: "Novotel Aerocity",
    image: "/images/NovotelNewDelhiAerocity.webp",
    description: "A few minutes from Novotel — hotel spa bookings available if you'd rather not travel before your flight.",
  },
  {
    title: "IBIS Aerocity",
    image: "/images/IBISNewDelhiAerocity.jpg",
    description: "Guests at IBIS can book our outlet or request a therapist directly to their room.",
  },
  {
    title: "Lemon Tree Premier",
    image: "/images/LemonTreePremierAerocity.jpg",
    description: "Close to Lemon Tree Premier, with hotel spa sessions available on request for guests on tight schedules.",
  },
];

const processSteps = [
  { number: "01", title: "Book ahead or same-day", text: "Message us on WhatsApp or Telegram — we're used to short-notice bookings from travellers passing through.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Choose outlet or hotel room", text: "Come to our outlet, or have your therapist meet you directly at your Aerocity hotel.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Full body session", text: "60 to 90 minutes of complete, head-to-toe massage designed to actually reset you.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Full Body Outlet", price: "₹1999", desc: "A complete session at our Aerocity outlet, close to Terminal 3.", features: ["Full Body Technique", "Oil or Cream Massage", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Hotel Spa", price: "₹20000", desc: "Delivered straight to your Aerocity hotel room — ideal for layovers and business trips.", features: ["5 Star Property", "Private Suite", "Foreign Therapist", "120 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "Home Spa", price: "₹15000", desc: "The same full body technique at a home or serviced apartment near Aerocity.", features: ["Full Body Massage", "Aromatherapy", "Private Setting", "90 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Flexible" },
];

const faqs = [
  { question: "What is the first visit offer for full body massage in Aerocity?", answer: "Our full body massage in Aerocity starts at just ₹1999 for a first-visit outlet session, minutes from IGI Airport Terminal 3." },
  { question: "Can I book a full body massage before my flight?", answer: "Yes, our Aerocity outlet is a few minutes from Terminal 3, and we take same-day bookings depending on availability — message us as early as you can." },
  { question: "Do you offer hotel spa for full body massage at Aerocity hotels?", answer: "Yes, hotel spa is one of our most requested services here given the density of hotels in Aerocity — your therapist comes straight to your room." },
  { question: "How long does a full body massage session take?", answer: "A full body massage typically takes 60 to 90 minutes, giving the therapist time to properly work through your back, shoulders, arms, legs, and feet." },
  { question: "Do you have Russian or other foreign therapists for full body massage in Aerocity?", answer: "Yes, our Russian, Thai, and Uzbek therapists are available alongside our experienced Indian staff, from ₹2,800 depending on the package." },
  { question: "Can I book a night full body massage appointment in Aerocity?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk, useful for late-night arrivals." },
  { question: "Is full body massage good for jet lag or travel fatigue?", answer: "Many travellers find a full body session genuinely helps — the combination of full-body coverage and relaxed pacing helps you reset after a long flight." },
  { question: "How much does a full body massage cost in Aerocity?", answer: "A full body massage at our Aerocity outlet starts from ₹1999 for the first visit. Home and hotel spa packages start from ₹15,000 depending on duration." },
];

export default function FullBodyMassageAerocityPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> AEROCITY HOTEL DISTRICT
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Full Body Massage in <span className="text-amber-700">Aerocity</span> Near IGI Airport
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              A long flight or a packed schedule leaves your whole body tired, not just one spot. Our full body massage in Aerocity works head to toe, minutes from Terminal 3 — at our outlet or delivered straight to your hotel room.
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
                <Image src="/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg" alt="Full body massage session in Aerocity" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Complete relaxation, built around the airport district.</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Full Body Massage in Aerocity — Why It Fits This Location So Well</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaPlaneDeparture /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Built for Travellers, Minutes From T3</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  A whole body stiff from hours of flying or meetings — exactly what{" "}
                  <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>{" "}
                  is built for. From ₹1999.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotel /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Hotel Spa, Genuinely Popular Here</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Therapist comes straight to your room. Nearby in{" "}
                  <Link href="/spa-in-vasant-kunj" className="font-medium text-amber-700 underline hover:text-amber-800">Vasant Kunj</Link>{" "}
                  or{" "}
                  <Link href="/spa-in-mahipalpur" className="font-medium text-amber-700 underline hover:text-amber-800">Mahipalpur</Link>? We cover those too.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Head-to-Toe, Not One Sore Spot</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Back, shoulders, arms, legs, and feet. Russian, Thai, and Uzbek therapists alongside our Indian staff for real choice of technique.
                </p>
              </motion.div>

              <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaClock /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Built Around Flight Times</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Short-notice bookings and 24/7 evening/night slots. Tell us your window and we'll match the session to it.
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
              <Image src="/images/b2b-full-body-massage.jpg" alt="Full body massage session in Aerocity" fill className="object-cover" />
            </motion.div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Booking around a tight flight window? Build in a little buffer either side —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Luxury Russian Spa</p>
          <h2 className="mt-3 text-2xl font-bold text-[#1f1a17] md:text-3xl">A reliable full body massage option right by the airport.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            More than a decade of experience, with{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. Serving Aerocity specifically means dealing with tight, unpredictable schedules constantly — flights delayed, meetings running long, layovers cut short. Our therapists are used to working around that instead of expecting you to work around them.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            For the complete list of services and hotel partnerships in the area, our{" "}
            <Link href="/spa-in-aerocity" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Aerocity page</Link>{" "}
            has the full picture beyond full body massage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Full Body Massage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Especially useful before or after a flight.</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Full Body Massage Delivered to Your Aerocity Hotel Room</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our Aerocity outlet offers? Visit our <Link href="/spa-in-aerocity" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Aerocity</Link> page for all services and hotel partnerships.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Full body massage near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Fast to book, easy to fit around your schedule.</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Transparent pricing for every kind of traveller.</h2>
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
            { title: "Spa in Aerocity", href: "/spa-in-aerocity" },
            { title: "Full Body Massage in Delhi", href: "/full-body-massage-in-delhi" },
            { title: "Spa in Mahipalpur", href: "/spa-in-mahipalpur" },
            { title: "Spa in Vasant Kunj", href: "/spa-in-vasant-kunj" },
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
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reset before or after your flight.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Book our Aerocity outlet or have your therapist meet you directly at your hotel.</p>
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
