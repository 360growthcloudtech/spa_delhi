import Image from "next/image";
import { preload } from "react-dom";
import {
  ArrowRight,
  CalendarCheck,
  Car,
  Check,
  Clock,
  CreditCard,
  Hotel,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrainFront,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";
import MassagePicker from "./MassagePicker";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your spa in Lajpat Nagar?",
    answer:
      "Our spa in Lajpat Nagar is close to Central Market and a few minutes from Lajpat Nagar metro station. Guests from Lajpat Nagar 2 and Lajpat Nagar 4 usually reach us in minutes. We send the exact location on WhatsApp as soon as your slot is confirmed.",
  },
  {
    question: "What is the Lajpat Nagar spa contact number?",
    answer:
      "You can call or WhatsApp us on +91 87997 16197. The same number works for booking, checking today's free slots, or asking about prices. We reply on WhatsApp at all hours.",
  },
  {
    question: "What are the spa prices in Lajpat Nagar?",
    answer:
      "A 60-minute massage at our Lajpat Nagar spa starts at ₹1,999. A 90-minute session in a hotel suite is ₹14,999, and the 120-minute 5-star hotel spa package is ₹19,999. The price we confirm on WhatsApp is the price you pay, with no extra charges at the end.",
  },
  {
    question: "Which is the best spa in Lajpat Nagar for a body massage?",
    answer:
      "It depends on what you need, but guests who choose us usually mention the same things: a private room, a therapist they picked themselves, and a fixed price they knew before arriving. Our full body massage is the most booked body massage in Lajpat Nagar, and our deep tissue massage is popular with people who sit at a desk all day.",
  },
  {
    question: "Do you have a Russian spa in Lajpat Nagar?",
    answer:
      "Yes. Along with our Indian therapists, we have therapists from Russia, Uzbekistan and Thailand. Just tell us who you'd prefer when you book and we'll confirm who is free.",
  },
  {
    question: "Do you offer B2B massage in Lajpat Nagar?",
    answer:
      "Yes, B2B massage is available at our Lajpat Nagar spa in a fully private room. Message us on WhatsApp and we'll explain the session, the timing and the price before you book.",
  },
  {
    question: "Is your spa near Lajpat Nagar Central Market?",
    answer:
      "Yes. Many of our guests book a massage right after shopping at Central Market. A one-hour Thai or full body massage is a nice way to rest your legs before heading home.",
  },
  {
    question: "Can I walk in without booking?",
    answer:
      "You can, but it depends on which therapists are free at that moment. Evenings and weekends get busy, so a quick WhatsApp message before you come saves you any waiting.",
  },
  {
    question: "Can I choose a female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Mention it when you book and we'll confirm who is available.",
  },
  {
    question: "How can I pay?",
    answer:
      "You can pay by UPI, cash or card at the spa. There's no advance payment needed for outlet bookings.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1402].map((w) => `/images/lajpat/hero-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: ShoppingBag, label: "Near Central Market" },
  { icon: Users, label: "Russian & Indian Therapists" },
  { icon: ShieldCheck, label: "Private Rooms" },
  { icon: Clock, label: "Bookings 24/7" },
];

const quickFacts = [
  { value: "₹1,999", label: "Starting Price", note: "60-minute massage" },
  { value: "4", label: "Therapist Styles", note: "Russian, Uzbek, Thai, Indian" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "0", label: "Hidden Charges", note: "Price fixed before you come" },
];

const services = [
  { title: "Full Body Massage", text: "Warm oil, head to toe. The body massage most people in Lajpat Nagar book.", time: "60–90 min", href: "/full-body-massage-in-delhi" },
  { title: "B2B Massage", text: "A premium body spa session in a fully private room. Ask us for details.", time: "60–90 min", href: "/b2b-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Firm pressure for a stiff neck, tight shoulders and that office-chair back.", time: "60–90 min", href: "/deep-tissue-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching on a mat, no oil. Our Lajpat Nagar guests love it after shopping.", time: "60 min", href: "/thai-massage-in-lajpat-nagar" },
  { title: "Couple Massage", text: "Two tables, one private room. Good for anniversaries and lazy Sundays.", time: "60–120 min", href: "/couple-massage" },
  { title: "Sandwich Massage", text: "Two therapists working together. Twice the hands, half the stress.", time: "60–90 min", href: "/sandwich-massage" },
];

