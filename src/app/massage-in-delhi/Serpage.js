import Image from "next/image";
import {
  ArrowRight,
  Bath,
  CalendarCheck,
  Check,
  Clock,
  CloudFog,
  DoorClosed,
  Gift,
  HeartPulse,
  Home,
  Hotel,
  Leaf,
  MapPin,
  Moon,
  Phone,
  Plus,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Which massage services do you offer in Delhi?",
    answer:
      "Quite a few. Full body, couple, sandwich, B2B, Thai, deep tissue, Swedish, aromatherapy, hot stone and reflexology. Almost all of them can be booked at an outlet, at your hotel or at home.",
  },
  {
    question: "What is the full body massage price in Delhi?",
    answer:
      "A 60-minute full body massage at our outlets starts at ₹1,999. If you want longer, 90 minutes in a hotel suite is ₹14,999 and our 120-minute 5-star package is ₹19,999. We'll confirm the price on WhatsApp before you come.",
  },
  {
    question: "Do you have a home massage service in Delhi?",
    answer:
      "Yes, we do. Send us your address on WhatsApp and a trained therapist will come over with sheets, towels and warm oil. If you message a few hours in advance, we can usually manage it the same day.",
  },
  {
    question: "Where is the nearest massage centre in Delhi NCR?",
    answer:
      "We've got more than 24 outlets around Delhi NCR. Some of them are in Aerocity, Mahipalpur, Connaught Place, Karol Bagh, Lajpat Nagar, Saket, Dwarka, Rajouri Garden, Noida and Gurgaon. Send us your location and we'll tell you the closest one.",
  },
  {
    question: "Do you offer massage near the airport in Aerocity and Mahipalpur?",
    answer:
      "Yes. Our Russian spa in Aerocity works with hotels near IGI Airport. For a massage in Mahipalpur, our outlet there is open 24/7, which helps when your flight lands at an odd hour.",
  },
  {
    question: "Can I choose a Russian or Indian therapist?",
    answer:
      "Sure. Just mention it when you book. Some guests like a traditional Indian massage with firmer pressure, and some prefer the slower Russian style.",
  },
  {
    question: "How long is a massage session?",
    answer:
      "Most people go for 60 or 90 minutes. The 5-star hotel package is 120 minutes. Short on time? Tell us and we'll see what fits.",
  },
  {
    question: "How do I book a massage?",
    answer:
      "WhatsApp us or call +91 87997 16197. Let us know which massage you want, what time suits you and where you'd like it. We'll confirm the booking on the same chat.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Sparkles, label: "10+ Massage Styles" },
  { icon: MapPin, label: "24+ Outlets in Delhi NCR" },
  { icon: Home, label: "Home & Hotel Visits" },
  { icon: Clock, label: "Open 24/7" },
];

// Picture row under the hero. Each circle opens that area's outlet page.
const outletCircles = [
  { area: "Aerocity", image: "/images/hotel-andaz-delhi.jpg", href: "/spa-in-aerocity" },
  { area: "Mahipalpur", image: "/images/hotel-grand-palace.jpg", href: "/spa-in-mahipalpur" },
  { area: "Connaught Place", image: "/images/TheParkConnaughtPlace.webp", href: "/spa-in-connaught-place" },
  { area: "Lajpat Nagar", image: "/images/hotel-aurea-tower.jpg", href: "/spa-in-lajpat-nagar" },
  { area: "Dwarka", image: "/images/hotel-grand-vista.jpg", href: "/spa-in-dwarka" },
  { area: "Rajouri Garden", image: "/images/hotel-shane-avadh.jpg", href: "/spa-in-rajouri-garden" },
  { area: "Noida", image: "/images/noidahotel.jpeg", href: "/spa-in-noida" },
  { area: "Gurgaon", image: "/images/Hyatt_Regency_Gurgaon.jpg", href: "/spa-in-gurgaon" },
];

