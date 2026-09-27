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
    title: "Private wellness rooms near Nehru Place",
    desc: "Relax in clean, private treatment rooms just minutes from Nehru Place and Kalkaji Metro Station — an easy stop between meetings or after work.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified & experienced therapists",
    desc: "Our therapists are trained in Swedish, deep tissue, Thai and aromatherapy techniques, so every massage in Kalkaji feels safe and genuinely relaxing.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, home & hotel spa options",
    desc: "Visit our Kalkaji outlet, or book a home spa or hotel spa session anywhere across South Delhi at a time that suits you.",
  },
];

const services = [
  {
    title: "Full Body Massage in Kalkaji",
    desc: "A complete relaxation session that eases muscle tension, improves blood circulation, and leaves you feeling refreshed from head to toe.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Firm, focused pressure that targets chronic knots and stiffness — a favourite among Nehru Place professionals dealing with desk-job back pain.",
    icon: <FaHotTub className="text-amber-600" />,
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Couple Massage in Kalkaji",
    desc: "A shared wellness experience in a private, comfortable room where two people can relax together in complete peace.",
    icon: <FaHeart className="text-rose-500" />,
    href: "/couples-massage-in-delhi",
  },
  {
    title: "Sandwich Massage",
    desc: "A unique two-therapist session that delivers deeper relaxation and faster stress relief for guests wanting something extra.",
    icon: <FaSpa className="text-amber-600" />,
    href: "/sandwich-massage-in-delhi",
  },
  {
    title: "B2B Massage",
    desc: "A specialised body to body therapy performed with premium oils and smooth, controlled movements for complete relaxation.",
    icon: <FaLeaf className="text-emerald-600" />,
    href: "/b2b-massage-in-delhi",
  },
  {
    title: "Aromatherapy Massage",
    desc: "Calming essential oils combined with gentle massage strokes — a good pick after a long, draining day of client calls.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/aromatherapy-massage-in-delhi",
  },
];

const nearbyAreas = [
  {
    title: "Nehru Place",
    image: "/images/potliMassage.jpg",
    description:
      "One of Delhi's busiest business districts is right next door — plenty of our Kalkaji guests come straight from a long day at Nehru Place.",
  },
  {
    title: "Govindpuri",
    image: "/images/improvebloodflow.webp",
    description:
      "A short ride from Govindpuri Metro Station brings you to our hygienic, professionally staffed Kalkaji outlet.",
  },
  {
    title: "CR Park",
    image: "/images/SpecializedTreatments.jpg",
    description:
      "Residents of Chittaranjan Park appreciate the short travel time and calm, private setting at our Kalkaji spa.",
  },
  {
    title: "Greater Kailash",
    href: "/spa-in-greater-kailash",
    image: "/images/spaexpert1.webp",
    description:
      "If you're closer to M Block Market than Kalkaji Temple, our sister outlet in Greater Kailash might be the shorter trip.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Connect with us",
    text: "Tell us what you're after, when you're free, and roughly where in Kalkaji or Nehru Place you'll be.",
    icon: <FaPhoneAlt className="text-amber-700" />,
  },
  {
    number: "02",
    title: "Choose your therapy",
    text: "Pick from full body, deep tissue, couple, sandwich, or aromatherapy massage curated for your comfort and needs.",
    icon: <FaClock className="text-amber-700" />,
  },
  {
    number: "03",
    title: "Relax and unwind",
    text: "Come to our Kalkaji outlet, or let our therapist reach your home or hotel, and enjoy a proper, unhurried session.",
    icon: <FaCheckCircle className="text-amber-700" />,
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999",
    desc: "A quick, relaxing reset at our Kalkaji outlet with premium oils and complete privacy.",
    features: ["Oil Massage", "Cream Massage", "Private Room", "30 min Consultation"],
    icon: <FaSpa className="text-amber-500" />,
    highlight: false,
    badge: "Starter",
  },
  {
    title: "Home Spa",
    price: "₹15000",
    desc: "A premium at-home wellness session anywhere in Kalkaji, Govindpuri or nearby South Delhi.",
    features: ["Full Body Massage", "Aromatherapy", "Private Setting", "90 min Session"],
    icon: <FaHotel className="text-amber-500" />,
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20000",
    desc: "A comprehensive luxury spa experience delivered to your hotel room with added treatments.",
    features: ["5 Star Property", "Private Suite", "Foreign Therapist", "120 min Session"],
    icon: <FaCrown className="text-amber-500" />,
    highlight: false,
    badge: "Luxury",
  },
];