const therapists = [
  { name: "Russian", note: "Long, flowing strokes that help you switch off" },
  { name: "Uzbek", note: "Firm and steady, good for tired muscles" },
  { name: "Thai", note: "Stretching and pressure points, no oil" },
  { name: "Indian", note: "Warm oil and deep, familiar techniques" },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "At our Lajpat Nagar spa, near Central Market",
    features: ["Oil, Cream or Dry Massage", "Private Room", "Quick Consultation", "Hot Shower After"],
    icon: Leaf,
  },
  {
    title: "Hotel Outlet",
    price: "₹14,999",
    period: "90 min",
    description: "In a private suite at a partner hotel",
    features: ["Oil, Cream or Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
    icon: Hotel,
    popular: true,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹19,999",
    period: "120 min",
    description: "Two full hours with international therapists",
    features: ["International Therapists", "5-Star Property", "Aromatherapy Oils", "120 min Session"],
    icon: Star,
  },
];

const areas = ["Lajpat Nagar 1", "Lajpat Nagar 2", "Lajpat Nagar 3", "Lajpat Nagar 4", "Central Market", "Amar Colony", "Defence Colony", "Andrews Ganj", "Moolchand", "Jangpura", "Ashram", "South Extension"];

const gettingHere = [
  {
    icon: TrainFront,
    title: "By Metro",
    text: "Get off at Lajpat Nagar. Both the Violet and Pink lines stop there, so whether you're coming from the ITO side or from Mayur Vihar, you won't have to change trains much.",
  },
  {
    icon: Car,
    title: "By Car",
    text: "Driving over on a Saturday or Sunday? Be ready to go round once or twice near Central Market before you find a spot. On weekdays it's usually not a problem.",
  },
  {
    icon: Clock,
    title: "Best Time",
    text: "If you can, come on a weekday afternoon. It's quieter and you'll usually get the therapist you asked for. After 7 p.m. and on Sundays we fill up fast, so message us a day before.",
  },
];

const visitSteps = [
  {
    time: "Before you come",
    title: "Drop us a message",
    text: "A WhatsApp text is enough. Just let us know what time suits you and which massage you have in mind. If you'd like a female therapist, or someone in particular, mention that too.",
  },
  {
    time: "When you get here",
    title: "We take you straight in",
    text: "Someone from our team will be there to greet you. You'll get a glass of water and then go to your own room, so there's no sitting around in a waiting area with strangers.",
  },
  {
    time: "First few minutes",
    title: "A short chat",
    text: "Your therapist will ask a couple of things before starting. Is your back or neck bothering you? Do you like it soft or firm? Keep it short if you want. Most people just say \"medium, please\".",
  },
  {
    time: "60 to 90 minutes",
    title: "The massage itself",
    text: "The lights stay low and the oil is warmed before it touches your skin. Honestly, a lot of our guests doze off halfway through, and that's completely fine with us.",
  },
  {
    time: "Afterwards",
    title: "Take your time",
    text: "There's a hot shower if you want one. Sit for a minute, drink some water and don't rush out. Central Market isn't going anywhere.",
  },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room that's cleaned after each session." },
  { icon: Users, title: "Your choice of therapist", text: "Russian or Indian, male or female, soft or firm. You decide." },
  { icon: CreditCard, title: "Price fixed in advance", text: "We confirm it on WhatsApp. That's exactly what you pay." },
  { icon: CalendarCheck, title: "No advance payment", text: "Pay at the spa by UPI, cash or card after your session." },
];

