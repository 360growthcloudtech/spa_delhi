import Image from "next/image";
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  CalendarCheck,
  Check,
  Clock,
  Flower2,
  Heart,
  HeartPulse,
  Home,
  Hotel,
  Leaf,
  MapPin,
  Moon,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import LuxuryHotelShowcase from "../components/LuxuryHotelShowcase";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What is a couple massage?",
    answer:
      "It's a massage you and your partner get at the same time, in the same room, on two tables placed side by side. Each of you has your own therapist, and you can pick a different style and pressure from your partner. You get to relax together without having to take turns.",
  },
  {
    question: "How much does a couple massage cost in Delhi?",
    answer:
      "At our outlets, a couple massage starts at ₹1,999. A 90-minute session in a hotel suite is ₹15,000, and the 120-minute 5-star package with foreign therapists is ₹20,000. We confirm the exact price for both of you on WhatsApp before you come, so there are no surprises.",
  },
  {
    question: "Where can I find the best couples massage near me in Delhi?",
    answer:
      "We have 24+ outlets across Delhi NCR, including Aerocity, Connaught Place, Karol Bagh, Lajpat Nagar, Saket and Dwarka, plus Noida and Gurgaon. Send us your location on WhatsApp and we'll tell you which couple spa is closest to you.",
  },
  {
    question: "Do you offer couple massage at home in Delhi?",
    answer:
      "Yes. Share your address on WhatsApp and two therapists come to you with fresh sheets, warm oils and everything else needed. It's a good choice if you'd rather not travel or want complete privacy. Booking a few hours ahead helps us get you a slot the same day.",
  },
  {
    question: "Can my partner and I choose different massages?",
    answer:
      "Of course. One of you can have a soft, romantic aromatherapy massage while the other gets a firm back massage for a stiff neck. Just tell us what each of you wants when you book.",
  },
  {
    question: "How long does a couple massage take?",
    answer:
      "Most couples book 60 or 90 minutes. Our 5-star hotel package runs for 120 minutes. If you're planning a full couples spa day, ask us and we'll suggest what to add.",
  },
  {
    question: "Is a couple massage a good gift for an anniversary or birthday?",
    answer:
      "It's one of the most popular ones. Tell us it's a special occasion when you book and we'll make the room a little more romantic, with candles and the oil scent of your choice.",
  },
  {
    question: "How do I book a couple massage?",
    answer:
      "Message us on WhatsApp or call +91 87997 16197. Tell us the time, the outlet, hotel or home address, and the massage each of you wants, and we'll confirm your booking.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: BedDouble, label: "Side-by-Side Tables" },
  { icon: Heart, label: "Private Room for Two" },
  { icon: Home, label: "At Home or in Your Hotel" },
  { icon: Clock, label: "Open 24/7" },
];

