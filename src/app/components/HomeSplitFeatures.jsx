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
        Our massage centre in Delhi offers a wide range of premium massage services to help you relax after a long,
        stressful day. Our team of Indian and international therapists is trained to deliver B2B massage, full body
        massage, and{" "}
        <a href="/couples-massage-in-delhi" className={linkClass}>couples massage in Delhi</a> at an affordable price
        without compromising on quality. From hotel massage to home massage, we&apos;re ready to serve you wherever you
        are.
      </>,
    ],
    primary: { label: "Book a Session", href: WHATSAPP_URL, icon: "whatsapp", external: true },
    secondary: { label: "Explore Therapies", href: "/couples-massage-in-delhi" },
  },
  {
    eyebrow: "Exclusive Body Spa Outlets",
    title: "Relaxing Body to Body Massage in Delhi With Female Therapists",
    accent: "100% Safety & Privacy",
    image: "/images/haboutus.webp",
    alt: "Relaxing body to body massage in Delhi with a female therapist",
    body: [
      <>
        Want a full body to body massage in Delhi? Book the best spa in Delhi with professional female therapists for
        deep relaxation. Our therapists focus on 100% safety and privacy during your session, and with 24+ spa outlets,
        including 5-star hotels in Delhi, there&apos;s always one close by whenever you feel stressed and want some
        time for yourself.
      </>,
      <>
        Looking to ease tension and anxiety and improve circulation? Our therapists blend traditional and modern
        techniques for an amazing body-to-body massage. From the moment you walk in, you&apos;ll be greeted with warm
        hospitality and a session that restores your energy and clears your head.
      </>,
      <>
        Every session is designed for your complete comfort and satisfaction, and we maintain proper hygiene and
        cleanliness in every room.
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
        Our full-body massage at our{" "}
        <a href="/spa-in-connaught-place" className={linkClass}>spa in Connaught Place</a> is the perfect way to relax
        and refresh. We combine modern massage techniques with traditional healing practices to create therapy plans
        that suit your body and lifestyle. With professional therapists, quality oils and customised treatments, enjoy a
        rejuvenating session right in the heart of Delhi.
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
