import Image from "next/image";
import { preload } from "react-dom";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Home,
  Hotel,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import MassagePicker from "../components/MassagePicker";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// In Chandigarh we only do home and hotel visits (no walk-in outlet), so nothing on this page gives a street address.

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Do you have a spa center in Chandigarh?",
    answer:
      "We don't have a walk-in spa center in Chandigarh. Our therapists come to you instead, at your home or in your hotel room, anywhere in the tricity. Plenty of our guests actually prefer it, since there's no driving back afterwards.",
  },
  {
    question: "What is the full body massage price in Chandigarh?",
    answer:
      "A 90-minute massage in your hotel room is ₹14,999, and our 120-minute 5-star package with an international therapist is ₹19,999. For a massage at home, the price depends on your sector and how long you'd like, so we confirm it on WhatsApp first. Ask for today's offer while you're at it.",
  },
  {
    question: "Do you come to Sector 35, Sector 8 and Sector 17?",
    answer:
      "Yes. Sectors 8, 9, 17, 22, 26 and 35 are where most of our Chandigarh bookings come from, and we go to the other sectors too. Send your sector on WhatsApp and we'll tell you when the therapist can be there.",
  },
  {
    question: "Can you come to Mohali, Zirakpur or Panchkula?",
    answer:
      "Yes, we cover the whole tricity, including Mohali, Zirakpur, Panchkula, Manimajra and Baltana. If you're staying in a hotel near Chandigarh airport, we can come there as well.",
  },
  {
    question: "I'm shopping at Elante Mall. Can I get a massage nearby?",
    answer:
      "Since we don't have an outlet, we can't take you in at the mall. But if your home or hotel is nearby, book us for after you're done shopping and the therapist will meet you there.",
  },
  {
    question: "Do you offer Thai massage in Chandigarh?",
    answer:
      "Yes. Our Thai therapists do the traditional style on a mat, with stretches and pressure points and no oil. It's what people usually pick after a long drive or a day on their feet.",
  },
  {
    question: "Is there a Russian spa in Chandigarh?",
    answer:
      "Our therapists from Russia and Uzbekistan do take bookings in Chandigarh, along with our Thai and Indian therapists. Let us know who you'd prefer and we'll check who's free on your date.",
  },
  {
    question: "Can we book a couple massage at home?",
    answer:
      "Yes. Two therapists come together so you can both have your massage at the same time. A living room or a hotel suite usually has enough space for it.",
  },
  {
    question: "Do you offer B2B massage in Chandigarh?",
    answer:
      "Yes, B2B massage is available as a private home or hotel session. Message us on WhatsApp and we'll explain how it works and what it costs before you decide.",
  },
  {
    question: "Can men book a massage? Can I ask for a female therapist?",
    answer:
      "Of course. Men and women both book with us. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Just mention it when you book.",
  },
  {
    question: "How do I book, and how do I pay?",
    answer:
      "Call or WhatsApp +91 87997 16197 with your sector and a time. We confirm the therapist and price on the same chat. You pay after the session, by UPI, cash or card.",
  },
];

