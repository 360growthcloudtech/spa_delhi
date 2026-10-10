import { preload } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Home,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// One price list for every outlet. Change these three and the whole page (and the schema in ./page.js) follows.
export const PRICES = {
  outlet: { price: 1999, label: "₹1,999", time: "60 min" },
  home: { price: 14999, label: "₹14,999", time: "90 min" },
  fiveStar: { price: 19999, label: "₹19,999", time: "120 min" },
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What is the spa price in Delhi at Luxury Russian Spa?",
    answer:
      "A 60-minute massage at any of our outlets is ₹1,999. A 90-minute session at your home or hotel is ₹14,999, and our 120-minute 5-star hotel spa package is ₹19,999. Those are the full prices, with no extra charges added at the end.",
  },
  {
    question: "How much does a full body massage cost in Delhi?",
    answer:
      "A full body massage at our outlets costs ₹1,999 for 60 minutes. If you'd like it at home, a 90-minute full body massage at home in Delhi is ₹14,999.",
  },
  {
    question: "Is the price different in Mahipalpur, Lajpat Nagar or Uttam Nagar?",
    answer:
      "No. We keep the same rates at every outlet, whether you're in Mahipalpur, Lajpat Nagar, Uttam Nagar, Paharganj or anywhere else in Delhi NCR. The only things that change the price are the length of the session and where it happens.",
  },
  {
    question: "What is the Thai massage price in Delhi?",
    answer:
      "A 60-minute Thai massage at our outlets is ₹1,999, the same as our other massages. It's done on a mat in loose clothes, with no oil.",
  },
  {
    question: "What does a couple spa in Delhi cost?",
    answer:
      "Couple massage prices depend on how long you'd like and whether it's at an outlet, your home or a hotel suite. Send us those details on WhatsApp and we'll give you the exact price before you book.",
  },
  {
    question: "Can I book a 90-minute session at an outlet?",
    answer:
      "Yes. Longer outlet sessions are available, and we'll confirm the price on WhatsApp when you book, since it depends on the massage and the outlet.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Your massage, a private room, fresh towels and linen, the oils, and a hot shower afterwards at the outlet. For home visits, the therapist brings towels and oils with them. Tips are never expected.",
  },
  {
    question: "Are you a cheap spa?",
    answer:
      "We're not the cheapest massage in Delhi, and we don't try to be. What you pay for is a private room, a trained therapist you choose yourself, and a price that doesn't change once you're on the table. If a place quotes much lower, it's worth asking what's left out.",
  },
  {
    question: "Are there any offers or discounts?",
    answer:
      "We run offers from time to time, especially for first visits. Just ask for today's offer when you message us on WhatsApp.",
  },
  {
    question: "Do I have to pay in advance?",
    answer:
      "Not for outlet bookings. You pay after your session, by UPI, cash or card. For home and hotel visits we'll explain the payment when we confirm your booking.",
  },
  {
    question: "Why is the home or hotel price higher?",
    answer:
      "Because the session is longer, 90 minutes instead of 60, and the therapist travels to you with everything needed. You also skip the travel time and can go straight to bed afterwards.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1280].map((w) => `/images/price/hero-${w}.webp ${w}w`).join(", ");

// In-page navigation ("On this page")
const sections = [
  { id: "price-tiers", label: "Price at a Glance" },
  { id: "price-list", label: "Full Price List" },
  { id: "included", label: "What's Included" },
  { id: "area-prices", label: "Prices by Area" },
  { id: "get-price", label: "Get Your Price" },
  { id: "faq", label: "FAQs" },
];

const tiers = [
  {
    icon: Leaf,
    title: "Spa Outlet",
    ...PRICES.outlet,
    description: "At any of our 24+ outlets in Delhi NCR",
    features: ["Any massage on our menu", "Private room", "Hot shower after", "Pay after your session"],
  },
  {
    icon: Home,
    title: "Home or Hotel",
    ...PRICES.home,
    description: "The therapist comes to you",
    features: ["Full body, Thai or deep tissue", "Therapist brings towels & oils", "Your home or hotel room", "No travel for you"],
    popular: true,
  },
  {
    icon: Star,
    title: "5 Star Hotel Spa",
    ...PRICES.fiveStar,
    description: "Our longest, most indulgent session",
    features: ["International therapist", "5-star property", "Aromatherapy oils", "Two full hours"],
  },
];

// Every massage, with a link to its own page and a WhatsApp link that already names the massage
const WHATSAPP_NUMBER_URL = "https://wa.me/918799716197";
const askPriceUrl = (massage) =>
  `${WHATSAPP_NUMBER_URL}?text=${encodeURIComponent(`Hi! What's the price for a ${massage}? I'd like to book at an outlet / at home (please tell me both).`)}`;

const priceList = [
  { name: "Full Body Massage", href: "/full-body-massage-in-delhi", emoji: "💆", note: "Head to toe with warm oil. Our most booked massage.", tag: "Most booked" },
  { name: "Deep Tissue Massage", href: "/deep-tissue-massage-in-delhi", emoji: "💪", note: "Slow, firm pressure for a stiff neck, shoulders or back." },
  { name: "Thai Massage", href: "/thai-massage-in-delhi", emoji: "🧘", note: "Stretching on a mat, in loose clothes. No oil." },
  { name: "Swedish Massage", href: "/swedish-massage-in-delhi", emoji: "🌙", note: "Light, flowing strokes. Nice for a first massage." },
  { name: "Aromatherapy Massage", href: "/aromatherapy-massage-in-delhi", emoji: "🌿", note: "Gentle pressure with essential oils you pick." },
  { name: "B2B Massage", href: "/b2b-massage-in-delhi", emoji: "✨", note: "Our premium session in a fully private room." },
  { name: "Sandwich Massage", href: "/sandwich-massage", emoji: "👐", note: "Two therapists working on you at the same time." },
  { name: "Couple Massage", href: "/couple-massage", emoji: "💑", note: "Two therapists, one room, both of you together.", onRequest: true },
];

const durations = [PRICES.outlet, PRICES.home, PRICES.fiveStar];

const included = [
  { icon: ShieldCheck, title: "A private room", text: "Just you and your therapist. Cleaned after every guest, with fresh linen each time." },
  { icon: Sparkles, title: "Oils and towels", text: "Good quality oils and clean towels are part of the price, not an add-on." },
  { icon: Check, title: "A hot shower after", text: "At the outlet, so you don't leave feeling oily. Home visits skip this, obviously." },
  { icon: CreditCard, title: "No surprise extras", text: "The price we quote on WhatsApp is the price you pay. Tips are never expected." },
];

const notIncluded = [
  "Hidden \"service charges\" added at the end",
  "Pressure to buy a package before you leave",
  "A different price once you're on the table",
];

// Same rates everywhere, so areas are grouped by zone and each links to its own page instead of repeating the price.
const areaZones = [
  {
    zone: "Near the Airport",
    emoji: "✈️",
    areas: [
      { area: "Mahipalpur", href: "/spa-in-mahipalpur", note: "Open 24/7" },
      { area: "Aerocity", href: "/spa-in-aerocity", note: "Outlet + hotel visits" },
    ],
  },
  {
    zone: "Central Delhi",
    emoji: "🏛️",
    areas: [
      { area: "Connaught Place", href: "/spa-in-connaught-place", note: "At The Park hotel" },
      { area: "Karol Bagh", href: "/spa-in-karol-bagh" },
      { area: "Paharganj", href: "/spa-in-paharganj", note: "Near New Delhi station" },
    ],
  },
  {
    zone: "South Delhi",
    emoji: "🌳",
    areas: [
      { area: "Lajpat Nagar", href: "/spa-in-lajpat-nagar", note: "Near Central Market" },
      { area: "Saket", href: "/spa-in-saket" },
    ],
  },
  {
    zone: "West Delhi",
    emoji: "🌇",
    areas: [
      { area: "Uttam Nagar", href: "/spa-in-uttam-nagar" },
      { area: "Rajouri Garden", href: "/spa-in-rajouri-garden" },
      { area: "Dwarka", href: "/spa-in-dwarka" },
    ],
  },
  {
    zone: "North & East Delhi",
    emoji: "🧭",
    areas: [
      { area: "Rohini", href: "/spa-in-rohini" },
      { area: "Laxmi Nagar", href: "/spa-in-laxmi-nagar" },
    ],
  },
  {
    zone: "Delhi NCR",
    emoji: "🏙️",
    areas: [
      { area: "Gurgaon", href: "/spa-in-gurgaon" },
      { area: "Noida", href: "/spa-in-noida" },
    ],
  },
];

const nearestOutletUrl = `https://wa.me/918799716197?text=${encodeURIComponent("Hi! Which of your outlets is nearest to me? My area is: ")}`;

const getPriceSteps = [
  { title: "Tell us three things", text: "Which massage, how long, and whether it's at an outlet, your home or a hotel. That's all we need." },
  { title: "We reply with the price", text: "Usually within a few minutes on WhatsApp, along with a time that works and who your therapist will be." },
  { title: "Book, then pay after", text: "Once you're happy with the price, we lock in the slot. For outlet visits you pay after your session." },
];

// "Where next" links so visitors can move on to a service, an outlet or the home page easily
const nextLinks = [
  { label: "Home", href: "/", text: "Back to the main page" },
  { label: "All Massage Services", href: "/massage-in-delhi", text: "Every massage we offer in Delhi" },
  { label: "Full Body Massage", href: "/full-body-massage-in-delhi", text: "Our most booked massage" },
  { label: "Couple Massage", href: "/couple-massage", text: "Two therapists, one room" },
  { label: "Our Outlets", href: "/outlets", text: "Find the one nearest you" },
  { label: "Contact Us", href: "/contact", text: "Call, WhatsApp or Telegram" },
];

function WhatsAppButton({ children = "Get My Price on WhatsApp", className = "" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 ${className}`}
    >
      <FaWhatsapp className="size-5" /> {children}
    </a>
  );
}

export default function Pricpage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/price/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="price-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/price/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Private spa room in Delhi"
          width={1280}
          height={845}
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <a href="/massage-in-delhi" className="hover:text-secondary">Services</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa Price in Delhi</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Delhi Spa Price List <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="price-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa Price in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            One Clear Price List for Every Outlet, From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Most people searching for spa rates in Delhi just want a straight answer. So here it is. A massage at any
            of our outlets is ₹1,999 for an hour. At home or in your hotel it&apos;s ₹14,999 for 90 minutes. That&apos;s
            the full price, and it&apos;s the same in Mahipalpur as it is in Lajpat Nagar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa at ${PHONE_LABEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4 text-secondary" /> {PHONE_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* Price strip, overlapping the hero */}
      <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-8">
        <dl className="max-w-5xl mx-auto grid grid-cols-3 gap-px overflow-hidden rounded-3xl bg-amber-100 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100">
          {tiers.map((t) => (
            <div key={t.title} className="bg-white p-4 md:p-7 text-center">
              <dt className="text-xs sm:text-sm font-semibold text-amber-900">{t.title}</dt>
              <dd>
                <span className="mt-1 block font-title text-2xl md:text-4xl font-bold text-primary">{t.label}</span>
                <span className="block text-xs text-bodycolor">{t.time}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* On this page */}
      <nav aria-label="On this page" className="bg-white px-4 pt-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">On this page</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 2. Price tiers */}
      <section id="price-tiers" aria-labelledby="price-tiers-title" className="scroll-mt-24 bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="price-tiers-title"
            eyebrow="Spa Charges in Delhi"
            title="Three Prices."
            highlight="That's It."
            text="The price depends on two things only: how long your session is, and where it happens. The massage you pick doesn't change it."
          />
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {tiers.map(({ icon: Icon, title, label, time, description, features, popular }) => (
              <div
                key={title}
                className={`relative flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  popular
                    ? "bg-dark text-white shadow-[0_25px_60px_rgba(43,24,16,0.35)] md:-my-4 md:py-12"
                    : "bg-amber-50 ring-1 ring-amber-100"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-dark">
                    Most Popular
                  </span>
                )}
                <span className={`flex size-12 items-center justify-center rounded-xl ${popular ? "bg-white/10 text-secondary" : "bg-white text-primary"}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className={`mt-5 font-title text-2xl font-bold ${popular ? "text-white" : "text-amber-900"}`}>{title}</h3>
                <p className={`mt-1 text-sm ${popular ? "text-white/70" : "text-bodycolor"}`}>{description}</p>
                <p className="mt-6 flex items-end gap-2">
                  <span className={`font-title text-4xl font-bold ${popular ? "text-secondary" : "text-primary"}`}>{label}</span>
                  <span className={`pb-1 text-sm ${popular ? "text-white/60" : "text-bodycolor"}`}>/ {time}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className={`size-4 shrink-0 ${popular ? "text-secondary" : "text-primary"}`} strokeWidth={3} />
                      <span className={popular ? "text-white/90" : "text-amber-900"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-colors duration-300 ${
                    popular ? "bg-secondary text-dark hover:bg-white" : "bg-white text-primary ring-1 ring-amber-200 hover:bg-primary hover:text-white"
                  }`}
                >
                  <FaWhatsapp className="size-4" /> Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Price list by massage */}
      <section id="price-list" aria-labelledby="price-list-title" className="scroll-mt-24 bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="price-list-title"
            eyebrow="Massage Rates in Delhi"
            title="Delhi Spa Price List"
            highlight="by Massage"
            text="Every massage on our menu costs the same. What changes the price is how long you book and where. Tap 'Ask Price' and WhatsApp opens with your massage already typed in."
          />

          {/* The three rates, shown once instead of repeating them on every card */}
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl bg-white p-4 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Same price for any massage</p>
            <dl className="mt-3 grid grid-cols-3 gap-2">
              {tiers.map((t) => (
                <div key={t.title} className="rounded-xl bg-amber-50 px-2 py-3 text-center ring-1 ring-amber-200">
                  <dt className="text-[11px] sm:text-xs text-bodycolor">{t.title} · {t.time}</dt>
                  <dd className="font-title text-lg sm:text-2xl font-bold text-primary">{t.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {priceList.map((m) => (
              <li
                key={m.name}
                className={`relative flex flex-col rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                  m.onRequest
                    ? "bg-dark text-white shadow-[0_20px_45px_rgba(43,24,16,0.3)]"
                    : "bg-white ring-1 ring-amber-100 shadow-[0_8px_24px_rgba(43,24,16,0.06)] hover:shadow-[0_20px_45px_rgba(43,24,16,0.12)] hover:ring-amber-300"
                }`}
              >
                {m.tag && (
                  <span className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-secondary px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-dark">
                    {m.tag}
                  </span>
                )}
                <span className={`flex size-10 sm:size-12 items-center justify-center rounded-xl sm:rounded-2xl text-xl sm:text-2xl ${m.onRequest ? "bg-white/10" : "bg-amber-50"}`} aria-hidden="true">
                  {m.emoji}
                </span>
                <h3 className={`mt-3 sm:mt-4 font-title text-base sm:text-xl font-bold leading-snug ${m.onRequest ? "text-white" : "text-amber-900"}`}>{m.name}</h3>
                <p className={`mt-1 flex-1 text-xs sm:text-sm ${m.onRequest ? "text-white/75" : "text-bodycolor"}`}>{m.note}</p>

                <div className="mt-4 sm:mt-5">
                  {m.onRequest ? (
                    <p className="font-title text-lg sm:text-2xl font-bold leading-tight text-secondary">Price on request</p>
                  ) : (
                    <p className="flex items-baseline gap-1.5">
                      <span className="text-xs text-bodycolor">From</span>
                      <span className="font-title text-2xl sm:text-3xl font-bold text-primary">{PRICES.outlet.label}</span>
                    </p>
                  )}
                  <ul className="mt-3 hidden flex-wrap gap-1.5 sm:flex" aria-label="Session lengths">
                    {durations.map((d) => (
                      <li
                        key={d.time}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          m.onRequest ? "bg-white/10 text-white/80" : "bg-amber-50 text-amber-800 ring-1 ring-amber-200"
                        }`}
                      >
                        {d.time}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 sm:mt-6 grid gap-2">
                  <a
                    href={askPriceUrl(m.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#15803d] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
                  >
                    <FaWhatsapp className="size-4" /> Ask Price<span className="sr-only"> for {m.name} on WhatsApp</span>
                  </a>
                  <a
                    href={m.href}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
                      m.onRequest ? "text-white/90 ring-1 ring-white/30 hover:bg-white/10" : "text-primary ring-1 ring-amber-200 hover:bg-amber-50"
                    }`}
                  >
                    Details<span className="sr-only"> about {m.name}</span> <ArrowRight className="size-4" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-bodycolor">
            Want to compare the massages first? See <a href="/massage-in-delhi" className={linkClass}>all our massage services in Delhi</a>.
          </p>
        </div>
      </section>

      {/* 4. What's included */}
      <section id="included" aria-labelledby="included-title" className="scroll-mt-24 bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="included-title"
            eyebrow="What You Pay For"
            title="What's Included in"
            highlight="the Price"
            text="When you compare spa charges in Delhi, check what each price actually covers. Here's what ours does."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-lg font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-dark p-7 md:p-10 text-white">
            <p className="font-title text-2xl font-bold">And what you won&apos;t find on your bill</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {notIncluded.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-white/85">
                  <X className="mt-0.5 size-4 shrink-0 text-secondary" strokeWidth={3} /> {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Prices by area */}
      <section id="area-prices" aria-labelledby="area-prices-title" className="scroll-mt-24 bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="area-prices-title"
            eyebrow="Same Rates Everywhere"
            title="Spa Prices"
            highlight="by Area"
            text="Searching for a spa in Mahipalpur with price, or a spa in Uttam Nagar with price? You don't need to compare outlets. The rate is the same wherever you go."
          />

          {/* One price statement instead of repeating it on every area */}
          <div className="relative mb-10 overflow-hidden rounded-3xl bg-dark p-6 md:p-8 text-white shadow-[0_20px_50px_rgba(43,24,16,0.25)]">
            <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">At every outlet</p>
                <p className="mt-1 font-title text-5xl font-bold text-white">{PRICES.outlet.label}</p>
                <p className="text-sm text-white/70">for {PRICES.outlet.time}</p>
              </div>
              <ul className="grid gap-2 text-sm text-white/85 sm:grid-cols-3 md:border-l md:border-white/15 md:pl-8">
                {["No area surcharge", "Same quality everywhere", "Price confirmed first"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-secondary" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
              <a
                href={nearestOutletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-white"
              >
                <FaWhatsapp className="size-4" /> Find My Nearest Outlet
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areaZones.map((z) => (
              <div key={z.zone} className="rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
                <h3 className="flex items-center gap-2.5 font-title text-lg font-bold text-amber-900">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-amber-50 text-lg" aria-hidden="true">{z.emoji}</span>
                  {z.zone}
                </h3>
                <ul className="mt-4 divide-y divide-amber-100">
                  {z.areas.map((a) => (
                    <li key={a.href}>
                      <a href={a.href} className="group flex items-center gap-3 py-3">
                        <MapPin className="size-4 shrink-0 text-primary" />
                        <span className="flex-1">
                          <span className="block font-semibold text-amber-900 group-hover:text-primary">Spa in {a.area}</span>
                          {a.note && <span className="text-xs text-bodycolor">{a.note}</span>}
                        </span>
                        <ArrowRight className="size-4 text-primary opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Don&apos;t see your area? <a href="/outlets" className={linkClass}>See all 24+ outlets</a>, or tap &quot;Find My Nearest Outlet&quot; above.
          </p>
        </div>
      </section>

      {/* 6. How to get your exact price */}
      <section id="get-price" aria-labelledby="get-price-title" className="scroll-mt-24 bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="get-price-title"
            eyebrow="Couple, Longer or Custom Sessions"
            title="Get Your Exact Price"
            highlight="in a Few Minutes"
            text="For couple massages, longer outlet sessions or anything a bit different, we'll quote you on WhatsApp. It's quick."
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {getPriceSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-title text-lg font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <WhatsAppButton>Ask for My Price</WhatsAppButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-bodycolor">
              <Clock className="size-4" /> We take booking messages 24 hours a day
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" aria-labelledby="price-faq-title" className="scroll-mt-24 bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="price-faq-title"
            eyebrow="Questions About Price?"
            title="Spa Price in Delhi"
            highlight="FAQs"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                open={i === 0}
                className="group rounded-2xl bg-white ring-1 ring-amber-100 transition-shadow open:shadow-[0_10px_30px_rgba(43,24,16,0.08)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-4">
                    <span className="font-title text-lg font-bold text-amber-700">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-sans text-base font-semibold text-amber-900">{faq.question}</h3>
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-primary ring-1 ring-amber-200 transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="px-5 pb-6 pl-[3.75rem] text-sm leading-relaxed text-bodycolor md:px-6 md:pl-[4.25rem]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Where next */}
      <nav aria-labelledby="next-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="next-title"
            eyebrow="Keep Exploring"
            title="Where to"
            highlight="Next?"
            text="Know the price, now pick your massage or your nearest outlet."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nextLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group flex h-full items-center gap-4 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:ring-amber-300"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                    {i === 0 ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
                  </span>
                  <span>
                    <span className="block font-title text-lg font-bold text-amber-900">{l.label}</span>
                    <span className="text-xs text-bodycolor">{l.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 9. Final CTA */}
      <section aria-labelledby="price-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="price-cta-title"
            eyebrow="Book Today"
            title="Happy With the Price?"
            highlight="Let's Book It"
            text="Message us the massage, a time and your area. We'll confirm the therapist and the exact price on the same chat."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#15803d] hover:!bg-[#166534] !shadow-black/30">Book on WhatsApp</WhatsAppButton>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d6fa5] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#185d8a]"
            >
              <FaTelegramPlane className="size-5" /> Chat on Telegram
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> Call Now
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
            <CalendarCheck className="size-4" /> No advance payment for outlet bookings
          </p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