const faqs = [
  {
    question: "What is the first visit offer for spa in Kalkaji?",
    answer:
      "Our spa in Kalkaji offers a first visit package starting at just ₹1999 — a low-pressure way to try us before booking anything longer.",
  },
  {
    question: "Is your spa near Kalkaji Temple or Kalkaji Metro Station?",
    answer:
      "Yes, our Kalkaji outlet is close to both the Kalkaji Temple and Kalkaji Metro Station on the Violet Line, so it's easy to reach whether you're visiting the temple or just passing through on the metro.",
  },
  {
    question: "Is your spa convenient for people working near Nehru Place?",
    answer:
      "Very much so. Nehru Place is right next to Kalkaji, and a good number of our regulars are office-goers who stop by after work or during a longer lunch break.",
  },
  {
    question: "Do you provide home spa service in Kalkaji?",
    answer:
      "Yes, along with our outlet, we offer home spa across Kalkaji and South Delhi. Our therapist brings everything needed for a relaxing, hygienic session to your home.",
  },
  {
    question: "Are your therapists trained and certified?",
    answer:
      "Absolutely. Every therapist at our Kalkaji spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy.",
  },
  {
    question: "Can I book a couple massage in Kalkaji?",
    answer:
      "Yes, our Kalkaji outlet has private rooms for couple massage, including our popular female to male couple massage, so two people can relax together comfortably.",
  },
  {
    question: "Do you have Russian or other foreign therapists available in Kalkaji?",
    answer:
      "Yes, our Russian spa in Kalkaji packages include experienced Russian, Thai, and Uzbek therapists alongside our trained Indian staff, from ₹2,800 depending on the package.",
  },
  {
    question: "What are your spa timings in Kalkaji? Do you offer night spa appointments?",
    answer:
      "Our Kalkaji outlet and home spa booking are open with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
  },
  {
    question: "How much does a full body massage cost in Kalkaji?",
    answer:
      "A full body massage at our Kalkaji outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages start from ₹15,000 depending on duration.",
  },
];

