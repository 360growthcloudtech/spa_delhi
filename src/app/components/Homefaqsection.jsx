"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import HomeHeading from "./HomeHeading";
import { WHATSAPP_URL } from "./siteContact";

// Keep in sync with faqSchema in src/app/page.js
const faqs = [
  {
    question: "What services does Luxury Russian Spa provide?",
    answer:
      "At Luxury Russian Spa, we offer full-body massage, Thai massage, aromatherapy, B2B massage, sandwich massage, couple massage and more. Our certified Indian and international therapists deliver private, hygienic sessions tailored for relaxation, therapeutic relief, and special-event packages at all major outlets.",
  },
  {
    question: "What is the price of a full body massage in Delhi?",
    answer:
      "A full body massage at our Delhi outlets starts at ₹1,999 for 60 minutes. An in-room session at a 5-star hotel is ₹14,999 for 90 minutes, and our VIP session with Russian and international therapists is ₹19,999 for 120 minutes. All prices are fixed, with no hidden charges.",
  },
  {
    question: "Can male guests book a female therapist?",
    answer:
      "Yes. Male guests can choose a female therapist, and female guests can choose a male or female therapist. Just share your preference when you book on WhatsApp or call and we'll confirm who is available at your outlet.",
  },
  {
    question: "Is Luxury Russian Spa a Russian body massage centre?",
    answer:
      "Yes. Alongside our Indian therapists, we have trained therapists from Russia, Uzbekistan and Thailand. Most guests looking for the best Russian spa in Delhi come to us for the Russian-style full body massage, which you can book at our outlets across Delhi NCR or at a partner 5-star hotel.",
  },
  {
    question: "Do you have a Russian spa in Mahipalpur or Aerocity?",
    answer:
      "Yes. Both are only a few minutes from IGI Airport. Our Mahipalpur outlet is open 24/7 for a Russian massage after a late flight, and in Aerocity our therapists can come to your hotel room. Message us on WhatsApp and we'll tell you who's available.",
  },
  {
    question: "Is Luxury Russian Spa open 24/7 for late-night massage?",
    answer:
      "Yes. Luxury Russian Spa is open 24/7, so you can book a massage late at night or early in the morning. Message us on WhatsApp or call anytime and we'll confirm your session, price and therapist before you arrive.",
  },
  {
    question: "Is there a first-visit discount at Luxury Russian Spa?",
    answer:
      "Yes, we run first-visit offers periodically, such as introductory full body massage packages starting at ₹1999. Check the homepage deals or contact your preferred outlet for current promotions.",
  },
  {
    question: "Are Luxury Russian Spa therapists certified and experienced?",
    answer:
      "All our therapists are trained and certified in their techniques. We have both Indian and foreign therapists from Thailand, Uzbekistan, Russia and Afghanistan to give you the best massage experience at our 5-star hotel outlets.",
  },
];

export default function HomeFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-labelledby="home-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <HomeHeading
          id="home-faq-title"
          eyebrow="Questions? We're Here To Help"
          title="Frequently Asked"
          highlight="Questions"
          text="Everything you need to know about our spa services and how booking works."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = activeIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl ring-1 transition-colors duration-300 ${
                    open ? "bg-cream ring-amber-300" : "bg-white ring-amber-100 hover:ring-amber-200"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(open ? null : index)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-btn-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[15px] md:text-base font-semibold text-amber-900 cursor-pointer"
                    >
                      <span>
                        <span className="mr-2 text-amber-700">{String(index + 1).padStart(2, "0")}.</span>
                        {faq.question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          open ? "rotate-45 bg-amber-500 text-white" : "bg-amber-100 text-amber-700"
                        }`}
                        aria-hidden="true"
                      >
                        <FiPlus />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-bodycolor">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/faq-spa-therapist.png"
                alt="Luxury Russian Spa therapist in Delhi"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-amber-100">
              <p className="font-title text-lg font-bold text-amber-900">Still have a question?</p>
              <p className="mt-1 text-sm text-bodycolor">Message us anytime. Our booking team is available 24/7.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
              >
                <FaWhatsapp /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
