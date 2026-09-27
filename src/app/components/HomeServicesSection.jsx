"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "B2B Massage", image: "/images/b2b-massage.jpg", link: "/b2b-massage-in-delhi" },
  { title: "Sandwich Massage", image: "/images/Sandwich Massage.webp", link: "/sandwich-massage-in-delhi" },
  { title: "Full Body Massage", image: "/images/MassageSession.webp", link: "/full-body-massage-in-delhi" },
  { title: "Couples Massage", image: "/images/Couple Massage.webp", link: "/couples-massage-in-delhi" },
  {
    title: "Deep Tissue Massage",
    image: "/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg",
    link: "/deep-tissue-massage-in-delhi",
  },
  { title: "Thai Massage", image: "/images/thaimassage.jpg", link: "/thai-massage-in-delhi" },
  {
    title: "Swedish Massage",
    image: "/images/female-therapist-rehabilitation-center-giving-back-massage.jpg",
    link: "/swedish-massage-in-delhi",
  },
  { title: "Aromatherapy Massage", image: "/images/aromatherapy-featured-jpg.webp", link: "/aromatherapy-massage-in-delhi" },
];

export default function HomeServicesSection() {
  return (
    <section id="services" className="bg-ornament py-16 md:py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="font-display italic font-semibold text-xl md:text-2xl text-primary block mb-2">
            Our Luxury Massage Services
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-black">
            Explore Every Kind of Massage At Our Massage Parlour in Delhi
          </h2>
        </div>

        {/* Palace-arch cards (Avataar "What does Avataar offer?") */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              viewport={{ once: true }}
            >
              <a
                href={service.link}
                className="group block transition-transform duration-500 hover:-translate-y-1.5 drop-shadow-[0_10px_18px_rgba(43,24,16,0.18)]"
              >
                <div className="arch-frame aspect-[400/370] md:aspect-[400/320]">
                  <div className="arch-inner">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent" aria-hidden="true" />
                    <h3 className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-6 font-sans text-sm md:text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
