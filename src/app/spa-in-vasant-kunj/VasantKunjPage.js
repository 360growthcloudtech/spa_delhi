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
    title: "Private wellness rooms in Vasant Kunj",
    desc: "Relax in clean, private treatment rooms designed for total comfort, close to Vasant Kunj Sector B and Sector D.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified & experienced therapists",
    desc: "Our therapists are trained in Swedish, deep tissue, Thai and aromatherapy techniques, so every massage in Vasant Kunj feels safe and professional.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, home & hotel spa options",
    desc: "Visit our Vasant Kunj spa outlet, or book a home spa or hotel spa session anywhere across South Delhi at your convenience.",
  },
];

const services = [
  {
    title: "Full Body Massage in Vasant Kunj",
    desc: "A complete relaxation session that eases muscle tension, improves blood circulation, and leaves you feeling refreshed from head to toe.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Firm, focused pressure that targets chronic knots and stiffness, ideal for guests dealing with back, neck, or shoulder pain.",
    icon: <FaHotTub className="text-amber-600" />,
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Couple Massage in Vasant Kunj",
    desc: "A shared wellness experience in a private, comfortable room where two people can relax together in complete peace.",
    icon: <FaHeart className="text-rose-500" />,
    href: "/couple-massage",
  },
  {
    title: "Sandwich Massage",
    desc: "A unique two-therapist session that delivers deeper relaxation and faster stress relief for guests wanting something extra.",
    icon: <FaSpa className="text-amber-600" />,
    href: "/sandwich-massage",
  },
  {
    title: "B2B Massage",
    desc: "A specialised B2B therapy performed with premium oils and smooth, controlled movements for complete relaxation.",
    icon: <FaLeaf className="text-emerald-600" />,
    href: "/b2b-massage-in-delhi",
  },
  {
    title: "Aromatherapy Massage",
    desc: "Calming essential oils combined with gentle massage strokes to relax the mind and refresh the senses after a long week.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/aromatherapy-massage-in-delhi",
  },
];

const nearbyAreas = [
  {
    title: "Vasant Vihar",
    image: "/images/model0.jpg",
    description:
      "Guests from Vasant Vihar regularly visit our Vasant Kunj outlet for a relaxing full body or deep tissue massage session.",
  },
  {
    title: "Mahipalpur",
    href: "/spa-in-mahipalpur",
    image: "/images/model1.jpg",
    description:
      "A short drive from the Mahipalpur hotel belt near IGI Airport brings you to our hygienic, professionally staffed Vasant Kunj outlet.",
  },
  {
    title: "Chhatarpur",
    image: "/images/model2.jpeg",
    description:
      "Residents near Chhatarpur and the farmhouse belt appreciate the short travel time and calm, private setting at our Vasant Kunj spa.",
  },
  {
    title: "Munirka",
    image: "/images/model3.jpg",
    description:
      "A quick drive from Munirka and the JNU campus area brings you to our hygienic, professionally staffed Vasant Kunj outlet.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Connect with us",
    text: "Share your preferred treatment, timing, and location in Vasant Kunj. Our team helps you choose the right session with ease.",
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
    text: "Arrive at our Vasant Kunj outlet, or welcome our therapist at your home or hotel, and enjoy a smooth, professional session.",
    icon: <FaCheckCircle className="text-amber-700" />,
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999",
    desc: "Perfect for a quick, relaxing reset at our Vasant Kunj outlet with premium oils and complete privacy.",
    features: ["Oil Massage", "Cream Massage", "Private Room", "30 min Consultation"],
    icon: <FaSpa className="text-amber-500" />,
    highlight: false,
    badge: "Starter",
  },
  {
    title: "Home Spa",
    price: "₹14999",
    desc: "A premium at-home wellness session anywhere in Vasant Kunj, Vasant Vihar or nearby South Delhi.",
    features: ["Full Body Massage", "Aromatherapy", "Private Setting", "90 min Session"],
    icon: <FaHotel className="text-amber-500" />,
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹19999",
    desc: "A comprehensive luxury spa experience delivered to your hotel room with added treatments.",
    features: ["5 Star Property", "Private Suite", "Foreign Therapist", "120 min Session"],
    icon: <FaCrown className="text-amber-500" />,
    highlight: false,
    badge: "Luxury",
  },
];

