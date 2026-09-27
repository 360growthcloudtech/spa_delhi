"use client";

import { motion } from "framer-motion";
import { Hotel, Clock, CheckCircle2, Globe } from "lucide-react";

const features3 = [
  {
    icon: Hotel,
    title: "24+ Spa Outlets",
    desc: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience.",
  },
  {
    icon: Clock,
    title: "24/7 Support Available",
    desc: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Luxury Russian Spa, you can rest assured that you will get a complete range of full-body massage in Delhi",
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
    <section className="bg-cream px-4 py-16 md:px-10 md:py-16 lg:px-20">
      {/* Espresso panel (Avataar CTA block) */}
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-dark px-6 py-12 md:px-14 md:py-14">
        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />

        <div className="relative text-center mb-12 max-w-4xl mx-auto">
          <span className="font-display italic font-semibold text-xl md:text-2xl text-sand block mb-2">Premium Spa Services</span>
          <h2 className="text-3xl md:text-[40px] font-medium leading-tight text-white mb-5">
            Why We Are <span className="italic text-secondary">The Best Massage </span> Centre in Delhi?
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Luxury Russian Spa is the best Massage centre in Delhi, bringing all visitors luxurious massage experiences at an affordable price. At Luxury Russian Spa, we combine professionalism and indulgence to present the most reliable{" "}
            <a href="/full-body-massage-in-delhi" className="text-secondary font-medium underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
              full-body massage in Delhi
            </a>
            . Our experienced massage therapists utilize effective massage techniques to address your custom massage expectations.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features3.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group h-full rounded-2xl border border-white/20 bg-white/[0.08] p-6 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.14]">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-cream text-primary transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mt-10 text-center">
          <a href="https://api.whatsapp.com/send?phone=9310xxxxxx" className="site-button light">
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}
