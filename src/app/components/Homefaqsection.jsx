
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandSparkles, FaHotel, FaCrown, FaCheckCircle } from "react-icons/fa";
import {
  FaSpa,
  FaLeaf,
  FaHotTub,
  FaStar,
} from "react-icons/fa";

import { Sparkles } from "lucide-react";

export default function HomeFaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
      {
        question: "What services does Luxury Russian Spa provide?",
        answer: "At Luxury Russian Spa, we offer full-body massage, Thai massage, aromatherapy, B2B massage, sandwich massage, couple massage and more. Our certified Indian and international therapists deliver private, hygienic sessions tailored for relaxation, therapeutic relief, and special-event packages at all major outlets.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
        question: "Do you have hotel and home spa options in Delhi?",
        answer: "Yes, our hotel spa services include in-hotel treatments, room setups, full-service packages and trained international therapists at 5-star hotels. We also offer spa services at home across Delhi NCR.",
        icon: <FaLeaf className="text-teal-600" />
      },
      {
        question: "Is there a first-visit discount at Luxury Russian Spa?",
        answer: "Yes, we run first-visit offers periodically, such as introductory full body massage packages starting at ₹1999. Check the homepage deals or contact your preferred outlet for current promotions.",
        icon: <FaHotTub className="text-teal-600" />
      },
      {
        question: "Can I book a safe home spa service?",
        answer: "Yes, we offer spa at home across Delhi and the NCR region. You don't need to step out — just contact us and we'll arrange a certified therapist for your home spa session.",
        icon: <FaLeaf className="text-teal-600" />
      },
      {
        question: "Are Luxury Russian Spa therapists certified and experienced?",
        answer: "All our therapists are trained and certified in their techniques. We have both Indian and foreign therapists from Thailand, Uzbekistan, Russia and Afghanistan to give you the best massage experience at our 5-star hotel outlets.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
        question: "Can I request a male or female therapist?",
        answer: "Absolutely. You can share your therapist preference at the time of booking and we'll do our best to accommodate it.",
        icon: <FaHandSparkles className="text-teal-600" />
      },
    ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-5 bg-amber-100 rounded-full shadow-sm">
            <FaStar className="text-amber-500" />
            <span className="text-amber-800 font-medium">
              Questions? We’re Here To Help
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
            Frequently Asked{" "}
            <span className="text-amber-600">Questions</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our luxurious spa services and
            booking process.
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-amber-50 rounded-lg">
                    {faq.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-amber-900">
                    {faq.question}
                  </h3>
                </div>

                <motion.svg
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-amber-100">
                      <p className="pt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
