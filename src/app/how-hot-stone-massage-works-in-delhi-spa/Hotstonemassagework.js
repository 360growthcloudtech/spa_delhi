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
                    question: "What is Hot Stone Massage?",
                    answer: "Hot Stone Massage is the use of warm stones to massage and relax muscles.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                    question: "How does Hot Stone Massage work?",
                    answer: "The stones' heat penetrates muscles to promote better circulation and further reduce deep-seated tension.",
                    icon: <FaHandSparkles className="text-teal-600" />
                  },
                  
                  {
                    question: "Is Hot Stone Massage painful?",
                    answer: "No, it is generally mild and very relaxing.",
                    icon: <FaLeaf className="text-teal-600" />
                  },
                  {
                    question: "Who Is A Candidate for a Hot Stone Massage?",
                    answer: "Perfect for those with muscle stiffness, stress or chronic tension.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                        question: "What is the duration of a Hot Stone Massage session?",
                        answer: "Sessions generally run for 60 to 90 minutes.",
                        icon: <FaHotTub className="text-teal-600" />
                      },
                      {
                        question: "Are the stones very hot?",
                        answer: "No, the stones are not hot and are precisely controlled to manipulate your skin temperature.",
                        icon: <FaHotTub className="text-teal-600" />
                      },
                     ];
                
  return (
    <main className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/1627.jpg"
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
             How a Hot Stone Massage Works and What it Is?
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
            src="/images/13321.jpg"
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
          We all have stress, we all struggle with tense muscles and exhaustion thanks to today’s busy lifestyle. As awareness of natural treatment and holistic remedies has increased, so has the importance of effective, non-invasive ancient therapeutic treatments that are deeply relaxing. This time-tested therapy has helped people for countless decades unwind physically and mentally, soothing away the cares of the day. It does so with the use of heat and expert touch techniques.
        </p>
        <p className="text-gray-700 leading-8 mb-10">
            Everything while you need to know about Hot Stone Massage is included in this book, what it is how it works, benefits, techniques and safety.
        </p>

        {/* SWEDISH MASSAGE */}
        <h2 className="text-2xl font-semibold text-[#9c5232] mb-4">
          What is it?
        </h2>
        <div className="w-full h-[260px] md:h-[380px] relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/8203.jpg"
            alt="Swedish Massage vs Deep Tissue Massage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-gray-700 leading-8 mb-6">
         A soothing and relaxing style of massage. Smooth, heated stones are used by the therapist as either an extension of their own hands or by placing them on the body to rub muscles and/or apply pressure points. The stones are for massage use only and heat up slowly to a proscribed temperature that feels good under the hands, facilitates muscle relaxing, local circulation (as does warmth), and relaxation.
        </p>
        <p className="text-gray-700 leading-8 mb-6">
            Basalt stones are very popular as they have iron in them and hold heat the best. Therapists can work through stubborn knots using less pressure, as the heat penetrates deep into muscles.
            </p>
            <p className="text-gray-700 leading-8 mb-6">
            This type of massage is based on ancient healing methods used by cultures such as China, India and the Native American shamans, who believed that placing heated stones on certain points of the body will bring relief and restore balance to one’s well-being.
            </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          What is the procedure for hot stone massage?
        </h3>
        <p className="text-gray-700 leading-8 mb-6">
            Since Hot Stone Massage can help to comfort and alleviate the pain of many physical complaints, it has become popular. And what's its secret? This is the methodical procedure:
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                1. Warming up the stones
                </h3>
                <p className="text-gray-700 leading-8 mb-6">
                    While floating in water, the stones are heated to 110 and 130 degrees Fahrenheit. The heat is gently released into the therapists hand where it is then tried, tested and adjusted until it's warm enough to with safe temperature.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                2. Positioning on Important Body Points
                </h3>
                <p className="text-gray-700 leading-8 mb-6">
                    The heated stones are then applied to the areas below:
                    </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>The backbone</li>
          <li>Shoulders</li>
          <li>The neck</li>
          <li>lower back</li>
          <li>The feet's palms or soles</li>
        </ul>

        <div className="bg-white p-5 rounded mb-10 italic text-gray-800 shadow-sm">
          These points relate to energy centers and tension.
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          3. Using Heated Stones for Massage
        </h3>
        <p className="text-gray-700 leading-8 mb-6">
            The stones are held by the therapist and used for pressure, circular strokes and long stokes. The heat will cause your muscles to relax even more than what is possible using slighter pressure methods, and the deeper muscles can be addressed without causing pain or requiring any discomfort.
        </p>
       
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          4. Muscle and Nervous Tissue Response
        </h3>
        <p className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
           The stones' warmth:
        </p>
         <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Dilates blood vessels</li>
          <li>Increases the passage of oxygen</li>
          <li>Lessens spasms in the muscles</li>
          <li>Soothes the nervous system.</li>
        </ul>
         <p className="list-disc text-gray-700 mb-8">
           It shows they do such a damn good job of reducing physical and emotional stress.
        </p>
        <p
                  href="/"
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More → <a href="/health-benefits-of-sandwich-massage">Health Benefits of Sandwich massage</a>
                </p>

        {/* DEEP TISSUE */}
        <h2 className="text-2xl font-semibold text-[#9c5232] mb-4">
          Advantages of Hot Stone Therapy
        </h2>
        <div className="w-full h-[260px] md:h-[380px] relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/aboutusbanner.jpg"
            alt="Swedish Massage vs Deep Tissue Massage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-gray-700 leading-8 mb-6">
         An effective hot stone massage has a variety of physical, mental and emotional benefits. Some of the most common benefits include:
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Physical Benefits
        </h3>
        <p className="text-gray-700 leading-8 mb-6">
            Relieves stiffness and tension in the muscles
            </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Enhances blood flow</li>
          <li>Lessens persistent pain</li>
          <li>Reduces pain in the joints</li>
          <li>Improves flexibility and range of motion.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Mental and Emotion Benefits
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Lessens anxiety and tension</li>
          <li>Encourages profound relaxation</li>
          <li>Enhances the quality of sleep</li>
          <li>Improves mental clarity and mood</li>
          <li>Helps alleviate depressive symptoms</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Therapeutic Advantages
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Aids in injury recuperation</li>
          <li>Helps manage fibromyalgia and arthritis</li>
          <li>Increases the outflow of lymphatic</li>
          <li>Improves the mind-body relationship</li>
        </ul>
        

        {/* <div className="bg-white p-5 rounded mb-12 italic text-gray-800 shadow-sm">
          Key: deep tissue should not be sharp pain. You should feel at ease enough to breathe fully and rest into the pressure.
        </div> */}

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
        </div>

         */}

      </div>
    </section>
    {/* // */}
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* BENEFITS OF SWEDISH MASSAGE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            How to do hot stone massage at home?
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
           The following procedures are employed for the Hot Stone Massage, to obtain the best results: 
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Balancing Glide Strokes Medium glides divisions 1-3, with the use of stones to release muscles.</li>
            <li>Make it round: Use soft circular movements to release the knots.</li>
            <li>Kneading is a pressure and heat deep muscle contraction.</li>
            <li>Trigger point: Focusing on some tense spots</li>
            <li>Siblings stones or Stone discrimination treatment; lay stones at rest to pattern the heat source uniformly</li>
          </ul>
        </div>

        {/* BENEFITS OF DEEP TISSUE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            Who Would A Hot Stone Massage Benefits?
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            Hot stone massage is an ideal treatment because it is something everyone can enjoy regardless of their age or condition, those with:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Persistent tenseness in the muscles</li>
            <li>
              Shoulder, neck, or back pain
            </li>
            <li>High levels of stress or anxiety</li>
            <li>Insufficient sleep or insomnia</li>
            <li>
              Stiffness due to being inactive
            </li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
          Heat is good for muscles which have relaxed with no great amount of pressure, so it’s also suitable for people who would like a more gentle massage, while still targeting deep-set muscles.
          </p>
        </div>

        {/* WHICH MASSAGE SHOULD YOU CHOOSE */}
        <div className="bg-[#fff8f1] p-8 rounded-xl">
         <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
           Who is Hot Stone Massage Not Good For?
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            Although hot stone massage is generally considered safe, it won't suit everyone. You may not be able to receive this medicine if you have ever had: You may need a dose adjustment, or a special test may be required during treatment if you have any of these conditions.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Nerve sensitivity in diabetes</li>
            <li>
              Open wounds or skin infections
            </li>
            <li>Injuries or recent surgery</li>
            <li>Circulatory problems or heart disease</li>
            <li>
              pregnancy (unless approved by a doctor)
            </li>
            <li>Burns or heat sensitivity</li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
         Of course a responsible sentient therapist will ask what your comfort level is, however the massage itself should be discussed before it actually happens.
          </p>
        </div>

        {/* WHAT TO EXPECT */}
        <div>
          <p
                  href="/"
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More → <a href="/swedish-massage-vs-deep-tissue-massage">Swedish Massage vs Deep Tissue Massage</a>
                </p>
          
            <h2 className="text-2xl md:text-3xl font-semibold text-[#9c5232] mb-4">
            What is the Purpose of Hot Stone Massage? 
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
          Here’s what new arrivals need to know.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Restful environment with the use of aromatherapy and music</li>
            <li>
              Snoozes in the comfort of a massage table.
            </li>
            <li>Heat is introduced gradually.</li>
            <li>Constant communication with the therapist</li>
            <li>
              A sixty to ninety-minute session
            </li>
          </ul>

          <p className="text-gray-700 leading-8 mt-6">
        After their session, they say they mind and body feel very relaxed, may be a bit tired and overall have an uplifted sense of well-being.
          </p>
          
        </div>

        {/* CAUTION */}
        <div className="bg-[#fff3e8] border-l-4 border-[#9c5232] p-6 rounded">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Aftercare Advice for Optimal Outcomes
          </h3>
          <p className="text-gray-700 leading-8 mb-4">
            Here are several aftercare tips to maximize the benefits of your hot stone massage:
            </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Completely desiccate to remove impurities.</li>
            <li>Rest for 24 hours from heavy activities.</li>
            <li>If you have been advised to do so, take a warm bath.</li>
            <li>Stretch, but gently so you keep some flexibility.</li>
            <li>Go slow, and listen to your body.</li>
            {/* <li>Pregnancy (seek prenatal-trained therapists)</li> */}
          </ul>
          <p className="text-gray-700 leading-8 mt-4">
            Here are a few of them that make Dos and Don’ts, a game in itself, for general health and recovery.
            </p>
        </div>

        {/* CTA */}
        <div className="bg-[#fff3e8] border-l-4 border-[#9c5232] p-6 rounded">
            <h2 className="text-2xl font-semibold text-[#9c5232] mb-4">
          Conclusion
        </h2>
          <p className="text-gray-800 font-medium">
            Hot Stone Massage The power of heat is combined with the touch of human hand and an ancient tradition, to create a massage experience that is anything but hot it up when you introduce your clients to the healing powers of hot stones! It encourages blood flow; soothes nerves and muscles, benefiting your overall mental and physical self.
          </p>
          <p className="text-gray-800 font-medium mt-4">
            This is a principle we see in nature—falcons hunt to get food for humans—and, when done by a pro, can be an important aspect of your self-care and wellness routine. Whether you are one that is looking for time to relax and clear-out-of-the-mind or nourishment to heal some health issues that will be benefit with what it can do so easily and well, amazingly presented it all, as a free-range lightning placed in confinement yet able to offer its heat gently, and translated into healing bodywork.
            </p>
            <p className="text-gray-800 font-medium mt-4">
                A hot stone massage is just what you need when looking for a way to relax and balance your body’s systems.

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
                                      initial={false}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6 }}
                                      viewport={{ once: true }}
                                      className="text-center mb-14"
                                    >
                                      <motion.div
                                        className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                                        initial={false}
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
                                          initial={false}
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
                                      initial={false}
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
