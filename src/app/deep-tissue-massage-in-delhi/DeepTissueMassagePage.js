import Image from "next/image";
import { preload } from "react-dom";
import {
  AlertTriangle,
  CalendarCheck,
  Clock,
  CreditCard,
  Droplets,
  Home,
  Hotel,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import MassagePicker from "../components/MassagePicker";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What is a deep tissue massage?",
    answer:
      "It's a massage that uses slow, firm pressure to reach the deeper layers of muscle, rather than just the surface. Therapists use their thumbs, knuckles and forearms to work on knots and long-standing tightness, usually in the back, neck and shoulders.",
  },
  {
    question: "Does deep tissue massage hurt?",
    answer:
      "It shouldn't be painful. You'll feel strong pressure, and some spots may feel tender, but it should stay at a \"good hurt\" level. Your therapist will check in, and you can ask them to ease off at any point. Feeling a little sore the next day is normal.",
  },
  {
    question: "How is deep tissue different from a Swedish massage?",
    answer:
      "A Swedish massage uses lighter, flowing strokes and is mostly for relaxing. Deep tissue is slower and much firmer, and focuses on specific problem areas. If you want a bit of both, ask for Swedish strokes with deeper work on your back. We've written a longer comparison of Swedish vs deep tissue massage on our blog.",
  },
  {
    question: "Is deep tissue the same as a sports massage?",
    answer:
      "They overlap a lot. Both use firm pressure, but a sports massage also includes stretching and focuses on the muscles you use for your sport. If you run, lift or play regularly, tell us when you book and your therapist will focus on your legs, hips or shoulders accordingly.",
  },
  {
    question: "How much does a deep tissue massage cost in Delhi?",
    answer:
      "A 60-minute deep tissue massage at our outlets is ₹1,999. A 90-minute session at your home or hotel is ₹14,999, and the 120-minute 5-star hotel session is ₹19,999. We confirm the price on WhatsApp before you book.",
  },
  {
    question: "Should I book 60 or 90 minutes?",
    answer:
      "If you've got one problem area, like your neck and shoulders, 60 minutes is usually enough. If your whole back is tight, or you want a full body deep tissue massage, 90 minutes gives the therapist time to work slowly without rushing.",
  },
  {
    question: "Can I get a deep tissue massage at home in Delhi?",
    answer:
      "Yes. A therapist can come to your home or hotel anywhere in Delhi NCR. A 90-minute in-home deep tissue massage is ₹14,999. All you need is a quiet room with a bit of space around the bed.",
  },
  {
    question: "Where can I get a deep tissue massage near me?",
    answer:
      "We have 24+ outlets across Delhi NCR, including our Karol Bagh outlet where many of our most experienced deep tissue therapists work. Send us your area on WhatsApp and we'll tell you the nearest outlet, or when a therapist can come to you.",
  },
  {
    question: "Will deep tissue massage help my back pain?",
    answer:
      "It often helps when the pain comes from tight, overworked muscles, the kind you get from sitting at a desk all day or driving a lot. If your pain is sharp, follows an injury or spreads down your leg, see a doctor before booking any massage.",
  },
  {
    question: "Is deep tissue massage good for sciatica or a bulging disc?",
    answer:
      "Please check with your doctor or physiotherapist first. Massage can sometimes ease the tight muscles around the lower back and hips, but with sciatica, a bulging disc or scoliosis, too much pressure in the wrong place can make things worse. If your doctor says it's fine, tell your therapist so they can adjust.",
  },
  {
    question: "Is this the same as physiotherapy?",
    answer:
      "No. Our therapists are trained in massage, not physiotherapy. A deep tissue massage can be a good addition to physio for general muscle tightness, but it isn't a medical treatment and doesn't replace one.",
  },
  {
    question: "How often should I get a deep tissue massage?",
    answer:
      "For ongoing stiffness, every two to three weeks works well for a lot of people. Once things loosen up, once a month is usually enough to keep them that way. Listen to your body rather than a fixed schedule.",
  },
  {
    question: "Can I choose a male or female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Mention your preference when you book.",
  },
];