// Options for the "How are you feeling today?" picker. No links: our massage detail pages are Delhi-specific.
const moods = [
  {
    id: "drive",
    label: "Just drove in from Delhi",
    emoji: "🚗",
    pick: "Full Body Massage",
    time: "60–90 min",
    why: "Five hours on the highway leaves your back and legs stiff. A full body massage with warm oil is the nicest way we know to end that kind of day.",
    points: ["Our most booked massage in Chandigarh", "Works on back, legs, arms and neck", "You'll sleep properly tonight"],
  },
  {
    id: "desk",
    label: "Desk job, stiff neck",
    emoji: "💻",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "Hours bent over a laptop make knots that a light massage can't reach. Deep tissue uses slower, firmer pressure right where it hurts.",
    points: ["Firm pressure, done slowly", "Tell your therapist where it hurts", "Most people feel looser the next morning"],
  },
  {
    id: "stretch",
    label: "Want a stretch, no oil",
    emoji: "🧘",
    pick: "Thai Massage",
    time: "60–90 min",
    why: "You stay in loose clothes on a mat while your therapist stretches you out and presses on the tight spots. No oil, so no shower needed.",
    points: ["Done by our Thai therapists", "Good for hips, legs and lower back", "Leaves you feeling light, not sleepy"],
  },
  {
    id: "couple",
    label: "Booking for two",
    emoji: "💑",
    pick: "Couple Massage",
    time: "60–120 min",
    why: "Two therapists, one room, same time. People book it for anniversaries or when family's visiting and they finally get an evening to themselves.",
    points: ["Two therapists arrive together", "Same or different massages", "Works well in a hotel suite"],
  },
  {
    id: "treat",
    label: "Want something special",
    emoji: "✨",
    pick: "B2B Massage",
    time: "60–90 min",
    why: "Our premium body to body session, done fully privately at your home or hotel. Message us and we'll walk you through it.",
    points: ["Fully private session", "Choose your therapist", "Price confirmed before booking"],
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Pre-resized static hero (same files as the home page hero), so the mobile LCP doesn't wait on the image optimizer.
const HERO_SRCSET = [640, 828, 1252].map((w) => `/images/hero/hb3-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: Home, label: "Home Massage" },
  { icon: Hotel, label: "Hotel Room Visits" },
  { icon: Users, label: "Thai & Russian Therapists" },
  { icon: MapPin, label: "All Over the Tricity" },
];

const quickFacts = [
  { value: "Tricity", label: "Covered", note: "Chandigarh, Mohali, Panchkula" },
  { value: "4", label: "Therapist Styles", note: "Thai, Russian, Uzbek, Indian" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹0", label: "Hidden Charges", note: "Price fixed on WhatsApp" },
];

const services = [
  { title: "Full Body Massage", text: "Warm oil, head to toe. Most people in Chandigarh start with this one.", time: "60–90 min" },
  { title: "Thai Massage", text: "Stretching and pressure points on a mat, done by our Thai therapists. No oil.", time: "60–90 min" },
  { title: "Deep Tissue Massage", text: "Slow, firm pressure for a sore neck, tight shoulders and a stiff lower back.", time: "60–90 min" },
  { title: "Couple Massage", text: "Two therapists come together, so neither of you has to wait for a turn.", time: "60–120 min" },
  { title: "B2B Massage", text: "A premium body to body session at your home or hotel. Ask us for the details.", time: "60–90 min" },
  { title: "Swedish Massage", text: "Light, flowing strokes. A good pick if you've never had a massage before.", time: "60–90 min" },
];

const therapists = [
  { name: "Thai", note: "Traditional stretching, no oil" },
  { name: "Russian", note: "Long, slow strokes that help you switch off" },
  { name: "Uzbek", note: "Firm and steady, good for tired muscles" },
  { name: "Indian", note: "Warm oil and deep, familiar techniques" },
];

const pricingPlans = [
  {
    title: "Home Massage",
    price: "On WhatsApp",
    period: "60–120 min",
    description: "At your home anywhere in the tricity",
    features: ["Full Body, Thai or Deep Tissue", "Therapist brings towels & oils", "Price set by sector and duration", "Ask for today's offer"],
    icon: Home,
  },
  {
    title: "Hotel Room Spa",
    price: "₹14,999",
    period: "90 min",
    description: "In your room at a Chandigarh hotel",
    features: ["Oil, Cream or Dry Massage", "Private Session", "Complimentary Refreshments", "90 min Session"],
    icon: Hotel,
    popular: true,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹19,999",
    period: "120 min",
    description: "Two full hours with an international therapist",
    features: ["International Therapists", "5-Star Property", "Aromatherapy Oils", "120 min Session"],
    icon: Star,
  },
];

const visitSteps = [
  {
    time: "Before",
    title: "Tell us your sector",
    text: "A WhatsApp message is enough. Share your sector or hotel, the time you'd like and the massage you have in mind. We'll reply with the price and when the therapist can be there.",
  },
  {
    time: "Getting ready",
    title: "Make a bit of space",
    text: "Nothing to buy. Just a quiet room where a mat or a bed has some space around it. In a hotel? Let reception know you're expecting someone.",
  },
  {
    time: "On arrival",
    title: "Your therapist sets up",
    text: "They come with fresh towels and oils, ask where you're sore and how firm you like it, and have everything ready in about ten minutes.",
  },
  {
    time: "60 to 120 minutes",
    title: "The massage",
    text: "Lie back and stop thinking for a while. If you want the pressure changed, say so. If you fall asleep, nobody will be offended.",
  },
  {
    time: "Afterwards",
    title: "They leave, you stay in",
    text: "Your therapist packs up and lets themselves out. No parking, no drive home along Madhya Marg. Just bed.",
  },
];

// Sectors we get booked in most, grouped so the grid is easy to scan on a phone
const sectorGroups = [
  { title: "North & Central", items: ["Sector 7", "Sector 8", "Sector 9", "Sector 15", "Sector 17", "Sector 20", "Sector 22"] },
  { title: "Middle Sectors", items: ["Sector 26", "Sector 30", "Sector 32", "Sector 34", "Sector 35", "Sector 35C"] },
  { title: "South Sectors", items: ["Sector 43", "Sector 44", "Sector 45", "Sector 47", "Manimajra", "Industrial Area"] },
  { title: "Rest of the Tricity", items: ["Mohali", "Zirakpur", "Panchkula", "Baltana", "Near the Airport"] },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and careful", text: "Fresh towels every time, and we leave the room the way we found it." },
  { icon: Users, title: "You pick the therapist", text: "Thai, Russian or Indian, male or female, soft or firm. Your call." },
  { icon: CreditCard, title: "Price fixed first", text: "Agreed on WhatsApp before anyone sets off for your place." },
  { icon: CalendarCheck, title: "Pay after", text: "UPI, cash or card, once your massage is over." },
];

const delhiOutlets = [
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
  { area: "Connaught Place", note: "Central Delhi", href: "/spa-in-connaught-place" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Bangalore", note: "Home & hotel visits", href: "/spa-in-bangalore" },
];

function WhatsAppButton({ children = "Book on WhatsApp", className = "" }) {
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

export default function Chandigarhpage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/hero/hb3-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="chd-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hb3-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Therapist giving a full body massage in Chandigarh"
          width={1252}
          height={834}
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <a href="/outlets" className="hover:text-secondary">Outlets</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa in Chandigarh</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Luxury Spa in Chandigarh <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="chd-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Chandigarh
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Body Massage at Your Home or Hotel, Anywhere in CHD
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Chandigarh is a lovely city to come home to, and an even better one to stay home in. So that&apos;s how we
            do it. Instead of driving across sectors to a spa, you book on WhatsApp and our therapist comes to your
            house or hotel room, whether that&apos;s in Sector 8, Sector 35 or out in Mohali.
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

          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/90">
            {heroChips.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-secondary" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick facts strip, overlapping the hero */}
      <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-8">
        <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-amber-100 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100">
          {quickFacts.map((f) => (
            <div key={f.label} className="bg-white p-5 md:p-7 text-center">
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-title text-3xl md:text-4xl font-bold text-primary">{f.value}</span>
                <span className="mt-1 block text-sm font-semibold text-amber-900">{f.label}</span>
                <span className="block text-xs text-bodycolor">{f.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 2. Intro + contact */}
      <section aria-labelledby="chd-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Relaxing body massage in Chandigarh"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist for home massage in Chandigarh"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              We Come to You
            </span>
          </div>

          <div>
            <HomeHeading
              id="chd-intro-title"
              align="left"
              eyebrow="Massage in Chandigarh"
              title="A Spa in CHD That"
              highlight="Comes to Your Door"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Most people searching for a massage in Chandigarh want the same thing. A good therapist, a clean and
              private setting, and a price they know before they start. What they don&apos;t want is to finish a
              relaxing hour and then fight for parking outside a market. So we left the spa center out of it. You
              book, and the therapist comes to you.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              We get a lot of requests from Sector 8, Sector 9 and Sector 35, plenty from Sector 17 and 22, and quite
              a few from people staying in hotels in Mohali and Zirakpur. It doesn&apos;t really matter where you are,
              though. If you&apos;re in the tricity, just ask.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> Chandigarh Booking Number
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                Call or WhatsApp with your sector and a time. We&apos;ll tell you the price and when the therapist can
                reach you.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  <Phone className="size-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Massage picker */}
      <section aria-labelledby="chd-picker-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="chd-picker-title"
            eyebrow="Not Sure What to Book?"
            title="How Are You Feeling"
            highlight="Today?"
            text="Tap the one that sounds like you. We'll tell you which massage usually helps."
          />
          <MassagePicker moods={moods} defaultId="drive" />
        </div>
      </section>

      {/* 4. Services */}
      <section aria-labelledby="chd-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="chd-services-title"
            eyebrow="Body Spa in Chandigarh"
            title="Body Massage in Chandigarh:"
            highlight="What You Can Book"
            text="All of these can be done at your home or in your hotel room. Can't decide? Ask us on WhatsApp."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, time }, i) => (
              <li
                key={title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(43,24,16,0.12)] hover:ring-amber-300"
              >
                {/* Decorative big number drawn by CSS so it is not read as low-contrast text */}
                <span
                  data-n={String(i + 1).padStart(2, "0")}
                  className="absolute -right-2 -top-4 font-title text-7xl font-bold text-amber-200/60 transition-colors before:content-[attr(data-n)] group-hover:text-amber-200"
                  aria-hidden="true"
                />
                <span className="relative inline-flex w-max items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
                  <Clock className="size-3" /> {time}
                </span>
                <h3 className="relative mt-4 font-title text-xl font-bold text-amber-900">{title}</h3>
                <p className="relative mt-2 flex-1 text-sm text-bodycolor">{text}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-5 inline-flex w-max items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <FaWhatsapp /> Book {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Therapists */}
      <section aria-labelledby="chd-therapists-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb1.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="chd-therapists-title"
              align="left"
              eyebrow="Thai & Russian Spa in Chandigarh"
              title="Who Comes"
              highlight="to Your Door"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              If you&apos;ve been hunting for a proper Thai massage in Chandigarh, our Thai therapists are the ones
              most people ask for. We also have therapists from Russia and Uzbekistan, which is why some guests call us
              their Russian spa in Chandigarh, plus Indian therapists with years of practice. Tell us what you like and
              we&apos;ll send the right person.
            </p>
            <WhatsAppButton className="mt-8 !bg-secondary !text-dark hover:!bg-white">Pick My Therapist</WhatsAppButton>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {therapists.map((t) => (
              <li
                key={t.name}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-secondary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Users className="size-5" />
                </span>
                <p className="mt-4 font-title text-xl font-bold text-white">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">Therapist</p>
                <p className="mt-3 text-sm text-white/80">{t.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" aria-labelledby="chd-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="chd-pricing-title"
            eyebrow="Massage Price in Chandigarh"
            title="Spa in Chandigarh"
            highlight="Price List"
            text={
              <>
                Here&apos;s what a session costs. For home massage we confirm the exact price on WhatsApp, since it
                depends on your sector and the length of the session. You can also see our full{" "}
                <a href="/spa-price-in-delhi" className={linkClass}>spa price</a> list.
              </>
            }
          />
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {pricingPlans.map(({ title, price, period, description, features, icon: Icon, popular }) => (
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
                <p className="mt-6 flex flex-wrap items-end gap-2">
                  <span className={`font-title text-4xl font-bold ${popular ? "text-secondary" : "text-primary"}`}>{price}</span>
                  <span className={`pb-1 text-sm ${popular ? "text-white/60" : "text-bodycolor"}`}>/ {period}</span>
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
                  <FaWhatsapp className="size-4" /> {price === "On WhatsApp" ? "Get My Price" : "Book Now"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How a home or hotel visit goes */}
      <section aria-labelledby="chd-visit-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="chd-visit-title"
            eyebrow="Chandigarh Massage Service"
            title="How a Home Visit"
            highlight="Actually Works"
            text="If you've never had a therapist come over before, here's the whole thing from start to finish. It's simpler than you'd think."
          />
          <ol className="relative space-y-6 border-l-2 border-dashed border-amber-300 pl-8 md:pl-10">
            {visitSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[49px] md:-left-[57px] top-1 flex size-8 items-center justify-center rounded-full bg-primary font-title text-sm font-bold text-white ring-4 ring-cream">
                  {i + 1}
                </span>
                <div className="rounded-2xl bg-white p-5 md:p-6 shadow-[0_6px_20px_rgba(43,24,16,0.06)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">{s.time}</span>
                  <h3 className="mt-1 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bodycolor">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Sectors */}
      <section aria-labelledby="chd-area-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="chd-area-title"
            eyebrow="Spa Near Me in Chandigarh"
            title="Sectors and Towns"
            highlight="We Visit"
            text="Looking for a spa near you in Chandigarh? These are the places we get called to most. Yours isn't listed? Send us a message anyway."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectorGroups.map((g) => (
              <div key={g.title} className="rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100">
                <h3 className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                  <MapPin className="size-4 text-primary" /> {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-amber-900 ring-1 ring-amber-200">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "At Home",
                text: "Best for a quiet evening in. The therapist brings everything, so you just need a room and an hour or two with nothing else planned.",
              },
              {
                icon: Hotel,
                title: "At Your Hotel",
                text: "In Chandigarh for a wedding or for work? Book a session in your room. Share your hotel and room number, and give reception a heads-up.",
              },
              {
                icon: Clock,
                title: "Timing Tips",
                text: "Weekend evenings and the wedding season get busy. If you have a date in mind, message us a day or two ahead so you get your choice of therapist.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-xl font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Promises */}
      <section aria-labelledby="chd-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="chd-promise-title"
            eyebrow="Why People Book Us Again"
            title="Looking for the Best Spa"
            highlight="in Chandigarh?"
            text="We'll leave that for you to decide. Here's what we promise on every booking, though."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7 text-center shadow-[0_10px_30px_rgba(43,24,16,0.06)] ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-lg font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Other cities */}
      <section aria-labelledby="chd-other-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="chd-other-title"
            eyebrow="Travelling Soon?"
            title="Find Us in"
            highlight="Other Cities"
            text="Heading to Delhi or Bangalore? You can visit one of our Delhi outlets, or book a home and hotel session just like here."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {delhiOutlets.map(({ area, note, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-amber-100 shadow-[0_4px_16px_rgba(43,24,16,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:ring-amber-300"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <MapPin className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-title text-lg font-bold text-amber-900">Spa in {area}</span>
                    <span className="text-xs text-bodycolor">{note}</span>
                  </span>
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            <a href="/outlets" className={linkClass}>See all our outlets</a>
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="chd-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="chd-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Chandigarh"
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

      {/* 12. Final CTA */}
      <section aria-labelledby="chd-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/spa-booking-consultation.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="chd-cta-title"
            eyebrow="Book Today"
            title="Stay In,"
            highlight="We'll Bring the Spa"
            text="Send us your sector and a time that suits you. We'll confirm your therapist and the price on the same chat."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#15803d] hover:!bg-[#166534] !shadow-black/30" />
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
            <CalendarCheck className="size-4" /> Pay after your session
          </p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
