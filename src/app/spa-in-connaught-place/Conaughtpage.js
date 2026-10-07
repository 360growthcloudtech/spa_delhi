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
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  TrainFront,
  Users,
  X,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Our Connaught Place outlet is inside The Park hotel. Shown on the page and used for the DaySpa schema in ./page.js.
export const CP_ADDRESS = {
  streetAddress: "The Park New Delhi, 15 Parliament Street, Connaught Place",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110001",
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your spa in Connaught Place?",
    answer:
      "Our Connaught Place spa is at The Park New Delhi, 15 Parliament Street, a few minutes from Patel Chowk and Rajiv Chowk metro stations. If you're staying at another CP hotel, such as The LaLiT, The Imperial or Shangri-La Eros, our therapist can come to your room instead.",
  },
  {
    question: "Do you have a Russian spa in Connaught Place?",
    answer:
      "Yes. Our Russian spa in Connaught Place has Russian, Uzbek and Thai therapists as well as Indian therapists. Tell us who you'd like when you book, and how firm you want the pressure, and we'll match you with the right person.",
  },
  {
    question: "What makes you one of the best spas in Connaught Place?",
    answer:
      "Guests usually mention three things: private rooms inside a 5-star hotel, prices we fix on WhatsApp before you come, and being open 24/7. You also choose your therapist and the type of massage, so the session is built around you rather than a set menu.",
  },
  {
    question: "How much does a massage in Connaught Place cost?",
    answer:
      "A 60-minute massage at our Connaught Place outlet starts at ₹1,999. A 90-minute session in a hotel suite is ₹14,999, and the 120-minute 5-star hotel spa package is ₹19,999. There are no hidden charges.",
  },
  {
    question: "Is there a spa near the Metropolitan Hotel in Connaught Place?",
    answer:
      "Yes. The Metropolitan Hotel is on Bangla Sahib Road, a short drive from our outlet at The Park on Parliament Street. Many guests staying near Gole Market and Bangla Sahib come over to us. Message us with where you're staying and we'll tell you the quickest way to reach us.",
  },
  {
    question: "How are you different from massage parlours in Connaught Place?",
    answer:
      "Many massage parlours in Connaught Place work out of small rooms with shared spaces and prices that change at the counter. We work from a 5-star hotel, every room is private and cleaned after each guest, our therapists are trained and certified, and the price you see on WhatsApp is the price you pay.",
  },
  {
    question: "Is your Connaught Place spa open late at night?",
    answer:
      "Yes, we're open 24/7. Office workers in CP often come after 9 p.m., and hotel guests book us late at night after a long day of meetings.",
  },
  {
    question: "Can I choose a female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Mention it when you book and we'll confirm who is available.",
  },
  {
    question: "How do I book a massage in Connaught Place?",
    answer:
      "WhatsApp us or call +91 87997 16197. Tell us the massage, the time, and whether you'll come to The Park or want us at your hotel. We confirm the slot and the price on the same chat.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Hotel, label: "Inside The Park, CP" },
  { icon: Users, label: "Russian & Indian Therapists" },
  { icon: TrainFront, label: "Near Rajiv Chowk Metro" },
  { icon: Clock, label: "Open 24/7" },
];