const faqs = [
  {
    question: "What is the first visit offer for spa in Vasant Kunj?",
    answer:
      "Our spa in Vasant Kunj offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Vasant Kunj at an affordable price.",
  },
  {
    question: "Is your spa near Ambience Mall Vasant Kunj?",
    answer:
      "Yes, our Vasant Kunj spa outlet is conveniently located close to Ambience Mall and the DLF Promenade, making it easy to combine a shopping trip with a relaxing massage session.",
  },
  {
    question: "Do you provide home spa service in Vasant Kunj?",
    answer:
      "Yes, along with our outlet, we offer home spa service across Vasant Kunj and South Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
  },
  {
    question: "Are your therapists trained and certified?",
    answer:
      "Absolutely. Every therapist at our Vasant Kunj spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
  },
  {
    question: "Can I book a couple massage in Vasant Kunj?",
    answer:
      "Yes, our Vasant Kunj outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, allowing two people to relax together in a comfortable, peaceful setting.",
  },
  {
    question: "Do you have Russian or other foreign therapists available in Vasant Kunj?",
    answer:
      "Yes, our Russian spa in Vasant Kunj packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
  },
  {
    question: "What are your spa timings in Vasant Kunj? Do you offer night spa appointments?",
    answer:
      "Our Vasant Kunj outlet and home spa booking support are available with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
  },
  {
    question: "Do you offer spa in Vasant Kunj Sector B or Sector D?",
    answer:
      "Yes, our Vasant Kunj outlet serves guests across all major sectors and pockets, including Sector B, Sector C, and Sector D, along with home spa visits to your exact address within these areas.",
  },
  {
    question: "How much does a full body massage cost in Vasant Kunj?",
    answer:
      "A full body massage at our Vasant Kunj outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹14,999.",
  },
];