export default function Spainkalkaji() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5fdfc] text-[#113435]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> KALKAJI WELLNESS OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#113435] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Kalkaji</span> Near Kalkaji Temple & Nehru Place
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a spa in Kalkaji that actually knows what it's doing? Spa Delhi brings full body massage, deep tissue therapy, aromatherapy, and couple spa to Kalkaji, just minutes from Kalkaji Temple, Kalkaji Metro Station, and the Nehru Place business district. Every session is handled by a certified therapist in a clean, private room.
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
              {[
                ["12+", "Years of spa expertise"],
                ["4.9/5", "Guest comfort rating"],
                ["24/7", "Booking support"],
              ].map(([value, label], index) => (
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
                <Image src="/images/Reflexology.jpg" alt="Relaxing spa treatment in Kalkaji" fill className="object-cover" />
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Kalkaji Chooses Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">A trusted massage centre in Kalkaji, built on comfort and hygiene.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#113435]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="bg-[#e6f7f6] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">About Our Kalkaji Outlet</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Spa in Kalkaji — A Trusted Full Body Massage & Wellness Centre</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              Kalkaji is one of those South Delhi neighbourhoods that's always on the move — a busy temple, a packed metro station, and Nehru Place's endless stream of office-goers, all within walking distance of each other. In the middle of that, Spa Delhi runs a proper massage centre offering{" "}
              <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>,{" "}
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">deep tissue massage</Link>,{" "}
              <Link href="/sandwich-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">sandwich massage</Link>,{" "}
              <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link>,{" "}
              <Link href="/couples-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">couple massage</Link>, and{" "}
              <Link href="/aromatherapy-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">aromatherapy massage</Link>. Whichever brought you to Kalkaji today, a first session starts at ₹1999.
            </p>
            <p>
              Our Kalkaji spa outlet sits close to Kalkaji Metro Station on the Violet Line, a short walk from the Kalkaji Temple, and practically next door to Nehru Place — which probably explains why so many of our regulars are office professionals squeezing in a massage between meetings or right after work. We also see plenty of guests coming from Govindpuri and CR Park. If travelling isn't convenient, home spa in Kalkaji and hotel spa in Kalkaji cover you without needing to step out at all.
            </p>
            <p>
              Every therapist at our massage centre in Kalkaji has actually been trained, not just handed a job title. Our Russian spa in Kalkaji packages bring in Russian, Thai, and Uzbek therapists alongside our experienced Indian staff, so you're not stuck with a one-size-fits-all approach. Hygiene is non-negotiable — fresh towels, sanitised rooms, and proper oils for every guest, whether you're stopping by for a quick body massage near me in Kalkaji or booking a longer session to properly unwind.
            </p>
            <p>
              Booking takes a couple of minutes on WhatsApp or Telegram, no hidden charges once you're in the room. We run flexible timings across the week, and if you need something later, evening and night spa appointments can be arranged in advance through our 24/7 help desk — handy if you're finishing up work at Nehru Place and want to unwind before heading home. From a solo session to a female to male couple massage in Kalkaji, we try to keep the whole process simple.
            </p>
            <p>
              A lot of people search for a spa near me in Kalkaji assuming they'll get a small, no-frills setup, and are pleasantly surprised by how much we actually offer — sandwich massage with two therapists working together, B2B massage for a more thorough session, and more. If you've got questions about whether B2B massage is{" "}
              <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">legal in India</Link>, we've answered that directly rather than dodging it. Whether you work at Nehru Place, live near the temple, or you're just passing through Kalkaji, our team can suggest the right package for your time and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Massage services available at our Kalkaji spa.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-3 text-xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#113435]">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
              <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline">
                Learn more <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#edf9f8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Areas We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Conveniently located near these Kalkaji neighbourhoods.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Prefer another part of the city? Browse <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">all Spa Delhi outlets in Delhi NCR</Link>.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area, index) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Spa near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#113435]">
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">A simple pathway from booking to relaxation.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
              <div className="mb-3 text-amber-700">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#113435]">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#e6f7f6] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Transparent spa pricing for every kind of relaxation.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#effffe] to-[#f5fdfc]" : "border-amber-100 bg-white"}`}
              >
                <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.highlight ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-700"}`}>
                  {plan.badge}
                </div>
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

      {/* Why choose us — additional SEO block */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Spa Delhi</p>
          <h2 className="mt-3 text-2xl font-bold text-[#113435] md:text-3xl">The best spa in Kalkaji for trusted, professional care.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            More than a decade in, and we now run{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>. When you're searching for a massage centre in Kalkaji or a body massage near me, what you actually want is a straight answer on safety and hygiene — and that's what we give. Regular therapist training, sanitised rooms between every guest, and pricing you know upfront.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            We also serve Nehru Place, Govindpuri, and CR Park with the same home spa and hotel spa standard. If you're closer to M Block Market than the Kalkaji Temple, our{" "}
            <Link href="/spa-in-greater-kailash" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Greater Kailash</Link> is just down the road and might save you a few minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Everything you need to know before booking your visit.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-2xl border border-amber-100 bg-[#f5fdfc] p-5">
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Our Other Services & Nearby Locations</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Full Body Massage", href: "/full-body-massage-in-delhi" },
            { title: "Sandwich Massage", href: "/sandwich-massage-in-delhi" },
            { title: "B2B Massage", href: "/b2b-massage-in-delhi" },
            { title: "Couples Massage", href: "/couples-massage-in-delhi" },
            { title: "Spa in Greater Kailash", href: "/spa-in-greater-kailash" },
            { title: "Spa in Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
            { title: "Spa in Saket", href: "/spa-in-saket" },
            { title: "Spa Price in Delhi", href: "/spa-price-in-delhi" },
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#113435] to-[#346065] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve a peaceful escape in Kalkaji today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in with your comfort in mind, or connect with us for a personalised home spa or hotel spa booking anywhere in Kalkaji and South Delhi.</p>
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