const quickFacts = [
  { value: "24/7", label: "Open", note: "Late nights too" },
  { value: "5", label: "CP Hotels", note: "In-room sessions" },
  { value: "₹1,999", label: "Starting Price", note: "No hidden charges" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
];

const therapists = [
  { name: "Russian", note: "Long, flowing strokes" },
  { name: "Uzbek", note: "Firm, steady pressure" },
  { name: "Thai", note: "Stretching, no oil" },
  { name: "Indian", note: "Warm oil, deep relief" },
];

const hotels = [
  {
    name: "The Park New Delhi",
    area: "Parliament Street",
    image: "/images/thePrak_CP.jpg",
    text: "Our Connaught Place outlet is right here. Walk in for your session, or book a longer one in a private suite upstairs.",
    outlet: true,
  },
  {
    name: "The LaLiT New Delhi",
    area: "Barakhamba Avenue",
    image: "/images/theLalit_CP.jpg",
    text: "Staying at The LaLiT? Send us your room number and the therapist comes up with fresh towels and warm oil.",
  },
  {
    name: "The Imperial New Delhi",
    area: "Janpath",
    image: "/images/theImperial_CP.jpeg",
    text: "A quiet in-room massage is the easiest way to unwind after a day of walking Janpath and the CP circles.",
  },
  {
    name: "Shangri-La Eros New Delhi",
    area: "Ashoka Road",
    image: "/images/shangri-la-s-eros-hotel-connaught-place-delhi-5-star-hotels-2zj8oj1.avif",
    text: "Business guests at Shangri-La Eros book us between meetings. Even 60 minutes makes a long day feel shorter.",
  },
  {
    name: "Radisson Blu Marina",
    area: "Connaught Place, G Block",
    image: "/images/radissonblu_CP.jpg",
    text: "Right on the CP circle. We can set up a full body or couple massage in your room, timed around your plans.",
  },
];

const services = [
  { title: "Full Body Massage", text: "Head to toe, with warm oil. Our most booked massage in Connaught Place.", time: "60–90 min", href: "/full-body-massage-in-delhi" },
  { title: "B2B Massage", text: "A body to body massage in a fully private room at The Park.", time: "60–90 min", href: "/b2b-massage-in-connaught-place" },
  { title: "Couple Massage", text: "Two tables, one room. A good plan for a date night in central Delhi.", time: "60–120 min", href: "/couple-massage" },
  { title: "Sandwich Massage", text: "Two therapists working together. Twice the hands, half the stress.", time: "60–90 min", href: "/sandwich-massage" },
  { title: "Deep Tissue Massage", text: "Firm pressure for a stiff neck and back from long hours at a desk.", time: "60–90 min", href: "/deep-tissue-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching on a mat, no oil. Great for tight hips and shoulders.", time: "60–90 min", href: "/thai-massage-in-delhi" },
];

// Our spa vs a typical massage parlour in CP (targets "massage parlours in connaught place" honestly)
const comparison = [
  { point: "Where it happens", us: "Inside a 5-star hotel", them: "Small rooms above shops" },
  { point: "Room", us: "Fully private, cleaned after every guest", them: "Often shared or curtained" },
  { point: "Price", us: "Fixed on WhatsApp before you come", them: "Decided at the counter" },
  { point: "Therapists", us: "Trained and certified, your choice", them: "Whoever is free" },
  { point: "Hours", us: "Open 24/7", them: "Usually closes by evening" },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "At our outlet in The Park, Connaught Place",
    features: ["Oil, Cream or Dry Massage", "Private Room", "Quick Consultation", "Hot Shower After"],
    icon: Leaf,
  },
  {
    title: "Hotel Outlet",
    price: "₹14,999",
    period: "90 min",
    description: "In your room at a Connaught Place hotel",
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
    text: "WhatsApp, Telegram or a call. Tell us the time, the massage, and whether it's The Park or your hotel room.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Get Your Slot Confirmed",
    text: "We confirm the therapist, the time and the price on the same chat. No surprises when you arrive.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Walk In and Relax",
    text: "Come to The Park on Parliament Street, or wait in your room. Your therapist asks about pressure, then you just lie back.",
    image: "/images/hb2.webp",
  },
];

const gettingHere = [
  { icon: TrainFront, title: "By Metro", text: "Patel Chowk (Yellow Line) is the closest station. Rajiv Chowk is a short auto ride away." },
  { icon: MapPin, title: "Landmarks", text: "On Parliament Street, near Jantar Mantar and the CP Outer Circle." },
  { icon: Clock, title: "Best Time", text: "Evenings get busy with office crowd. Late night and early morning slots are easiest to get." },
];

