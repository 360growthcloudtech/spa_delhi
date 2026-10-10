import Image from "next/image";
import { preload } from "react-dom";
import { ArrowRight, Mail, MapPin, Phone, Plus, Quote } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { CONTACT_EMAIL, MAIN_ADDRESS, PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

export { CONTACT_EMAIL, MAIN_ADDRESS };

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What is Luxury Russian Spa?",
    answer:
      "We're a massage and spa brand in Delhi NCR with 24+ outlets, including spas inside The Park in Connaught Place, The Suryaa in New Friends Colony and Novotel in Aerocity. We also send therapists to homes and hotel rooms, in Delhi NCR as well as Bangalore and Chandigarh.",
  },
  {
    question: "Are all your therapists Russian?",
    answer:
      "No. The name comes from our Russian therapists, who are a big part of the team, but we also have therapists from Uzbekistan and Thailand and a lot of experienced Indian therapists. You can ask for whoever you'd prefer when you book.",
  },
  {
    question: "Where is Luxury Russian Spa located?",
    answer:
      "Our main address is at the Novotel lobby level in Aerocity, New Delhi 110037, near IGI Airport. We have outlets across Delhi NCR, from Connaught Place and Lajpat Nagar to Mahipalpur, Rohini, Gurgaon and Noida. Message us your area and we'll tell you the nearest one.",
  },
  {
    question: "Do you only work in 5-star hotels?",
    answer:
      "No. Some of our outlets are inside 5-star hotels, and we can come to your room at many others, but most of our 24+ outlets are standalone spas in neighbourhoods across Delhi NCR. We also do home visits.",
  },
  {
    question: "How much does a massage cost?",
    answer:
      "A 60-minute massage at any outlet is ₹1,999. A 90-minute session at home or in a hotel is ₹14,999, and our 120-minute 5-star package is ₹19,999. The price is the same at every outlet, and we confirm it on WhatsApp before you book.",
  },
  {
    question: "Are you open 24/7?",
    answer:
      "We take bookings around the clock on WhatsApp and our Mahipalpur outlet near the airport is open 24/7. Timings at other outlets vary, so just message us with the time you'd like.",
  },
  {
    question: "Can I choose a female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Tell us when you book and we'll confirm who's available.",
  },
  {
    question: "How do I contact Luxury Russian Spa?",
    answer:
      "Call or WhatsApp +91 87997 16197, message us on Telegram, or email luxuryrussianspa1947@gmail.com. WhatsApp is usually the quickest way to reach us.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero photo is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1252].map((w) => `/images/about/hero-${w}.webp ${w}w`).join(", ");

const stats = [
  { value: "24+", label: "outlets across Delhi NCR" },
  { value: "3", label: "spas inside 5-star hotels" },
  { value: "4", label: "massage traditions in one team" },
  { value: "3", label: "cities with home & hotel visits" },
];

const chapters = [
  {
    label: "Chapter 01",
    title: "Where it began",
    text: "Booking a massage in Delhi used to mean guessing. You didn't know what the room would look like, who your therapist would be, or what the bill would say at the end. Luxury Russian Spa started with one idea: take the guessing out of it.",
    image: "/images/gallery/g06-sm.webp",
    alt: "Clean private massage room",
  },
  {
    label: "Chapter 02",
    title: "What we changed",
    text: "Private rooms for every guest. A therapist you choose yourself. One price list that's the same at every outlet, confirmed on WhatsApp before you arrive. None of it is complicated, it just wasn't the norm.",
    image: "/images/gallery/g33-sm.webp",
    alt: "Massage oils being chosen before a session",
  },
  {
    label: "Chapter 03",
    title: "Where we are today",
    text: "24+ outlets across Delhi NCR, including spas inside The Park, The Suryaa and Novotel. Home and hotel visits in Delhi, Bangalore and Chandigarh. And a team of Russian, Uzbek, Thai and Indian therapists that guests ask for by name.",
    image: "/images/gallery/g40-sm.webp",
    alt: "Reception at our Connaught Place outlet",
  },
];

const values = [
  { title: "Your privacy comes first", text: "Every session happens in a private room, or in your own home or hotel room. What you tell us stays with us." },
  { title: "You choose your therapist", text: "Russian, Uzbek, Thai or Indian, male or female, soft or firm. We'd rather ask than guess." },
  { title: "One honest price list", text: "The same three prices at every outlet, confirmed before you book. Nothing gets added at the end." },
  { title: "Clean, every single time", text: "Fresh linen for each guest and a room that's cleaned after every session. Not most of the time. Every time." },
];

const teamPhotos = [
  { src: "/images/spa-therapist-delhi.webp", alt: "Luxury Russian Spa therapist in uniform" },
  { src: "/images/spaExper2.webp", alt: "Spa therapist at Luxury Russian Spa" },
  { src: "/images/spa-therapist-uniform.webp", alt: "Massage therapist in Delhi" },
  { src: "/images/spaexpert3.webp", alt: "Experienced spa therapist" },
];

const traditions = [
  { name: "Russian", note: "Long, flowing strokes. The style our name comes from." },
  { name: "Uzbek", note: "Firm, steady pressure for properly tired muscles." },
  { name: "Thai", note: "Stretching and pressure points on a mat, no oil." },
  { name: "Indian", note: "Warm oil and deep, familiar techniques." },
];

const hotelOutlets = [
  { name: "The Park", area: "Connaught Place", image: "/images/TheParkConnaughtPlace.webp", href: "/spa-in-connaught-place", text: "Our outlet in the middle of the city, on Parliament Street." },
  { name: "The Suryaa", area: "New Friends Colony", image: "/images/TheSuryaaNewDelhi(NFC).webp", href: "/outlets", text: "A calm hotel spa for South and South-East Delhi." },
  { name: "Novotel", area: "Aerocity", image: "/images/novotel-new-delhi-aerocity.webp", href: "/spa-in-aerocity", text: "Minutes from IGI Airport, and our main address." },
];

const cities = [
  { name: "Delhi NCR", note: "24+ outlets, home & hotel visits", href: "/outlets" },
  { name: "Bangalore", note: "Home & hotel visits", href: "/spa-in-bangalore" },
  { name: "Chandigarh", note: "Home & hotel visits", href: "/spa-in-chandigarh" },
];

const services = [
  { name: "Full Body Massage", href: "/full-body-massage-in-delhi" },
  { name: "Deep Tissue Massage", href: "/deep-tissue-massage-in-delhi" },
  { name: "Thai Massage", href: "/thai-massage-in-delhi" },
  { name: "Swedish Massage", href: "/swedish-massage-in-delhi" },
  { name: "Aromatherapy Massage", href: "/aromatherapy-massage-in-delhi" },
  { name: "Couple Massage", href: "/couple-massage" },
  { name: "Sandwich Massage", href: "/sandwich-massage" },
  { name: "B2B Massage", href: "/b2b-massage-in-delhi" },
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

export default function Abpage() {
  // Starts the hero photo download from <head>, before the CSS is parsed
  preload("/images/about/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "(max-width:1024px) 90vw, 45vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Editorial hero: light, text-led, with a photo collage */}
      <section aria-labelledby="about-hero-title" className="relative bg-[#fffaf5] px-4 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-bodycolor">
              <a href="/" className="hover:text-primary">Home</a>
              <span className="mx-2">/</span>
              <span className="text-amber-900">About Us</span>
            </nav>
            <p className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              <span className="h-px w-10 bg-amber-700" aria-hidden="true" /> About Us
            </p>
            <h1 id="about-hero-title" className="mt-5 font-title text-[42px] font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Hello, we&apos;re <span className="italic text-primary">Luxury Russian Spa.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bodycolor sm:text-lg">
              We run massage spas across Delhi NCR, a few of them inside 5-star hotels, and we send therapists to homes
              and hotel rooms too. The idea behind all of it is simple: a proper massage, in a private room, from a
              therapist you picked, at a price you knew before you walked in.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton />
              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-amber-900 ring-1 ring-amber-300 transition-colors hover:bg-white"
              >
                Read Our Story <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg pb-10 pl-6 sm:pl-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_30px_60px_rgba(43,24,16,0.2)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/hero-828.webp"
                srcSet={HERO_SRCSET}
                sizes="(max-width:1024px) 90vw, 45vw"
                alt="Relaxing head massage at Luxury Russian Spa"
                width={1252}
                height={836}
                fetchPriority="high"
                decoding="sync"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[42%] aspect-square overflow-hidden rounded-3xl border-[6px] border-[#fffaf5] shadow-xl">
              <Image src="/images/gallery/g02-sm.webp" alt="Warmly lit spa room" fill sizes="200px" className="object-cover" />
            </div>
            <div className="absolute -right-2 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-6">
              <p className="font-title text-3xl font-bold text-primary">24+</p>
              <p className="text-xs font-semibold text-amber-900">outlets in Delhi NCR</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Big editorial numbers */}
      <section aria-label="Luxury Russian Spa in numbers" className="border-y border-amber-100 bg-white px-4 py-12 md:px-8">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-amber-100">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-title text-5xl font-bold text-ink md:text-6xl">{s.value}</span>
                <span className="mt-2 block text-sm text-bodycolor">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3. Our story, in chapters */}
      <section id="our-story" aria-labelledby="about-story-title" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              <span className="h-px w-10 bg-amber-700" aria-hidden="true" /> Our Story
            </p>
            <h2 id="about-story-title" className="mt-5 font-title text-4xl font-bold leading-tight text-ink md:text-5xl">
              Our story, in <span className="italic text-primary">three chapters</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bodycolor">
              The name comes from our Russian therapists, but the team is a mix, and so are our guests: office workers
              after a long week, travellers off a late flight, couples on an anniversary.
            </p>
            <a href="/gallery" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              See photos of our rooms <ArrowRight className="size-4" />
            </a>
          </div>

          <ol className="relative space-y-10 border-l border-amber-200 pl-8 md:pl-12">
            {chapters.map((c) => (
              <li key={c.label} className="relative">
                <span className="absolute -left-[39px] top-1 size-4 rounded-full bg-primary ring-4 ring-amber-100 md:-left-[55px]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{c.label}</p>
                <h3 className="mt-2 font-title text-2xl font-bold text-ink md:text-3xl">{c.title}</h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-[1fr_160px] sm:items-start">
                  <p className="leading-relaxed text-bodycolor">{c.text}</p>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md sm:aspect-square">
                    <Image src={c.image} alt={c.alt} fill sizes="(max-width:640px) 90vw, 160px" className="object-cover" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Pull quote */}
      <section aria-label="What we believe" className="relative overflow-hidden bg-dark px-4 py-20 md:px-8 md:py-28">
        <Image src="/images/gallery/g01-lg.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <figure className="relative mx-auto max-w-4xl text-center">
          <Quote className="mx-auto size-12 text-secondary" aria-hidden="true" />
          <blockquote className="mt-6 font-title text-3xl leading-snug text-white md:text-5xl md:leading-tight">
            A good massage shouldn&apos;t come with surprises. Not in the room, and{" "}
            <span className="italic text-secondary">not in the bill.</span>
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-[0.2em] text-white/60">The Luxury Russian Spa team</figcaption>
        </figure>
      </section>

      {/* 5. What we stand for */}
      <section aria-labelledby="about-values-title" className="bg-[#fffaf5] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              <span className="h-px w-10 bg-amber-700" aria-hidden="true" /> What We Stand For
            </p>
            <h2 id="about-values-title" className="mt-5 font-title text-4xl font-bold leading-tight text-ink md:text-5xl">
              Four things we <span className="italic text-primary">won&apos;t compromise on</span>
            </h2>
          </div>
          <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title} className="flex gap-6 border-t border-amber-200 pt-6">
                <span className="font-title text-5xl font-bold leading-none text-amber-600" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3 className="font-title text-2xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-bodycolor">{v.text}</p>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Meet the team */}
      <section aria-labelledby="about-team-title" className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {teamPhotos.map((t, i) => (
              <li key={t.src} className={`relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg ${i % 2 === 1 ? "mt-8" : ""}`}>
                <Image src={t.src} alt={t.alt} fill sizes="(max-width:1024px) 45vw, 22vw" className="object-cover object-top" />
              </li>
            ))}
          </ul>
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              <span className="h-px w-10 bg-amber-700" aria-hidden="true" /> Meet the Team
            </p>
            <h2 id="about-team-title" className="mt-5 font-title text-4xl font-bold leading-tight text-ink md:text-5xl">
              Four traditions, <span className="italic text-primary">one team</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bodycolor">
              Our therapists come from very different massage backgrounds, and each brings their own touch. All of them
              are trained, and all of them will ask how you&apos;re feeling before they start. Male guests can ask for
              a female therapist, and female guests can choose a male or female therapist.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {traditions.map((t) => (
                <div key={t.name} className="rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                  <dt className="font-title text-lg font-bold text-amber-900">{t.name} therapists</dt>
                  <dd className="mt-1 text-sm text-bodycolor">{t.note}</dd>
                </div>
              ))}
            </dl>
            <WhatsAppButton className="mt-8">Ask for a Therapist</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 7. Where you'll find us */}
      <section id="find-us" aria-labelledby="about-find-title" className="scroll-mt-20 bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              <span className="h-px w-10 bg-amber-700" aria-hidden="true" /> Where You&apos;ll Find Us
            </p>
            <h2 id="about-find-title" className="mt-5 font-title text-4xl font-bold leading-tight text-ink md:text-5xl">
              From hotel spas <span className="italic text-primary">to your front door</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bodycolor">
              Three of our outlets are inside well-known hotels. The rest of our 24+ outlets are spread across Delhi
              NCR, and we come to homes and hotels in three cities.
            </p>
          </div>

          <ul className="mt-12 divide-y divide-amber-200 border-y border-amber-200">
            {hotelOutlets.map((h) => (
              <li key={h.name}>
                <a href={h.href} className="group grid items-center gap-5 py-6 sm:grid-cols-[180px_1fr_auto]">
                  <span className="relative block aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image src={h.image} alt={`${h.name} hotel, ${h.area}`} fill sizes="(max-width:640px) 90vw, 180px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </span>
                  <span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{h.area}</span>
                    <span className="mt-1 block font-title text-2xl font-bold text-ink group-hover:text-primary">{h.name}, {h.area}</span>
                    <span className="mt-1 block text-sm text-bodycolor">{h.text}</span>
                  </span>
                  <span className="hidden size-12 items-center justify-center rounded-full ring-1 ring-amber-300 text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:flex">
                    <ArrowRight className="size-5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {cities.map((c) => (
              <li key={c.name}>
                <a href={c.href} className="group flex items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-amber-100 transition-all hover:-translate-y-0.5 hover:ring-amber-300">
                  <MapPin className="size-5 shrink-0 text-primary" />
                  <span className="flex-1">
                    <span className="block font-semibold text-amber-900">{c.name}</span>
                    <span className="text-xs text-bodycolor">{c.note}</span>
                  </span>
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Services + contact */}
      <section aria-labelledby="about-services-title" className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 id="about-services-title" className="font-title text-3xl font-bold text-ink md:text-4xl">
              What we <span className="italic text-primary">do</span>
            </h2>
            <p className="mt-3 text-sm text-bodycolor">
              Every massage is ₹1,999 for 60 minutes at our outlets. See the full{" "}
              <a href="/spa-price-in-delhi" className={linkClass}>spa price list</a> for home and hotel rates.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6">
              {services.map((s) => (
                <li key={s.href} className="border-b border-amber-100">
                  <a href={s.href} className="group flex items-center justify-between gap-2 py-3 text-sm font-semibold text-amber-900 hover:text-primary">
                    {s.name}
                    <ArrowRight className="size-4 shrink-0 text-primary opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-dark p-7 text-white md:p-10">
            <h2 className="font-title text-3xl font-bold md:text-4xl">
              Say <span className="italic text-secondary">hello</span>
            </h2>
            <ul className="mt-6 space-y-5">
              <li>
                <a href={PHONE_LINK} className="flex items-start gap-4 hover:text-secondary">
                  <Phone className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span>
                    <span className="block font-semibold">{PHONE_LABEL}</span>
                    <span className="text-sm text-white/70">Call or WhatsApp, bookings 24 hours a day</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 hover:text-secondary">
                  <Mail className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span>
                    <span className="block break-all font-semibold">{CONTACT_EMAIL}</span>
                    <span className="text-sm text-white/70">For anything that isn&apos;t a booking</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-secondary" />
                <address className="not-italic">
                  <span className="block font-semibold">Main address</span>
                  <span className="text-sm text-white/70">
                    {MAIN_ADDRESS.streetAddress}, {MAIN_ADDRESS.addressLocality} {MAIN_ADDRESS.postalCode}
                  </span>
                </address>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#166534]"
              >
                <FaWhatsapp className="size-4" /> WhatsApp
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1d6fa5] px-5 py-3 text-sm font-semibold text-white hover:bg-[#185d8a]"
              >
                <FaTelegramPlane className="size-4" /> Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section aria-labelledby="about-faq-title" className="bg-[#fffaf5] px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <HomeHeading id="about-faq-title" eyebrow="Good to Know" title="About Us" highlight="FAQs" />
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

      {/* 10. Closing note */}
      <section aria-labelledby="about-cta-title" className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-cta-title" className="font-title text-4xl font-bold leading-tight text-ink md:text-6xl">
            Now you know us. <span className="italic text-primary">Come relax.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-bodycolor">
            Message us the massage you&apos;d like, a time and your area. We&apos;ll suggest the nearest outlet or come to
            you, and confirm the price on the same chat.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-amber-900 ring-1 ring-amber-300 transition-colors hover:bg-amber-50"
            >
              <Phone className="size-4" /> Call Us
            </a>
          </div>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
