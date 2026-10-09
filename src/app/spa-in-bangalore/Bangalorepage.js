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

// In Bangalore we only do home and hotel visits (no walk-in outlet), so nothing on this page gives a street address.

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Do you have a spa in Bangalore?",
    answer:
      "We don't run a walk-in outlet in Bangalore. Instead, our therapists come to you, either at your home or in your hotel room. You get a proper spa massage without stepping into Bangalore traffic, which most of our guests are very happy about.",
  },
  {
    question: "I searched for a spa near me in Bangalore. How fast can you reach?",
    answer:
      "That depends on where you are and, honestly, on the traffic. Send us your location on WhatsApp and we'll tell you a realistic time. Booking a few hours ahead, or the day before, is the safest way to get the slot you want.",
  },
  {
    question: "What are your spa charges in Bangalore?",
    answer:
      "A 90-minute massage in your hotel room is ₹14,999 and the 120-minute 5-star package with an international therapist is ₹19,999. For a home spa, the price depends on your area and how long you want the session, so we confirm it on WhatsApp before booking. There are no extra charges added later.",
  },
  {
    question: "How does home spa in Bangalore work?",
    answer:
      "You book a time, and the therapist arrives with fresh towels, oils and everything else needed. All you need is a quiet room with a little space. When the session is over, they pack up and leave the room the way they found it.",
  },
  {
    question: "Can you come to my hotel in Bangalore?",
    answer:
      "Yes. A lot of our Bangalore bookings are from people staying in hotels for work. Just share your hotel name and room number when you book. If your hotel has rules about visitors, it helps to let the front desk know you're expecting a therapist.",
  },
  {
    question: "Do you offer Thai massage in Bangalore?",
    answer:
      "Yes. Our Thai therapists do the traditional style, which is stretching and pressure points done on a mat, with no oil. It's a good choice if you've been sitting at a laptop all week and your hips and back feel stiff.",
  },
  {
    question: "Is B2B massage available in Bangalore?",
    answer:
      "Yes, B2B massage is available as a home or hotel session in Bangalore. Message us on WhatsApp and we'll explain the session, timing and price before you decide.",
  },
  {
    question: "Is your service unisex? Can I choose a female therapist?",
    answer:
      "Both men and women book with us. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Just mention it when you book and we'll confirm who is free.",
  },
  {
    question: "Do you cover Koramangala?",
    answer:
      "Yes, Koramangala is one of the areas we get the most bookings from, along with HSR Layout, Indiranagar and Whitefield. If your area isn't on our list, ask anyway. We go to most parts of the city.",
  },
  {
    question: "How do I pay?",
    answer:
      "You can pay by UPI, cash or card. We'll confirm the price on WhatsApp first, so you know exactly what you're paying before the therapist arrives.",
  },
  {
    question: "What's your contact number for bookings in Bangalore?",
    answer:
      "Call or WhatsApp +91 87997 16197. The same number is used for all our bookings, and we usually reply on WhatsApp within a few minutes.",
  },
];

