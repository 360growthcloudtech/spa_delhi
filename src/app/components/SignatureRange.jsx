"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

// Avataar "Korean Range" style: tall numbered cards, the active one widens.
// Homepage visitors could be anywhere in Delhi NCR, so cards link to the city-wide service pages.
const items = [
  {
    title: "Sandwich Massage",
    tagline: "Two therapists, one session",
    image: "/images/sandwich-massage-2.jpg",
    link: "/sandwich-massage",
  },
  {
    title: "Couple Massage",
    tagline: "Side by side, in a private room",
    image: "/images/couple-bathrobes-posing-embraced.jpg",
    link: "/couple-massage",
  },
  {
    title: "Thai Massage",
    tagline: "Stretch out stiffness and tension",
    image: "/images/fpkdl.com_960_1758980524_tranquil-oasis-with-plush-massage-table-adorned-with_1126694-2523.jpg",
    link: "/thai-massage-in-delhi",
  },
  {
    title: "Deep Tissue Massage",
    tagline: "Firm pressure for knots and back pain",
    image: "/images/fpkdl.com_750_1758780040_content-european-woman-lies-comfortably-massage_1036891-1866.jpg",
    link: "/deep-tissue-massage-in-delhi",
  },
];

export default function SignatureRange() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-16 md:py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 md:mb-14 flex items-center justify-center gap-3 text-center text-3xl md:text-[44px] font-bold text-black">
          Our Signature Range
          <span className="rotate-[-8deg] rounded-full bg-[#f25c6b] px-3 py-1 font-sans text-xs font-bold italic uppercase text-white shadow-md">
            New!
          </span>
        </h2>

        {/* Desktop: expanding row. Mobile: horizontal scroll. */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {items.map((item, i) => {
            const isActive = active === i;
            return (
              <a
                key={item.link}
                href={item.link}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative h-[420px] md:h-[560px] shrink-0 snap-center overflow-hidden rounded-3xl bg-blush transition-[flex-grow,width] duration-500 ease-out w-[78%] md:w-auto md:min-w-0 ${
                  isActive ? "md:flex-[2]" : "md:flex-1"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} in Delhi`}
                  fill
                  sizes="(max-width:768px) 80vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-6 bottom-7 md:inset-x-8 md:bottom-9 flex items-end justify-between gap-4 text-white">
                  <p className={`leading-tight transition-[font-size] duration-500 text-2xl ${isActive ? "md:text-[28px]" : "md:text-xl"}`}>
                    <span className="block">{i + 1}.</span>
                    {item.title}
                    <span className="mt-2 block text-sm font-normal text-white/80">{item.tagline}</span>
                  </p>
                  <span
                    className={`hidden h-14 w-28 shrink-0 items-center justify-center rounded-full bg-white/25 backdrop-blur-md animate-fade-in ${
                      isActive ? "md:flex" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <FiArrowRight size={26} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
