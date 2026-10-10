import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Plus, Sparkles } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { CONTACT_EMAIL, MAIN_ADDRESS, PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";
import ContactComposer from "./ContactComposer";
import MapEmbed from "./MapEmbed";

const FULL_ADDRESS = `${MAIN_ADDRESS.streetAddress}, ${MAIN_ADDRESS.addressLocality}, Delhi ${MAIN_ADDRESS.postalCode}`;
const MAP_QUERY = encodeURIComponent("Novotel New Delhi Aerocity, GMR Hospitality District, New Delhi 110037");
const nearestOutletUrl = `https://wa.me/918799716197?text=${encodeURIComponent("Hi! Which of your outlets is nearest to me? My area is: ")}`;

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What's the fastest way to reach Luxury Russian Spa?",
    answer:
      "WhatsApp on +91 87997 16197. We usually reply within a few minutes, and you get the price, a time and your therapist all on the same chat.",
  },
  {
    question: "Can I message or call late at night?",
    answer:
      "Yes. We take booking messages 24 hours a day. Our Mahipalpur outlet near the airport is open 24/7, and for other outlets we'll tell you what's available at the time you want.",
  },
  {
    question: "Can I book for the same day?",
    answer:
      "Usually, yes. Same-day slots depend on which therapists are free, so message us as early as you can, especially for evenings and weekends.",
  },
  {
    question: "Do I have to pay in advance?",
    answer:
      "Not for outlet bookings. You pay after your session by UPI, cash or card. For home and hotel visits we'll explain the payment when we confirm your booking.",
  },
  {
    question: "Where is your main address?",
    answer: `Our main address is ${FULL_ADDRESS}. We have 24+ outlets across Delhi NCR, so message us your area and we'll tell you the nearest one.`,
  },
  {
    question: "Who do I email for anything that isn't a booking?",
    answer:
      "Email luxuryrussianspa1947@gmail.com for feedback, partnerships, hotel tie-ups or jobs. For bookings, WhatsApp is much quicker.",
  },
];

const methods = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    detail: PHONE_LABEL,
    note: "Fastest. Replies in minutes.",
    href: WHATSAPP_URL,
    external: true,
    style: "bg-[#15803d] text-white hover:bg-[#166534]",
    primary: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: PHONE_LABEL,
    note: "Talk to a person right away.",
    href: PHONE_LINK,
    style: "bg-white text-amber-900 ring-1 ring-amber-200 hover:ring-amber-400",
  },
  {
    icon: FaTelegramPlane,
    title: "Telegram",
    detail: "Message us there",
    note: "If you prefer Telegram.",
    href: TELEGRAM_URL,
    external: true,
    style: "bg-white text-amber-900 ring-1 ring-amber-200 hover:ring-amber-400",
  },
];

const afterSteps = [
  { title: "We reply", text: "Usually within a few minutes, with the price and the slots we have." },
  { title: "You pick a time", text: "Choose the slot and the therapist that suit you. Change your mind? Just tell us." },
  { title: "We confirm", text: "You get the outlet address or a confirmed home visit. For outlets, you pay after." },
];

