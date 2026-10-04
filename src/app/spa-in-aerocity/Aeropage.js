import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  Hotel,
  Leaf,
  MapPin,
  Phone,
  Plane,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Shown on the page and used for the DaySpa schema in ./page.js.
export const AEROCITY_ADDRESS = {
  streetAddress: "Asset 6, IGI Road, Near Lemon Tree Aerocity",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110037",
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your spa in Aerocity?",
    answer:
      "Our Aerocity spa is at Asset 6, IGI Road, near Lemon Tree Aerocity, New Delhi 110037. It's a short drive from both airport terminals. If you're staying at a partner hotel, we can also do the session in your room.",
  },
  {
    question: "Which hotels in Aerocity do you serve?",
    answer:
      "We work with JW Marriott Hotel Aerocity, Lemon Tree Premier Aerocity, Novotel New Delhi Aerocity, Pride Plaza Hotel Aerocity, ibis New Delhi Aerocity and Pullman New Delhi Aerocity. Tell us your hotel and room number when you book.",
  },
  {
    question: "Is there a spa in Lemon Tree Aerocity?",
    answer:
      "Our outlet is right next to Lemon Tree Aerocity, and we also do in-room sessions for guests at Lemon Tree Premier. Most people walk over or just book us to their room.",
  },
  {
    question: "How much does a massage in Aerocity cost?",
    answer:
      "A 60-minute massage at our Aerocity outlet starts at ₹1,999. A 90-minute session in a hotel suite is ₹15,000, and the 120-minute 5-star package is ₹20,000. We'll confirm the price on WhatsApp before you come.",
  },
  {
    question: "Are you open late at night or early in the morning?",
    answer:
      "Yes, we're open 24/7. A lot of our guests come in after a late landing or before an early flight, so odd hours are normal for us.",
  },
  {
    question: "I'm in Mahipalpur, not Aerocity. Can I still book?",
    answer:
      "Of course. Mahipalpur is right next door, and we have a spa there too. Send us your location and we'll tell you which one is closer.",
  },
  {
    question: "Can I choose a Russian or Indian therapist?",
    answer:
      "Yes. Just mention it when you book. Our Russian spa in Aerocity has both, and you can also tell us how much pressure you like.",
  },
  {
    question: "How do I book?",
    answer:
      "WhatsApp us or call +91 87997 16197. Tell us the massage you want, the time, and whether you'll come to the outlet or want us at your hotel. We'll confirm it on the same chat.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Plane, label: "Near IGI Airport" },
  { icon: Hotel, label: "In-Room Hotel Sessions" },
  { icon: Users, label: "Russian & Indian Therapists" },
  { icon: Clock, label: "Open 24/7" },
];

