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
    question: "What does a full body massage actually cover?",
    answer:
      "Your therapist works on your back, shoulders, neck, arms, hands, legs and feet, usually in that order. Some people also like a short head massage at the end. If there's an area you'd rather skip, or one that needs extra time, just say so before you start.",
  },
  {
    question: "How much is a full body massage in Delhi?",
    answer:
      "A 60-minute full body massage at our outlets starts at ₹1,999. A 90-minute session at your home or hotel is ₹14,999, and the 120-minute 5-star hotel package is ₹19,999. We tell you the price on WhatsApp before you book, and nothing is added later.",
  },
  {
    question: "Can I get a full body massage at home in Delhi?",
    answer:
      "Yes. Our home service covers most of Delhi NCR. A 90-minute full body massage at home costs ₹14,999. The therapist brings fresh towels and oils, so all you need is a quiet room with a little space.",
  },
  {
    question: "Where can I find a full body massage near me in Delhi?",
    answer:
      "We have 24+ outlets across Delhi NCR and we also do home and hotel visits. The easiest way is to send us your area on WhatsApp and we'll tell you which outlet is closest, or how soon a therapist can reach you.",
  },
  {
    question: "Do you cover South Delhi areas like Saket, Malviya Nagar and Hauz Khas?",
    answer:
      "Yes. We get a lot of bookings from Saket, Malviya Nagar, Hauz Khas, Green Park, Kalkaji and Lajpat Nagar. Guests in South Delhi can visit one of our outlets nearby or book a home visit.",
  },
  {
    question: "What about West Delhi, like Janakpuri, Rajouri Garden or Dwarka?",
    answer:
      "Yes, West Delhi is well covered, including Janakpuri, Rajouri Garden, Tilak Nagar, Punjabi Bagh, Paschim Vihar, Uttam Nagar and Dwarka. Message us your location and we'll suggest the nearest option.",
  },
  {
    question: "Do you do full body massage in Rohini and Pitampura?",
    answer:
      "Yes. North Delhi guests from Rohini, Pitampura, Netaji Subhash Place and Shalimar Bagh book with us regularly. You can choose between an outlet visit and a home visit.",
  },
  {
    question: "Is there a full body massage near New Delhi or Nizamuddin railway station?",
    answer:
      "Yes. If you're near New Delhi station, our Connaught Place outlet at The Park is a short ride away, and we cover Paharganj too. From Nizamuddin, The Suryaa in New Friends Colony is usually the closest. Message us your train time and we'll help you fit it in.",
  },
  {
    question: "I've just landed. Is there a full body massage near Delhi airport?",
    answer:
      "Yes. Our Mahipalpur outlet is open 24/7 and only a few minutes from IGI Airport, and our Aerocity therapists can come to your hotel room. Plenty of guests book a Russian full body massage there after a late flight.",
  },
  {
    question: "Can I choose a female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Mention your preference when you book and we'll confirm who's available.",
  },
  {
    question: "Should I book 60 or 90 minutes?",
    answer:
      "For a first full body massage, 60 minutes is plenty. If you're really stiff, or you want time for extra work on your back and shoulders, 90 minutes feels a lot less rushed.",
  },
  {
    question: "Will a full body massage help with back pain?",
    answer:
      "It often helps with muscle tightness, the kind you get from long hours at a desk or a lot of driving. If the pain is sharp, follows an injury or doesn't go away, please see a doctor first. Massage isn't a replacement for medical treatment.",
  },
  {
    question: "What's the contact number to book?",
    answer:
      "Call or WhatsApp +91 87997 16197. The same number works for every outlet, as well as home and hotel bookings.",
  },
];

