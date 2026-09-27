"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { FaSpa, FaHotTub } from 'react-icons/fa';
  import { FaStar } from "react-icons/fa";
  import { AnimatePresence } from "framer-motion";
  import React, { useState, useEffect } from 'react'
  import WhatsappFloat from "../components/WhatsappFloat";



export default function Swedishvsdeeptissue() {
   const [isVisible, setIsVisible] = useState(false);
      useEffect(() => {
                setIsVisible(true);
              }, []);
            
            const [activeIndex, setActiveIndex] = useState(null);
              const toggleFAQ = (index) => {
              setActiveIndex(activeIndex === index ? null : index);
            };
            const faqs = [
                  
                  {
                    question: "Which massage is better for stress—Swedish or deep tissue?",
                    answer: "Swedish tends to be the better choice for stress since it is gentle, pressure-wise, and also uses long strokes that help calm your nervous system. Deep tissue can also help with stress, but if you’re already tense, you may find it unbearable.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                    question: "Does deep tissue massage hurt?",
                    answer: "It can be intense and good pain, especially on knots. It shouldn’t be sharp, it shouldn’t burn and it should not feel unbearable. Speak up, request that the person use less pressure and expect mild soreness for a day or two afterward.",
                    icon: <FaHandSparkles className="text-teal-600" />
                  },
                  
                  {
                    question: "Which one is better for back pain and knots?",
                    answer: "Deep tissue is usually better for stubborn knots, tight posture or chronic muscle tension. If it's just tightness from stress, Swedish might be all you need. If the pain is severe or radiates, seek medical advice before booking.",
                    icon: <FaLeaf className="text-teal-600" />
                  },
                  {
                    question: " Will I feel sore after a deep tissue massage?",
                    answer: "Yes, some soreness or tenderness is common after deep tissue, like after a workout, and usually fades within 24–48 hours. Drink water, take a warm shower, and keep activity light if you feel achy.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                        question: "How do I choose the right massage if it’s my first time?",
                        answer: "If this is your first massage, I would definitely start with Swedish or a “Swedish + focused deep tissue” combo. Communicate your desired level of pressure to the therapist when they ask and check in half way through, adjusting as necessary.",
                        icon: <FaHotTub className="text-teal-600" />
                      },
                     ];
                
  return (
    <main className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/steptodown.com870307.webp"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold tracking-wide"
            >
              Swedish Massage vs Deep Tissue Massage: Which Massage Should You Choose?
            </motion.h1>
            <p className="mt-3 text-lg text-amber-100">
              Discover the art of relaxation and body healing
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      {/* <section className="text-center max-w-3xl mx-auto px-4 mt-16 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-amber-700 mb-4"
        >
          Rejuvenate Your Mind & Body
        </motion.h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our spa blog, where we share wellness advice, beauty tips, and the science behind relaxation. Our expert therapists share their insights to help you lead a balanced and calm lifestyle.
        </p>
        <p className="mt-4 text-gray-600 italic text-md">
          Relax your body, renew your mind, and revive your spirit.
        </p>
      </section> */}

      {/* /// */}
       <section className="w-full bg-[#fff8f1] py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* FEATURED IMAGE */}
        <div className="w-full h-[260px] md:h-[380px] relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/6745.jpg"
            alt="Swedish Massage vs Deep Tissue Massage"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TITLE */}
        {/* <h1 className="text-3xl md:text-4xl font-semibold text-[#9c5232] mb-6 leading-snug">
          Swedish Massage vs Deep Tissue Massage: Which Massage Should You Choose?
        </h1> */}

        {/* INTRO */}
        <p className="text-gray-700 leading-8 mb-10">
          If you’ve ever perused a spa or clinic’s menu, you probably know the two most popular massage options: Swedish and deep tissue. They may sound alike, but they’re made for different purposes and feel quite unlike one another on the body. Getting the right one can be the difference between leaving your session blissfully relaxed — or feeling like you’ve been hit in the gut with a brick.
        </p>
        <p className="text-gray-700 leading-8 mb-10">
            This guide breaks down what each massage type is, who it’s best for, what you can expect to feel during a session and how to determine the right kind of massage therapy for your treatment needs.
        </p>

        {/* SWEDISH MASSAGE */}
        <h2 className="text-2xl font-semibold text-[#9c5232] mb-4">
          What is Swedish Massage?
        </h2>
        <div className="w-full h-[260px] md:h-[380px] relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/185.jpg"
            alt="Swedish Massage vs Deep Tissue Massage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-gray-700 leading-8 mb-6">
          Swedish massage is the tried-and-true “relaxation massage” most people are familiar with when they think of spa treatments and massage therapy. It applies gentle to moderate pressure and long flowing strokes to help calm the nervous system.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Common Swedish Massage Techniques
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Effleurage: long gliding strokes to warm up tissues</li>
          <li>Petrissage: kneading and squeezing to release tightness</li>
          <li>Friction: small circular movements to increase circulation</li>
          <li>Tapotement: light tapping or percussion (sometimes used)</li>
          <li>Gentle stretching or joint movement: to improve mobility</li>
        </ul>

        <div className="bg-white p-5 rounded mb-10 italic text-gray-800 shadow-sm">
          Swedish massage feels smooth, rhythmic, and deeply relaxing — many
          people even fall asleep during the session.
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          How Swedish massage feels
        </h3>
        <p className="text-gray-700 leading-8 mb-6">
            Swedish massage usually feels:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Smooth and rhythmic</li>
          <li>Comfortably firm but not intense</li>
          <li>Very relaxing, sometimes even sleep-inducing</li>
          {/* <li>Tapotement – light tapping or percussion</li>
          <li>Gentle stretching or joint movement</li> */}
        </ul>
        <p className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            It’s often chosen for stress relief, general muscle tension, and full-body relaxation.
        </p>
        <p
                  href="/"
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More → <a href="/health-benefits-of-sandwich-massage">Health Benefits Of Sandwich Massage</a>
                </p>

        {/* DEEP TISSUE */}
        <h2 className="text-2xl font-semibold text-[#9c5232] mb-4">
          What is Deep Tissue Massage?
        </h2>
        <div className="w-full h-[260px] md:h-[380px] relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/151.jpg"
            alt="Swedish Massage vs Deep Tissue Massage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-gray-700 leading-8 mb-6">
          Deep tissue massage therapy focuses on realigning deeper layers of muscles and connective tissue. It’s frequently applied when people have stubborn areas of pain, tightness, or discomfort that don’t respond to gentler pressure.
        </p>
        <p className="text-gray-700 leading-8 mb-6">
          Unlike a Swedish massage, where you tend to lie still under the towel for most of the time, deep tissue work can be slower because the strokes are targeted toward the areas they are trying to improve.
        </p>
        <p className="text-gray-700 leading-8 mb-6">
          Looking for the best <a href="/spa-in-lajpat-nagar" className="text-[#9c5232] hover:underline">spa in Lajpat Nagar</a>? Unwind with premium Swedish massage and deep tissue massage for total relaxation and pain relief.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Common Deep Tissue Massage Techniques
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Slow strokes with sustained pressure</li>
          <li>Deep finger, knuckle, or elbow pressure (only as needed)</li>
          <li>Cross-fiber friction (working across muscle fibers)</li>
          <li>Trigger point work (focused pressure on “knots”)</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          How deep tissue massage feels
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Intense in tight areas</li>
          <li>More “targeted” than soothing</li>
          <li>Like a good kind of discomfort (when done correctly)</li>
          
        </ul>

        <div className="bg-white p-5 rounded mb-12 italic text-gray-800 shadow-sm">
          Key: deep tissue should not be sharp pain. You should feel at ease enough to breathe fully and rest into the pressure.
        </div>

        {/* DIFFERENCE */}
        <h2 className="text-2xl font-semibold text-[#9c5232] mb-6">
          Key Differences: Swedish vs Deep Tissue Massage
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-[#9c5232] mb-3">
              Swedish Massage
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Relaxation focused</li>
              <li>• Light to moderate pressure</li>
              <li>• Full-body treatment</li>
              <li>• Ideal for stress & sleep</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-[#9c5232] mb-3">
              Deep Tissue Massage
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pain & tension relief</li>
              <li>• Moderate to firm pressure</li>
              <li>• Targets specific problem areas</li>
              <li>• Best for chronic tightness</li>
            </ul>
          </div>
        </div>

        

      </div>
    </section>
    {/* // */}
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* BENEFITS OF SWEDISH MASSAGE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            Benefits of Swedish Massage
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            For stress relief and overall relaxation, a Swedish massage is a
            solid pick. It’s especially popular for calming the mind and easing
            everyday tension.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Reduced stress and mental fatigue</li>
            <li>Relaxation of superficial muscle tension</li>
            <li>Improved circulation and lymph flow</li>
            <li>A calmer nervous system (helpful when you feel “wired”)</li>
            <li>Better body awareness and overall comfort</li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
            Many people choose Swedish massage when they’re feeling tense from
            travel, stress, or long hours behind the computer.
          </p>
          <p
                  href="/"
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More → <a href="/how-hot-stone-massage-works-in-delhi-spa">How Hot Stone Massage Works In Delhi Spa</a>
                </p>
        </div>

        {/* BENEFITS OF DEEP TISSUE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            Benefits of Deep Tissue Massage
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            Deep tissue massage is less of a “pretty spa treatment” and more of a
            problem fixer — especially for stubborn knots and chronic tightness.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Reduced chronic muscle tension</li>
            <li>
              Relief from tight areas caused by posture (forward head or rounded
              shoulders)
            </li>
            <li>Improved mobility and flexibility</li>
            <li>Support for recovery from intense workouts</li>
            <li>
              Breaking up adhesions or “stuck” feeling in tissues (safely and
              gradually)
            </li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
            Some people feel looser immediately after the session, while mild
            soreness the next day is normal — similar to post-workout fatigue.
          </p>
        </div>

        {/* WHICH MASSAGE SHOULD YOU CHOOSE */}
        <div className="bg-[#fff8f1] p-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-6">
            Which Massage Should You Choose?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Choose Swedish Massage If You Want:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Deep relaxation and stress relief</li>
                <li>Gentle to moderate pressure</li>
                <li>A full-body “reset”</li>
                <li>Help with general tightness from daily life</li>
                <li>A first-time massage that feels approachable</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Choose Deep Tissue Massage If You Want:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Focus on specific knots or tight muscles</li>
                <li>
                  Help with recurring tightness (neck, shoulders, back, hips)
                </li>
                <li>Stronger, slower pressure</li>
                <li>Support for postural strain or athletic stiffness</li>
                <li>A targeted approach instead of full-body relaxation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHAT TO EXPECT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-6">
            What to Expect During the Session
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                During a Swedish Massage
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  The therapist starts with lighter strokes to warm up tissues
                </li>
                <li>Pressure is adjusted based on your comfort</li>
                <li>The flow is smooth, continuous, and relaxing</li>
                <li>
                  Many people feel calm, heavy, and deeply rested afterward
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                During a Deep Tissue Massage
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>The therapist works slowly and checks in often</li>
                <li>More time may be spent on one problem area</li>
                <li>
                  You may feel intensity followed by a sense of release
                </li>
                <li>
                  Mild tenderness afterward is normal — hydration helps
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CAUTION */}
        <div className="bg-[#fff3e8] border-l-4 border-[#9c5232] p-6 rounded">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Who Should Be Cautious?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Blood clotting disorders or blood thinners</li>
            <li>Recent surgery or acute injury</li>
            <li>Severe osteoporosis</li>
            <li>Unexplained pain or swelling</li>
            <li>Fever, infection, or skin conditions</li>
            <li>Pregnancy (seek prenatal-trained therapists)</li>
          </ul>
        </div>

        {/* FINAL CTA */}
        {/* <div className="text-center pt-6">
          <p className="text-lg font-medium text-gray-800">
            Searching for the best <a href="/" className="text-[#9c5232] hover:underline">spa in Delhi</a>? Experience expert massage
            therapy that melts stress, eases muscle tension, and leaves you
            refreshed.
          </p>
        </div> */}

         {/* WHICH ONE */}
        <h2 className="text-2xl font-semibold text-[#9c5232] mb-4">
          Which Massage Should You Choose?
        </h2>
        <p className="text-gray-700 leading-8 mb-10">
          Choose Swedish massage if you want deep relaxation, gentle pressure, or
          you’re new to massage therapy. Choose <a href="/deep-tissue-massage-in-delhi" className="text-[#9c5232] hover:underline font-medium">deep tissue massage</a> if you need
          focused work on knots, postural strain, or athletic soreness.
        </p>

        {/* CTA */}
        <div className="bg-[#fff3e8] border-l-4 border-[#9c5232] p-6 rounded">
          <p className="text-gray-800 font-medium">
            Ready to book? Explore our dedicated <a href="/deep-tissue-massage-in-delhi" className="text-[#9c5232] hover:underline">deep tissue massage in Delhi</a> service for chronic pain relief, or our <a href="/sandwich-massage-in-delhi" className="text-[#9c5232] hover:underline">Swedish-style sandwich massage</a> for full-body relaxation.
          </p>
        </div>

      </div>
    </section>

     

      {/* CTA or Quote */}
      {/* <section className="text-center bg-amber-100 py-16 px-6 mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-800 mb-4">
          Experience the Art of Healing
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our goal is not just to relax your body, but to bring complete harmony to your life. Explore our blog regularly to stay inspired, informed, and indulged.
        </p>
      </section> */}
      {/* F&Q Section */}
            <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
                                  <div className="max-w-5xl mx-auto px-4">
                                    <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6 }}
                                      viewport={{ once: true }}
                                      className="text-center mb-14"
                                    >
                                      <motion.div
                                        className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                      >
                                        <FaStar className="text-amber-500" />
                                        Questions? We are here to help
                                      </motion.div>
                                      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
                                        Frequently Asked <span className="text-amber-600">Questions</span>
                                      </h2>
                                      <p className="text-amber-800 max-w-2xl mx-auto text-lg">
                                        Everything you need to know about our luxurious spa services and how to book them.
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
                                          transition={{ duration: 0.4, delay: index * 0.1 }}
                                          viewport={{ once: true }}
                                          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
                                        >
                                          <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                                          >
                                            <div className="flex items-start space-x-4">
                                              <div className="mt-1 p-2 bg-amber-50 rounded-lg">
                                                {faq.icon}
                                              </div>
                                              <h3 className="text-lg md:text-xl font-medium text-amber-900 group-hover:text-amber-700 transition-colors">
                                                {faq.question}
                                              </h3>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                              <svg
                                                className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
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
                                              </svg>
                                            </div>
                                          </button>
                          
                                          <AnimatePresence>
                                            {activeIndex === index && (
                                              <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                              >
                                                <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                                                  <p className="text-amber-700">
                                                    {faq.answer}
                                                  </p>
                                                </div>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </motion.div>
                                      ))}
                                    </div>
                          
                                    {/* CTA Box */}
                                    {/* <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6, delay: 0.4 }}
                                      viewport={{ once: true }}
                                      className="mt-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl"
                                    >
                                      <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                                      <p className="mb-5 max-w-2xl mx-auto">
                                        Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
                                      </p>
                                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-full shadow-md hover:bg-amber-100 transition-colors">
                                          Contact Us
                                        </button>
                                        <button className="px-6 py-3 bg-amber-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                                          Book Appointment
                                        </button>
                                      </div>
                                    </motion.div> */}
                                  </div>
            </section>
            <WhatsappFloat />
    </main>
  );
}
