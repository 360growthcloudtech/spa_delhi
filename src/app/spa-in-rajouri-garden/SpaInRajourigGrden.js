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
  FaLeaf,
  FaRupeeSign,
  FaShoePrints,
  FaSpa,
  FaStar,
  FaSwimmer,
  FaTelegram,
  FaTint,
  FaWhatsapp,
} from "react-icons/fa";
import WhatsappFloat from "../components/WhatsappFloat";

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Genuine Spa in Rajouri Garden",
    desc: "A real spa near Rajouri Garden Mall — trained therapists, premium oils, and a private room for every session.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Minutes From Rajouri Garden Metro",
    desc: "Close to the Rajouri Garden Metro interchange and City Square Mall, easy to reach from across West Delhi.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, Home & Hotel Spa Options",
    desc: "Visit our Rajouri Garden spa outlet, or book a body massage in Rajouri Garden home service anywhere nearby.",
  },
];

const services = [
  { title: "Full Body Massage", desc: "A complete full body massage in Rajouri Garden that eases muscle tension and leaves you feeling refreshed.", href: "/full-body-massage-in-delhi" },
  { title: "Deep Tissue Massage", desc: "Firm, focused pressure that targets chronic knots in the back, neck, and shoulders.", href: "/deep-tissue-massage-in-delhi" },
  { title: "B2B Massage", desc: "A specialised body to body therapy performed with premium oils for complete relaxation.", href: "/b2b-massage-in-delhi" },
  { title: "Couples Massage", desc: "One private room, two therapists — a shared spa experience for two.", href: "/couples-massage-in-delhi" },
  { title: "Swedish Massage", desc: "Long, gliding strokes for genuine relaxation, close to Rajouri Garden Mall.", href: "/swedish-massage-in-rajouri-garden" },
  { title: "Aromatherapy Massage", desc: "Calming essential oils combined with gentle massage strokes to relax the mind and refresh the senses.", href: "/aromatherapy-massage-in-delhi" },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private massage in Rajouri Garden session at our outlet, with premium oils and complete privacy.", features: ["Oil Massage", "Cream Massage", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Spa", price: "₹15000", desc: "The same genuine body massage in Rajouri Garden, delivered to your home anywhere nearby.", features: ["Therapist of Choice", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Flexible" },
  { title: "5 Star Hotel Spa", price: "₹20000", desc: "A longer, more indulgent hotel spa session near Rajouri Garden, with added treatments.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
];

const faqs = [
  { question: "Is there a good spa in Rajouri Garden near the mall?", answer: "Yes, Luxury Russian Spa runs a genuine spa in Rajouri Garden, close to City Square Mall and the Rajouri Garden Metro interchange, offering full body, deep tissue, and B2B massage in a private, hygienic setting." },
  { question: "What makes Luxury Russian Spa the best spa in Rajouri Garden?", answer: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa Rajouri Garden has for residents and visitors across West Delhi." },
  { question: "Do you offer spa in Rajouri Garden Mall or nearby City Square Mall?", answer: "Yes, our outlet is a short walk from Rajouri Garden Mall and City Square Mall, so it's easy to combine shopping with a relaxing massage in Rajouri Garden." },
  { question: "Do you offer massage in Rajouri Garden for both men and women?", answer: "Yes, our massage in Rajouri Garden welcomes both men and women, with male and female therapist options — just mention your preference when booking your session." },
  { question: "Where can I find the best body massage in Rajouri Garden?", answer: "Our Rajouri Garden outlet delivers the best body massage in Rajouri Garden with certified therapists trained in full body, deep tissue, Swedish, and aromatherapy technique." },
  { question: "Do you offer home spa near Rajouri Garden?", answer: "Yes, alongside our outlet, we offer home spa near Rajouri Garden and nearby Tagore Garden, Subhash Nagar, and Punjabi Bagh." },
  { question: "Can I book a couple massage in Rajouri Garden?", answer: "Yes, our Rajouri Garden outlet has private rooms designed for couple massage, including our popular female to male couple massage, so two people can relax together in comfort." },
  { question: "How much does a full body massage in Rajouri Garden cost?", answer: "A full body massage in Rajouri Garden at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and treatment." },
];

export default function SpaInRajourigGrden() {
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
              <FaStar className="text-amber-500" /> RAJOURI GARDEN OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Rajouri Garden</span> Near the Mall
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a spa in Rajouri Garden? Luxury Russian Spa is a trusted destination for massage in Rajouri Garden, delivering full body, deep tissue, and B2B massage just minutes from Rajouri Garden Mall and the metro interchange. Every session at our spa in Rajouri Garden mall area is performed by certified therapists in a clean, private setting. First visit from ₹1999.
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
                <Image src="/images/fpkdl.com_960_1758981994_female-masseur-preparing-bed-massage-session_23-2150461390.jpg" alt="Therapist giving a massage at our spa in Rajouri Garden" fill className="object-cover" />
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">What Makes Our Rajouri Garden Spa Different?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#1f1a17]">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spotlight — image collage + signature treatments */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 overflow-hidden rounded-[32px] border border-amber-100 bg-white p-6 shadow-lg lg:grid-cols-2 lg:items-center lg:p-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative min-h-[420px]">
            <div className="absolute left-0 top-0 z-10 w-40">
              <p className="font-serif text-lg text-[#1f1a17]">Genuine Spa with</p>
              <p className="font-serif text-3xl italic text-amber-700">Mall Access</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">Spa Outlet Near Rajouri Garden Mall</p>
            </div>

            <div className="absolute right-0 top-0 w-[55%] overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 p-2 shadow-xl sm:w-[60%]">
              <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40">
                <Image src="/images/fpkdl.com_750_1758981239_hotel-with-sunset-background_1000124-308478.jpg" alt="Luxury hotel spa in Rajouri Garden" fill className="object-cover" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-64 w-[65%] overflow-hidden rounded-[24px] border-4 border-white shadow-xl sm:h-72">
              <Image src="/images/fpkdl.com_960_1758982094_exfoliation-with-natural-bristle-brush-dry-brush-massage-preparing-skin-epilation_470400-470.jpg" alt="Body massage in Rajouri Garden" fill className="object-cover" />
            </div>

            <div className="absolute bottom-4 right-0 text-5xl text-amber-200/70" aria-hidden="true">✿</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-6 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">1st Visit @ ₹1999</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Best Spa Rajouri Garden Has to Offer</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Looking for a spa near Rajouri Garden? Our spa centre sits close to City Square Mall and the metro interchange, offering calm interiors, soothing music, and premium aromatic oils. Whether after a hectic workday or a weekend outing, our best body massage in Rajouri Garden ensures complete rejuvenation.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Our therapists are trained professionals from India and abroad, specialising in traditional and modern massage technique. Whether you prefer a gentle aromatherapy massage, an invigorating deep tissue massage, or a full body massage, every session is personalised to your body's needs.
            </p>
            <h3 className="mt-6 font-semibold text-[#1f1a17]">Signature Treatments:</h3>
            <ul className="mt-3 grid gap-2 text-gray-700 sm:grid-cols-2">
              {["Full Body Massage", "Deep Tissue Massage", "B2B Massage", "Aromatherapy Massage", "Swedish Massage", "Couples Massage"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-600" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              <FaTelegram /> Join Telegram Channel
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome section — intro + amenity icon row */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1f1a17] md:text-4xl">Best Spa in Rajouri Garden — Get Full Body Massage at Home &amp; Hotel</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-600">
            Welcome to Luxury Russian Spa — the best spa in Rajouri Garden. If you're tired, stressed, or need a refreshing break, our spa near Rajouri Garden Mall is your perfect wellness destination. We offer a clean, luxury, and 100% hygienic ambience with a calm and secure environment for complete relaxation.
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600">
            With 24+ spa outlets across Delhi NCR, we're right here for you near City Square Mall and the Rajouri Garden Metro interchange. Whether you want a quick stress-relief session or a deep muscle relaxation therapy, our certified and professional therapists at Luxury Russian Spa ensure a world-class spa experience every time.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Natural Mask", icon: <FaLeaf /> },
              { label: "Foot Treatment", icon: <FaShoePrints /> },
              { label: "Essential Oils", icon: <FaTint /> },
              { label: "Body Scrub", icon: <FaHandSparkles /> },
              { label: "Relaxation Spa", icon: <FaSpa /> },
              { label: "Pool Session", icon: <FaSwimmer /> },
            ].map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200 bg-white text-2xl text-amber-700 shadow-sm">
                  {item.icon}
                </div>
                <p className="mt-3 text-sm font-medium text-[#1f1a17]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Refresh your body — editorial intro */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1f1a17]">Rajouri Garden</p>
            <div className="mt-3 h-0.5 w-10 bg-amber-600" />
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1f1a17] md:text-4xl">
              Refresh Your Body With Relaxing Massage at
            </h2>
            <h3 className="mt-1 text-3xl font-bold leading-tight text-amber-600/80 md:text-4xl">
              Spa in Rajouri Garden
            </h3>
            <div className="mt-5 space-y-4 text-gray-700">
              <p>
                At Luxury Russian Spa in Rajouri Garden, we offer a delightful and truly relaxing experience to relieve your body and mind of pain. With 24+ spa outlets across Delhi, Gurgaon, and Noida, our spa in Rajouri Garden is known for professional body massage by certified therapists.
              </p>
              <p>
                Our spa rooms offer a luxurious, hygienic, and peaceful ambience with a wide range of therapies like full body massage, deep tissue massage, B2B massage, and couple massage. At our massage centre near Rajouri Garden Mall, we focus on hygiene, comfort, and customer care to give you the best experience every time.
              </p>
              <p>
                If you want a trusted rajouri garden mall spa, look for experienced therapists, transparent pricing, and complete cleanliness — and Luxury Russian Spa in Rajouri Garden ticks all boxes. That's why we're the first choice for the best spa in Rajouri Garden and across West Delhi.
              </p>
            </div>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              <FaTelegram /> Join Telegram Channel
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-96">
            <Image src="/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg" alt="Luxury spa treatment room in Rajouri Garden" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* About section — scannable card layout */}
      <section className="bg-[#fff3e8] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">About Our Rajouri Garden Outlet</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Spa in Rajouri Garden — A Trusted Body Massage &amp; Wellness Centre</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[380px]"
            >
              <Image src="/images/spa-in-Rajouri-Garden.webp" alt="Best spa in Rajouri Garden treatment room" fill className="object-cover" />
            </motion.div>

            <div>
              <p className="text-gray-700">
                Luxury Russian Spa is the best spa in Rajouri Garden for guests across Tagore Garden, Subhash Nagar, and Punjabi Bagh — a real massage centre near the mall, not a generic neighbourhood parlour. Our spa in Rajouri Garden mall area covers full body, deep tissue, B2B, and couple massage, with home and hotel spa available on request.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg text-amber-600"><FaSpa /></div>
                  <h3 className="text-base font-semibold text-[#1f1a17]">Near Rajouri Garden Mall</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">Minutes from City Square Mall and the Rajouri Garden Metro interchange on the Blue Line.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg text-amber-600"><FaLeaf /></div>
                  <h3 className="text-base font-semibold text-[#1f1a17]">Certified Therapists</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">Trained Indian and foreigner therapists deliver every massage in Rajouri Garden session with care.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg text-amber-600"><FaHotel /></div>
                  <h3 className="text-base font-semibold text-[#1f1a17]">Home &amp; Hotel Spa</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">Prefer to stay in? Home spa and hotel spa near Rajouri Garden are both available on request.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg text-amber-600"><FaCheckCircle /></div>
                  <h3 className="text-base font-semibold text-[#1f1a17]">Transparent Pricing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">No hidden charges — book the best spa Rajouri Garden offers on WhatsApp with pricing confirmed upfront.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Why Choose Luxury Russian Spa in Rajouri Garden?</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Choosing a spa is about more than booking a massage. At our Rajouri Garden outlet, we focus on creating a calm, comfortable experience where you can take a proper break from your day.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Whether you're coming from Tagore Garden, Subhash Nagar, or just want some personal time after work, our spa experience is built around your comfort.
            </p>
            <h3 className="mt-6 font-semibold text-[#1f1a17]">Why guests choose us:</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><span className="font-semibold text-[#1f1a17]">Experienced Therapists</span> — Professional care, including foreigner therapists, with attention to your comfort and preferences.</li>
              <li><span className="font-semibold text-[#1f1a17]">Range of Massage Therapies</span> — Full body, B2B, deep tissue, and more, suited to different relaxation needs.</li>
              <li><span className="font-semibold text-[#1f1a17]">Clean &amp; Private Spaces</span> — Comfortable treatment rooms for a peaceful spa experience.</li>
              <li><span className="font-semibold text-[#1f1a17]">Convenient Location</span> — Minutes from Rajouri Garden Mall and the metro interchange.</li>
              <li><span className="font-semibold text-[#1f1a17]">Body Massage in Rajouri Garden Home Service</span> — Same quality treatment delivered to your residence nearby.</li>
              <li><span className="font-semibold text-[#1f1a17]">₹1999 First-Visit Offer</span> — Selected spa treatments available with our first-visit offer.</li>
            </ul>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1f1a17] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#1f1a17]">
              <FaTelegram /> See Available Staff
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaLeaf className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">Experienced Therapists</h4>
              <p className="mt-2 text-sm text-white/85">Skilled therapists deliver personalised massage with expert care for complete relaxation.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaRupeeSign className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">₹1999 First Visit Offer</h4>
              <p className="mt-2 text-sm text-white/85">Enjoy our first-visit offer with premium spa therapies and exceptional value.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaClock className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">24x7 Booking</h4>
              <p className="mt-2 text-sm text-white/85">Available 24x7 for outlet, home, and hotel spa bookings.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1a17] to-[#4b4541] p-6 text-center text-white shadow-lg">
              <FaHeart className="mx-auto text-3xl" />
              <h4 className="mt-3 font-semibold">Private &amp; Hygienic Rooms</h4>
              <p className="mt-2 text-sm text-white/85">Every session ensures complete hygiene, comfort, and privacy for every guest.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Therapists */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Meet Our Therapists</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Meet Our Expert Massage Therapists in Rajouri Garden</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A mix of skilled Indian and foreigner therapists, so you get real variety in technique.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { role: "Senior Massage Therapist", specialty: "Full Body & Deep Tissue", experience: "8+ yrs", image: "/images/staff1.jpg" },
            { role: "Foreigner Therapist", specialty: "Russian & Aromatherapy", experience: "6+ yrs", image: "/images/staff6.jpg" },
            { role: "B2B Massage Specialist", specialty: "Full-Contact Technique", experience: "7+ yrs", image: "/images/staff3.jpg" },
            { role: "Wellness Therapist", specialty: "Foot & Body Relief", experience: "5+ yrs", image: "/images/staff12.jpg" },
          ].map((t, index) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative h-80 overflow-hidden rounded-[24px] shadow-lg"
            >
              <Image src={t.image} alt={`${t.role} at Luxury Russian Spa Rajouri Garden`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
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
      </section>

      {/* Services */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Explore Our Massage Services in Rajouri Garden</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f1a17]">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
                <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline">
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Amenities */}
      <section className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1f1a17] md:text-4xl">100% Hygienic &amp; Professional Spa in Rajouri Garden — Your Safety First</h2>
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
              <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border border-amber-200 bg-white shadow-sm">
                  <Image src={item.image} alt={item.label} fill className="object-contain p-5" />
                </div>
                <p className="mt-3 text-sm font-medium text-[#1f1a17]">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <Link href="/massage-service-in-delhi" className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#fff3e8] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Spa in Rajouri Garden Pricing — Transparent &amp; Affordable</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff3e8] to-[#fffaf5]" : "border-amber-100 bg-white"}`}>
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
                <a href="https://api.whatsapp.com/send?phone=919217255113" className="mt-6 block rounded-full bg-amber-600 py-3 text-center font-semibold text-white transition hover:bg-amber-700">
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
          <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Your Spa in Rajouri Garden Questions, Answered</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-white p-5">
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

      {/* Other Spa Locations — dark overlay tile grid */}
      <section className="bg-[#fff6ee] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
              <FaStar className="text-emerald-500" /> 24+ Outlets
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-[#1f1a17] md:text-4xl">
              Spa Locations <span className="text-amber-700">Across Delhi NCR</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Not based in Rajouri Garden? We run 24+ outlets across Delhi NCR — find the one closest to you.
            </p>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-amber-300" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { title: "Janakpuri", href: "/spa-in-janakpuri", image: "/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg" },
              { title: "Dwarka", href: "/spa-in-dwarka", image: "/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg" },
              { title: "Karol Bagh", href: "/spa-in-karol-bagh", image: "/images/staff10.jpg" },
              { title: "Connaught Place", href: "/spa-in-connaught-place", image: "/images/spa-in-Connaught-place.png" },
              { title: "Paharganj", href: "/spa-in-paharganj", image: "/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg" },
              { title: "Pitampura", href: "/spa-in-pitampura", image: "/images/spa-in-pitampura.png" },
              { title: "Rohini", href: "/spa-in-rohini", image: "/images/fpkdl.com_960_1758981900_woman-getting-back-massage-from-masseur_23-2150461404.jpg" },
              { title: "Lajpat Nagar", href: "/spa-in-lajpat-nagar", image: "/images/spa-in-lajpat-nagar.webp" },
              { title: "Noida", href: "/spa-in-noida", image: "/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg" },
              { title: "Gurgaon", href: "/spa-in-gurgaon", image: "/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg" },
            ].map((loc) => (
              <motion.a
                key={loc.href}
                href={loc.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group relative block h-32 overflow-hidden rounded-2xl shadow-lg"
              >
                <Image src={loc.image} alt={`Spa in ${loc.title}`} fill className="object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f09] via-[#1c0f09]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-sm font-bold uppercase tracking-wide text-white">{loc.title}</p>
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#1f1a17] to-[#4b4541] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Book the Best Spa in Rajouri Garden — Today</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in near the mall, or connect with us for a home or hotel spa booking anywhere in Rajouri Garden and West Delhi.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f1a17] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