const quickFacts = [
  { value: "10+", label: "Massage Styles", note: "One price list" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹1,999", label: "Starting Price", note: "No hidden charges" },
  { value: "24+", label: "Outlets", note: "Across Delhi NCR" },
];

const services = [
  {
    title: "Full Body Massage",
    image: "/images/happy-woman-in-spa-salon.jpg",
    text: "From your shoulders right down to your feet. Book this one when the whole week has been hard on your body.",
    duration: "60–90 min",
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "Couple Massage",
    image: "/images/couple-massage-delhi.webp",
    text: "You and your partner on two tables in the same room. Nice for an anniversary, or just a free Sunday.",
    duration: "60–120 min",
    href: "/couple-massage",
  },
  {
    title: "Sandwich Massage",
    image: "/images/sandwich-massage-delhi.webp",
    text: "Two therapists, one on each side of you. Most people are half asleep within ten minutes.",
    duration: "60–90 min",
    href: "/sandwich-massage",
  },
  {
    title: "B2B Massage",
    image: "/images/SkincareTreatments.jpg",
    text: "Our signature massage. Warm oil, long strokes, and extra time on the back if you sit at a desk all day.",
    duration: "90–120 min",
    href: "/b2b-massage-in-delhi",
  },
  {
    title: "Thai Massage",
    image: "/images/thaimassage1.png",
    text: "No oil for this one. You stay in loose clothes on a mat while the therapist stretches out your hips and lower back.",
    duration: "60 min",
    href: "/thai-massage-in-delhi",
  },
  {
    title: "Deep Tissue Massage",
    image: "/images/2147816920.jpg",
    text: "Slow and firm, for the knots that just won't go away. Runners and gym regulars book this a lot.",
    duration: "60–90 min",
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Swedish Massage",
    image: "/images/spa-deep-relaxation.jpg",
    text: "The gentlest one we have. If it's your first massage, or strong pressure makes you tense up, start here.",
    duration: "60 min",
    href: "/swedish-massage-in-delhi",
  },
  {
    title: "Aromatherapy Massage",
    image: "/images/aromatherapy-featured-jpg.webp",
    text: "A soft massage with lavender or eucalyptus mixed into the oil. Good for nights when your brain won't switch off.",
    duration: "60–90 min",
    href: "/aromatherapy-massage-in-delhi",
  },
  {
    title: "Hot Stone Massage",
    image: "/images/19-2-1024x427.png",
    text: "We place warm stones along your back and the heat loosens things up faster. People love it in December.",
    duration: "75 min",
    href: "/how-hot-stone-massage-works-in-delhi-spa",
  },
];

const amenities = [
  { label: "Private Room", icon: DoorClosed },
  { label: "Jacuzzi Bath", icon: Bath },
  { label: "Steam Bath", icon: CloudFog },
  { label: "Hot Shower", icon: ShowerHead },
  { label: "Fresh Towels", icon: Sparkles },
];

const whyChoose = [
  {
    icon: Users,
    title: "Therapists you can choose",
    text: "Some people want a Russian therapist, some prefer Indian. Some like it firm, others can't stand it. Tell us, and we'll find the right person for you.",
  },
  {
    icon: ShieldCheck,
    title: "Clean rooms, every time",
    text: "The room gets cleaned after every single guest, and you always get fresh sheets and towels. Whatever you share with us stays with us.",
  },
  {
    icon: Star,
    title: "No surprise charges",
    text: (
      <>
        What we tell you on WhatsApp is what you pay. Want to see every rate first? It&apos;s all on our{" "}
        <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
      </>
    ),
  },
  {
    icon: Hotel,
    title: "Outlets, hotels or your home",
    text: (
      <>
        Most guests walk into one of our <a href="/outlets" className={linkClass}>24+ outlets</a>. If you&apos;re
        staying at a partner 5-star hotel, we&apos;ll come to your room. Home visits work too.
      </>
    ),
  },
];

const benefits = [
  { icon: HeartPulse, title: "Looser muscles", text: "That tight spot between your shoulders usually feels a lot better by the next morning." },
  { icon: Leaf, title: "Less stress", text: "Somewhere in the middle of the session, most people stop thinking about work." },
  { icon: Moon, title: "Better sleep", text: "Book an evening slot. You'll likely be in bed earlier than usual." },
  { icon: Sparkles, title: "Softer skin", text: "The warm oil soaks in slowly, so your skin feels soft and not sticky." },
];

const homePoints = [
  "A trained therapist comes to your home or hotel room",
  "They bring the sheets, towels and warm oil",
  "Full body, Swedish, aromatherapy or a couple massage, all at home",
  "Message a few hours ahead and we can usually do it the same day",
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "What most people book, and what first-timers pay",
    features: ["Oil, Cream or Dry Massage", "Private Room", "Quick Consultation", "Hot Shower After"],
    icon: Leaf,
  },
  {
    title: "Hotel Outlet",
    price: "₹14,999",
    period: "90 min",
    description: "90 minutes in a private hotel suite",
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

const steps = [
  {
    title: "Send Us a Message",
    text: "Drop us a message on WhatsApp or Telegram, or just call. Tell us what you'd like and when.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Walk Into a Ready Room",
    text: "By the time you arrive, the room is ready with fresh towels and warm oil. For home visits, we bring it all.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Lie Back and Relax",
    text: "Your therapist asks how much pressure you like before starting. After that, just lie back.",
    image: "/images/hb2.webp",
  },
];

// Keyword anchor links to every outlet page, for "massage near me" style searches.
const allOutlets = [
  ["Aerocity", "/spa-in-aerocity"],
  ["Mahipalpur", "/spa-in-mahipalpur"],
  ["Connaught Place", "/spa-in-connaught-place"],
  ["Karol Bagh", "/spa-in-karol-bagh"],
  ["Paharganj", "/spa-in-paharganj"],
  ["Lajpat Nagar", "/spa-in-lajpat-nagar"],
  ["Saket", "/spa-in-saket"],
  ["Greater Kailash", "/spa-in-greater-kailash"],
  ["Hauz Khas", "/spa-in-hauz-khas"],
  ["Kalkaji", "/spa-in-kalkaji"],
  ["Vasant Kunj", "/spa-in-vasant-kunj"],
  ["Dwarka", "/spa-in-dwarka"],
  ["Janakpuri", "/spa-in-janakpuri"],
  ["Uttam Nagar", "/spa-in-uttam-nagar"],
  ["Rajouri Garden", "/spa-in-rajouri-garden"],
  ["Punjabi Bagh", "/spa-in-punjabi-bagh"],
  ["Paschim Vihar", "/spa-in-paschim-vihar"],
  ["Pitampura", "/spa-in-pitampura"],
  ["Rohini", "/spa-in-rohini"],
  ["Laxmi Nagar", "/spa-in-laxmi-nagar"],
  ["Preet Vihar", "/spa-in-preet-vihar"],
  ["Noida", "/spa-in-noida"],
  ["Gurgaon", "/spa-in-gurgaon"],
  ["Faridabad", "/spa-in-faridabad"],
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

export default function Serpage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="service-hero-title" className="relative bg-dark">
        <Image
          src="/images/banner1.jpg"
          alt="Massage in Delhi at Luxury Russian Spa"
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
            <span className="text-white">Massage Services</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Every Massage, One Place <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="service-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Massage in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Spa Outlets <span className="text-secondary" aria-hidden="true">·</span> Home &amp; Hotel Visits{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Neck hurting from the laptop? Legs done after a day out in the city? Book a massage, honestly, it
            helps. We do pretty much every kind of body massage in Delhi. Come to one of our outlets, or we&apos;ll
            send a therapist to your hotel room or home.
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

      {/* 2. Outlet circles */}
      <section aria-labelledby="service-outlets-title" className="bg-white pt-16 pb-8 md:pt-24 md:pb-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="service-outlets-title"
            eyebrow="Massage Centre Near You"
            title="Our 24+ Massage Spa"
            highlight="Outlets in Delhi NCR"
            text="Tap on your area to see that outlet. If yours isn't listed, message us anyway. There's a good chance we have one nearby."
          />
          <ul className="grid grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 md:grid-cols-8">
            {outletCircles.map(({ area, image, href }) => (
              <li key={href}>
                <a href={href} className="group block text-center">
                  <span className="relative mx-auto block size-16 overflow-hidden rounded-full ring-4 ring-amber-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-amber-400 sm:size-24">
                    <Image src={image} alt={`Spa in ${area}`} fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="mt-2 block text-xs font-semibold text-amber-900 group-hover:text-primary sm:text-sm">{area}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Intro */}
      <section aria-labelledby="service-intro-title" className="bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/homespa.png"
                alt="Private room at our massage centre in Delhi"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaservices.jpg"
                alt="Therapist giving a full body massage in Delhi"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              Open 24/7
            </span>
          </div>

          <div>
            <HomeHeading
              id="service-intro-title"
              align="left"
              eyebrow="Massage Service in Delhi"
              title="Not Sure Which Massage to Book?"
              highlight="Just Ask Us"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Most people message our massage spa in Delhi without knowing which massage they want, and that&apos;s
              completely fine. Tell us what&apos;s bothering you. If you&apos;ve been lifting heavy at the gym,
              we&apos;ll probably say deep tissue. If your mind won&apos;t stop racing at night, aromatherapy usually
              helps. Want your partner to come too? That&apos;s what our couple massage is for.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              Today we have more than 24 outlets in Delhi NCR, and we also work out of a few 5-star hotels. Guests
              often tell us we&apos;re the best massage center in Delhi they&apos;ve been to. We&apos;d like to think
              it&apos;s because the rooms are clean, nobody disturbs you, and the price doesn&apos;t change at the end.
              There&apos;s more about who we are on the <a href="/" className={linkClass}>Luxury Russian Spa</a> home
              page.
            </p>
            <WhatsAppButton className="mt-8">Ask Which One Suits You</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 4. Services grid */}
      <section aria-labelledby="service-list-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="service-list-title"
            eyebrow="Our Massages"
            title="Body Massage in Delhi:"
            highlight="Pick Your Style"
            text="You can get all of these at our outlets, and we can do most of them at home as well. Tap any card if you want to know more."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.href}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 ring-amber-100 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} in Delhi`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                    <Clock className="size-3.5" /> {s.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-xl font-bold text-amber-900">
                    <a href={s.href} className="hover:text-primary">{s.title}</a>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bodycolor">{s.text}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <a href={s.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                      Read More <ArrowRight className="size-4" />
                    </a>
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#229ED9] hover:underline"
                    >
                      <FaTelegramPlane /> Therapists
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            We also do reflexology, plus cream or dry massage if you&apos;d rather skip the oil. Just ask on WhatsApp.
          </p>
        </div>
      </section>

      {/* 5. First visit offer */}
      <section aria-labelledby="service-offer-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image
          src="/images/oil-massage-candle-lit-spa-delhi.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-dark">
            <Gift className="size-4" /> First Visit Offer
          </span>
          <h2 id="service-offer-title" className="mt-5 font-title text-3xl font-bold text-white sm:text-5xl">
            Your First Full Body Massage at <span className="text-secondary">₹1,999</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Never been to us before? Your first 60-minute full body massage at any outlet is ₹1,999. Say
            &quot;first visit&quot; when you message us and we&apos;ll take care of the rest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#25d366] hover:!bg-[#1ebe5b] !shadow-black/30">Claim on WhatsApp</WhatsAppButton>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#229ED9] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b8bc0]"
            >
              <FaTelegramPlane className="size-5" /> Chat on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* 6. Amenities */}
      <section aria-labelledby="service-amenities-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="service-amenities-title"
            eyebrow="At Our Outlets"
            title="What You'll Find"
            highlight="at Our Outlets"
            text="Come in a bit early if you'd like to use the steam bath first, and there's a hot shower for afterwards. Not every outlet has every facility, so if something matters to you, ask before you book."
          />
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-12">
            {amenities.map(({ label, icon: Icon }) => (
              <li key={label} className="group w-[100px] md:w-[120px] text-center">
                <span className="mx-auto flex size-16 md:size-20 items-center justify-center rounded-full bg-amber-50 text-primary ring-1 ring-amber-200 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-7 md:size-8" strokeWidth={1.5} />
                </span>
                <span className="mt-3 block text-sm font-medium text-amber-900">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Why choose us + benefits */}
      <section aria-labelledby="service-why-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <HomeHeading
              id="service-why-title"
              align="left"
              eyebrow="Why Book With Us"
              title="Why People Say We Do the"
              highlight="Best Body Massage in Delhi"
              className="!mb-8"
            />
            <div className="space-y-4">
              {whyChoose.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-amber-100">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-primary">
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

          <div className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(43,24,16,0.1)] ring-1 ring-amber-100 md:p-9">
            <h3 className="font-title text-2xl font-bold text-amber-900">What you&apos;ll probably notice after</h3>
            <p className="mt-2 text-sm text-bodycolor">Everyone&apos;s different, but this is what guests tell us most.</p>
            <ul className="mt-6 space-y-5">
              {benefits.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-amber-900">{title}</span>
                    <span className="text-sm leading-relaxed text-bodycolor">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Home & hotel massage */}
      <section aria-labelledby="service-home-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
            <Image
              src="/images/luxurySpaRoom.jpg"
              alt="Home massage service in Delhi"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute left-5 bottom-5 rounded-2xl bg-white/95 px-5 py-4 shadow-xl">
              <p className="font-title text-xl font-bold text-primary">Same-Day Slots</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-900">Home &amp; Hotel Visits</p>
            </div>
          </div>
          <div>
            <HomeHeading
              id="service-home-title"
              align="left"
              eyebrow="Massage at Home in Delhi"
              title="Can't Come to Us?"
              highlight="We'll Come to You"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Some days you just don&apos;t want to leave the house, and that&apos;s what our home massage service in
              Delhi is for. It could be the rain, or you&apos;re simply too tired to deal with traffic. In a hotel near
              the airport? Our Aerocity massage service and the Mahipalpur team come to hotel rooms at any hour.
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

      {/* 9. Pricing */}
      <section id="pricing" aria-labelledby="service-pricing-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="service-pricing-title"
            eyebrow="Clear Prices"
            title="Full Body Massage"
            highlight="Price in Delhi"
            text={
              <>
                There are three options, depending on how long you want and where. Whatever we quote on WhatsApp is
                final. For the complete rate list, check our{" "}
                <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
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
                    : "bg-white ring-1 ring-amber-100"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-dark">
                    Most Popular
                  </span>
                )}
                <span className={`flex size-12 items-center justify-center rounded-xl ${popular ? "bg-white/10 text-secondary" : "bg-amber-50 text-primary"}`}>
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
                    popular ? "bg-secondary text-dark hover:bg-white" : "bg-amber-50 text-primary ring-1 ring-amber-200 hover:bg-primary hover:text-white"
                  }`}
                >
                  <FaWhatsapp className="size-4" /> Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. How to book */}
      <section aria-labelledby="service-steps-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="service-steps-title"
            eyebrow="Simple Booking"
            title="Book Your Massage in"
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

      {/* 11. FAQ (native <details>, works without JavaScript) */}
      <section aria-labelledby="service-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="service-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Massage in Delhi"
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

      {/* 12. All outlets (keyword anchor links) */}
      <section aria-labelledby="service-all-outlets-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <HomeHeading
            id="service-all-outlets-title"
            eyebrow="Spa Massage in Delhi NCR"
            title="Find a Massage Centre"
            highlight="in Your Area"
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {allOutlets.map(([area, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200 transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <MapPin className="size-3.5" /> Spa in {area}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section aria-labelledby="service-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/private-spa-room-delhi.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="service-cta-title"
            eyebrow="Book Today"
            title="Ready for a"
            highlight="Proper Massage?"
            text="Just tell us when and where. We reply to messages at all hours, so even a late-night booking is fine."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#25d366] hover:!bg-[#1ebe5b] !shadow-black/30" />
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
