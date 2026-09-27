"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "B2B Massage in Delhi",
    description: "Get deep relaxation with trained female therapists.",
    icon: "🌸",
    link: "/b2b-massage-in-delhi",
  },
  {
    title: "Sandwich Massage in Delhi",
    description:
      "Experience sandwich massage with two professional therapists.",
    icon: "💆‍♂️",
    link: "/sandwich-massage-in-delhi",
  },
  {
    title: "Full Body Massage in Delhi",
    description:
      "Full body massage at just ₹1999 with expert therapists.",
    icon: "🪨",
    link: "/full-body-massage-in-delhi",
  },
  {
    title: "Couples Massage",
    description:
      "A relaxing and rejuvenating experience for couples.",
    icon: "👫",
    link: "/couples-massage-in-delhi",
  },
];

export default function HomeServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-10 lg:px-16 bg-lightturquoise relative overflow-hidden"
    >
      {/* Floating decorative rings */}
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full border-2 border-dashed border-primary/15 animate-rotate-slow" aria-hidden="true" />
      <div className="pointer-events-none absolute right-10 bottom-10 size-24 rounded-full bg-secondary/20 blur-2xl animate-smooth-up-down" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          eyebrow="Our Luxury Massage Services"
          title={
            <>
              Explore Every Kind of <span className="text-primary">Massage At Our Massage Parlour in Delhi</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <a
                href={service.link}
                className="group relative block h-full bg-white p-8 pt-10 rounded-3xl shadow-lg shadow-primary/5 overflow-hidden trv-card"
              >
                {/* Fill sweep on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true" />

                <div className="relative">
                  <div className="size-20 rounded-full bg-lightturquoise flex items-center justify-center text-4xl mb-6 transition-all duration-500 group-hover:bg-white group-hover:rotate-[360deg]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-3 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-bodycolor mb-6 transition-colors duration-500 group-hover:text-white/80">{service.description}</p>
                  <span className="inline-flex items-center gap-2 font-title text-lg font-semibold text-primary transition-colors duration-500 group-hover:text-secondary">
                    Learn More
                    <span className="size-8 rounded-full bg-secondary text-dark flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </span>
                  </span>
                </div>

                <span className="absolute top-5 right-6 font-title text-5xl font-bold text-primary/10 transition-colors duration-500 group-hover:text-white/15" aria-hidden="true">
                  0{index + 1}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
