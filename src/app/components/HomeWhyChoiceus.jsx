"use client";

import { motion } from "framer-motion";
import { Hotel, Clock, CheckCircle2, Globe } from "lucide-react";
import { TitleSeparator } from "./SectionTitle";

const features3 = [
  {
    icon: Hotel,
    title: "24+ Spa Outlets",
    desc: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience.",
  },
  {
    icon: Clock,
    title: "24/7 Support Available",
    desc: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi",
  },
  {
    icon: CheckCircle2,
    title: "Luxury Massage Available",
    desc: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace.",
  },
  {
    icon: Globe,
    title: "Massage With Foreigner Therapists",
    desc: "Our team of massage therapists comes across borders, including India, Russia, Afghanistan, and more. When you choose us, you will be surprised with a wide range of massage therapist options available to serve you with your preferred star massage services in Aerocity.",
  },
];

export default function HomeWhyChoiceus() {
  return (
    <section className="relative py-24 px-6 bg-dark overflow-hidden">
      {/* Orbit rings */}
      <div className="pointer-events-none absolute -left-60 top-1/2 -translate-y-1/2 size-[600px]" aria-hidden="true">
        <span className="block size-full rounded-full border border-white/10 animate-rotate-slow relative after:content-[''] after:absolute after:size-3 after:rounded-full after:bg-secondary after:right-16 after:top-1/4" />
      </div>
      <div className="pointer-events-none absolute -right-40 -bottom-40 size-[500px] rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />

      {/* Heading */}
      <div className="relative text-center mb-16 max-w-4xl mx-auto">
        <span className="font-display text-2xl md:text-3xl text-secondary block mb-2">Premium Spa Services</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Why We Are <span className="text-secondary">The Best Massage </span> Centre in Delhi?
        </h2>
        <p className="text-white/75 text-lg md:text-xl leading-relaxed">
          Spa Delhi is the best Massage centre in Delhi, bringing all visitors luxurious massage experiences at an affordable price. At Spa Delhi, we combine professionalism and indulgence to present the most reliable{" "}
          <a href="/full-body-massage-in-delhi" className="text-secondary font-medium underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
            full-body massage in Delhi
          </a>
          . Our experienced massage therapists utilize effective massage techniques to address your custom massage expectations.
        </p>
        <TitleSeparator className="mt-6 !text-white" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features3.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 text-center trv-card hover:bg-white/10 hover:border-secondary/50">
                <div className="relative mx-auto mb-6 size-20">
                  <span className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/60 animate-rotate-slow" aria-hidden="true" />
                  <span className="absolute inset-2 rounded-full bg-primary flex items-center justify-center text-white transition-colors duration-500 group-hover:bg-secondary group-hover:text-dark">
                    <Icon className="w-8 h-8" />
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