const quickFacts = [
  { value: "2", label: "Tables, 1 Room", note: "Just the two of you" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹1,999", label: "Starting Price", note: "No hidden charges" },
  { value: "24+", label: "Outlets", note: "Across Delhi NCR" },
];

const highlights = [
  {
    icon: Heart,
    title: "A room that's only yours",
    description:
      "Once you're inside, the door stays shut and nobody will come in to hurry you. Talk if you want to, or hold hands. Most couples end up falling asleep.",
    points: ["Two tables side by side", "Candles and dim lights", "Fresh towels for both"],
  },
  {
    icon: Users,
    title: "Two therapists, one pace",
    description:
      "It's a bit awkward when your partner is done and waiting while you've still got ten minutes left. So our therapists start at the same time and keep pace with each other, and you both get up together.",
    points: ["Russian & Indian therapists", "Separate pressure for each", "Same start, same finish"],
  },
];

// The four styles cover the most searched couples spa treatments.
const techniques = [
  {
    title: "Romantic Couples Massage",
    image: "/images/couple-bathrobes-posing-embraced.jpg",
    description:
      "Think candles, quiet music in the background and oil that's been warmed up first. The therapists take their time here, nothing quick or hard. This is the one most couples book for a date night or an anniversary. It's less about fixing knots and more about switching off together.",
  },
  {
    title: "Couples Back Massage",
    image: "/images/spaservices4.jpg",
    description:
      "If both of you sit at a desk all day, start here. The therapists spend most of the time on your neck, shoulders and lower back, with pressure as firm as each of you likes.",
  },
  {
    title: "Couples Body Massage",
    image: "/images/couple-massage-delhi.webp",
    description:
      "Head to toe for both of you, from the shoulders down to the feet. This is our most booked couple body massage, and a good pick if it's your first time at a couple massage spa.",
  },
  {
    title: "Couple Hot Massage",
    image: "/images/shoulder-massage-warm-oil.jpg",
    description:
      "Here we use heated oil, or put warm stones along your back if you'd like. Tight muscles loosen up quicker when they're warm. Try it on a cold winter evening in Delhi and you'll see why people love it.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Time Together, Phones Away",
    description: "No screens, no work calls, no chores. An hour where the only plan is the two of you lying next to each other and relaxing.",
  },
  {
    icon: Leaf,
    title: "Less Stress for Both",
    description: "It's easier to unwind when the person next to you is unwinding too. Most couples say they're both calmer by the time it ends.",
  },
  {
    icon: HeartPulse,
    title: "Looser Muscles",
    description: "Stiff neck from the laptop, sore legs from the gym. Each therapist works on what your body needs, not what your partner's needs.",
  },
  {
    icon: Sparkles,
    title: "A Nice First Spa Visit",
    description: "Never been to a spa and feeling a bit shy? It's much easier when your partner is right there on the next table. And after, you can both talk about which part you liked best.",
  },
  {
    icon: Flower2,
    title: "Something to Remember",
    description: "Dinner and a movie is nice. A couples spa day is the date you'll actually talk about for a while.",
  },
  {
    icon: Moon,
    title: "Better Sleep That Night",
    description: "Book an evening slot. You'll both go home loose and sleepy, and probably be in bed earlier than usual.",
  },
];

const occasions = [
  "Anniversaries and birthdays",
  "Date nights and weekend plans",
  "Honeymooners staying in Delhi",
  "Couples in Aerocity and 5-star hotels",
  "Partners who both work long hours",
  "Anyone planning a surprise for their partner",
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "A good place to start for your first couple massage",
    features: ["Oil, Cream or Dry Massage", "Two Therapists", "Private Couple Room", "Quick Consultation", "Shower After"],
    icon: Leaf,
  },
  {
    title: "Hotel Outlet",
    price: "₹15,000",
    period: "90 min",
    description: "A longer, more romantic session in a hotel suite",
    features: ["Oil, Cream or Dry Massage", "Two Therapists", "Private Suite", "Complimentary Refreshments", "90 min Session"],
    icon: Hotel,
    popular: true,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20,000",
    period: "120 min",
    description: "The full couples spa day with foreign therapists",
    features: ["Foreign Therapists", "5-Star Property", "Private Suite", "Aromatherapy Oils", "120 min Session"],
    icon: Star,
  },
];

