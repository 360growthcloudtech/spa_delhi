import Image from "next/image";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "./siteContact";

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const blocks = [
  {
    eyebrow: "Deep Relaxation & Wellness",
    title: "Visit Our Massage Centre in Delhi for Deep Relaxation",
    accent: "Unwind After a Long Day",
    image: "/images/05872eb2c906f2cc13b93a5154004945.jpg",
    alt: "Guest enjoying deep relaxation massage at our massage centre in Delhi",
    badge: { value: "24+", label: "Luxury Outlets", sub: "Across Delhi NCR" },
    body: [
      <>
        Some days take more out of you than others. That&apos;s what our massage centre in Delhi is for. Tell us
        what&apos;s bothering you, a stiff neck from the laptop or legs that are done after a day on your feet, and our
        Indian and international therapists will suggest what actually helps. Most guests go for a full body massage or a
        B2B massage. Coming with your partner? Our{" "}
        <a href="/couple-massage" className={linkClass}>couples massage in Delhi</a> lets you both unwind in
        the same room. Sessions start at ₹1,999, and if you&apos;d rather not travel, we can come to your hotel room or
        home.
      </>,
    ],
    primary: { label: "Book a Session", href: WHATSAPP_URL, icon: "whatsapp", external: true },
    secondary: { label: "Explore Therapies", href: "/couple-massage" },
  },
  {
    eyebrow: "Exclusive Body Spa Outlets",
    title: "Relaxing Body to Body Massage in Delhi With Female Therapists",
    accent: "100% Safety & Privacy",
    image: "/images/haboutus.webp",
    alt: "Relaxing body to body massage in Delhi with a female therapist",
    body: [
      <>
        If you&apos;re looking for a body to body massage in Delhi, your first worry is probably privacy. Fair enough.
        You get a closed room here, and no one comes in during your session. Want a female therapist? Just mention it
        on WhatsApp before you come. We have 24+ outlets, some inside 5-star hotels, so one near you is rarely a
        problem.
      </>,
      <>
        The massage covers your whole body, from the shoulders down to your feet. It&apos;s good for tight muscles, and
        for those days when your head just won&apos;t switch off. Pressure too light or too hard? Tell your therapist.
        They&apos;ll change it right away.
      </>,
      <>
        We clean the room and put out fresh towels before every guest. Your number and booking details are never
        shared with anyone.
      </>,
    ],
    primary: { label: "Book Via WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", external: true },
    secondary: { label: "View Packages", href: "/spa-price-in-delhi" },
  },
  {
    eyebrow: "Top-Rated Central Delhi",
    title: "Get Top-Rated Full Body Massage At Spa in Connaught Place",
    accent: "Central Delhi Flagship",
    image: "/images/453.webp",
    alt: "Full body massage at our spa in Connaught Place",
    badge: { value: "C.P.", label: "Connaught Place", sub: "Heart of Delhi" },
    body: [
      <>
        Work in CP, or just done with a long day of shopping at Janpath? Come over. Our{" "}
        <a href="/spa-in-connaught-place" className={linkClass}>spa in Connaught Place</a> is only a few minutes on
        foot from Rajiv Chowk Metro (Gate 1). First time here? Try the full body massage. Before it starts, your
        therapist will ask where you&apos;re feeling sore, then choose the oil and how hard to press. Think of it as an
        easy hour off in the middle of the city.
      </>,
      <>
        We also serve guests at top Connaught Place hotels like Radisson Blu, The Lalit and The Park, so you can
        relax in your own room too.
      </>,
    ],
    points: [
      "Near Rajiv Chowk Metro Gate 1",
      "5-Star Hotel Spa Appointments",
      "Private Couple & Single Rooms",
      "Discreet & 24/7 Available",
    ],
    primary: { label: "Explore Connaught Place", href: "/spa-in-connaught-place" },
    secondary: { label: "Book CP Session", href: WHATSAPP_URL, external: true },
  },
];

function CtaIcon({ name }) {
  if (name === "whatsapp") return <FaWhatsapp className="text-base" />;
  return null;
}

function ext(external) {
  return external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export default function HomeSplitFeatures() {
  return (
    <section aria-label="Why guests love our spa in Delhi" className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        {blocks.map((block, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={block.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Image with offset copper frame */}
              <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                <span
                  className={`absolute -top-4 h-[85%] w-[85%] rounded-[28px] bg-amber-200/70 ${flip ? "-right-4" : "-left-4"}`}
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {block.badge && (
                  <div className={`absolute -bottom-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-amber-100 ${flip ? "right-5" : "left-5"}`}>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-amber-100 text-sm font-bold text-amber-700">
                      {block.badge.value}
                    </span>
                    <span>
                      <span className="block text-sm font-bold leading-none text-ink">{block.badge.label}</span>
                      <span className="text-[11px] font-medium text-amber-700">{block.badge.sub}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div>
                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
                  <span className="h-px w-10 bg-amber-500" aria-hidden="true" />
                  {block.eyebrow}
                </p>
                <h2 className="mt-4 font-title text-[28px] md:text-4xl font-bold leading-tight text-amber-900">{block.title}</h2>
                <p className="mt-2 font-title text-2xl md:text-[32px] font-bold text-amber-400">{block.accent}</p>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-bodycolor">
                  {block.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>

                {block.points && (
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm font-medium text-ink">
                        <FiCheck className="mt-0.5 shrink-0 text-amber-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={block.primary.href}
                    {...ext(block.primary.external)}
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600"
                  >
                    <CtaIcon name={block.primary.icon} /> {block.primary.label}
                    {!block.primary.icon && <FiArrowRight />}
                  </a>
                  <a
                    href={block.secondary.href}
                    {...ext(block.secondary.external)}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300 px-6 py-3.5 text-sm font-semibold text-amber-700 transition-colors duration-300 hover:bg-amber-100"
                  >
                    {block.secondary.label}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