export default function VasantKunjPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
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
              <FaStar className="text-amber-500" /> VASANT KUNJ WELLNESS OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Vasant Kunj</span> for Full Body & Couple Massage
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a trusted spa in Vasant Kunj? Luxury Russian Spa brings professional full body massage, deep tissue therapy, aromatherapy, and couple spa services to Vasant Kunj Sector B, Sector C and Sector D, just minutes from Ambience Mall. Every session is performed by certified therapists in a clean, private, and relaxing setting.
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
                <Image src="/images/pexels-olly-3673941.jpg" alt="Relaxing spa treatment in Vasant Kunj" fill className="object-cover" />
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Vasant Kunj Chooses Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">A trusted massage centre in Vasant Kunj, built on comfort and hygiene.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f1a17]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">About Our Vasant Kunj Outlet</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Spa in Vasant Kunj — A Trusted Full Body Massage & Wellness Centre</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              If you have been searching for a genuine spa in Vasant Kunj, Luxury Russian Spa is here to help you relax, recharge, and relieve everyday stress. We offer a complete range of massage services in Vasant Kunj, including{" "}
              <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>,{" "}
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">deep tissue massage</Link>,{" "}
              <Link href="/sandwich-massage" className="font-medium text-amber-700 underline hover:text-amber-800">sandwich massage</Link>,{" "}
              <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link>,{" "}
              <Link href="/couple-massage" className="font-medium text-amber-700 underline hover:text-amber-800">couple massage</Link>, and{" "}
              <Link href="/aromatherapy-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">aromatherapy massage</Link>. Whether you live in Vasant Kunj Sector B, work near Sector D, or are simply visiting South Delhi, our spa is designed to give you a calm escape from your busy schedule at prices that start from just ₹1999 for your first visit.
            </p>
            <p>
              Our Vasant Kunj spa outlet is conveniently located close to Ambience Mall and the DLF Promenade, making it an easy stop for guests travelling from Vasant Vihar, Mahipalpur, Chhatarpur, and Munirka. Its position along the Delhi-Gurgaon Expressway and close proximity to IGI Airport also make it a popular choice for travellers and business guests looking to unwind. If you prefer not to travel at all, we also offer home spa in Vasant Kunj and hotel spa in Vasant Kunj for guests who want to relax without stepping outside.
            </p>
            <p>
              Every therapist at our massage centre in Vasant Kunj is trained and experienced. Our Russian spa in Vasant Kunj packages pair you with experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff, so you can choose the style and pace that suits you best. We follow strict hygiene protocols at every outlet, using fresh towels, sanitised rooms, and premium massage oils for each guest. Whether you are looking for a body massage near me in Vasant Kunj for quick stress relief or a longer wellness package for deeper relaxation, our team adjusts pressure, duration, and technique to match your comfort level.
            </p>
            <p>
              Booking a spa in Vasant Kunj with us is simple and transparent — there are no hidden charges, and you can confirm your appointment directly over WhatsApp or Telegram. We offer flexible timings throughout the week, including evening and night spa appointments booked in advance through our 24/7 help desk, plus same-day bookings when slots are available and clear pricing across our outlet, home spa, and hotel spa packages. From a relaxing solo session to a couple massage with female therapists in Vasant Kunj, Luxury Russian Spa makes it easy to prioritise your wellness close to home.
            </p>
            <p>
              Many of our regular guests first search for a spa near me in Vasant Kunj before discovering that Luxury Russian Spa offers far more variety than a typical neighbourhood parlour. Alongside classic full body massage and deep tissue therapy, we also offer specialised treatments such as sandwich massage, where two therapists work in sync for faster relief, and B2B massage for guests who want a deeply relaxing full body session — you can read our guide on{" "}
              <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">whether B2B massage is legal in India</Link> if you have questions before booking. If you are recovering from a long work week, travelling frequently, or simply want a regular self-care routine, our Vasant Kunj team can recommend the right combination of treatments and packages to suit your goals, budget, and available time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Massage services available at our Vasant Kunj spa.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-3 text-xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#1f1a17]">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
              <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline">
                Learn more <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff6ee] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Areas We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Conveniently located near these Vasant Kunj neighbourhoods.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Prefer another part of the city? Browse <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">all Luxury Russian Spa outlets in Delhi NCR</Link>.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area, index) => (
              <motion.div key={area.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">A simple pathway from booking to relaxation.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div key={step.number} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
              <div className="mb-3 text-amber-700">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f1a17]">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Transparent spa pricing for every kind of relaxation.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff3e8] to-[#fffaf5]" : "border-amber-100 bg-white"}`}
              >
                <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.highlight ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-700"}`}>
                  {plan.badge}
                </div>
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

      {/* Why choose us — additional SEO block */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Luxury Russian Spa</p>
          <h2 className="mt-3 text-2xl font-bold text-[#1f1a17] md:text-3xl">The best spa in Vasant Kunj for trusted, professional care.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            With more than a decade of experience and{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>, Luxury Russian Spa has become a name that guests in Vasant Kunj and South Delhi trust for genuine, professional massage services. When you search for a massage centre in Vasant Kunj or a body massage near me, you want assurance of safety, hygiene, and skilled hands — and that is exactly what we deliver at every session. Our therapists undergo regular training, our treatment rooms are cleaned and sanitised between every guest, and our pricing stays transparent from the moment you enquire to the moment you book.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Beyond our Vasant Kunj outlet, we also serve nearby areas including Vasant Vihar, Chhatarpur, and Munirka with the same quality of home spa and hotel spa service. Whether you need a spa near Ambience Mall for a quick visit after shopping, or a longer, more indulgent wellness package on the weekend near our{" "}
            <Link href="/spa-in-mahipalpur" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Mahipalpur</Link> or other Delhi NCR outlets, Luxury Russian Spa is ready to help you feel your best.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Everything you need to know before booking your visit.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-2xl border border-amber-100 bg-[#fffaf5] p-5">
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Our Other Services & Nearby Locations</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Full Body Massage", href: "/full-body-massage-in-delhi" },
            { title: "Sandwich Massage", href: "/sandwich-massage" },
            { title: "B2B Massage", href: "/b2b-massage-in-delhi" },
            { title: "Couples Massage", href: "/couple-massage" },
            { title: "Spa in Mahipalpur", href: "/spa-in-mahipalpur" },
            { title: "Spa in Aerocity", href: "/spa-in-aerocity" },
            { title: "Spa in Greater Kailash", href: "/spa-in-greater-kailash" },
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
        <div className="rounded-[32px] bg-gradient-to-r from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve a peaceful escape in Vasant Kunj today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in with your comfort in mind, or connect with us for a personalised home spa or hotel spa booking anywhere in Vasant Kunj and South Delhi.</p>
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