// Internal links to the outlet (location) pages, for "couples massage near me" searches.
// Cards use "Spa in {area}" as anchor text to match the keyword each outlet page targets.
const nearbyOutlets = [
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
  { area: "Connaught Place", note: "Near Rajiv Chowk Metro", href: "/spa-in-connaught-place" },
  { area: "Karol Bagh", note: "Central Delhi", href: "/spa-in-karol-bagh" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Dwarka", note: "West Delhi", href: "/spa-in-dwarka" },
  { area: "Rajouri Garden", note: "West Delhi", href: "/spa-in-rajouri-garden" },
  { area: "Mahipalpur", note: "Near IGI Airport", href: "/spa-in-mahipalpur" },
  { area: "Noida", note: "Delhi NCR", href: "/spa-in-noida" },
  { area: "Gurgaon", note: "Delhi NCR", href: "/spa-in-gurgaon" },
];

const homePoints = [
  "Two therapists come to your home or hotel room",
  "Fresh sheets, towels and warm oils come with them",
  "Your own place, your playlist, no travel",
  "Book a few hours ahead for a same-day slot",
];

const steps = [
  {
    title: "Send Us a Message",
    text: "WhatsApp, Telegram or a quick call. Tell us the time, the place and what each of you would like.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Walk Into a Ready Room",
    text: "Two tables, warm oil and soft lighting are set up before you arrive. Change and get comfortable.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Relax Together",
    text: "Both therapists start at the same time and finish at the same time. All you two have to do is breathe.",
    image: "/images/hb2.webp",
  },
];

const whyChoose = [
  {
    icon: Hotel,
    title: "Outlets, hotels or your home",
    text: (
      <>
        Book at one of our outlets, in a partner <a href="/outlets" className={linkClass}>hotel spa in Delhi</a>, or
        have the therapists come to you. Same care, wherever you are.
      </>
    ),
  },
  {
    icon: Users,
    title: "You choose your therapists",
    text: "Prefer Russian or Indian therapists, or a female therapist for both? Just say so when you book and we'll arrange it.",
  },
  {
    icon: ShieldCheck,
    title: "Clean rooms, no surprises",
    text: "We clean the room after every couple. Your details stay with us. And the bill? It's the price we told you on WhatsApp, nothing extra.",
  },
];

const related = [
  { title: "Sandwich Massage", text: "Two therapists, one person.", href: "/sandwich-massage" },
  { title: "Full Body Massage", text: "One therapist, head to toe.", href: "/full-body-massage-in-delhi" },
  { title: "Aromatherapy Massage", text: "Scented oils for a calm mind.", href: "/aromatherapy-massage-in-delhi" },
  { title: "Swedish Massage", text: "Gentle, slow strokes to switch off.", href: "/swedish-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Firm pressure for stubborn knots.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching for stiff backs and hips.", href: "/thai-massage-in-delhi" },
];

const guides = [
  { title: "How Hot Stone Massage Works", href: "/how-hot-stone-massage-works-in-delhi-spa" },
  { title: "Difference Between Spa and Massage", href: "/blog/what-is-the-difference-between-spa-and-massage" },
];

const testimonials = [
  {
    name: "Rohit Malhotra",
    role: "Software Engineer",
    review:
      "I booked a massage after a long week at work. The therapist understood exactly where the pain was. After the session, my back felt much lighter. Very peaceful place and good service.",
  },
  {
    name: "Neha Verma",
    role: "HR Manager",
    review:
      "We really enjoyed our couple massage session. The staff was welcoming, the environment was clean, and the overall experience felt premium. It was a lovely way to spend quality time together.",
  },
  {
    name: "Karan Arora",
    role: "Business Owner",
    review:
      "Luxury Russian Spa offers a relaxing and premium wellness experience. Our couple massage was enjoyable, with excellent hospitality and a comfortable atmosphere. Would love to visit again.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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

export default function Couplepage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="couple-hero-title" className="relative bg-dark">
        <Image
          src="/images/couple-massage-candle-lit-spa.jpg"
          alt="Couple massage in Delhi at Luxury Russian Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <a href="/massage-in-delhi" className="hover:text-secondary">Services</a>
            <span className="mx-2">/</span>
            <span className="text-white">Couple Massage</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Romantic Couples Spa <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="couple-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Couple Massage in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Two Tables <span className="text-secondary" aria-hidden="true">·</span> One Room{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            When did the two of you last do nothing together? A couple massage is exactly that. You lie next to each
            other, each with your own therapist, in a room where nobody&apos;s going to knock. You&apos;ll find our
            couple spa in Delhi in most parts of the city, and in a few 5-star hotels too. Or we can just come to your
            place. Whatever&apos;s easier.
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

      {/* 2. What is a couple massage */}
      <section aria-labelledby="couple-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/couple-massage-delhi.webp"
                alt="Couple in spa getting a side-by-side couple massage in Delhi"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/oil-massage-candle-lit-spa-delhi.jpg"
                alt="Private couple massage spa room with two tables"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              2 Tables · 1 Room
            </span>
          </div>

          <div>
            <HomeHeading
              id="couple-intro-title"
              align="left"
              eyebrow="Relax Side by Side"
              title="What Is a"
              highlight="Couple Massage?"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              A couple massage is pretty simple. You and your partner lie on two tables next to each other, and you
              each get your own therapist. You don&apos;t have to want the same thing either. If you like it firm and
              your partner likes it gentle, just tell us. Some people call it couples massage therapy, but really
              it&apos;s an hour you get to spend together without having to make conversation.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              It&apos;s the small stuff people remember. Is the room really private? Does your massage end when your
              partner&apos;s does? Is the oil warm, or is it freezing? We pay attention to all of it at{" "}
              <a href="/" className={linkClass}>Luxury Russian Spa</a>. Honestly, that&apos;s why a lot of couples
              come back and tell their friends we&apos;re the best couple spa in Delhi.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map(({ icon: Icon, title, description, points }) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-title text-lg font-bold text-amber-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-bodycolor">{description}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {points.map((p) => (
                        <li key={p} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Massage styles */}
      <section aria-labelledby="couple-styles-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-styles-title"
            eyebrow="Choose Your Style"
            title="Couples Massage"
            highlight="Options We Offer"
            text={
              <>
                Four styles couples ask for the most. You don&apos;t have to pick the same one as your partner. Each of
                you can choose your own. Looking for something else? Have a look at all our{" "}
                <a href="/" className={linkClass}>massage services in Delhi</a>.
              </>
            }
          />
          <div className="grid gap-6 md:grid-cols-2">
            {techniques.map((t, i) => (
              <article
                key={t.title}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 ring-amber-100 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)] sm:flex-row"
              >
                <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-[42%]">
                  <Image
                    src={t.image}
                    alt={`${t.title} at our couple spa in Delhi`}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 font-title text-sm font-bold text-primary">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-xl font-bold text-amber-900">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bodycolor">{t.description}</p>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#229ED9] hover:underline"
                  >
                    <FaTelegramPlane /> See Available Therapists
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Want a couples facial too? Ask us when you book and we&apos;ll add one after your massage.
          </p>
        </div>
      </section>

      {/* 4. Benefits */}
      <section aria-labelledby="couple-benefits-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-benefits-title"
            eyebrow="Why Couples Love It"
            title="Benefits of a"
            highlight="Couple Massage"
            text="Here's what couples usually tell us after a session. Some of it is about the body, and some of it is just about spending proper time together."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(43,24,16,0.1)]"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 font-title text-xl font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Occasions */}
      <section aria-labelledby="couple-occasions-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)] lg:order-last">
            <Image
              src="/images/private-spa-room-delhi.webp"
              alt="Candle-lit romantic massage spa room set up for a couples spa day"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl">
              <p className="font-title text-lg font-bold text-amber-900">Planning a surprise?</p>
              <p className="mt-1 text-sm text-bodycolor">Tell us on WhatsApp. We&apos;ll keep it quiet and get the room ready before you both arrive.</p>
            </div>
          </div>

          <div>
            <HomeHeading
              id="couple-occasions-title"
              align="left"
              eyebrow="Make It Special"
              title="A Couples Spa Day for"
              highlight="Every Occasion"
              text="You don't need a reason to book a romantic couples massage. But if you have one, here are the ones we see the most:"
              className="!mb-8"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {occasions.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_4px_16px_rgba(43,24,16,0.05)]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-amber-900">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8">Plan It on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" aria-labelledby="couple-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-pricing-title"
            eyebrow="Couples Packages"
            title="Couple Massage"
            highlight="Price in Delhi"
            text={
              <>
                Three couples packages, all in a private room. The price we quote on WhatsApp is the price you pay.
                Comparing other treatments? See all our <a href="/spa-price-in-delhi" className={linkClass}>spa prices in Delhi</a>.
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

      {/* 7. Near me: internal links to area pages */}
      <section aria-labelledby="couple-near-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-near-title"
            eyebrow="Couples Massage Near Me"
            title="Find a Couple Spa"
            highlight="Near You"
            text={
              <>
                Looking for the best couples massage near me? Pick your area below to see the outlet, or send us your
                location on WhatsApp and we&apos;ll point you to the closest one.
              </>
            }
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyOutlets.map(({ area, note, href }) => (
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
            Can&apos;t see your area? We cover all of Delhi NCR. <a href="/outlets" className={linkClass}>View all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 8. At home */}
      <section aria-labelledby="couple-home-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
            <Image
              src="/images/luxurySpaRoom.jpg"
              alt="Couple massage at home in Delhi with candles and warm oils"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <HomeHeading
              id="couple-home-title"
              align="left"
              eyebrow="Stay In Tonight"
              title="Couple Massage"
              highlight="at Home in Delhi"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Don&apos;t feel like getting dressed and sitting in traffic? Fair enough. Our therapists can bring the
              couple massage to you, whether that&apos;s your flat in Delhi or your hotel room in Aerocity. They set up
              everything, and they pack it all away when they leave.
            </p>
            <ul className="mt-6 space-y-3">
              {homePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-amber-900">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} />
                  {p}
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8">Book a Home Visit</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 9. Oils and setup */}
      <section aria-labelledby="couple-oil-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-last relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
            <Image
              src="/images/shoulder-massage-warm-oil.jpg"
              alt="Warm aroma oil for a romantic body massage"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <HomeHeading
              id="couple-oil-title"
              align="left"
              eyebrow="The Little Things"
              title="Setting the Mood"
              highlight="for Two"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              A romantic body massage isn&apos;t only about the hands. Half of it is the room, if we&apos;re
              being honest. So by the time you two get there, the lights are already down and the candles are on. The music stays low enough that you
              can barely hear it. The whole room ends up feeling cosy and a bit romantic. We also warm the oil first. Cold
              oil on your back is the quickest way to kill the mood, trust us.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              You two get to choose the smell. Couples usually go for jasmine or rose. If one of you is stressed out,
              lavender is a good idea. Can&apos;t decide? Sandalwood is a safe bet, almost everyone likes it. And if
              your skin gets irritated easily, just let us know and we&apos;ll use plain oil with no scent. Want to
              look at our other treatments? They&apos;re on the{" "}
              <a href="/massage-in-delhi" className={linkClass}>massage services in Delhi</a> page.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Jasmine", "Rose", "Lavender", "Sandalwood"].map((oil) => (
                <span key={oil} className="rounded-full bg-amber-200/70 px-4 py-1.5 text-xs font-semibold text-amber-800">
                  {oil}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. How to book: 3 steps */}
      <section aria-labelledby="couple-steps-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-steps-title"
            eyebrow="Simple Booking"
            title="Book Your Couple Massage in"
            highlight="3 Easy Steps"
          />
          <ol className="relative grid gap-10 md:grid-cols-3">
            <span className="absolute left-[16%] right-[16%] top-24 hidden border-t-2 border-dashed border-amber-300 md:block" aria-hidden="true" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <div className="relative mx-auto size-48">
                  <div className="relative size-48 overflow-hidden rounded-full border-[6px] border-white shadow-[0_15px_40px_rgba(43,24,16,0.15)]">
                    <Image src={s.image} alt={s.title} fill sizes="192px" className="object-cover" />
                  </div>
                  <span className="absolute -right-1 top-3 flex size-12 items-center justify-center rounded-full bg-primary font-title text-lg font-bold text-white ring-4 ring-white">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-bodycolor">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 11. Why choose us */}
      <section aria-labelledby="couple-why-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              id="couple-why-title"
              align="left"
              eyebrow="Why Book With Us"
              title="The Best Couple Massage Spa in Delhi"
              highlight="Without the Fuss"
              text={
                <>
                  No long menus, no upselling, just a good couples massage and spa experience at a fair{" "}
                  <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a>. Here&apos;s what you
                  can count on.
                </>
              }
              className="!mb-8"
            />
            <div className="space-y-4">
              {whyChoose.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-title text-lg font-bold text-amber-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-bodycolor">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.2)]">
              <Image
                src="/images/spaExper2.webp"
                alt="Couple massage therapist at Luxury Russian Spa, Delhi"
                fill
                sizes="(max-width:1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-8 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8">
              <p className="font-title text-2xl font-bold text-primary">24/7</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-900">Booking Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Partner hotels (shared component) */}
      <LuxuryHotelShowcase service="Couple Massage" serviceHref={null} serviceLower="couple massage" />

      {/* 13. Testimonials */}
      <section aria-labelledby="couple-reviews-title" className="bg-[#fdf3ee] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-reviews-title"
            eyebrow="Client Experiences"
            title="What Our"
            highlight="Guests Say"
            text="A few words from people who've been to our spa."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(43,24,16,0.06)]">
                <span className="font-title text-4xl leading-none text-[#e6c3b2]" aria-hidden="true">&ldquo;</span>
                <span className="mt-2 tracking-[0.15em] text-sm text-amber-400" aria-label="Rated 5 out of 5">★★★★★</span>
                <blockquote className="mt-3 flex-1 font-title text-[15px] italic leading-relaxed text-[#5a3a2b]">{t.review}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-[#f3dccf] pt-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ecc9b5] to-[#d2a084] text-sm font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-semibold text-[#a0522d]">{t.name}</span>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Related massages + guides (internal linking) */}
      <section aria-labelledby="couple-related-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="couple-related-title"
            eyebrow="Explore More"
            title="Other Massages"
            highlight="You Might Like"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(({ title, text, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100 transition-colors duration-300 hover:bg-white hover:ring-amber-300"
                >
                  <span>
                    <span className="block font-title text-lg font-bold text-amber-900 group-hover:text-primary">{title}</span>
                    <span className="text-sm text-bodycolor">{text}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Still deciding? Compare every treatment on our{" "}
            <a href="/massage-in-delhi" className={linkClass}>massage services in Delhi</a> page, or head back to
            the <a href="/" className={linkClass}>Luxury Russian Spa homepage</a> to see what&apos;s new.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <span className="flex items-center gap-2 text-sm font-semibold text-amber-900">
              <BookOpen className="size-4 text-primary" /> Read more:
            </span>
            {guides.map(({ title, href }) => (
              <a key={href} href={href} className={`text-sm ${linkClass}`}>
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ (native <details>, works without JavaScript) */}
      <section aria-labelledby="couple-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="couple-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Couple Massage"
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
                    <span className="font-title text-lg font-bold text-amber-500">{String(i + 1).padStart(2, "0")}</span>
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

      {/* 16. Final CTA */}
      <section aria-labelledby="couple-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/private-spa-room-delhi.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="couple-cta-title"
            eyebrow="Book Today"
            title="Ready for Your"
            highlight="Couple Massage?"
            text="Tell us when and where, at an outlet, in your hotel room or at home, and we'll set it up for both of you. We're available 24/7."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#25d366] hover:!bg-[#1ebe5b] !shadow-black/30" />
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#229ED9] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b8bc0]"
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
