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
    title: "Central, discreet location",
    desc: "Minutes from Rajiv Chowk Metro, in the heart of Connaught Place — easy to reach, easy to slip into on a busy day.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Trained, professional therapists",
    desc: "Every therapist follows proper technique and hygiene protocol — this is a genuine wellness service, not a guessing game.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, home & hotel options",
    desc: "Visit our C.P. outlet, or book home or hotel spa if you're staying at one of the many hotels around Connaught Place.",
  },
];

const benefits = [
  { title: "Deep Relaxation", desc: "Full-contact technique that helps release tension more completely than a standard massage, especially after a physically and mentally draining week." },
  { title: "Improved Circulation", desc: "The warmth and pressure of B2B massage encourages healthy blood flow throughout the session, leaving your whole body feeling looser afterward." },
  { title: "Stress Relief for Professionals", desc: "A popular choice for C.P.'s office crowd looking for genuine stress relief after back-to-back meetings and long client calls." },
  { title: "Muscle Recovery", desc: "Helps ease the physical fatigue that builds up from long working hours, travel, or simply too many hours in a desk chair." },
  { title: "A Fully Private Setting", desc: "Every session takes place in a private, closed room — no shared spaces, no interruptions, no one else in the building aware of your visit." },
  { title: "Professional, Judgement-Free Care", desc: "Handled the same way as any other treatment on our menu — professionally, hygienically, and respectfully, from booking to checkout." },
];

const nearbyAreas = [
  {
    title: "Radisson Blu, C.P.",
    image: "/images/radissonblu_CP.jpg",
    description: "Staying at Radisson Blu? We can send a therapist straight to your room for a private B2B session.",
  },
  {
    title: "Holiday Inn, C.P.",
    image: "/images/holidayIn_CP.jpg",
    description: "A short walk from Holiday Inn — hotel spa bookings available if you'd rather not travel to our outlet.",
  },
  {
    title: "JW Marriott, C.P.",
    image: "/images/JwMarriott_CP.jpg",
    description: "Guests at JW Marriott can book our outlet or request a therapist directly to their room.",
  },
  {
    title: "The Park, C.P.",
    image: "/images/TheParkConnaughtPlace.webp",
    description: "Close to The Park hotel, with discreet, private hotel spa sessions available on request.",
  },
];