const zones = [
  { zone: "Near the Airport", areas: [{ name: "Mahipalpur", href: "/spa-in-mahipalpur" }, { name: "Aerocity", href: "/spa-in-aerocity" }] },
  { zone: "Central Delhi", areas: [{ name: "Connaught Place", href: "/spa-in-connaught-place" }, { name: "Karol Bagh", href: "/spa-in-karol-bagh" }, { name: "Paharganj", href: "/spa-in-paharganj" }] },
  { zone: "South Delhi", areas: [{ name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" }, { name: "Saket", href: "/spa-in-saket" }, { name: "Hauz Khas", href: "/spa-in-hauz-khas" }] },
  { zone: "West Delhi", areas: [{ name: "Rajouri Garden", href: "/spa-in-rajouri-garden" }, { name: "Janakpuri", href: "/spa-in-janakpuri" }, { name: "Paschim Vihar", href: "/spa-in-paschim-vihar" }] },
  { zone: "North & East", areas: [{ name: "Rohini", href: "/spa-in-rohini" }, { name: "Pitampura", href: "/spa-in-pitampura" }, { name: "Laxmi Nagar", href: "/spa-in-laxmi-nagar" }] },
  { zone: "NCR & Beyond", areas: [{ name: "Gurgaon", href: "/spa-in-gurgaon" }, { name: "Noida", href: "/spa-in-noida" }, { name: "Bangalore", href: "/spa-in-bangalore" }, { name: "Chandigarh", href: "/spa-in-chandigarh" }] },
];

export default function Conpage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero: the three ways to reach us, right at the top */}
      <section aria-labelledby="contact-hero-title" className="relative bg-dark px-4 pt-12 pb-16 md:px-8 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-400" />
                </span>
                Taking bookings now
              </span>
              <h1
                id="contact-hero-title"
                className="mt-6 font-title text-[42px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              >
                Let&apos;s get you <span className="italic text-secondary">booked.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                Contact Luxury Russian Spa on WhatsApp, by phone or on Telegram. Tell us the massage, a time and your
                area, and we&apos;ll come back with the price and a slot, usually within a few minutes.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <Clock className="size-4 text-secondary" /> Bookings 24 hours a day, 7 days a week
              </p>
            </div>

            <ul className="grid gap-3">
              {methods.map(({ icon: Icon, title, detail, note, href, external, style, primary }) => (
                <li key={title}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 sm:p-5 ${style} ${primary ? "shadow-xl shadow-black/30" : ""}`}
                  >
                    <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${primary ? "bg-white/15" : "bg-amber-50 text-primary"}`}>
                      <Icon className="size-6" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-title text-xl font-bold">{title}</span>
                      <span className={`block text-sm ${primary ? "text-white" : "text-bodycolor"}`}>{detail} · {note}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Message builder */}
      <section id="message" aria-labelledby="contact-message-title" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <HomeHeading
            id="contact-message-title"
            eyebrow="Quick Booking"
            title="Write Your Message"
            highlight="in 30 Seconds"
            text="Fill in what you know, skip what you don't. We'll turn it into a WhatsApp message, so you don't have to type it all out."
          />
          <ContactComposer email={CONTACT_EMAIL} />
        </div>
      </section>

      {/* 3. What happens next */}
      <section aria-labelledby="contact-next-title" className="bg-[#fffaf5] px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <HomeHeading id="contact-next-title" eyebrow="After You Message" title="What Happens" highlight="Next" />
          <ol className="relative grid gap-6 md:grid-cols-3">
            <span className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-amber-300 md:block" aria-hidden="true" />
            {afterSteps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-primary font-title text-xl font-bold text-white ring-8 ring-[#fffaf5]">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-bodycolor">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Address + map */}
      <section aria-labelledby="contact-visit-title" className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <HomeHeading id="contact-visit-title" align="left" eyebrow="Visit Us" title="Our Main" highlight="Address" className="!mb-2" />
            <address className="rounded-3xl bg-amber-50 p-6 not-italic ring-1 ring-amber-100">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-amber-900">{FULL_ADDRESS}</span>
              </p>
              <p className="mt-4 flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <a href={PHONE_LINK} className="text-sm font-semibold text-amber-900 hover:text-primary">{PHONE_LABEL}</a>
              </p>
              <p className="mt-4 flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-sm font-semibold text-amber-900 hover:text-primary">{CONTACT_EMAIL}</a>
              </p>
              <p className="mt-4 flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-primary" />
                <span className="text-sm text-amber-900">Bookings 24/7 · Mahipalpur outlet open 24/7</span>
              </p>
            </address>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
            >
              <Navigation className="size-4" /> Get Directions
            </a>
            <p className="text-xs text-bodycolor">
              Looking for an outlet closer to you? See the list below, or check <a href="/outlets" className="font-semibold text-amber-700 underline underline-offset-4">all outlets</a>.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-amber-50 ring-1 ring-amber-100 shadow-[0_15px_40px_rgba(43,24,16,0.1)]">
            <MapEmbed
              query={MAP_QUERY}
              title="Map showing Luxury Russian Spa main address at Novotel, Aerocity, New Delhi"
              label="Novotel New Delhi Aerocity, near IGI Airport"
            />
          </div>
        </div>
      </section>

      {/* 5. Outlets by zone */}
      <section aria-labelledby="contact-outlets-title" className="bg-cream px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <HomeHeading
            id="contact-outlets-title"
            eyebrow="24+ Outlets"
            title="Find an Outlet"
            highlight="Near You"
            text="Tap your area to see that outlet's page, or ask us on WhatsApp and we'll tell you which one is closest."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z) => (
              <div key={z.zone} className="rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
                <h3 className="font-title text-lg font-bold text-amber-900">{z.zone}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {z.areas.map((a) => (
                    <li key={a.href}>
                      <a
                        href={a.href}
                        className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900 ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                      >
                        <MapPin className="size-3" /> {a.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={nearestOutletUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              <MessageCircle className="size-4" /> Ask for My Nearest Outlet
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section aria-labelledby="contact-faq-title" className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <HomeHeading id="contact-faq-title" eyebrow="Before You Message" title="Contact" highlight="FAQs" />
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
          <p className="mt-8 text-center text-sm text-bodycolor">
            Want to know more first? Read <a href="/about-us" className="font-semibold text-amber-700 underline underline-offset-4">about us</a>, check our{" "}
            <a href="/spa-price-in-delhi" className="font-semibold text-amber-700 underline underline-offset-4">prices</a> or browse the{" "}
            <a href="/gallery" className="font-semibold text-amber-700 underline underline-offset-4">gallery</a>.
          </p>
        </div>
      </section>

      {/* 7. Closing strip */}
      <section aria-label="Book now" className="bg-primary px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="flex items-center gap-3 font-title text-2xl font-bold text-white md:text-3xl">
            <Sparkles className="size-6 shrink-0 text-secondary" /> Your hour of quiet is one message away.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-secondary hover:text-dark"
          >
            <FaWhatsapp className="size-5" /> Message Us
          </a>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
