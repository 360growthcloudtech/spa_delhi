"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { FaSpa, FaHotTub } from 'react-icons/fa';
  import { FaStar } from "react-icons/fa";
  import { AnimatePresence } from "framer-motion";
  import React, { useState, useEffect } from 'react'
  import WhatsappFloat from "../components/WhatsappFloat";



export default function Healthbenefits() {
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
                    question: "What are the benefits of sandwich massage?",
                    answer: "Health Benefits Of Sandwich Massage The key health benefits of sandwich massage: better blood circulation fast recovery from muscles decaying low pressure from the body and real attentive mood nervous system relaxation. Two therapists providing simultaneous, full-body work to help clients achieve deep relaxation more quickly and effectively than a standard massage.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                    question: "Is sandwich massage suitable for all?",
                    answer: "Some people may also need to avoid sandwich massage. But if you have medical conditions like severe osteoporosis, recent surgeries or are unable to clot blood properly or pregnant, refer with a healthcare prof before booking.",
                    icon: <FaHandSparkles className="text-teal-600" />
                  },
                  
                  {
                    question: "What does the massage do to enhance blood flow?",
                    answer: "By applying pressure to both sides of the body at the same time, A sandwich massage affects blood circulation. This boosts blood circulation, which in turn warms muscles and improves delivery of oxygen to tissues — the basis for sandwich massage benefits.",
                    icon: <FaLeaf className="text-teal-600" />
                  },
                  {
                    question: " Can sandwich massage be used for muscle pain and stiffness?",
                    answer: "Yes, sandwich massage is very beneficial in relieving muscle pain, stiffness and tension. The practice makes the muscles relax uniformly, and helps reduce soreness and increase flexibility by speeding up muscle recovery.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                        question: "Is sandwich massage good for stress and anxiety?",
                        answer: "Absolutely. Stress relief One of the biggest benefit that come with sandwich massage is the reduction of stress. The harmonized movements stimulate the violet neural system, reduce cortisol level and achieve deep mental relaxation in order to relieve the stress and fatigue caused by emotion.",
                        icon: <FaHotTub className="text-teal-600" />
                      },
                     ];
                
  return (
    <main className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/80535.webp"
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
              Health Benefits of Sandwich Massage: Circulation, Muscle Recovery & Mood
            </motion.h1>
            {/* <p className="mt-3 text-lg text-amber-100">
              Discover the art of relaxation and body healing
            </p> */}
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
            src="/images/422.jpg"
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
          In our fast-paced lifestyle, with increased stress on muscles and no time for post workout care, the neck mess is all so common these days. Although classic massage therapies are still widely popular, the latter now has several new and more immersive counterparts which cater to today’s well-being requirements. And so for another time-honored technique, there’s sandwich massage, where simultaneous contact and gentle rhythmic pressure provides you.
        </p>
        <p className="text-gray-700 leading-8 mb-10">
           This post discusses the health benefits of Sandwich Massage and how sandwich massage helps in improving circulation, muscles and mood. With massage science and study on wellness as a backing to help you, we will show why people like sandwich massage.
        </p>

        {/* SWEDISH MASSAGE */}
        <h2 className="text-3xl font-semibold text-[#9c5232] mb-4">
          What Is a Sandwich Massage?
        </h2>
        <div className="w-full h-[260px] md:h-[380px] relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/banner1.jpg"
            alt="Swedish Massage vs Deep Tissue Massage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-gray-700 leading-8 mb-6">
          A sandwich massage is a treatment in which two therapists work on one client, often using the same long, flowing stroke to give guests a feeling of unity and balance. One therapist often works on the front of the body, while the other works on the back, a balancing, flowing and full-body massage.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Key Characteristics of Sandwich Massage
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Two therapists working together in harmony</li>
          <li>Rhythmic, mirrored movements</li>
          <li>Constant touching to prevent sensory bites</li>
          <li>Polynesian treatment, oils and stretching with pressing points</li>
          <li>Deep focus on mind-body relaxation</li>
        </ul>

        <div className="bg-white p-5 rounded mb-10 italic text-gray-800 shadow-sm">
          Sandwich massage is different from other kinds of massages since sandwich 2 persons can use the client's body at once, providing double sensations and double effects to the recipient.
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          What Differentiates Sandwich Massage From Conventional Massage
        </h3>
        <p className="text-gray-700 leading-8 mb-6">
            Traditional massages do work, but are intended to be used on one half of the body at a time. However, with a Sandwich massage, both sides of the central nervous system are stimulated in turn which results in more profound relaxation and faster effect.
        </p>
        <p className="text-gray-700 text-bold leading-8 mb-6">
            Unique Advantages
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Cross flow due to pressure in phase.</li>
          <li>Quicker recovery of muscles due to balanced stimulation</li>
          <li>More mental relaxation and letting go of stress</li>
          {/* <li>Tapotement – light tapping or percussion</li>
          <li>Gentle stretching or joint movement</li> */}
        </ul>
        <p className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            The body and nervous system regulation is enhanced

        </p>
         <p className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
           It is these and many more unique reasons that make Sandwich Massage one of the healthiest massage therapy known today.
        </p>
        <p
                  href="/"
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More → <a href="/how-hot-stone-massage-works-in-delhi-spa">How Hot Stone Massage Works In Delhi Spa</a>
                </p>

        {/* DEEP TISSUE */}
        <h2 className="text-3xl font-semibold text-[#9c5232] mb-4">
          Effects on the Nervous System and Mood
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
         Sandwich Massage activates the parasympathetic nervous system, with a function to restore the devastation of organs and much more.
        </p>

        {/* <p className="text-gray-700 leading-8 mb-6">
          Unlike a Swedish massage, where you tend to lie still under the towel for most of the time, deep tissue work can be slower because the strokes are targeted toward the areas they are trying to improve.
        </p>
        <p className="text-gray-700 leading-8 mb-6">
          Looking for the best <a href="/spa-in-lajpat-nagar" className="text-[#9c5232] hover:underline">spa in Lajpat Nagar</a>? Unwind with premium Swedish massage and deep tissue massage for total relaxation and pain relief.
        </p> */}
        <p className="text-gray-700 text-bold leading-8 mb-6">
            This leads to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Lower cortisol (stress hormone) levels</li>
          <li>Lowered heart rate and blood pressure</li>
          <li>Improved sleep quality</li>
          <li>Enhanced emotional stability</li>
          <li>Mood-Enhancing Effects</li>
          <li>Elevated serotonin and dopamine level</li>
          <li>Reduced anxiety and mental fatigue</li>
          <li>Improved focus and mental clarity</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          How It Reduces Stress
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Sensory discontinuities, which drive arousal, are abolished</li>
          <li>Promotes deep meditative states</li>
          <li>And relieves tension built-up in muscles and fascia </li>
          <li>Encourages mindful breathing</li>
          <li>Emotional Health Benefits</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Relief From Anxiety and Depression Symptoms
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Improved emotional regulation</li>
          <li>Enhanced mind-body connection</li>
          <li>More relaxing and happier feeling.</li>
          
        </ul>

        <div className="bg-white p-5 rounded mb-12 italic text-gray-800 shadow-sm">
          These emotional and mental serums help strengthen the health benefits of sandwich massage as well.
        </div>

        {/* DIFFERENCE */}
        {/* <h2 className="text-2xl font-semibold text-[#9c5232] mb-6">
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
        </div> */}

        

      </div>
    </section>
    {/* // */}
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* BENEFITS OF SWEDISH MASSAGE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            Posture And Alignment Benefits
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
           Bad posture frequently results in muscle imbalances and chronic pain. Sandwich massages work on opposite muscle groups at the same time. Sandwich massage can address this by making alterations to these blockages.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Postural Improvements Include</li>
            <li>Equal tone of muscles in both halves of the body</li>
            <li>Improved spinal alignment awareness</li>
            <li>Stiffness in hips, shoulders and neck decreased</li>
            <li>Enhanced core relaxation</li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
            In the long run, frequent sessions may help improve posture and movement patterns.
          </p>
        </div>

        {/* BENEFITS OF DEEP TISSUE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            Immune System Support
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
           Massage is perceived to aid the immune system, and sandwich massage encourages this effect.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Boost your immunity with Sandwich massage:</li>
            <li>
              Improved lymphatic drainage
            </li>
            <li>Reduced inflammation</li>
            <li>Lower stress-related immune suppression</li>
            <li>
             Enhanced detoxification
            </li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
           Sandwich massage reduces the stress hormones and increases the circulation of immune cells in your body.
          </p>
          <p
                  href="/"
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More → <a href="/swedish-massage-vs-deep-tissue-massage">Swedish Massage vs Deep Tissue Massage</a>
                </p>
        </div>

        {/* WHICH MASSAGE SHOULD YOU CHOOSE */}
        <div className="bg-[#fff8f1] p-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-6">
            The sandwich massage is perfect for just about anyone:
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              {/* <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Choose Swedish Massage If You Want:
              </h3> */}
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Athletes and fitness enthusiasts</li>
                <li>Office workers with sedentary routines</li>
                <li>Those with ongoing stress or anxiety</li>
                <li>People recovering from muscle fatigue</li>
                <li>Anyone seeking deep relaxation</li>
              </ul>
              <p className="text-gray-700 leading-8 mt-6">
           But some medical conditions should lead people to get a professional opinion before scheduling one.

          </p>
            </div>

            {/* <div>
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
            </div> */}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-6">
            How Often Can You Get a Sandwich Massage?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              {/* <h3 className="text-xl font-semibold mb-3 text-gray-800">
                During a Swedish Massage
              </h3> */}
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  Relaxation treatment: Every 2–3 weeks
                </li>
                <li>Muscle recovery: Weekly</li>
                <li>Overall wellness: Monthly maintenance</li>
                {/* <li>
                  Many people feel calm, heavy, and deeply rested afterward
                </li> */}
              </ul>
            <p className="text-gray-700 leading-8 mt-6">
              Frequent sessions and the long-term health benefits of sandwich massage will aid in achieving those goals.</p>
            </div>

            {/* <div>
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
            </div> */}
          </div>
        </div>

        {/* CAUTION */}
        <div className="bg-[#fff3e8] border-l-4 border-[#9c5232] p-6 rounded">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            What Happens During the Process of Sandwich Massage?
          </h3>
          <p className="text-gray-700 leading-8 mb-4">
            A session takes about 60 to 90 minutes and involves:
            </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Consultation with both therapists</li>
            <li>Use of warm oils or lotions</li>
            <li>Synchronized strokes and stretches</li>
            <li>Focus on breathing and relaxation</li>
            <li>Post-massage hydration advice</li>
            {/* <li>Pregnancy (seek prenatal-trained therapists)</li> */}
          </ul>
          <p className="text-gray-700 leading-8 mt-4">
            The feeling of it is phenomenal, and most customers feel renewed, relaxed, and rejuvenated.
            </p>
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
          Final Thoughts
        </h2>
        <p className="text-gray-700 leading-8 mb-10">
          The health advantages of sandwich massage go much beyond relaxation. This therapy helps increase circulation, speed recovery in muscles, soothe the nervous system, and elevate a sense of well-being.
        </p>

        {/* CTA */}
        <div className="bg-[#fff3e8] border-l-4 border-[#9c5232] p-6 rounded">
          <p className="text-gray-800 font-medium">
           In a world that is stressful and body straining, sandwich massage therapy offers natural relief that combat internal blockages and relieve everyday stress. If your body aches, mind races or you just want to reach ultimate bliss and relaxation - sandwich massage could change how your body feels.
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
