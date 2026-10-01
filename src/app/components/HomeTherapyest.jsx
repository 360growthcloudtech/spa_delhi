import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "./HomeHeading";
import { TELEGRAM_URL, WHATSAPP_URL } from "./siteContact";

const teamMembers = [
  { name: "Chelsea Foster", designation: "Spa Therapist", image: "/images/spamodel.webp" },
  { name: "Lane Parsons", designation: "Spa Therapist", image: "/images/spaExper2.webp" },
  { name: "Haven West", designation: "Spa Therapist", image: "/images/spamodel2.webp" },
  { name: "Avery Grace", designation: "Spa Therapist", image: "/images/spaExpert4.webp" },
];

const nationalities = ["Russian", "Thai", "Uzbek", "Afghan", "Indian"];

export default function HomeTherapyest() {
  return (
    <section id="therapists" aria-labelledby="home-therapists-title" className="relative overflow-hidden bg-white py-16 md:py-20 px-4 md:px-8">
      <span
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap font-title text-[70px] md:text-[130px] font-bold italic leading-none text-amber-100/70"
        aria-hidden="true"
      >
        Our Experts
      </span>

      <div className="relative max-w-6xl mx-auto">
        <HomeHeading
          id="home-therapists-title"
          eyebrow="Expert Therapy"
          title="Expert Therapists at"
          highlight="Our Massage Parlour in Delhi"
          text="We have Indian and foreign therapists at our premium massage parlour in Delhi. Our therapists come from Russia, Afghanistan, Thailand and Uzbekistan, and bring many years of hands-on massage experience."
        />

        <ul className="-mt-4 mb-10 flex flex-wrap justify-center gap-2.5" aria-label="Therapist nationalities">
          {nationalities.map((n) => (
            <li key={n} className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-amber-800 shadow-sm ring-1 ring-amber-200">
              <span className="text-amber-500" aria-hidden="true">● </span>
              {n}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="group relative overflow-hidden rounded-3xl bg-blush shadow-[0_15px_35px_rgba(43,24,16,0.15)]">
              <div className="relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={`${member.name}, spa therapist at Luxury Russian Spa Delhi`}
                  fill
                  loading="lazy"
                  sizes="(max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-4 pt-16 text-center">
                <h3 className="font-title text-lg md:text-xl font-bold text-white">{member.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">{member.designation}</p>
                <div className="mt-3 flex justify-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${member.name} on WhatsApp`}
                    className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-[#25d366]"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Check ${member.name}'s availability on Telegram`}
                    className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-[#229ED9]"
                  >
                    <FaTelegramPlane size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-bodycolor">
          Are you a trained therapist? We&apos;re hiring. See our{" "}
          <a href="/spa-therapist-jobs-in-delhi" className="font-semibold text-amber-700 underline underline-offset-4">
            spa therapist jobs in Delhi
          </a>
          .
        </p>
      </div>
    </section>
  );
}