const nearby = [
  { area: "Greater Kailash", note: "Just down the road", href: "/spa-in-greater-kailash" },
  { area: "Kalkaji", note: "About 10 minutes away", href: "/spa-in-kalkaji" },
  { area: "Saket", note: "South Delhi", href: "/spa-in-saket" },
  { area: "Hauz Khas", note: "South Delhi", href: "/spa-in-hauz-khas" },
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

export default function Lajpatpage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/lajpat/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="ln-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lajpat/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Massage table at our spa in Lajpat Nagar"
          width={1402}
          height={1122}
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
            <span className="text-white">Spa in Lajpat Nagar</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Luxury Spa in Lajpat Nagar <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="ln-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Lajpat Nagar
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Body Massage <span className="text-secondary" aria-hidden="true">·</span> Russian Therapists{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Spent the whole day walking around Central Market? Or just had one of those weeks? Come lie down for an
            hour. Our spa in Lajpat Nagar has quiet private rooms, therapists you can choose yourself, and prices we
            tell you before you arrive.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa Lajpat Nagar at ${PHONE_LABEL}`}
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
      <section aria-labelledby="ln-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Private room at our luxury spa in Lajpat Nagar"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist at our Lajpat Nagar massage spa"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              Near Central Market
            </span>
          </div>

          <div>
            <HomeHeading
              id="ln-intro-title"
              align="left"
              eyebrow="Lajpat Nagar Massage Spa"
              title="A Calm Corner in"
              highlight="Busy Lajpat Nagar"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              If you live around here, you know Lajpat Nagar never really slows down. Shoppers fill Central Market,
              the Ring Road is jammed by six, and the metro is packed. That&apos;s exactly why people come to us. You
              step in, the noise drops away, and for the next hour nobody needs anything from you.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              We&apos;re a luxury spa in Lajpat Nagar, but we try not to be fussy about it. No long menus, no hard
              sell. Tell us how you feel, sore, tired or just fed up, and we&apos;ll suggest a body massage that fits.
              Most of our guests come from Lajpat Nagar 2 and Lajpat Nagar 4, and plenty come over from Defence
              Colony and Amar Colony too.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> Lajpat Nagar Spa Contact Number
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                Call or WhatsApp for bookings, today&apos;s free slots and prices. We send the exact spa location on
                WhatsApp once your slot is confirmed.
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
      <section aria-labelledby="ln-picker-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-picker-title"
            eyebrow="Not Sure What to Book?"
            title="How Are You Feeling"
            highlight="Today?"
            text="Pick the one that sounds most like you, and we'll suggest a Lajpat Nagar massage that fits."
          />
          <MassagePicker />
        </div>
      </section>

      {/* 4. Services */}
      <section aria-labelledby="ln-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-services-title"
            eyebrow="Body Spa in Lajpat Nagar"
            title="Body Massage Spa in Lajpat Nagar:"
            highlight="Our Menu"
            text="Six massages, all done in a private room. Tap any one to read more about it."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, time, href }, i) => (
              <li key={href}>
                <a
                  href={href}
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
                  <span className="relative mt-4 block font-title text-xl font-bold text-amber-900 group-hover:text-primary">{title}</span>
                  <span className="relative mt-2 flex-1 text-sm text-bodycolor">{text}</span>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Looking for something else? See every option on our <a href="/massage-in-delhi" className={linkClass}>massage in Delhi</a> page.
          </p>
        </div>
      </section>

      {/* 5. Russian spa: therapists */}
      <section aria-labelledby="ln-russian-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="ln-russian-title"
              align="left"
              eyebrow="Russian Spa in Lajpat Nagar"
              title="Meet the Hands"
              highlight="Behind the Calm"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              People often ask if we&apos;re really a Russian spa in Lajpat Nagar. We are, and then some. Our team
              includes therapists from Russia, Uzbekistan and Thailand, alongside Indian therapists who&apos;ve been
              doing this for years. Each one has their own touch, so don&apos;t be shy about asking for someone
              specific.
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
      <section id="pricing" aria-labelledby="ln-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-pricing-title"
            eyebrow="Clear Prices"
            title="Lajpat Nagar"
            highlight="Spa Prices"
            text={
              <>
                Three options, and no surprises at the end. What we quote on WhatsApp is what you pay. You&apos;ll find
                every rate on our <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
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
                <p className="mt-6 flex items-end gap-2">
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
                  <FaWhatsapp className="size-4" /> Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Your visit, step by step */}
      <section aria-labelledby="ln-visit-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="ln-visit-title"
            eyebrow="First Time Here?"
            title="What Your Visit"
            highlight="Looks Like"
            text="First time at a spa? Lots of our guests are. This is roughly how it goes, from the first message to walking back out."
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

      {/* 8. Area + getting here */}
      <section aria-labelledby="ln-area-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="ln-area-title"
            eyebrow="Spa Near You"
            title="Spa in Lajpat Nagar 2, 4"
            highlight="and Nearby"
            text="We're close to Central Market, so getting here is easy from most of South and Central Delhi. These are the areas our guests usually come from."
          />
          <ul className="flex flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-100">
                <MapPin className="size-3.5 text-primary" /> {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gettingHere.map(({ icon: Icon, title, text }) => (
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
      <section aria-labelledby="ln-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-promise-title"
            eyebrow="Why Guests Come Back"
            title="What Makes Us the Best Spa in"
            highlight="Lajpat Nagar"
            text="We'll let you be the judge of that. But here's what we promise every single guest."
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

      {/* 10. Nearby outlets */}
      <section aria-labelledby="ln-nearby-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="ln-nearby-title"
            eyebrow="Spa Near Lajpat Nagar"
            title="Not in Lajpat Nagar Today?"
            highlight="Try These"
            text="If another part of South Delhi is closer, one of these outlets might suit you better."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {nearby.map(({ area, note, href }) => (
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
            Just want a stretch? Read about our <a href="/thai-massage-in-lajpat-nagar" className={linkClass}>Thai massage in Lajpat Nagar</a>, or{" "}
            <a href="/outlets" className={linkClass}>see all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="ln-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="ln-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Lajpat Nagar"
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
      <section aria-labelledby="ln-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/spa-booking-consultation.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="ln-cta-title"
            eyebrow="Book Today"
            title="Your Hour of Quiet"
            highlight="Is One Message Away"
            text="Tell us the time and the massage. We'll confirm your slot, your therapist and the price on the same chat."
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
            <CalendarCheck className="size-4" /> No advance payment for outlet bookings
          </p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
