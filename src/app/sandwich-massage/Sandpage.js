import Image from "next/image";
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  CalendarCheck,
  Check,
  Clock,
  Droplets,
  Flower2,
  HeartPulse,
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
    question: "What is a sandwich massage?",
    answer:
      "It's a full body massage done by two therapists at the same time, one on each side of you. They time their strokes together, so it feels like one long, even wave instead of two separate massages. Most people find they relax a lot faster than with a single therapist.",
  },
  {
    question: "How much does a sandwich massage cost in Delhi?",
    answer:
      "At our outlets, a sandwich massage starts at ₹1,999 for 60 minutes. A 90-minute session in a hotel suite is ₹15,000, and the 120-minute 5-star package with foreign therapists is ₹20,000. We confirm the price on WhatsApp before you come, so there are no surprises.",
  },
  {
    question: "Where can I find a sandwich massage near me in Delhi?",
    answer:
      "We have 24+ outlets across Delhi NCR, including Aerocity, Connaught Place, Karol Bagh, Lajpat Nagar, Saket and Dwarka, plus Noida and Gurgaon. Send us your location on WhatsApp and we'll tell you which one is closest.",
  },
  {
    question: "How long does a sandwich massage take?",
    answer:
      "Usually 60 to 90 minutes, which gives both therapists enough time to cover your whole body without rushing. If you want longer, our 5-star package runs for 120 minutes.",
  },
  {
    question: "Is a sandwich massage safe for everyone?",
    answer:
      "For most healthy adults, yes. If you're pregnant, recovering from an injury or have a medical condition, check with your doctor first and tell us before the session so the therapists can adjust.",
  },
  {
    question: "Can I get a sandwich massage in a 5-star hotel?",
    answer:
      "Yes. Our therapists work with hotels like Andaz, The Park, The Suryaa and Welcomhotel by ITC Dwarka. If you're staying at one of them, we can set up the session in your room.",
  },
  {
    question: "How do I book a sandwich massage?",
    answer:
      "Message us on WhatsApp or call +91 87997 16197. Tell us the time, the outlet or hotel you prefer, and whether you'd like Russian or Indian therapists, and we'll confirm your booking.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Users, label: "Two Therapists" },
  { icon: Droplets, label: "Warm Herbal Oils" },
  { icon: Hotel, label: "5-Star Hotel Sessions" },
  { icon: Clock, label: "Open 24/7" },
];