// Options for the "how do you like your massage" picker, each pointing to the matching service page
const styles = [
  {
    id: "gentle",
    label: "Slow and gentle",
    emoji: "🌙",
    pick: "Swedish Full Body Massage",
    time: "60–90 min",
    why: "Long, light strokes with warm oil. You won't feel anything intense, which is exactly the point if you just want to unwind and sleep well.",
    points: ["Good for a first massage", "Light to medium pressure", "Very relaxing"],
    href: "/swedish-massage-in-delhi",
  },
  {
    id: "firm",
    label: "Firm, I'm really stiff",
    emoji: "💪",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "Slower, deeper pressure that gets into the knots around your shoulders and lower back. A bit sore the next day, much looser the day after.",
    points: ["Firm pressure where it hurts", "Great for desk-job backs", "Tell us your problem areas"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "russian",
    label: "Russian style",
    emoji: "✨",
    pick: "Russian Full Body Massage",
    time: "60–90 min",
    why: "Our Russian therapists use long, flowing strokes that cover the whole body evenly. It's what most guests at our Mahipalpur and Aerocity outlets ask for.",
    points: ["Done by a Russian therapist", "Even, flowing pressure", "Ask for it when you book"],
    href: "/spa-in-mahipalpur",
  },
  {
    id: "nooil",
    label: "No oil, just stretching",
    emoji: "🧘",
    pick: "Thai Massage",
    time: "60–90 min",
    why: "Done in loose clothes on a mat. Your therapist stretches you and presses on tight spots. No oil, so you can head straight back to work after.",
    points: ["Done by a Thai therapist", "Good for hips and legs", "No shower needed"],
    href: "/thai-massage-in-delhi",
  },
  {
    id: "calm",
    label: "Calming oils",
    emoji: "🌿",
    pick: "Aromatherapy Massage",
    time: "60–90 min",
    why: "A full body massage with essential oils picked to calm you down or lift your mood. Pick this one when your mind is more tired than your body.",
    points: ["Choose your oil", "Light, soothing pressure", "Good for stress"],
    href: "/aromatherapy-massage-in-delhi",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1024].map((w) => `/images/full-body/hero-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: MapPin, label: "24+ Outlets in Delhi NCR" },
  { icon: Home, label: "Home Service" },
  { icon: Users, label: "Choose Your Therapist" },
  { icon: Clock, label: "24-Hour Booking" },
];

const quickFacts = [
  { value: "₹1,999", label: "Starting Price", note: "60-minute session" },
  { value: "24+", label: "Outlets", note: "Across Delhi NCR" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹0", label: "Hidden Charges", note: "Price fixed before you book" },
];

const bodyAreas = [
  { area: "Back & shoulders", note: "Where most of the stiffness sits. Usually where your therapist spends the most time." },
  { area: "Neck", note: "Gentle work for the tightness that comes from looking down at a phone or laptop." },
  { area: "Arms & hands", note: "Often forgotten, but surprisingly tired after a day of typing." },
  { area: "Legs", note: "Long strokes up the calves and thighs, good after a lot of walking or standing." },
  { area: "Feet", note: "Most guests say this is the part they didn't know they needed." },
  { area: "Head (if you like)", note: "A few minutes at the end. Ask for it, or skip it, your choice." },
];

const ways = [
  {
    icon: Leaf,
    title: "At an Outlet",
    price: "From ₹1,999",
    text: "Walk into one of our 24+ outlets across Delhi NCR. You get a private room, a hot shower after, and no waiting around.",
  },
  {
    icon: Home,
    title: "At Home",
    price: "₹14,999 / 90 min",
    text: "A full body massage home service in Delhi. The therapist brings towels and oils, and you don't have to go anywhere afterwards.",
  },
  {
    icon: Hotel,
    title: "At Your Hotel",
    price: "₹14,999–₹19,999",
    text: "Staying in Delhi? Send your hotel and room number and we'll come up. Longer 5-star sessions are 120 minutes.",
  },
];

const priceRows = [
  { option: "Outlet", time: "60 min", price: "₹1,999", note: "Private room, hot shower after" },
  { option: "Home or Hotel", time: "90 min", price: "₹14,999", note: "Therapist comes to you" },
  { option: "5 Star Hotel Spa", time: "120 min", price: "₹19,999", note: "International therapist" },
];

const visitSteps = [
  {
    time: "Before",
    title: "Send a quick message",
    text: "Tell us your area, a time, and whether you want to come to an outlet or have us at home. Something like \"Saket, 7 pm, home\" is plenty.",
  },
  {
    time: "When you arrive",
    title: "Straight to a private room",
    text: "We send the exact address once you've booked. When you get there, someone takes you to your own room. If we're coming to you, the therapist sets up in about ten minutes.",
  },
  {
    time: "First few minutes",
    title: "A quick word about pressure",
    text: "Your therapist asks where you're stiff and how firm you like it. You can change your mind halfway through, people do it all the time.",
  },
  {
    time: "60 to 90 minutes",
    title: "Head to toe",
    text: "Back and shoulders first, then arms, legs and feet. Warm oil, low light, and nobody talking unless you want to.",
  },
  {
    time: "Afterwards",
    title: "Take it easy",
    text: "Have a hot shower if you're at the outlet, drink some water, and try not to plan anything stressful for the rest of the evening.",
  },
];

// Areas people search for. Areas with their own page link to it; the rest are covered by outlets nearby or home visits.
const areaGroups = [
  {
    title: "South Delhi",
    items: [
      { name: "Saket", href: "/spa-in-saket" },
      { name: "Hauz Khas", href: "/spa-in-hauz-khas" },
      { name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
      { name: "Kalkaji", href: "/spa-in-kalkaji" },
      { name: "Greater Kailash", href: "/spa-in-greater-kailash" },
      { name: "Vasant Kunj", href: "/spa-in-vasant-kunj" },
      { name: "Malviya Nagar" },
      { name: "Green Park" },
      { name: "South Extension" },
      { name: "Kailash Colony" },
      { name: "Govindpuri" },
      { name: "Munirka" },
      { name: "Safdarjung Enclave" },
      { name: "Kotla Mubarakpur" },
      { name: "Jasola" },
      { name: "Sarita Vihar" },
      { name: "Badarpur Border" },
    ],
  },
  {
    title: "West Delhi",
    items: [
      { name: "Janakpuri", href: "/spa-in-janakpuri" },
      { name: "Rajouri Garden", href: "/spa-in-rajouri-garden" },
      { name: "Punjabi Bagh", href: "/spa-in-punjabi-bagh" },
      { name: "Paschim Vihar", href: "/spa-in-paschim-vihar" },
      { name: "Uttam Nagar", href: "/spa-in-uttam-nagar" },
      { name: "Dwarka", href: "/spa-in-dwarka" },
      { name: "Tilak Nagar" },
      { name: "Patel Nagar" },
      { name: "Dwarka Mor" },
      { name: "Palam" },
      { name: "Mahavir Enclave" },
    ],
  },
  {
    title: "North Delhi",
    items: [
      { name: "Rohini", href: "/spa-in-rohini" },
      { name: "Pitampura", href: "/spa-in-pitampura" },
      { name: "Netaji Subhash Place" },
      { name: "Shalimar Bagh" },
      { name: "GTB Nagar" },
    ],
  },
  {
    title: "East Delhi",
    items: [
      { name: "Laxmi Nagar", href: "/spa-in-laxmi-nagar" },
      { name: "Preet Vihar", href: "/spa-in-preet-vihar" },
      { name: "Mayur Vihar Phase 1" },
      { name: "Mayur Vihar Phase 3" },
      { name: "Anand Vihar" },
      { name: "Shahdara" },
      { name: "Dilshad Garden" },
    ],
  },
  {
    title: "Central Delhi",
    items: [
      { name: "Connaught Place", href: "/spa-in-connaught-place" },
      { name: "Karol Bagh", href: "/spa-in-karol-bagh" },
      { name: "Paharganj", href: "/spa-in-paharganj" },
      { name: "Chandni Chowk" },
      { name: "New Delhi Railway Station" },
      { name: "Nizamuddin Station" },
    ],
  },
  {
    title: "Airport & NCR",
    items: [
      { name: "Mahipalpur", href: "/spa-in-mahipalpur" },
      { name: "Aerocity", href: "/spa-in-aerocity" },
      { name: "Gurgaon", href: "/spa-in-gurgaon" },
      { name: "Noida", href: "/spa-in-noida" },
      { name: "Faridabad", href: "/spa-in-faridabad" },
    ],
  },
];

const hotels = [
  {
    name: "Roseate House",
    area: "Aerocity",
    image: "/images/RoseateHouse.jpg",
    text: "Close to our Mahipalpur and Aerocity therapists, so in-room bookings here are usually quick to arrange.",
  },
  {
    name: "The Suryaa",
    area: "New Friends Colony",
    image: "/images/TheSuryaaNewDelhi(NFC).webp",
    text: "One of our hotel outlets. Guests can come down for a session, or book one in their room instead.",
  },
  {
    name: "Andaz Delhi",
    area: "Aerocity",
    image: "/images/hotel-andaz-delhi.jpg",
    text: "In town for work? Book a full body massage in your room after the last meeting and skip the drive.",
  },
];

const benefits = [
  { title: "Looser muscles", text: "Especially across the shoulders and lower back, where most of us carry tension." },
  { title: "Better sleep", text: "A lot of guests tell us they sleep more deeply on the night of their massage." },
  { title: "A proper break", text: "An hour with no phone and no one asking you for anything does more than you'd think." },
  { title: "Less travel stiffness", text: "Handy after a long flight, a train journey or a day of driving around Delhi." },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room cleaned after each session." },
  { icon: Users, title: "Your choice of therapist", text: "Russian, Thai or Indian, male or female, soft or firm." },
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

export default function Fullbodypage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/full-body/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="fb-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/full-body/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Therapist giving a full body massage in Delhi"
          width={1024}
          height={683}
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
            <span className="text-white">Full Body Massage in Delhi</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Body Massage in Delhi <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="fb-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Full Body Massage in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            At Our Outlets, Your Home or Your Hotel, From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            A proper full body massage takes care of the whole lot: back, neck, arms, legs and feet. We do it at 24+
            outlets across Delhi NCR, from Saket and Rohini to Mahipalpur and Laxmi Nagar. If you&apos;d rather stay in,
            a therapist can come to your home or hotel instead.
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

      {/* 2. What a full body massage covers */}
      <section aria-labelledby="fb-what-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/6745.jpg"
                alt="Full body massage spa room in Delhi"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist for full body massage in Delhi"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              Head to Toe
            </span>
          </div>

          <div>
            <HomeHeading
              id="fb-what-title"
              align="left"
              eyebrow="What You Get"
              title="What a Full Body Massage"
              highlight="Actually Covers"
              text="People sometimes book a body massage and are surprised by how much ground it covers. Here's roughly how your therapist works through it."
              className="!mb-6"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {bodyAreas.map((b, i) => (
                <li key={b.area} className="flex gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary font-title text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-amber-900">{b.area}</span>
                    <span className="text-sm text-bodycolor">{b.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Ways to book */}
      <section aria-labelledby="fb-ways-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="fb-ways-title"
            eyebrow="Full Body Massage Service in Delhi"
            title="Three Ways"
            highlight="to Book"
            text="Come to us, have us come to you, or book a session in your hotel room. The massage is the same either way."
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

      {/* 4. Style picker */}
      <section aria-labelledby="fb-style-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="fb-style-title"
            eyebrow="Pick Your Style"
            title="How Do You Like"
            highlight="Your Massage?"
            text="Not every full body massage feels the same. Tap the one that sounds most like you and we'll point you to the right kind."
          />
          <MassagePicker moods={styles} defaultId="gentle" />
        </div>
      </section>

      {/* 5. Price */}
      <section id="pricing" aria-labelledby="fb-price-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="fb-price-title"
            eyebrow="Clear Prices"
            title="Full Body Massage Price"
            highlight="in Delhi"
            text={
              <>
                No surprises at the end. We confirm the price on WhatsApp before you book. Our full rate list is on the{" "}
                <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
              </>
            }
          />
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Full body massage price in Delhi</caption>
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
            <WhatsAppButton>Check Today&apos;s Offer</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 6. Visit steps */}
      <section aria-labelledby="fb-visit-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="fb-visit-title"
            eyebrow="First Time?"
            title="How a Session"
            highlight="Usually Goes"
            text="If you've never had a full body massage before, this is what to expect from start to finish."
          />
          <ol className="relative space-y-6 border-l-2 border-dashed border-amber-300 pl-8 md:pl-10">
            {visitSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[49px] md:-left-[57px] top-1 flex size-8 items-center justify-center rounded-full bg-primary font-title text-sm font-bold text-white ring-4 ring-white">
                  {i + 1}
                </span>
                <div className="rounded-2xl bg-amber-50 p-5 md:p-6 ring-1 ring-amber-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">{s.time}</span>
                  <h3 className="mt-1 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bodycolor">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Areas */}
      <section aria-labelledby="fb-area-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="fb-area-title"
            eyebrow="Full Body Massage Near Me"
            title="Full Body Massage"
            highlight="Across Delhi"
            text="Find your area below. The highlighted ones have their own page with outlet details. Everywhere else, we'll point you to the nearest outlet or send a therapist home."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areaGroups.map((g) => (
              <div key={g.title} className="rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
                <h3 className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                  <MapPin className="size-4 text-primary" /> Full Body Massage in {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((a) => (
                    <li key={a.name}>
                      {a.href ? (
                        <a
                          href={a.href}
                          className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-amber-800"
                        >
                          {a.name} <ArrowRight className="size-3" />
                        </a>
                      ) : (
                        <span className="inline-block rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-900 ring-1 ring-amber-200">
                          {a.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Can&apos;t see your area? <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Message us your location</a> or{" "}
            <a href="/outlets" className={linkClass}>see all our outlets</a>.
          </p>
        </div>
      </section>

      {/* 8. Benefits */}
      <section aria-labelledby="fb-benefits-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto">
          <HomeHeading
            light
            id="fb-benefits-title"
            eyebrow="Why Bother?"
            title="What a Good Full Body Massage"
            highlight="Does for You"
            text="Nothing magical, just the things people notice most after a session."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <Check className="size-6 text-secondary" strokeWidth={3} />
                <h3 className="mt-4 font-title text-xl font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-white/80">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-white/60">
            Massage isn&apos;t a substitute for medical care. If you have an injury or ongoing pain, please check with a doctor first.
          </p>
        </div>
      </section>

      {/* 9. Hotels */}
      <section aria-labelledby="fb-hotels-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="fb-hotels-title"
            eyebrow="Hotel Full Body Massage"
            title="Full Body Massage at"
            highlight="Delhi Hotels"
            text="Staying at one of these, or another hotel in Delhi? Send your hotel and room number, and the therapist comes up to you."
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
                    alt={`${h.name}, ${h.area}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow">
                    {h.area}
                  </span>
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

      {/* 10. Promises */}
      <section aria-labelledby="fb-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="fb-promise-title"
            eyebrow="Why Guests Come Back"
            title="Looking for the Best Full Body Massage"
            highlight="in Delhi?"
            text="We'll let you decide that. Here's what we promise on every booking, though."
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
          <p className="mt-8 text-center text-sm text-bodycolor">
            Looking for something different? Compare with our <a href="/b2b-massage-in-delhi" className={linkClass}>B2B massage</a>,{" "}
            <a href="/sandwich-massage" className={linkClass}>sandwich massage</a> or{" "}
            <a href="/couple-massage" className={linkClass}>couple massage</a>, or browse <a href="/massage-in-delhi" className={linkClass}>every massage in Delhi</a> we offer.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="fb-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="fb-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Full Body Massage in Delhi"
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
      <section aria-labelledby="fb-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/spa-booking-consultation.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="fb-cta-title"
            eyebrow="Book Today"
            title="Need a Full Body Massage"
            highlight="Tonight?"
            text="Message us your area and a time. We'll tell you the nearest outlet, or when a therapist can reach your home, along with the price."
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
