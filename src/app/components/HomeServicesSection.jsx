"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "B2B Massage in Delhi",
    description: "Get deep relaxation with trained female therapists.",
    image: "/images/b2b-massage.jpg",
    link: "/b2b-massage-in-delhi",
  },
  {
    title: "Sandwich Massage in Delhi",
    description:
      "Experience sandwich massage with two professional therapists.",
    image: "/images/Sandwich Massage.webp",
    link: "/sandwich-massage-in-delhi",
  },
  {
    title: "Full Body Massage in Delhi",
    description:
      "Full body massage at just ₹1999 with expert therapists.",
    image: "/images/MassageSession.webp",
    link: "/full-body-massage-in-delhi",
  },
  {
    title: "Couples Massage",
    description:
      "A relaxing and rejuvenating experience for couples.",
    image: "/images/Couple Massage.webp",
    link: "/couples-massage-in-delhi",
  },
];

export default function HomeServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-20 px-5 md:px-10 lg:px-20 bg-gradient-to-b from-white to-cream"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Our Luxury Massage Services"
          title={
            <>
              Explore Every Kind of <span className="italic text-primary">Massage At Our Massage Parlour in Delhi</span>
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={service.link}
                className="group block h-full bg-white rounded-[20px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] trv-card"
              >
                <div className="trv-card-media relative aspect-[4/3] overflow-hidden bg-blush">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Bestseller
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-ink mb-2">{service.title}</h3>
                  <p className="text-sm text-bodycolor mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-primary">
                    Know More
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