const quickFacts = [
  { value: "2", label: "Therapists", note: "Working together" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹1,999", label: "Starting Price", note: "No hidden charges" },
  { value: "24+", label: "Outlets", note: "Across Delhi NCR" },
];

const highlights = [
  {
    icon: BedDouble,
    title: "Your own room, door closed",
    description:
      "The lights are kept low and the table is wide enough to lie on comfortably. Once you're in, the door stays shut till you're done.",
    points: ["Fresh towels every time", "Warm, dim lights", "A light scent in the air"],
  },
  {
    icon: Users,
    title: "Therapists who match each other's pace",
    description:
      "Two people massaging you at once only works if they're in step. Ours are trained to work as a pair, so you won't feel one set of hands rushing ahead of the other.",
    points: ["Russian & Indian therapists", "Pressure adjusted for you", "Trained in multi-layer massage"],
  },
];

const techniques = [
  {
    title: "We Warm the Oil First",
    image: "/images/spaservices1.jpg",
    description:
      "Nobody likes cold oil on their back. We heat it a little before we start. Warm oil helps your muscles let go quicker, and your skin won't feel dry later.",
  },
  {
    title: "One Soft, One Firm",
    image: "/images/sandwich-massage-2.jpg",
    description:
      "Usually one therapist keeps the pressure light while the other works a bit deeper on the stiff bits. You get the relief, and it never starts to hurt.",
  },
  {
    title: "Pick a Smell You Like",
    image: "/images/hb3.webp",
    description:
      "Lavender helps a lot of people unwind. Eucalyptus is nice when your muscles ache. Or just go for sandalwood if you like how it smells. We'll mix it into the oil for you.",
  },
  {
    title: "Head to Toe, Nothing Missed",
    image: "/images/MassageSession.webp",
    description:
      "With four hands working, every part gets its turn: back, shoulders, arms, legs, even your feet. No more walking out with one shoulder still stiff.",
  },
];

const benefits = [
  {
    icon: HeartPulse,
    title: "Looser Muscles",
    description: "Desk job? Then you probably know that tight spot between your shoulders. Two therapists can work it loose much sooner than one.",
  },
  {
    icon: Leaf,
    title: "Less Stress",
    description: "Somewhere around ten minutes in, your breathing slows down. If you start snoring, don't worry. We take it as a compliment.",
  },
  {
    icon: Droplets,
    title: "Better Circulation",
    description: "Ever got out of a long cab ride with heavy, tingly legs? Here the strokes move up your body, towards the heart. It gets things flowing again.",
  },
  {
    icon: Sparkles,
    title: "Softer Skin",
    description: "Warm oil, worked in slowly. Your skin feels soft after. And no, your clothes won't stick to you.",
  },
  {
    icon: Flower2,
    title: "Fresh Energy",
    description: "Some massages leave you groggy. This one doesn't. Want to go out for dinner after? Go ahead.",
  },
  {
    icon: Moon,
    title: "Deeper Sleep",
    description: "Try to come in the evening. You'll go home loose and calm, and chances are you'll be asleep before you know it.",
  },
];

const idealFor = [
  "Office workers with a stiff neck and back",
  "Travellers staying at Aerocity and 5-star hotels",
  "Anyone with tired, heavy legs after a long day",
  "Gym-goers who want their muscles to recover faster",
  "First-timers who want to try something different",
  "Anyone looking for a proper treat on a day off",
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "A good place to start for your first sandwich massage",
    features: ["Oil, Cream or Dry Massage", "Two Therapists", "Private Room", "Quick Consultation", "Shower After"],
    icon: Leaf,
  },
  {
    title: "Hotel Outlet",
    price: "₹15,000",
    period: "90 min",
    description: "A longer session in a hotel suite",
    features: ["Oil, Cream or Dry Massage", "Two Therapists", "Private Suite", "Complimentary Refreshments", "90 min Session"],
    icon: Hotel,
    popular: true,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20,000",
    period: "120 min",
    description: "The full experience with foreign therapists",
    features: ["Foreign Therapists", "5-Star Property", "Private Suite", "Aromatherapy Oils", "120 min Session"],
    icon: Star,
  },
];

