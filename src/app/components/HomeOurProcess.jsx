"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeOurProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Choose a Massage Service",
      description:
        "Choose the type of massage service that suits your massage needs and requirements that fits your budget.",
      image: "/images/239469.webp",
    },
    {
      number: "02",
      title: "Appointment on Call or Telegram",
      description:
        "It's easy to book and get quick confirmations via call or message us on Telegram with your massage needs.",
      image: "/images/317.webp",
    },
    {
      number: "03",
      title: "Visit Spa/Hotel",
      description:
        "At the time you choose, relax in one of our beautiful spa locations.",
      image: "/images/Sandwich Massage.webp",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-amber-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-5 py-2 rounded-full mb-5">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-amber-700 font-medium tracking-wider uppercase text-sm">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-5 font-serif">
            How To Book a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              Luxury Spa in Delhi?
            </span>
          </h2>

          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl p-8 pt-16 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              {/* Step Number */}
              <div className="absolute top-5 left-6 font-title text-5xl font-bold italic text-primary/30">
                {step.number}
              </div>

              {/* Image */}
              <div className="relative w-44 h-44 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center font-serif">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {step.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}