// Options for the "who books deep tissue" picker
const people = [
  {
    id: "desk",
    label: "I sit at a desk all day",
    emoji: "💻",
    pick: "Deep Tissue for Neck & Shoulders",
    time: "60 min",
    why: "Hours of looking at a screen pull your shoulders forward and lock up your upper back. Your therapist will spend most of the session there, slowly working through the knots.",
    points: ["Focus on neck, shoulders and upper back", "Firm, slow pressure", "Most people feel looser by the next morning"],
  },
  {
    id: "sport",
    label: "I run, lift or play sport",
    emoji: "🏃",
    pick: "Sports Deep Tissue Massage",
    time: "60–90 min",
    why: "Firm pressure plus some stretching, focused on the muscles you actually use. Good a day or two after a long run or a heavy session, not right before one.",
    points: ["Legs, hips or shoulders, your call", "Pressure plus stretching", "Tell us your sport when you book"],
  },
  {
    id: "lowerback",
    label: "My lower back is stiff",
    emoji: "🪑",
    pick: "Deep Tissue for Lower Back",
    time: "60–90 min",
    why: "When the lower back feels tight rather than painful, slow deep work around the back and hips often helps. If the pain is sharp or runs down your leg, see a doctor first.",
    points: ["Back, hips and glutes", "Pressure adjusted to you", "Ask for heat if it helps"],
  },
  {
    id: "both",
    label: "I want firm but relaxing",
    emoji: "⚖️",
    pick: "Swedish + Deep Tissue",
    time: "90 min",
    why: "A Swedish full body massage with deep tissue work on your problem areas. You get the relaxing part and the knots get sorted too.",
    points: ["Gentle strokes, firm where needed", "A good first deep tissue session", "Best as a 90-minute booking"],
    href: "/swedish-massage-vs-deep-tissue-massage",
  },
  {
    id: "couple",
    label: "Booking for two",
    emoji: "💑",
    pick: "Couples Deep Tissue Massage",
    time: "60–120 min",
    why: "Two therapists work at the same time in one private room. Each of you can choose your own pressure, so one can go deep while the other keeps it gentle.",
    points: ["Two therapists, same room", "Different pressure for each person", "At an outlet, home or hotel"],
    href: "/couple-massage",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1280].map((w) => `/images/deep-tissue/hero-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: Users, label: "Experienced Therapists" },
  { icon: MapPin, label: "24+ Outlets in Delhi NCR" },
  { icon: Home, label: "At Home or Hotel" },
  { icon: Clock, label: "60, 90 or 120 Minutes" },
];

const quickFacts = [
  { value: "₹1,999", label: "Starting Price", note: "60-minute session" },
  { value: "24+", label: "Outlets", note: "Across Delhi NCR" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹0", label: "Hidden Charges", note: "Price fixed before you book" },
];

// How firm each style feels, for the pressure meter (out of 5)
const pressureScale = [
  { name: "Swedish", level: 2, note: "Light, flowing, mostly for relaxing" },
  { name: "Full body", level: 3, note: "Medium pressure, head to toe", href: "/full-body-massage-in-delhi" },
  { name: "Deep tissue", level: 4, note: "Slow and firm, aimed at knots", current: true },
  { name: "Sports", level: 5, note: "Firm pressure plus stretching" },
];

const focusAreas = [
  { area: "Neck", text: "For the stiffness you get from looking down at a phone or laptop for hours. Your therapist works slowly here, since the neck needs a lighter touch than the back." },
  { area: "Shoulders", text: "The most common spot we work on. Tight shoulders often cause headaches too, so loosening them can make a real difference." },
  { area: "Lower back", text: "Good for the dull ache from sitting or driving. If the pain is sharp or goes down your leg, please see a doctor first." },
  { area: "Legs & calves", text: "Popular with runners, gym-goers and anyone on their feet all day. Calves and hamstrings get tight quickly." },
  { area: "Feet", text: "Deep work on the soles and arches. Feels great after a lot of walking, though it's not a treatment for plantar fasciitis." },
  { area: "Full body", text: "Head to toe with deeper pressure throughout. Best booked as 90 minutes so nothing feels rushed." },
];

const ways = [
  {
    icon: Leaf,
    title: "At an Outlet",
    price: "₹1,999 / 60 min",
    text: "Visit one of our 24+ outlets across Delhi NCR. Our Karol Bagh outlet has many of our most experienced deep tissue therapists.",
  },
  {
    icon: Home,
    title: "At Home",
    price: "₹14,999 / 90 min",
    text: "Our mobile deep tissue massage service comes to you. The therapist brings everything, and you don't have to drive home stiff and sore.",
  },
  {
    icon: Hotel,
    title: "At Your Hotel",
    price: "₹14,999–₹19,999",
    text: "Staying in Delhi for work? Send your hotel and room number. Long flights and hotel beds are hard on the back.",
  },
];

const priceRows = [
  { option: "Outlet", time: "60 min", price: "₹1,999", note: "One or two focus areas" },
  { option: "Home or Hotel", time: "90 min", price: "₹14,999", note: "Full body deep tissue, no rush" },
  { option: "5 Star Hotel Spa", time: "120 min", price: "₹19,999", note: "International therapist" },
];

const sessionSteps = [
  {
    time: "Before",
    title: "Tell us what's bothering you",
    text: "When you book, mention where it's tight and anything your doctor has told you. Something like \"stiff neck, desk job, nothing serious\" is plenty.",
  },
  {
    time: "First few minutes",
    title: "Your therapist checks in",
    text: "They'll ask where it hurts and how firm you like it. Some people find it easier to give a number out of 10. You can change it any time.",
  },
  {
    time: "Warm-up",
    title: "Lighter strokes first",
    text: "The first part feels like a normal massage. Muscles need to warm up before deeper pressure, otherwise it just feels sore.",
  },
  {
    time: "Main part",
    title: "Slow, firm work on the knots",
    text: "This is where the deep tissue work happens. Breathe normally and tell your therapist if anything feels sharp rather than just intense.",
  },
  {
    time: "Afterwards",
    title: "Water, rest, maybe a little sore",
    text: "Drink plenty of water and skip the gym that day. Feeling tender for a day or so is normal. A warm shower helps.",
  },
];

const checkFirst = [
  "Sciatica, or pain that runs down your leg",
  "A bulging or slipped disc",
  "Scoliosis or other spine conditions",
  "A recent injury, sprain or surgery",
  "Pregnancy",
  "Blood thinners or a bleeding disorder",
];

const areaLinks = [
  { name: "Karol Bagh", href: "/deep-tissue-massage-in-karol-bagh" },
  { name: "Connaught Place", href: "/spa-in-connaught-place" },
  { name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
  { name: "Saket", href: "/spa-in-saket" },
  { name: "Hauz Khas", href: "/spa-in-hauz-khas" },
  { name: "Rajouri Garden", href: "/spa-in-rajouri-garden" },
  { name: "Janakpuri", href: "/spa-in-janakpuri" },
  { name: "Rohini", href: "/spa-in-rohini" },
  { name: "Pitampura", href: "/spa-in-pitampura" },
  { name: "Laxmi Nagar", href: "/spa-in-laxmi-nagar" },
  { name: "Mahipalpur", href: "/spa-in-mahipalpur" },
  { name: "Aerocity", href: "/spa-in-aerocity" },
  { name: "Dwarka", href: "/spa-in-dwarka" },
  { name: "Gurgaon", href: "/spa-in-gurgaon" },
  { name: "Noida", href: "/spa-in-noida" },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room cleaned after each session." },
  { icon: Users, title: "Pressure your way", text: "Tell your therapist to go deeper or ease off at any point." },
  { icon: CreditCard, title: "Price fixed first", text: "Confirmed on WhatsApp. That's exactly what you pay." },
  { icon: CalendarCheck, title: "Pay after", text: "UPI, cash or card, once your massage is done." },
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

export default function DeepTissueMassagePage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/deep-tissue/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="dt-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/deep-tissue/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Therapist giving a deep tissue back massage in Delhi"
          width={1280}
          height={854}
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
            <a href="/massage-in-delhi" className="hover:text-secondary">Services</a>
            <span className="mx-2">/</span>
            <span className="text-white">Deep Tissue Massage in Delhi</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Deep Tissue Massage Therapy <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="dt-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Deep Tissue Massage in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Firm Pressure for Back, Neck and Shoulder Pain, From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            If a regular massage feels nice but your shoulders are just as tight the next morning, you probably need
            something deeper. Our therapists work slowly, with real pressure, right on the knots. Come to one of our
            outlets in Delhi NCR, or have a therapist come to your home.
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

      {/* 2. What it is + pressure meter */}
      <section aria-labelledby="dt-what-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <HomeHeading
              id="dt-what-title"
              align="left"
              eyebrow="What Is It?"
              title="Deep Tissue Massage,"
              highlight="Explained Simply"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              A deep tissue massage goes past the surface of your muscles. Instead of long, easy strokes, your
              therapist uses slow, firm pressure from their thumbs, knuckles and forearms to get into the tight spots
              that have been there for weeks, sometimes months.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              It&apos;s not meant to be painful. Think of it as strong pressure that you can still breathe through.
              Most people book it for a stiff neck, tight shoulders or a lower back that aches after a long day. Plenty
              of athletes use it too, as a deep tissue sports massage after training.
            </p>
            <p className="mt-4 text-sm text-bodycolor">
              Still deciding between styles? Read our{" "}
              <a href="/swedish-massage-vs-deep-tissue-massage" className={linkClass}>Swedish vs deep tissue massage</a> guide.
            </p>
          </div>

          <div className="rounded-3xl bg-amber-50 p-6 md:p-8 ring-1 ring-amber-100">
            <p className="font-title text-xl font-bold text-amber-900">How firm is it?</p>
            <p className="mt-1 text-sm text-bodycolor">Here&apos;s roughly how deep tissue compares with other massages.</p>
            <ul className="mt-6 space-y-5">
              {pressureScale.map((p) => (
                <li key={p.name}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <span className={`font-semibold ${p.current ? "text-primary" : "text-amber-900"}`}>
                      {p.href ? (
                        <a href={p.href} className="hover:underline">{p.name}</a>
                      ) : (
                        p.name
                      )}
                      {p.current && <span className="ml-2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">You are here</span>}
                    </span>
                    <span className="text-xs text-bodycolor">{p.note}</span>
                  </div>
                  <div className="mt-2 flex gap-1.5" role="img" aria-label={`${p.name}: pressure ${p.level} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={`h-2.5 flex-1 rounded-full ${n <= p.level ? (p.current ? "bg-primary" : "bg-amber-400") : "bg-amber-100"}`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Focus areas */}
      <section aria-labelledby="dt-areas-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="dt-areas-title"
            eyebrow="Where It Helps"
            title="Deep Tissue Massage for"
            highlight="Neck, Back and More"
            text="Tell your therapist which of these is bothering you most, and they'll spend the bulk of the session there."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f, i) => (
              <div
                key={f.area}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)] transition-all duration-300 hover:-translate-y-1 hover:ring-amber-300"
              >
                {/* Decorative big number drawn by CSS so it is not read as low-contrast text */}
                <span
                  data-n={String(i + 1).padStart(2, "0")}
                  className="absolute -right-2 -top-4 font-title text-7xl font-bold text-amber-100 transition-colors before:content-[attr(data-n)] group-hover:text-amber-200"
                  aria-hidden="true"
                />
                <h3 className="relative font-title text-xl font-bold text-amber-900">Deep tissue for {f.area.toLowerCase()}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-bodycolor">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who books it */}
      <section aria-labelledby="dt-who-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="dt-who-title"
            eyebrow="Is It Right for You?"
            title="Which Deep Tissue Session"
            highlight="Fits You?"
            text="Tap whichever sounds most like you. We'll show you how we'd usually approach it."
          />
          <MassagePicker moods={people} defaultId="desk" />
        </div>
      </section>

      {/* 5. Ways to book */}
      <section aria-labelledby="dt-ways-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="dt-ways-title"
            eyebrow="Deep Tissue Massage Near You"
            title="Outlet, Home"
            highlight="or Hotel"
            text="Same therapists and the same firm pressure, wherever you'd like the session."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {ways.map(({ icon: Icon, title, price, text }) => (
              <div key={title} className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(43,24,16,0.07)] ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 font-title text-2xl font-bold text-amber-900">{title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{price}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bodycolor">{text}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-max items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <FaWhatsapp /> Book {title.toLowerCase()}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Prices */}
      <section id="pricing" aria-labelledby="dt-price-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="dt-price-title"
            eyebrow="Clear Prices"
            title="Deep Tissue Massage"
            highlight="Prices"
            text={
              <>
                No add-ons sprung on you at the end. We confirm the price on WhatsApp before you book. See every rate on
                our <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
              </>
            }
          />
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Deep tissue massage prices in Delhi</caption>
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Where</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Time</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r) => (
                  <tr key={r.option} className="border-b border-amber-50 last:border-0">
                    <th scope="row" className="p-4 sm:p-5">
                      <span className="block font-semibold text-amber-900">{r.option}</span>
                      <span className="text-xs font-normal text-bodycolor">{r.note}</span>
                    </th>
                    <td className="p-4 sm:p-5 text-bodycolor">{r.time}</td>
                    <td className="p-4 sm:p-5 font-title text-xl font-bold text-primary">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppButton>Ask About Today&apos;s Offer</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 7. What happens in a session */}
      <section aria-labelledby="dt-session-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="dt-session-title"
            eyebrow="First Deep Tissue Massage?"
            title="What Actually Happens"
            highlight="in a Session"
            text="If you've only had relaxing massages before, here's what's different about a deep tissue one."
          />
          <ol className="relative space-y-6 border-l-2 border-dashed border-amber-300 pl-8 md:pl-10">
            {sessionSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[49px] md:-left-[57px] top-1 flex size-8 items-center justify-center rounded-full bg-primary font-title text-sm font-bold text-white ring-4 ring-[#fffaf5]">
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

      {/* 8. Check with a doctor first */}
      <section aria-labelledby="dt-safety-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-10" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <HomeHeading
              light
              id="dt-safety-title"
              align="left"
              eyebrow="Be Safe"
              title="When to Check With"
              highlight="a Doctor First"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              Deep tissue massage is great for everyday muscle tightness, but it isn&apos;t physiotherapy or medical
              treatment. If any of these apply to you, please talk to your doctor or physio before booking. If they say
              it&apos;s fine, let us know and your therapist will adjust the pressure.
            </p>
          </div>
          <ul className="space-y-3">
            {checkFirst.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-secondary" />
                <span className="text-sm text-white/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Aftercare */}
      <section aria-labelledby="dt-after-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="dt-after-title"
            eyebrow="Aftercare"
            title="After Your"
            highlight="Deep Tissue Massage"
            text="A little soreness is normal. These help it pass quicker."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Droplets, title: "Drink water", text: "More than usual for the rest of the day. It helps with that slightly heavy feeling some people get afterwards." },
              { icon: Clock, title: "Rest a bit", text: "Skip the heavy gym session that day. A short walk is fine, and actually helps." },
              { icon: Sparkles, title: "Warm shower", text: "A warm shower or a hot water bottle on the sore spot that evening makes a real difference." },
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

      {/* 10. Areas */}
      <section aria-labelledby="dt-near-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="dt-near-title"
            eyebrow="Deep Tissue Massage Near Me"
            title="Find a Deep Tissue Massage"
            highlight="in Your Area"
            text="These areas have their own page with outlet details. Anywhere else in Delhi NCR, we'll find you the nearest outlet or send a therapist home."
          />
          <ul className="flex flex-wrap justify-center gap-2.5">
            {areaLinks.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  <MapPin className="size-3.5" /> {a.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Looking for a lighter session? Try a <a href="/full-body-massage-in-delhi" className={linkClass}>full body massage</a> or a{" "}
            <a href="/swedish-massage-in-delhi" className={linkClass}>Swedish massage</a> instead.
          </p>
        </div>
      </section>

      {/* 11. Promises */}
      <section aria-labelledby="dt-promise-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="dt-promise-title"
            eyebrow="Why Guests Come Back"
            title="Looking for the Best Deep Tissue Massage"
            highlight="Near You?"
            text="You'll be the judge of that. Here's what we promise every time, though."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-amber-50 p-7 text-center ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
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

      {/* 12. FAQ */}
      <section aria-labelledby="dt-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="dt-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Deep Tissue Massage"
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

      {/* 13. Final CTA */}
      <section aria-labelledby="dt-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/MassageSession.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="dt-cta-title"
            eyebrow="Book Today"
            title="Those Knots Won't Fix"
            highlight="Themselves"
            text="Tell us where it's tight, your area and a time. We'll suggest the right session and confirm the price on the same chat."
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