const nearby = [
  { area: "Karol Bagh", note: "About 15 minutes away", href: "/spa-in-karol-bagh" },
  { area: "Paharganj", note: "Right behind New Delhi station", href: "/spa-in-paharganj" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
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

export default function Conaughtpage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="cp-hero-title" className="relative bg-dark">
        <Image
          src="/images/TheParkConnaughtPlace.webp"
          alt="Spa in Connaught Place at The Park New Delhi"
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
            <span className="text-white">Spa in Connaught Place</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Russian Spa in Connaught Place <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="cp-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Connaught Place
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Inside The Park Hotel <span className="text-secondary" aria-hidden="true">·</span> Hotel Room Visits{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            A long day in CP, between meetings, shopping and traffic on the Outer Circle, deserves a proper massage.
            Our spa in Connaught Place is inside The Park hotel on Parliament Street, open 24/7, with Russian and
            Indian therapists. Come to us, or we&apos;ll come to your hotel room.
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
      <section aria-labelledby="cp-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Private massage room at our spa in Connaught Place"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist at our Connaught Place massage centre"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              In the Heart of CP
            </span>
          </div>

          <div>
            <HomeHeading
              id="cp-intro-title"
              align="left"
              eyebrow="Connaught Place Spa"
              title="The Best Spa in Connaught Place"
              highlight="Without the Fuss"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Connaught Place is busy at every hour. Office crowds, shoppers on Janpath, tourists walking the inner
              circle. When people look for the best spa in Connaught Place, they usually want three simple things: a
              clean private room, a therapist who knows what they&apos;re doing, and a fair price they know in advance.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              That&apos;s what we do. Our CP spa sits inside The Park hotel, so it&apos;s calm the moment you step in.
              Choose a full body massage, a couple session or a deep tissue massage for that desk-job back, and book
              it in one WhatsApp message. Prefer to stay in? Our therapists visit the big Connaught Place hotels every day.
            </p>

            <address className="mt-8 flex gap-4 rounded-2xl bg-amber-50 p-5 not-italic ring-1 ring-amber-100">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <MapPin className="size-6" />
              </span>
              <span>
                <span className="block font-title text-lg font-bold text-amber-900">Our Connaught Place Outlet</span>
                <span className="mt-1 block text-sm leading-relaxed text-bodycolor">
                  {CP_ADDRESS.streetAddress}, {CP_ADDRESS.addressLocality} {CP_ADDRESS.postalCode}
                </span>
                <a href={PHONE_LINK} className="mt-1 inline-block text-sm font-semibold text-primary hover:underline">
                  {PHONE_LABEL}
                </a>
              </span>
            </address>
          </div>
        </div>
      </section>

      {/* 3. Russian spa: therapists */}
      <section aria-labelledby="cp-russian-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="cp-russian-title"
              align="left"
              eyebrow="Russian Spa in CP"
              title="A Russian Spa in Connaught Place,"
              highlight="Your Way"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              Our Russian spa in Connaught Place brings together therapists from Russia, Uzbekistan and Thailand
              alongside our experienced Indian team. Each one has a different touch. Not sure which suits you?
              Tell us how you feel, sore, tired or just stressed, and we&apos;ll suggest someone.
            </p>
            <WhatsAppButton className="mt-8 !bg-secondary !text-dark hover:!bg-white">Pick My Therapist</WhatsAppButton>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {therapists.map((t) => (
              <li
                key={t.name}
                className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-secondary/50"
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

      {/* 4. Hotels */}
      <section aria-labelledby="cp-hotels-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-hotels-title"
            eyebrow="5-Star Hotel Spa"
            title="Our Outlet and Hotels"
            highlight="in Connaught Place"
            text="Visit our outlet at The Park, or stay where you are. Send us your hotel name and room number, and the therapist comes straight up."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <article
                key={h.name}
                className={`group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)] ${
                  h.outlet ? "ring-2 ring-primary" : "ring-amber-100"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={h.image}
                    alt={`${h.name}, ${h.area}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow ${
                      h.outlet ? "bg-primary text-white" : "bg-white/90 text-primary"
                    }`}
                  >
                    {h.outlet ? "Our CP Outlet" : "In-Room Sessions"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-xl font-bold text-amber-900">{h.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                    <MapPin className="size-3.5" /> {h.area}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-bodycolor">{h.text}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <FaWhatsapp /> {h.outlet ? "Book at The Park" : "Book to My Room"}
                  </a>
                </div>
              </article>
            ))}
            {/* Fills the last grid cell with a booking prompt for hotels not listed */}
            <div className="flex flex-col justify-center rounded-3xl bg-primary p-8 text-white shadow-[0_10px_30px_rgba(43,24,16,0.15)]">
              <Hotel className="size-10 text-secondary" />
              <p className="mt-4 font-title text-2xl font-bold">Staying somewhere else in CP?</p>
              <p className="mt-2 text-sm text-white">
                Near the Metropolitan Hotel, Janpath or Barakhamba Road? Message us your location and we&apos;ll tell
                you the quickest way to get your massage.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary hover:text-dark"
              >
                <FaWhatsapp /> Ask Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Massages */}
      <section aria-labelledby="cp-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-services-title"
            eyebrow="Massage in Connaught Place"
            title="Body Massage in CP:"
            highlight="What You Can Book"
            text="These are the massages our Connaught Place guests ask for most. Tap one to read more."
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
            Want the full list? Have a look at our <a href="/massage-in-delhi" className={linkClass}>massage in Delhi</a> page.
          </p>
        </div>
      </section>

      {/* 6. Spa vs massage parlour */}
      <section aria-labelledby="cp-compare-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="cp-compare-title"
            eyebrow="Know the Difference"
            title="Not Just Another"
            highlight="Massage Parlour in CP"
            text="There are plenty of massage parlours in Connaught Place. Here's what changes when you book a hotel spa instead."
          />
          <div className="overflow-x-auto rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-amber-100">
                  <th scope="col" className="p-3 sm:p-5 font-semibold text-bodycolor"><span className="sr-only">Compared on</span></th>
                  <th scope="col" className="bg-primary p-3 sm:p-5 font-title text-sm sm:text-lg font-bold text-white">Luxury Russian Spa</th>
                  <th scope="col" className="p-3 sm:p-5 font-title text-sm sm:text-lg font-bold text-amber-900">Typical Parlour</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.point} className="border-b border-amber-50 last:border-0">
                    <th scope="row" className="p-3 sm:p-5 font-semibold text-amber-900">{row.point}</th>
                    <td className="bg-amber-50/70 p-3 sm:p-5">
                      <span className="flex items-start gap-2 text-amber-900">
                        <Check className="mt-0.5 hidden size-4 shrink-0 text-green-600 sm:block" strokeWidth={3} /> {row.us}
                      </span>
                    </td>
                    <td className="p-3 sm:p-5">
                      <span className="flex items-start gap-2 text-bodycolor">
                        <X className="mt-0.5 hidden size-4 shrink-0 text-rose-400 sm:block" strokeWidth={3} /> {row.them}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" aria-labelledby="cp-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-pricing-title"
            eyebrow="Clear Prices"
            title="Spa Price"
            highlight="in Connaught Place"
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

      {/* 8. How to book */}
      <section aria-labelledby="cp-steps-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-steps-title"
            eyebrow="Simple Booking"
            title="Book Your CP Massage in"
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

      {/* 9. Getting here */}
      <section aria-labelledby="cp-directions-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="cp-directions-title"
            eyebrow="Getting Here"
            title="Find Our Spa"
            highlight="Near Rajiv Chowk"
          />
          <div className="grid gap-5 md:grid-cols-3">
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
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Clean and private", text: "Every room is cleaned after each guest, with fresh linen every time." },
              { icon: Users, title: "Your choice of therapist", text: "Russian or Indian, male or female, soft or firm pressure." },
              { icon: CalendarCheck, title: "Pay at the outlet", text: "No advance payment for outlet bookings. The price is fixed before you arrive." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-amber-900">{title}</span>
                  <span className="text-sm text-bodycolor">{text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Nearby outlets */}
      <section aria-labelledby="cp-nearby-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="cp-nearby-title"
            eyebrow="Spa Near Connaught Place"
            title="Not in CP Today?"
            highlight="Try These"
            text="If you're looking for a spa near Connaught Place, one of these outlets might be closer to you."
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
            Planning your visit? Read our <a href="/blog/spa-in-connaught-place" className={linkClass}>guide to spas in Connaught Place</a>, or{" "}
            <a href="/outlets" className={linkClass}>see all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="cp-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="cp-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Connaught Place"
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
      <section aria-labelledby="cp-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/theLalit_CP.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="cp-cta-title"
            eyebrow="Book Today"
            title="Ready to Relax"
            highlight="in Connaught Place?"
            text="Message us with your time and your hotel, or just say you're coming to The Park. We reply at all hours."
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