// Internal links to the outlet (location) pages, for "sandwich massage near me" searches.
// Cards use "Spa in {area}" as anchor text to match the keyword each outlet page targets.
const nearbyOutlets = [
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
  { area: "Connaught Place", note: "Near Rajiv Chowk Metro", href: "/spa-in-connaught-place" },
  { area: "Karol Bagh", note: "Central Delhi", href: "/spa-in-karol-bagh" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Saket", note: "South Delhi", href: "/spa-in-saket" },
  { area: "Dwarka", note: "West Delhi", href: "/spa-in-dwarka" },
  { area: "Mahipalpur", note: "Near IGI Airport", href: "/spa-in-mahipalpur" },
  { area: "Noida", note: "Delhi NCR", href: "/spa-in-noida" },
  { area: "Gurgaon", note: "Delhi NCR", href: "/spa-in-gurgaon" },
];

const steps = [
  {
    title: "Send Us a Message",
    text: "WhatsApp, Telegram or a quick call. Tell us the time and the outlet or hotel that suits you.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Walk Into a Ready Room",
    text: "Fresh towels, warm oil and soft lighting are set up before you arrive. Change and get comfortable.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Relax for the Next Hour",
    text: "Two therapists start together and keep the same rhythm till the end. All you have to do is breathe.",
    image: "/images/hb2.webp",
  },
];

const whyChoose = [
  {
    icon: Hotel,
    title: "Outlets and 5-star hotels",
    text: (
      <>
        Book at one of our outlets, or in a partner <a href="/outlets" className={linkClass}>hotel spa in Delhi</a> if
        you&apos;d like a bigger suite and a longer session.
      </>
    ),
  },
  {
    icon: Users,
    title: "You choose your therapists",
    text: "Prefer Russian or Indian therapists? Just say so when you book and we'll arrange it.",
  },
  {
    icon: ShieldCheck,
    title: "Clean rooms, no surprises",
    text: "We clean the room after every guest. Your details stay with us. And the bill? It's the price we told you on WhatsApp, nothing extra.",
  },
];

const related = [
  { title: "B2B Massage", text: "Our full body signature massage.", href: "/b2b-massage-in-delhi" },
  { title: "Couples Massage", text: "Side by side with your partner.", href: "/couple-massage" },
  { title: "Full Body Massage", text: "One therapist, head to toe.", href: "/full-body-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching for stiff backs and hips.", href: "/thai-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Firm pressure for stubborn knots.", href: "/deep-tissue-massage-in-delhi" },
  { title: "Swedish Massage", text: "Gentle, slow strokes to switch off.", href: "/swedish-massage-in-delhi" },
];

const guides = [
  { title: "Health Benefits of Sandwich Massage", href: "/health-benefits-of-sandwich-massage" },
  { title: "What to Expect From Your First Sandwich Massage", href: "/blog/first-sandwich-massage-what-to-expect" },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Regular Client",
    review:
      "Had a wonderful experience at Luxury Russian Spa. The sandwich massage was relaxing, and the overall atmosphere was clean, peaceful, and comfortable. The staff was professional and welcoming. Highly recommended!",
  },
  {
    name: "Rahul Singh",
    role: "Fitness Enthusiast",
    review:
      "One of the most relaxing spa experiences I've had. The sandwich massage service was smooth and the ambiance felt truly premium. Great hospitality and attention to detail. Would definitely visit again!",
  },
  {
    name: "Arjun Kapoor",
    role: "Working Professional",
    review:
      "Luxury Russian Spa offers a premium wellness experience. I really enjoyed the sandwich massage and appreciated the comfortable environment and professional service. A great place to unwind and relax in Delhi.",
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

export default function Sandpage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="sandwich-hero-title" className="relative bg-dark">
        <Image
          src="/images/oil-massage-candle-lit-spa-delhi.jpg"
          alt="Sandwich massage in Delhi at Luxury Russian Spa"
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
            <span className="text-white">Sandwich Massage</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Signature Four-Hand Massage <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="sandwich-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Sandwich Massage in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Two Therapists <span className="text-secondary" aria-hidden="true">·</span> One Session{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Ever wished you had more than two hands working out the knots? That&apos;s a sandwich massage. Two
            therapists, one on each side, moving together. Our sandwich spa in Delhi has outlets across the city and
            partner 5-star hotels, so you won&apos;t have to travel far.
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

      {/* 2. What is a sandwich massage */}
      <section aria-labelledby="sandwich-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/sandwich-massage-delhi.webp"
                alt="Two therapists giving a sandwich massage at our sandwich massage centre in Delhi"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaservices4.jpg"
                alt="Sandwich massage therapists working in sync"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              4 Hands · 1 Rhythm
            </span>
          </div>

          <div>
            <HomeHeading
              id="sandwich-intro-title"
              align="left"
              eyebrow="Two Therapists, One Goal"
              title="What Is a"
              highlight="Sandwich Massage?"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              So what is a sandwich massage? Think of a normal full body massage, but with two therapists instead of
              one. One stands on your left, one on your right, and you&apos;re the filling in the middle. That&apos;s
              where the name comes from. They move at the same pace, so after a minute or two you stop noticing
              there are four hands. It just feels like one long, slow massage.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              Honestly, whether it turns out to be the best sandwich massage you&apos;ve had or just an okay one comes
              down to the two therapists. If one is quick and the other slow, it gets distracting. We pair ours up so
              that doesn&apos;t happen.
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

      {/* 3. Techniques */}
      <section aria-labelledby="sandwich-techniques-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-techniques-title"
            eyebrow="Inside the Session"
            title="How Our Therapists Do a"
            highlight="Sandwich Massage"
            text="No fixed script. These are the four things that make the session work, and your therapists adjust each one for you."
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
                    alt={`${t.title} during a sandwich massage`}
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
        </div>
      </section>

      {/* 4. Benefits */}
      <section aria-labelledby="sandwich-benefits-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-benefits-title"
            eyebrow="Why People Love It"
            title="Benefits of a"
            highlight="Sandwich Massage"
            text={
              <>
                Here&apos;s what guests usually notice after a session. Want the longer version? Read our guide on the{" "}
                <a href="/health-benefits-of-sandwich-massage" className={linkClass}>health benefits of sandwich massage</a>.
              </>
            }
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

      {/* 5. Who it's for */}
      <section aria-labelledby="sandwich-ideal-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)] lg:order-last">
            <Image
              src="/images/hb1.webp"
              alt="Guest relaxing during a sandwich massage session in Delhi"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl">
              <p className="font-title text-lg font-bold text-amber-900">Not sure it&apos;s for you?</p>
              <p className="mt-1 text-sm text-bodycolor">Message us. We&apos;ll tell you honestly if another massage suits you better.</p>
            </div>
          </div>

          <div>
            <HomeHeading
              id="sandwich-ideal-title"
              align="left"
              eyebrow="Is It For You?"
              title="Who Should Book a"
              highlight="Sandwich Massage?"
              text="Pretty much anyone who needs a proper break. It's especially good if you're one of these:"
              className="!mb-8"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_4px_16px_rgba(43,24,16,0.05)]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-amber-900">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8">Ask Us on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" aria-labelledby="sandwich-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-pricing-title"
            eyebrow="Clear Prices"
            title="Sandwich Massage"
            highlight="Price in Delhi"
            text={
              <>
                Three options, all with two therapists. The price we quote on WhatsApp is the price you pay. Comparing
                other treatments? See all our <a href="/spa-price-in-delhi" className={linkClass}>spa prices in Delhi</a>.
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
      <section aria-labelledby="sandwich-near-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-near-title"
            eyebrow="Sandwich Massage Near Me"
            title="Find a Sandwich Massage"
            highlight="Centre Near You"
            text="Searching for a sandwich massage near me? Pick your area below to see the outlet details, or send us your location on WhatsApp and we'll point you to the closest one."
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
            Can&apos;t see your area? <a href="/outlets" className={linkClass}>View all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 8. Oils */}
      <section aria-labelledby="sandwich-oil-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
            <Image
              src="/images/shoulder-massage-warm-oil.jpg"
              alt="Warm oil therapy during a Delhi sandwich massage"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <HomeHeading
              id="sandwich-oil-title"
              align="left"
              eyebrow="The Little Things"
              title="The Oils We Use"
              highlight="and Why"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Most people don&apos;t think about the oil, but you&apos;d notice if it was wrong. If it&apos;s too thin,
              it dries up in five minutes. If it&apos;s too heavy, you feel sticky for the rest of the day. So for a Delhi
              sandwich massage, we use a light oil. We warm it a bit first so it isn&apos;t cold on your skin. You can
              add lavender, eucalyptus, sandalwood or rosemary if you like. Just ask.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              Allergic to something, or have sensitive skin? Tell us before the session and we&apos;ll use a plain, unscented oil, or
              do a cream or dry massage instead. If you&apos;d like to see everything else we offer, have a look at our{" "}
              <a href="/massage-in-delhi" className={linkClass}>massage services in Delhi</a>.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Lavender", "Eucalyptus", "Sandalwood", "Rosemary"].map((oil) => (
                <span key={oil} className="rounded-full bg-amber-200/70 px-4 py-1.5 text-xs font-semibold text-amber-800">
                  {oil}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. How to book: 3 steps */}
      <section aria-labelledby="sandwich-steps-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-steps-title"
            eyebrow="Simple Booking"
            title="Book Your Sandwich Massage in"
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

      {/* 10. Why choose us */}
      <section aria-labelledby="sandwich-why-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              id="sandwich-why-title"
              align="left"
              eyebrow="Why Book With Us"
              title="A Sandwich Massage Spa in Delhi"
              highlight="That Keeps It Simple"
              text={
                <>
                  No long menus, no upselling, just a good massage at a fair{" "}
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
                alt="Sandwich massage therapist at Luxury Russian Spa, Delhi"
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

      {/* 11. Partner hotels (shared component) */}
      <LuxuryHotelShowcase service="Sandwich Massage" serviceHref={null} serviceLower="sandwich massage" />

      {/* 12. Testimonials */}
      <section aria-labelledby="sandwich-reviews-title" className="bg-[#fdf3ee] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-reviews-title"
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

      {/* 13. Related massages + guides (internal linking) */}
      <section aria-labelledby="sandwich-related-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="sandwich-related-title"
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
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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

      {/* 14. FAQ (native <details>, works without JavaScript) */}
      <section aria-labelledby="sandwich-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="sandwich-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Sandwich Massage"
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

      {/* 15. Final CTA */}
      <section aria-labelledby="sandwich-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/private-spa-room-delhi.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="sandwich-cta-title"
            eyebrow="Book Today"
            title="Ready for Your"
            highlight="Sandwich Massage?"
            text="Tell us when and where, at an outlet or in your hotel room, and we'll set it up. We're available 24/7."
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