const processSteps = [
  { number: "01", title: "Reach out", text: "Message us on WhatsApp or Telegram with your preferred time — we're used to last-minute bookings from the C.P. crowd.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Confirm your slot", text: "We confirm your appointment quickly, with clear pricing upfront — no surprises when you arrive.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Relax, privately", text: "Your session takes place in a private, closed room with a trained therapist, start to finish.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "B2B Outlet", price: "₹2999", desc: "A private session at our Connaught Place outlet, close to Rajiv Chowk.", features: ["Full Body-to-Body Technique", "Premium Oils", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home B2B Spa", price: "₹18000", desc: "The same service delivered to your home anywhere near C.P. and Central Delhi.", features: ["Full Body-to-Body Technique", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel B2B Spa", price: "₹22000", desc: "A longer, more thorough session at your hotel near Connaught Place.", features: ["Foreign Therapist", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "What is the first visit offer for B2B massage in Connaught Place?", answer: "Our B2B massage in Connaught Place starts at ₹2999 for a first-visit outlet session, close to Rajiv Chowk Metro." },
  { question: "Is your B2B massage spa near Rajiv Chowk Metro Station?", answer: "Yes, our Connaught Place outlet is a short walk from Rajiv Chowk Metro Station, the Blue and Yellow Line interchange." },
  { question: "Is body to body massage legal in India?", answer: "Body to body massage is a legal wellness treatment in India when offered by a professional, licensed spa following proper hygiene and conduct standards. Read our detailed guide for the full picture." },
  { question: "What is B2B massage and how is it different from a regular massage?", answer: "B2B massage is a specialised, full-contact therapy performed with premium oils and smooth, controlled movements, designed for deeper relaxation than a standard massage." },
  { question: "Do you have Russian or other foreign therapists for B2B massage in Connaught Place?", answer: "Yes, our Russian, Thai, and Uzbek therapists are available for B2B sessions alongside our experienced Indian staff, from ₹2,800 depending on the package." },
  { question: "Can I book a night B2B massage appointment in Connaught Place?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
  { question: "Do you offer B2B massage at hotels near Connaught Place?", answer: "Yes, we regularly serve guests staying at hotels around C.P. — just share your hotel and room details when booking." },
  { question: "How much does a B2B massage cost in Connaught Place?", answer: "A B2B massage at our Connaught Place outlet starts from ₹2999 for the first visit. Home and hotel packages start from ₹18,000 depending on duration." },
  { question: "How long does a B2B massage session last?", answer: "Our standard B2B massage session runs 60 minutes at the outlet, with 90-minute home spa and 120-minute hotel spa options available for a longer, more thorough session." },
  { question: "What is the difference between B2B massage and a full body massage?", answer: "B2B massage is a full-contact, body-to-body technique focused on deep relaxation, while a full body massage is a broader head-to-toe session using hands-only technique. Both are available at our Connaught Place outlet." },
  { question: "What oils are used during a B2B massage session?", answer: "We use premium, aromatherapy-grade massage oils selected for skin comfort and smooth, controlled movement throughout the session — your therapist can adjust based on any preference or sensitivity." },
  { question: "Is B2B massage available for corporate or business travellers near Connaught Place?", answer: "Yes — a large share of our C.P. bookings are corporate professionals and business travellers looking for genuine stress relief between meetings, which is why we keep flexible daytime and evening slots available." },
  { question: "Do I need to book in advance for a B2B massage in Connaught Place?", answer: "Same-day appointments are usually possible, but we recommend booking a couple of hours ahead over WhatsApp or Telegram, especially for evening and night slots, to guarantee your preferred time." },
];

export default function B2BMassageConnaughtPlacePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5fdfc] text-[#113435]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> CONNAUGHT PLACE OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#113435] md:text-5xl lg:text-5xl">
              B2B Massage in <span className="text-amber-700">Connaught Place</span> Near Rajiv Chowk
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Our B2B massage in Connaught Place brings genuine body to body therapy to Central Delhi's busiest district — a short walk from Rajiv Chowk Metro, performed by trained therapists in a fully private room. First visit from ₹2999.
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
                <Image src="/images/b2b_therapy.jpg" alt="B2B massage session in Connaught Place" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">A central, discreet spa right where Delhi does business.</h2>
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

      {/* Long-form SEO content — scannable card layout */}
      <section className="bg-[#e6f7f6] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">The Full Picture</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">B2B Massage in Connaught Place — What It Is & How to Book</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/b2b-massage1.png" alt="B2B massage session in Connaught Place" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#113435]">Central, Minutes From Rajiv Chowk</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link> is a short walk from the Inner Circle, Janpath, and Barakhamba Road.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#113435]">A Specialised, Full-Contact Therapy</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Premium oils and controlled, smooth movements for genuine deep relaxation — not just a rubdown. From ₹2999.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#113435]">A Professional Wellness Treatment</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Fully private, hygienic, professionally conducted. Curious about the legal side?{" "}
                  <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">Read our guide</Link>.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#113435]">Real Variety, Transparent Pricing</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Russian, Thai, and Uzbek therapists alongside our Indian staff. No surprises once you're in the room.
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
          <h2 className="mt-3 text-2xl font-bold text-[#113435] md:text-3xl">A trusted, professional B2B massage spa in C.P.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            We've run this service for more than a decade across{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets in Delhi NCR</Link>, which means our therapists have seen every kind of first-time nervousness there is and know how to put guests at ease without making it awkward. Hygiene and professionalism aren't optional extras here — they're the baseline for every single session.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            If you'd like to see our full range of treatments in C.P. beyond B2B, our{" "}
            <Link href="/spa-in-connaught-place" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Connaught Place page</Link>{" "}
            covers everything from full body to couple massage.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            We're a licensed wellness centre, not a one-off pop-up — every therapist on our Connaught Place team goes through structured training in body-to-body technique, oil selection, and client comfort before they're ever paired with a guest. That's part of why corporate professionals in C.P. keep coming back for post-meeting relaxation instead of trying a new place each time: consistency matters when you're booking a service like this.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How It Compares</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">B2B massage vs. our other Connaught Place treatments.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not sure which session is right for you? Here's a quick, honest comparison.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
            <h3 className="text-lg font-semibold text-[#113435]">vs. Full Body Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              A <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>{" "}
              is a broader, gentler head-to-toe session — a good fit if you want general relaxation without the full-contact B2B format.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
            <h3 className="text-lg font-semibold text-[#113435]">vs. Deep Tissue Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Deep tissue massage</Link>{" "}
              targets stiff muscles and knots with firm pressure — better suited to physical recovery than the B2B format's full-contact relaxation.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
            <h3 className="text-lg font-semibold text-[#113435]">vs. Thai Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/thai-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Thai massage</Link>{" "}
              uses stretching and rhythmic pressure along the body's energy lines — a more active, therapeutic technique compared to B2B's smooth, oil-based approach.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why B2B Massage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">What a proper session can do for you.</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">5-Star Hotels Nearby</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">B2B Massage Delivered to Your Connaught Place Hotel Room</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Want the full picture of what our C.P. outlet offers? Visit our <Link href="/spa-in-connaught-place" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Connaught Place</Link> page for all services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`B2B massage near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Simple, discreet, professional.</h2>
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">First Time Here?</p>
          <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">What to expect during your session.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#113435]">Check-in & Consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A quick chat about pressure, oil preference, and anything you'd rather your therapist avoid — nothing is assumed.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#113435]">Private, Closed Room</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Your room stays closed for the full session — no shared spaces, no one walking in, no interruptions from booking to checkout.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#113435]">Premium Oils, Controlled Technique</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Aromatherapy-grade oils and smooth, controlled movements — this is a wellness treatment, handled the same way as any other service on our menu.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#113435]">Aftercare & Checkout</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A few minutes to ease back before you head out — plus water and a quiet space if you'd like to sit for a bit after your session.</p>
          </div>
        </div>
      </section>

      <section id="Pricing" className="bg-[#e6f7f6] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#113435] md:text-4xl">Transparent pricing, no surprises.</h2>
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
            { title: "Spa in Connaught Place", href: "/spa-in-connaught-place" },
            { title: "B2B Massage in Delhi", href: "/b2b-massage-in-delhi" },
            { title: "Is B2B Massage Legal in India?", href: "/is-b2b-massage-legal-in-india" },
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
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve your visit in Connaught Place today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in near Rajiv Chowk, or have us come to your hotel or home nearby.</p>
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
