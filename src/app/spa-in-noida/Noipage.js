import Image from "next/image";
import { preload } from "react-dom";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Home,
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
import MassagePicker from "../components/MassagePicker";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Our Noida outlet is near the Sector 18 malls; the exact location is shared on WhatsApp once a slot is confirmed.

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your spa in Noida?",
    answer:
      "Our spa in Noida is close to the Sector 18 market, a short ride from DLF Mall of India and The Great India Place. We send the exact location on WhatsApp as soon as your slot is confirmed. And if you don't feel like going anywhere, we can come to your home or hotel instead, anywhere in Noida or Greater Noida.",
  },
  {
    question: "I'm near Sector 18. Is yours the best spa in Noida Sector 18?",
    answer:
      "We'd never call ourselves the best, that's for you to decide. What guests tell us they like is the private room, being able to pick their therapist, and knowing the price before they walk in. Our outlet is right by Sector 18, so it's easy to fit in after work or after a few hours at the mall.",
  },
  {
    question: "How much does a body massage in Noida cost with you?",
    answer:
      "A 60-minute body massage at our Noida spa starts at ₹1,999. Home and hotel sessions are ₹14,999 for 90 minutes, and our 120-minute 5-star package is ₹19,999. We confirm the price on WhatsApp before you book, and that's what you pay.",
  },
  {
    question: "Can a therapist come to my home in Noida for a massage?",
    answer:
      "Yes. Our home spa covers most of Noida, Noida Extension, Gaur City and Greater Noida. The therapist brings fresh towels and oils, so you only need a quiet room with a bit of space.",
  },
  {
    question: "I live in Gaur City, Noida Extension. Will you come that far?",
    answer:
      "Yes, we visit homes in Noida Extension (Greater Noida West), including Gaur City 1 and Gaur City 2, as well as Jagat Farm and the rest of Greater Noida. Send your society name and tower on WhatsApp and we'll give you a time.",
  },
  {
    question: "I work in Sector 62. Can I get to your spa easily from there?",
    answer:
      "Yes. A lot of our bookings come from people working in Sector 62 and 63, and from the societies around Sector 104 and the Expressway. You can visit our outlet near Sector 18 or book us at home.",
  },
  {
    question: "I want a Russian spa in Noida. Do you have Russian therapists?",
    answer:
      "Yes. Our team includes therapists from Russia, Uzbekistan and Thailand along with Indian therapists. Guests looking for a Russian massage in Noida can request a Russian therapist when they book.",
  },
  {
    question: "Do you have Thai massage in Noida?",
    answer:
      "Yes. Our Thai therapists do the traditional style on a mat, with stretching and pressure points and no oil. It's a good choice after a long day at a desk in Sector 62.",
  },
  {
    question: "Can we book a couple massage in Noida?",
    answer:
      "Yes. Two therapists work at the same time in one private room, either at our outlet or at your home or hotel. It's popular for anniversaries and birthdays.",
  },
  {
    question: "What about B2B or sandwich massage in Noida?",
    answer:
      "Yes, both are available in a fully private room. Message us on WhatsApp and we'll explain each one, along with timing and price, before you book.",
  },
  {
    question: "Is it possible to get a massage late at night in Noida?",
    answer:
      "Our booking desk on WhatsApp runs 24 hours, so you can message at any time. Late evening and night slots depend on which therapists are free, so it's best to book a few hours ahead.",
  },
  {
    question: "Can I choose a female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Mention it when you book and we'll confirm who is available.",
  },
];