const quickFacts = [
  { value: "24/7", label: "Open", note: "Even for late flights" },
  { value: "6", label: "Partner Hotels", note: "Right here in Aerocity" },
  { value: "₹1,999", label: "Starting Price", note: "No hidden charges" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
];

const hotels = [
  {
    name: "JW Marriott Hotel Aerocity",
    image: "/images/jw-marriott-hotel-aerocity.jpg",
    text: "Staying at the JW Marriott in Aerocity? Book us and the therapist comes up to your room with everything needed.",
  },
  {
    name: "Lemon Tree Premier Aerocity",
    image: "/images/lemon-tree-premier-aerocity.jpg",
    text: "Our outlet is a short walk from Lemon Tree Aerocity. Guests there usually walk over, or we come to the room.",
  },
  {
    name: "Novotel New Delhi Aerocity",
    image: "/images/novotel-new-delhi-aerocity.webp",
    text: "A lot of Novotel Aerocity guests book us on the evening they land. It's an easy way to shake off the flight.",
  },
  {
    name: "Pride Plaza Hotel Aerocity",
    image: "/images/pride-plaza-hotel-aerocity.jpg",
    text: "In-room sessions at Pride Plaza Aerocity, timed around your meetings so you don't miss anything.",
  },
  {
    name: "ibis New Delhi Aerocity",
    image: "/images/ibis-new-delhi-aerocity.jpg",
    text: "Short layover at the ibis hotel in Aerocity? Even a 60-minute massage makes the next flight feel shorter.",
  },
  {
    name: "Pullman New Delhi Aerocity",
    image: "/images/pullman-new-delhi-aerocity.jpg",
    text: "For Pullman hotel guests in Aerocity, we can set up a longer session in your suite, up to two hours.",
  },
];

const services = [
  { title: "Full Body Massage", text: "Head to toe, for when the whole trip has caught up with you.", href: "/full-body-massage-in-delhi" },
  { title: "Couple Massage", text: "Two tables, one room. Good for couples on a holiday or a honeymoon.", href: "/couple-massage" },
  { title: "Sandwich Massage", text: "Two therapists at once. Surprisingly good after a long-haul flight.", href: "/sandwich-massage" },
  { title: "Deep Tissue Massage", text: "Firm pressure for a stiff back from airline seats and hotel beds.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Swedish Massage", text: "Slow and gentle. Nice if you just want to sleep well before an early flight.", href: "/swedish-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching on a mat, no oil. Great for tight hips after hours of sitting.", href: "/thai-massage-in-delhi" },
];

const whoComes = [
  "Travellers with a long layover at IGI",
  "Business guests between meetings",
  "People who've just landed after a long flight",
  "Couples staying in Aerocity for a few nights",
  "Flight crew and airport staff after a shift",
  "Anyone in Mahipalpur or Dwarka looking for a good spa",
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "At our Aerocity outlet, near Lemon Tree",
    features: ["Oil, Cream or Dry Massage", "Private Room", "Quick Consultation", "Hot Shower After"],
    icon: Leaf,
  },
  {
    title: "Hotel Outlet",
    price: "₹15,000",
    period: "90 min",
    description: "In your room at a partner Aerocity hotel",
    features: ["Oil, Cream or Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
    icon: Hotel,
    popular: true,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20,000",
    period: "120 min",
    description: "Two full hours with international therapists",
    features: ["International Therapists", "5-Star Property", "Aromatherapy Oils", "120 min Session"],
    icon: Star,
  },
];

const steps = [
  {
    title: "Send Us a Message",
    text: "WhatsApp, Telegram or a call. Tell us the time, and whether it's the outlet or your hotel room.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Come Over or Stay Put",
    text: "Walk into our Aerocity outlet, or wait in your room. We'll be there with fresh towels and warm oil.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Relax Before Your Flight",
    text: "Your therapist asks about pressure first. Then you just lie back and let the travel tiredness go.",
    image: "/images/hb2.webp",
  },
];

const nearby = [
  { area: "Mahipalpur", note: "Right next to Aerocity", href: "/spa-in-mahipalpur" },
  { area: "Dwarka", note: "About 20 minutes away", href: "/spa-in-dwarka" },
  { area: "Vasant Kunj", note: "South Delhi, close by", href: "/spa-in-vasant-kunj" },
  { area: "Gurgaon", note: "Across the border", href: "/spa-in-gurgaon" },
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

export default function Aeropage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="aerocity-hero-title" className="relative bg-dark">
        <Image
          src="/images/spa-treatments.jpg"
          alt="Spa in Aerocity at Luxury Russian Spa"
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
            <a href="/outlets" className="hover:text-secondary">Outlets</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa in Aerocity</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Russian Spa in Aerocity <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="aerocity-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Aerocity
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Near IGI Airport <span className="text-secondary" aria-hidden="true">·</span> Hotel Room Visits{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Just landed and your back is stiff from the seat? Or stuck with five hours before the next flight? Our
            spa in Aerocity is a few minutes from the airport, and it&apos;s open all night. You can come to us, or
            we&apos;ll come up to your hotel room.
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

      {/* 2. Intro + address */}
      <section aria-labelledby="aerocity-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/services.webp"
                alt="Massage room at our Aerocity spa"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaservices1.jpg"
                alt="Aerocity massage spa session with warm oil"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              Minutes From IGI
            </span>
          </div>

          <div>
            <HomeHeading
              id="aerocity-intro-title"
              align="left"
              eyebrow="Aerocity Spa"
              title="A Russian Spa in Aerocity"
              highlight="Made for Travellers"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Most of our guests in Aerocity aren&apos;t locals. They&apos;re flying in for work, waiting on a
              connection, or spending a night near the airport before going home. So we keep things easy. There&apos;s
              no long menu to read, the outlet stays open 24/7, and booking takes one
              WhatsApp message.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              If you&apos;d rather not leave your hotel, that&apos;s fine too. Our therapists visit the big Aerocity
              hotels every day. People often tell us we&apos;re the best spa in Aerocity for exactly that reason: you
              get a proper massage without dealing with Delhi traffic.
            </p>

            <address className="mt-8 flex gap-4 rounded-2xl bg-amber-50 p-5 not-italic ring-1 ring-amber-100">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <MapPin className="size-6" />
              </span>
              <span>
                <span className="block font-title text-lg font-bold text-amber-900">Our Aerocity Outlet</span>
                <span className="mt-1 block text-sm leading-relaxed text-bodycolor">
                  {AEROCITY_ADDRESS.streetAddress}, {AEROCITY_ADDRESS.addressLocality} {AEROCITY_ADDRESS.postalCode}
                </span>
                <a href={PHONE_LINK} className="mt-1 inline-block text-sm font-semibold text-primary hover:underline">
                  {PHONE_LABEL}
                </a>
              </span>
            </address>
          </div>
        </div>
      </section>

      {/* 3. Partner hotels */}
      <section aria-labelledby="aerocity-hotels-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-hotels-title"
            eyebrow="In-Room Sessions"
            title="Hotels We Serve"
            highlight="in Aerocity"
            text="Staying at one of these? Send us your hotel name and room number, and the therapist will come straight up."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <article
                key={h.name}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 ring-amber-100 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={h.image}
                    alt={h.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-xl font-bold text-amber-900">{h.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bodycolor">{h.text}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <FaWhatsapp /> Book to My Room
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Massages */}
      <section aria-labelledby="aerocity-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-services-title"
            eyebrow="Aerocity Massage"
            title="Massage Spa in Aerocity:"
            highlight="What You Can Book"
            text="These are the massages travellers ask for most. Tap one to read more, or see everything we offer on our massage in Delhi page."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, href }) => (
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
            Want the full list? Have a look at our <a href="/massage-in-delhi" className={linkClass}>massage in Delhi</a> page.
          </p>
        </div>
      </section>

      {/* 5. Who comes here */}
      <section aria-labelledby="aerocity-who-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)] lg:order-last">
            <Image
              src="/images/5StarHotelSpa.jpg"
              alt="Therapist getting a room ready at our Aerocity massage spa"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl">
              <p className="font-title text-lg font-bold text-amber-900">Landing at 2 a.m.?</p>
              <p className="mt-1 text-sm text-bodycolor">Message us before you board. We&apos;ll do our best to have a slot ready when you land.</p>
            </div>
          </div>

          <div>
            <HomeHeading
              id="aerocity-who-title"
              align="left"
              eyebrow="Who Comes to Us"
              title="Spa Near Aerocity for"
              highlight="Busy Travellers"
              text="We see all kinds of people at our Aerocity spa. Here are the ones we see the most:"
              className="!mb-8"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {whoComes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_4px_16px_rgba(43,24,16,0.05)]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-amber-900">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8">Check Today&apos;s Slots</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" aria-labelledby="aerocity-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-pricing-title"
            eyebrow="Clear Prices"
            title="Spa Price"
            highlight="in Aerocity"
            text={
              <>
                Three options, depending on where and how long. What we quote on WhatsApp is what you pay. The full rate
                list is on our <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
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

      {/* 7. How to book */}
      <section aria-labelledby="aerocity-steps-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-steps-title"
            eyebrow="Simple Booking"
            title="Book Your Aerocity Massage in"
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

      {/* 8. Why us */}
      <section aria-labelledby="aerocity-why-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="aerocity-why-title"
            eyebrow="Why Book With Us"
            title="Why Guests Pick Our"
            highlight="Aerocity Spa"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Clock, title: "Late flights are normal for us", text: "Message us before you land and we'll try to have a slot ready, even late at night. We know your flight won't wait." },
              { icon: ShieldCheck, title: "Clean and private", text: "The room is cleaned after every guest and you get fresh linen each time. What you tell us stays with us." },
              { icon: Users, title: "Your choice of therapist", text: "Russian or Indian, soft or firm. Tell us what you like and we'll send the right person." },
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

      {/* 9. Nearby outlets */}
      <section aria-labelledby="aerocity-nearby-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="aerocity-nearby-title"
            eyebrow="Spa Near Aerocity"
            title="Not Staying in Aerocity?"
            highlight="Try These"
            text="If you're looking for a spa in Mahipalpur, Aerocity or somewhere close, one of these outlets is probably nearer to you."
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
            Somewhere else in Delhi? <a href="/outlets" className={linkClass}>See all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section aria-labelledby="aerocity-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="aerocity-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Aerocity"
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

      {/* 11. Final CTA */}
      <section aria-labelledby="aerocity-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/novotel-new-delhi-aerocity.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="aerocity-cta-title"
            eyebrow="Book Today"
            title="Ready to Relax"
            highlight="in Aerocity?"
            text="Message us with your time and your hotel, or just say you're coming to the outlet. We reply at all hours."
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