// Options for the "How are you feeling today?" picker. No links: our massage detail pages are Delhi-specific.
const moods = [
  {
    id: "traffic",
    label: "Stuck in traffic all day",
    emoji: "🚗",
    pick: "Full Body Massage",
    time: "60–90 min",
    why: "Two hours on Outer Ring Road does something to your shoulders. A full body massage with warm oil is the quickest way we know to undo it.",
    points: ["Our most booked massage in Bangalore", "Covers back, legs, arms and neck", "Most people sleep really well after"],
  },
  {
    id: "laptop",
    label: "Back hurts from the laptop",
    emoji: "💻",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "If you work long hours at a desk, the knots in your upper back and neck need firmer pressure than a regular massage gives.",
    points: ["Firm pressure, done slowly", "Tell your therapist where it hurts", "You'll feel the difference the next morning"],
  },
  {
    id: "stretch",
    label: "Want a stretch, no oil",
    emoji: "🧘",
    pick: "Thai Massage",
    time: "60–90 min",
    why: "Thai massage is done in loose clothes on a mat. Your therapist moves you through stretches and presses on tight spots. No oil, no shower needed after.",
    points: ["Done by our Thai therapists", "Good for hips, legs and lower back", "Leaves you feeling loose, not sleepy"],
  },
  {
    id: "couple",
    label: "Booking for two",
    emoji: "💑",
    pick: "Couple Massage",
    time: "60–120 min",
    why: "Two therapists, same time, same room. People book it for anniversaries, birthdays or just because the weekend needed it.",
    points: ["Two therapists come together", "Choose the same or different massages", "Works well in a hotel suite"],
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
const HERO_SRCSET = [640, 828, 1252].map((w) => `/images/hero/hb2-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: Home, label: "Home Spa" },
  { icon: Hotel, label: "Hotel Room Visits" },
  { icon: Users, label: "Thai & Russian Therapists" },
  { icon: Clock, label: "Bookings 24/7" },
];

const quickFacts = [
  { value: "0 km", label: "Travel for You", note: "We come to your door" },
  { value: "15+", label: "Areas Covered", note: "Koramangala to Whitefield" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹0", label: "Hidden Charges", note: "Price fixed on WhatsApp" },
];

const services = [
  { title: "Full Body Massage", text: "Warm oil from head to toe. This is the body massage most people in Bangalore ask for first.", time: "60–90 min" },
  { title: "Thai Massage", text: "Stretching and pressure points on a mat, no oil, done by our Thai therapists.", time: "60–90 min" },
  { title: "Deep Tissue Massage", text: "Slow, firm pressure for the neck and back pain that comes with long screen hours.", time: "60–90 min" },
  { title: "B2B Massage", text: "A premium body to body session at your home or hotel. Ask us and we'll explain.", time: "60–90 min" },
  { title: "Couple Massage", text: "Two therapists arrive together so you can both relax at the same time.", time: "60–120 min" },
  { title: "Aromatherapy Massage", text: "A gentler massage with essential oils picked to calm you down or lift your mood.", time: "60–90 min" },
];

const therapists = [
  { name: "Thai", note: "Traditional stretching, no oil" },
  { name: "Russian", note: "Long, slow strokes that help you switch off" },
  { name: "Uzbek", note: "Firm and steady, good for tired muscles" },
  { name: "Indian", note: "Warm oil and deep, familiar techniques" },
];

const pricingPlans = [
  {
    title: "Home Spa",
    price: "On WhatsApp",
    period: "60–120 min",
    description: "At your home anywhere we cover in Bangalore",
    features: ["Full Body, Thai or Deep Tissue", "Therapist brings towels & oils", "Price set by area and duration", "Confirmed before you book"],
    icon: Home,
  },
  {
    title: "Hotel Room Spa",
    price: "₹14,999",
    period: "90 min",
    description: "In your room at a Bangalore hotel",
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
    title: "Send us your location",
    text: "A quick WhatsApp is enough. Tell us where you are, roughly what time you'd like, and which massage you're thinking of. We'll come back with the price and a realistic arrival time.",
  },
  {
    time: "Getting ready",
    title: "Clear a little space",
    text: "You don't need to buy anything. A quiet room with enough space to move around a bed or a mat is all it takes. If you're in a hotel, maybe give the front desk a heads-up.",
  },
  {
    time: "On arrival",
    title: "Your therapist sets up",
    text: "They'll bring fresh towels and oils, ask a couple of questions about sore spots and how firm you like it, and get everything ready in about ten minutes.",
  },
  {
    time: "60 to 120 minutes",
    title: "The massage",
    text: "This is your time. Plenty of guests fall asleep partway through, and nobody minds. If you want more or less pressure, just say so.",
  },
  {
    time: "Afterwards",
    title: "They pack up, you stay put",
    text: "Your therapist tidies up and leaves. No driving home, no traffic. You can go straight to bed if you like, which, to be fair, is what most people do.",
  },
];

const areas = [
  "Koramangala",
  "HSR Layout",
  "Indiranagar",
  "Whitefield",
  "MG Road",
  "UB City",
  "Bellandur",
  "Sarjapur Road",
  "Marathahalli",
  "Electronic City",
  "JP Nagar",
  "Jayanagar",
  "Hebbal",
  "Yelahanka",
  "Airport Road",
];

const promises = [
  { icon: ShieldCheck, title: "Clean and careful", text: "Fresh towels every time, and your room is left the way we found it." },
  { icon: Users, title: "You pick the therapist", text: "Thai, Russian or Indian, male or female, soft or firm. It's up to you." },
  { icon: CreditCard, title: "Price fixed first", text: "We agree the price on WhatsApp before anyone leaves for your place." },
  { icon: CalendarCheck, title: "Pay after the session", text: "UPI, cash or card, once your massage is done." },
];

const delhiOutlets = [
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
  { area: "Connaught Place", note: "Central Delhi", href: "/spa-in-connaught-place" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Gurgaon", note: "Delhi NCR", href: "/spa-in-gurgaon" },
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

export default function Bangalorepage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/hero/hb2-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="blr-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hb2-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="In-room spa massage set up in a Bangalore hotel suite"
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
            <span className="text-white">Spa in Bangalore</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Luxury Spa in Bangalore <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="blr-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Bangalore
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Body Massage at Your Home or Hotel Room
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Why sit in Silk Board traffic to get to a spa and then sit in it again on the way home? We bring the
            massage to you instead. Our therapists visit homes and hotel rooms across Bangalore, from Koramangala to
            Whitefield, and you only have to send one message to book.
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
      <section aria-labelledby="blr-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Relaxing body massage and spa session in Bangalore"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist for home spa in Bangalore"
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
              id="blr-intro-title"
              align="left"
              eyebrow="Massage and Spa in Bangalore"
              title="A Spa in Bangalore"
              highlight="Without the Commute"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Anyone who lives here knows the problem. You finally book a massage, and then you spend forty minutes
              getting there and another forty getting back. By the time you&apos;re home, half the relaxation is gone.
              So we skipped the building altogether. When you book a massage in Bangalore with us, the therapist comes
              to your flat or your hotel room.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              People sometimes ask whether a home spa can feel like a proper luxury spa. We think it can, and in some
              ways it&apos;s better. It&apos;s your own space, you can pick your therapist, and when it&apos;s over you
              don&apos;t have to go anywhere. Most of our bookings come from Koramangala, HSR Layout, Indiranagar and
              Whitefield, but we cover a lot more of the city than that.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> Bangalore Booking Number
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                Call or WhatsApp with your area and the time you have in mind. We&apos;ll reply with the price and when
                the therapist can reach you.
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
      <section aria-labelledby="blr-picker-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="blr-picker-title"
            eyebrow="Not Sure What to Book?"
            title="How Are You Feeling"
            highlight="Today?"
            text="Tap whichever sounds most like you. We'll suggest the massage that usually helps."
          />
          <MassagePicker moods={moods} defaultId="traffic" />
        </div>
      </section>

      {/* 4. Services */}
      <section aria-labelledby="blr-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="blr-services-title"
            eyebrow="Body Spa in Bangalore"
            title="Body Massage in Bangalore:"
            highlight="What You Can Book"
            text="Every one of these can be done at your home or in your hotel room. Not sure which? Ask us on WhatsApp."
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
      <section aria-labelledby="blr-therapists-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="blr-therapists-title"
              align="left"
              eyebrow="Thai Spa in Bangalore"
              title="Who Comes"
              highlight="to Your Door"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              If you&apos;ve been looking for a good Thai massage in Bangalore, our Thai therapists are usually the
              first ones people ask for. We also have therapists from Russia and Uzbekistan, along with Indian
              therapists who have been doing this for years. Each one works a little differently, so tell us what
              you like and we&apos;ll match you with someone.
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
      <section id="pricing" aria-labelledby="blr-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="blr-pricing-title"
            eyebrow="Spa Charges in Bangalore"
            title="Spa in Bangalore"
            highlight="With Price"
            text={
              <>
                Here&apos;s what a session costs. For home visits we confirm the exact price on WhatsApp, because it
                depends on your area and how long you want. Our full rate list is on the{" "}
                <a href="/spa-price-in-delhi" className={linkClass}>spa price</a> page.
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
      <section aria-labelledby="blr-visit-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="blr-visit-title"
            eyebrow="Home Spa in Bangalore"
            title="How a Home Visit"
            highlight="Actually Works"
            text="Never had a therapist come home before? It's simpler than it sounds. Here's the whole thing, start to finish."
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

      {/* 8. Areas */}
      <section aria-labelledby="blr-area-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="blr-area-title"
            eyebrow="Spa Near Me in Bangalore"
            title="Areas We Visit"
            highlight="Most Often"
            text="Searching for a massage near me in Bangalore? If you're in one of these areas, we're probably already nearby. Not on the list? Message us anyway."
          />
          <ul className="flex flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-100">
                <MapPin className="size-3.5 text-primary" /> {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "At Home",
                text: "Good for evenings when you just want to stay in. Our therapist brings what's needed, and you don't have to change out of your comfiest clothes until it's time.",
              },
              {
                icon: Hotel,
                title: "At Your Hotel",
                text: "In town for work? Book a session in your room after the last meeting. Share the hotel name and room number, and let reception know someone's coming.",
              },
              {
                icon: Clock,
                title: "Timing Tips",
                text: "Weeknight slots after 8 p.m. go quickly, and so do weekend afternoons. Booking a day before is the easiest way to get the time and therapist you want.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
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
      <section aria-labelledby="blr-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="blr-promise-title"
            eyebrow="Why People Book Us Again"
            title="Looking for the Best Massage"
            highlight="in Bangalore?"
            text="That's your call to make, not ours. What we can do is promise you these, every single time."
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

      {/* 10. Delhi outlets */}
      <section aria-labelledby="blr-delhi-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="blr-delhi-title"
            eyebrow="Travelling to Delhi?"
            title="Visit Our Spa Outlets"
            highlight="in Delhi NCR"
            text="If work takes you to Delhi, you can walk into one of our outlets there, or we'll come to your hotel the same way we do in Bangalore."
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
      <section aria-labelledby="blr-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="blr-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Bangalore"
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
      <section aria-labelledby="blr-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/spa-booking-consultation.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="blr-cta-title"
            eyebrow="Book Today"
            title="Skip the Traffic,"
            highlight="Keep the Massage"
            text="Send us your area and a time that works. We'll confirm the therapist and the price on the same chat."
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