// Options for the "How are you feeling today?" picker
const moods = [
  {
    id: "office",
    label: "Long day in Sector 62",
    emoji: "💻",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "Eight hours at a desk and an hour on the Expressway. Deep tissue goes slowly and firmly into the knots in your neck and shoulders.",
    points: ["Firm pressure where it hurts", "Great for desk-job backs", "You'll feel looser by morning"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "tired",
    label: "Just tired of everything",
    emoji: "😮‍💨",
    pick: "Full Body Massage",
    time: "60–90 min",
    why: "Warm oil, head to toe, and an hour where nobody needs anything from you. Our most booked massage in Noida for a reason.",
    points: ["Our most popular body massage", "Quiet room, soft lighting", "Most people sleep better that night"],
    href: "/full-body-massage-in-delhi",
  },
  {
    id: "mall",
    label: "Legs tired after the mall",
    emoji: "🛍️",
    pick: "Thai Massage",
    time: "60 min",
    why: "A few hours at DLF Mall or GIP and your legs know it. Thai massage stretches you out on a mat, no oil and no shower needed after.",
    points: ["Done by our Thai therapists", "Good for legs, hips and lower back", "Finished in an hour"],
    href: "/thai-massage-in-delhi",
  },
  {
    id: "couple",
    label: "Coming as a couple",
    emoji: "💑",
    pick: "Couple Massage",
    time: "60–120 min",
    why: "Two tables, two therapists, one private room. Nice for an anniversary, or just a weekend evening without the kids.",
    points: ["Private room for the two of you", "Same or different massages", "At our outlet or at home"],
    href: "/couple-massage",
  },
  {
    id: "calm",
    label: "Want to feel calm",
    emoji: "🌿",
    pick: "Aromatherapy Massage",
    time: "60–90 min",
    why: "A gentler massage with essential oils chosen to settle you down. Good if your mind needs the break more than your muscles.",
    points: ["Pick your oil", "Light to medium pressure", "Very relaxing, very quiet"],
    href: "/aromatherapy-massage-in-noida",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 960].map((w) => `/images/noida/hero-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: ShoppingBag, label: "Near Sector 18" },
  { icon: Home, label: "Massage at Home" },
  { icon: Users, label: "Russian & Thai Therapists" },
  { icon: Clock, label: "24-Hour Booking" },
];

const quickFacts = [
  { value: "₹1,999", label: "Starting Price", note: "60-minute body massage" },
  { value: "3", label: "Ways to Book", note: "Outlet, home or hotel" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹0", label: "Hidden Charges", note: "Price fixed before you come" },
];

const services = [
  { title: "Full Body Massage", text: "If you're not sure what to pick, start here. Warm oil, and your therapist works from your shoulders down to your feet.", time: "60–90 min", href: "/full-body-massage-in-delhi" },
  { title: "Thai Massage", text: "You stay in loose clothes on a mat and our Thai therapist stretches you out. There's no oil, so no shower needed after.", time: "60–90 min", href: "/thai-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Good for that stiff neck you get from staring at a laptop all day. The pressure is slow and quite firm.", time: "60–90 min", href: "/deep-tissue-massage-in-delhi" },
  { title: "Couple Massage", text: "You both lie down in the same room while two therapists work at the same time. We can do it at the outlet or at home.", time: "60–120 min", href: "/couple-massage" },
  { title: "B2B Massage", text: "Our premium session, done in a completely private room. Message us and we'll explain how it works.", time: "60–90 min", href: "/b2b-massage-in-delhi" },
  { title: "Sandwich Massage", text: "Two therapists work on you at once. It sounds a bit unusual until you've actually tried it.", time: "60–90 min", href: "/sandwich-massage" },
  { title: "Aromatherapy Massage", text: "Lighter pressure with essential oils. Book this one when it's your head that feels tired, not your body.", time: "60–90 min", href: "/aromatherapy-massage-in-noida" },
  { title: "Swedish Massage", text: "Gentle, long strokes and nothing too intense. If you've never had a massage before, this is a nice first one.", time: "60–90 min", href: "/swedish-massage-in-delhi" },
  { title: "Russian Massage", text: "Done by one of our Russian therapists, with long, flowing strokes. Just ask for a Russian therapist when you book.", time: "60–90 min", href: "/full-body-massage-in-delhi" },
];

const therapists = [
  { name: "Russian", note: "Long, flowing strokes that help you switch off" },
  { name: "Uzbek", note: "Firm and steady, good for tired muscles" },
  { name: "Thai", note: "Stretching and pressure points, no oil" },
  { name: "Indian", note: "Warm oil and deep, familiar techniques" },
];

const hotels = [
  {
    name: "Radisson Blu MBD, Noida",
    area: "Sector 18",
    image: "/images/Radisson_Blu_MBD_Hotel,_Noida.jpg",
    text: "This one's right in Sector 18, so we can usually get a therapist to your room fairly quickly. Just send us your room number.",
  },
  {
    name: "Sandal Suites by Lemon Tree",
    area: "Noida",
    image: "/images/SandalSuitesbyLemonTreeHotels_Noida.jpg",
    text: "Most guests here are in town for work. Quite a few of them book us for after their last meeting of the day.",
  },
  {
    name: "Crowne Plaza Greater Noida",
    area: "Greater Noida",
    image: "/images/Crowne_Plaza_Greater_Noida.jpg",
    text: "Greater Noida is a fair distance from the city, so we come to you instead. Your therapist brings everything up to the room.",
  },
  {
    name: "Jaypee Greens, Greater Noida",
    area: "Greater Noida",
    image: "/images/Jaypee_Greens_Golf_Spa_Resort_Greater_Noida.jpg",
    text: "Here for the golf? Plenty of guests book a massage for the evening after their round, when the back starts to complain.",
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "At our Noida spa, near Sector 18",
    features: ["Oil, Cream or Dry Massage", "Private Room", "Quick Consultation", "Hot Shower After"],
    icon: Leaf,
  },
  {
    title: "Home & Hotel Spa",
    price: "₹14,999",
    period: "90 min",
    description: "At your home or hotel room in Noida",
    features: ["Oil, Cream or Dry Massage", "Therapist brings towels & oils", "Complimentary Refreshments", "90 min Session"],
    icon: Home,
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
    time: "Before you come",
    title: "Drop us a message",
    text: "A WhatsApp text is enough. Something like \"deep tissue, 7 pm, at the outlet\" works perfectly well. If you'd like a particular therapist, say so in the same message.",
  },
  {
    time: "When you get here",
    title: "Straight to your room",
    text: "Once your slot's confirmed, we send you the address near Sector 18. Someone will be at the door when you get there and will take you straight to your room, so you won't be waiting around in a lobby.",
  },
  {
    time: "First few minutes",
    title: "A quick chat",
    text: "Your therapist asks where it hurts and how much pressure you like. Most people keep it short. \"Medium, and my shoulders are a mess\" is a perfectly good answer.",
  },
  {
    time: "60 to 90 minutes",
    title: "The massage itself",
    text: "The lights stay low and the oil is warmed first. A good number of our guests fall asleep halfway, which we take as a compliment.",
  },
  {
    time: "Afterwards",
    title: "No need to rush",
    text: "Take a hot shower if you'd like and sit for a minute with some water. The Sector 18 traffic will still be there when you're ready.",
  },
];

// Sectors and areas we get booked in most, grouped so the grid is easy to scan on a phone
const areaGroups = [
  { title: "Central Noida", items: ["Sector 12", "Sector 15", "Sector 16", "Sector 18", "Sector 22", "Sector 26"] },
  { title: "Offices & IT Hubs", items: ["Sector 50", "Sector 51", "Sector 52", "Sector 61", "Sector 62", "Sector 63"] },
  { title: "Expressway Side", items: ["Sector 70", "Sector 71", "Sector 76", "Sector 104", "Sector 110"] },
  { title: "Noida Extension & Beyond", items: ["Noida Extension", "Gaur City 1", "Gaur City 2", "Jagat Farm", "Greater Noida"] },
];

const landmarks = [
  { icon: ShoppingBag, title: "Near the Malls", text: "Our outlet is a short ride from DLF Mall of India and The Great India Place (GIP), and not far from Wave Mall. Easy to book after shopping." },
  { icon: TrainFront, title: "By Metro", text: "Noida Sector 18 metro station on the Blue Line is the closest stop. From there it's a few minutes to us." },
  { icon: Clock, title: "Best Time", text: "Weekday afternoons are quietest. Friday and Saturday evenings fill up fast, so message us a few hours before." },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room that's cleaned after each session." },
  { icon: Users, title: "Your choice of therapist", text: "Russian, Thai or Indian, male or female, soft or firm. You decide." },
  { icon: CreditCard, title: "Price fixed in advance", text: "We confirm it on WhatsApp. That's exactly what you pay." },
  { icon: CalendarCheck, title: "Pay after", text: "UPI, cash or card, once your massage is done." },
];

const nearby = [
  { area: "Laxmi Nagar", note: "East Delhi, across the river", href: "/spa-in-laxmi-nagar" },
  { area: "Preet Vihar", note: "East Delhi", href: "/spa-in-preet-vihar" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Connaught Place", note: "Central Delhi", href: "/spa-in-connaught-place" },
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

export default function Noipage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/noida/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="noida-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/noida/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Therapist giving a body massage at our spa in Noida"
          width={960}
          height={639}
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
            <span className="text-white">Spa in Noida</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Luxury Spa in Noida <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="noida-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Noida
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Near Sector 18, or at Your Home Anywhere in Noida
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Whether you work in Sector 62, live in Noida Extension or just spent the afternoon walking around the
            malls in Sector 18, you probably deserve an hour off your feet. Come to our spa near Sector 18, or stay
            home and we&apos;ll send a therapist to you. A body massage starts at ₹1,999.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa Noida at ${PHONE_LABEL}`}
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
      <section aria-labelledby="noida-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg"
                alt="Guest relaxing during a body massage at our Noida spa"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist at our massage spa in Noida"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              Near Sector 18
            </span>
          </div>

          <div>
            <HomeHeading
              id="noida-intro-title"
              align="left"
              eyebrow="Massage and Spa in Noida"
              title="About Our Spa"
              highlight="in Noida"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              If you&apos;ve been looking for a massage spa in Noida, you&apos;ve probably noticed there are a lot of
              them, and it&apos;s hard to tell them apart from the photos. So here&apos;s simply how we work. You get a
              private room to yourself, you can choose your therapist, and we tell you the price on WhatsApp before you
              come. Nothing gets added to the bill later.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              Our outlet is near Sector 18. A lot of our guests drop in after work, or after a few hours at the mall.
              Some people would rather not go out at all, and we understand that, so we also send therapists to homes
              in Noida, Noida Extension, Gaur City and Greater Noida.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> Noida Spa Booking Number
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                It&apos;s the same number for calls and WhatsApp. Most people just message us something like &quot;free at 6
                today?&quot; and we take it from there. The exact address of the outlet comes on WhatsApp after you book.
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
      <section aria-labelledby="noida-picker-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="noida-picker-title"
            eyebrow="Not Sure What to Book?"
            title="Which Massage Should"
            highlight="You Book?"
            text="Tap whatever matches your mood today. We've put our honest suggestion next to each one."
          />
          <MassagePicker moods={moods} defaultId="tired" />
        </div>
      </section>

      {/* 4. Services */}
      <section aria-labelledby="noida-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="noida-services-title"
            eyebrow="Body Spa in Noida"
            title="Body Massage in Noida:"
            highlight="Our Menu"
            text="Every massage happens in a private room at our outlet, or at your home or hotel. Tap one to read more."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, time, href }, i) => (
              <li key={title}>
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
                    About {title} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Want the full list? Have a look at all our <a href="/massage-in-delhi" className={linkClass}>massage services</a>.
          </p>
        </div>
      </section>

      {/* 5. Therapists */}
      <section aria-labelledby="noida-russian-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="noida-russian-title"
              align="left"
              eyebrow="Russian Spa in Noida"
              title="Russian, Thai or Indian?"
              highlight="You Choose"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              Quite a few people message us asking for a Russian spa in Noida and then find out we&apos;ve got more than
              Russian therapists. Some of our team are from Uzbekistan or Thailand, and our Indian therapists have years
              of experience. Honestly, you don&apos;t have to know which is which. Just tell us whether you like firm or
              soft pressure, and whether you want oil, and we&apos;ll pick someone for you.
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

      {/* 6. Hotels */}
      <section aria-labelledby="noida-hotels-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="noida-hotels-title"
            eyebrow="Hotel Spa in Noida"
            title="In-Room Massage at"
            highlight="Noida Hotels"
            text="If you're staying at one of these hotels, you don't have to go anywhere. Message us your hotel and room number and we'll send the therapist to your room."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotels.map((h) => (
              <article
                key={h.name}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 ring-amber-100 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={h.image}
                    alt={`${h.name}, ${h.area}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow">
                    {h.area}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-lg font-bold text-amber-900">{h.name}</h3>
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

      {/* 7. Pricing */}
      <section id="pricing" aria-labelledby="noida-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="noida-pricing-title"
            eyebrow="Clear Prices"
            title="Body Massage Price"
            highlight="in Noida"
            text={
              <>
                Three options, and nothing added at the end. What we quote on WhatsApp is what you pay. Every rate is
                also on our <a href="/spa-price-in-delhi" className={linkClass}>spa price</a> page.
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

      {/* 8. Your visit, step by step */}
      <section aria-labelledby="noida-visit-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="noida-visit-title"
            eyebrow="First Time Here?"
            title="What Your Visit"
            highlight="Looks Like"
            text="Plenty of our guests have never been to a spa before. This is roughly how it goes, from the first message to walking back out."
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

      {/* 9. Areas + landmarks */}
      <section aria-labelledby="noida-area-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="noida-area-title"
            eyebrow="Spa Near Me in Noida"
            title="Sectors and Areas"
            highlight="We Cover"
            text="Searching for a spa near you in Noida? Visit our outlet near Sector 18, or book a home spa in any of these areas. Not listed? Ask us anyway."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areaGroups.map((g) => (
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
            {landmarks.map(({ icon: Icon, title, text }) => (
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

      {/* 10. Home spa */}
      <section aria-labelledby="noida-home-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/private-spa-room-delhi.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <HomeHeading
            light
            id="noida-home-title"
            align="left"
            eyebrow="Massage at Home in Noida"
            title="Don't Feel Like Going Out?"
            highlight="We'll Come Over"
            text="Our doorstep massage service covers most of Noida, Noida Extension and Greater Noida. The therapist brings towels and oils. You just need a quiet room."
            className="!mb-0"
          />
          <ul className="space-y-3">
            {[
              "Full body massage at home, from 90 minutes",
              "Home spa in Gaur City, Noida Extension and Jagat Farm",
              "Couple massage at home with two therapists",
              "Price confirmed on WhatsApp before anyone leaves",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-dark">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-white/90">{item}</span>
              </li>
            ))}
            <li>
              <WhatsAppButton className="mt-3 w-full !bg-secondary !text-dark hover:!bg-white sm:w-auto">Book a Home Visit</WhatsAppButton>
            </li>
          </ul>
        </div>
      </section>

      {/* 11. Promises */}
      <section aria-labelledby="noida-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="noida-promise-title"
            eyebrow="Why Guests Come Back"
            title="Looking for the Best Spa"
            highlight="in Noida?"
            text="We'll leave the verdict to you. What we can promise is the same thing, every time."
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

      {/* 12. Nearby outlets */}
      <section aria-labelledby="noida-nearby-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="noida-nearby-title"
            eyebrow="Spa Near Noida"
            title="Closer to Delhi?"
            highlight="Try These"
            text="If you're on the Delhi side of the river, one of these outlets might be quicker to reach."
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
            Prefer essential oils? Read about our <a href="/aromatherapy-massage-in-noida" className={linkClass}>aromatherapy massage in Noida</a>, or{" "}
            <a href="/outlets" className={linkClass}>see all our outlets</a>.
          </p>
        </div>
      </section>

      {/* 13. FAQ */}
      <section aria-labelledby="noida-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="noida-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Noida"
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

      {/* 14. Final CTA */}
      <section aria-labelledby="noida-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/Radisson_Blu_MBD_Hotel,_Noida.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="noida-cta-title"
            eyebrow="Book Today"
            title="Free This Evening?"
            highlight="Let's Book It"
            text="Drop us a WhatsApp with a time and the massage you'd like, and tell us if it's the outlet or your place. We usually reply within a few minutes with your therapist and the price."
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
