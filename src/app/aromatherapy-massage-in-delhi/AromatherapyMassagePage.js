'use client';
import React, { useState, useEffect } from 'react'

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSpa, FaHotel, FaCrown } from 'react-icons/fa';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { FaHandSparkles, FaLeaf, FaHotTub } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { FaTelegram } from 'react-icons/fa';
import { FaClock, FaPhoneAlt, FaCreditCard } from 'react-icons/fa'

export default function AromatherapyMassagePage() {
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
      question: "What is aromatherapy massage and how does it work?",
      answer: "Aromatherapy massage combines gentle Swedish-style massage strokes with pure essential oils like lavender, eucalyptus, or rosemary. The oils are absorbed through the skin and inhaled during the session, working alongside the massage technique to relax both your body and your mind.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Which essential oils do you use for aromatherapy massage in Delhi?",
      answer: "We offer a range of essential oils including lavender for relaxation, eucalyptus and peppermint for a refreshing effect, and chamomile for calming, sensitive skin. Your therapist can recommend the right blend based on how you want to feel after your session.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Is aromatherapy massage safe for people with allergies?",
      answer: "We always ask about allergies and skin sensitivities before your session. If you have a known reaction to certain oils or fragrances, let your therapist know and we will adjust the blend or skip aromatherapy oils altogether while still giving you a relaxing massage.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    {
      question: "What is the difference between aromatherapy massage and Swedish massage?",
      answer: "Aromatherapy massage uses the same gentle, flowing strokes as a Swedish massage, but adds therapeutic essential oils for extra relaxation, mood benefits, and a more sensory experience. If you enjoy scent-based relaxation, aromatherapy massage takes classic technique a step further.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "What does an aromatherapy massage cost in Delhi?",
      answer: "Our aromatherapy massage in Delhi starts at ₹1999 for a first-visit outlet session, with home spa and hotel spa packages available from ₹15,000 depending on duration and setting.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Can aromatherapy massage help with stress and anxiety?",
      answer: "Yes, many guests choose aromatherapy massage specifically for stress relief. The combination of calming touch and essential oils like lavender and chamomile is widely used to help reduce anxiety, ease racing thoughts, and support a more peaceful state of mind.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Does aromatherapy massage help with sleep problems?",
      answer: "Aromatherapy massage is a popular choice for people struggling with sleep. Lavender and chamomile oils are known for their calming properties, and combined with a relaxing full body massage, many guests find it easier to unwind and fall asleep afterward.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    {
      question: "How long does an aromatherapy massage session take?",
      answer: "A full body aromatherapy massage in Delhi typically lasts 60 to 90 minutes, giving enough time for the oils to be properly massaged in while your therapist works through your entire body.",
      icon: <FaHotTub className="text-teal-600" />
    },
  ];

  const benefits = [
    { title: "Deep Stress Relief", description: "The combination of touch and calming scents like lavender helps lower stress and quiet a busy mind.", icon: "🌸" },
    { title: "Better Sleep Quality", description: "Calming oils such as lavender and chamomile are widely used to support more restful, relaxed sleep.", icon: "😴" },
    { title: "Mood Boost", description: "Certain essential oils are known to lift mood and create a genuine sense of well-being during and after your session.", icon: "🙂" },
    { title: "Muscle Relaxation", description: "Gentle massage strokes combined with warm oils help ease everyday tension in the neck, shoulders, and back.", icon: "💆" },
    { title: "Headache & Tension Relief", description: "Oils like peppermint and eucalyptus are often used to ease tension headaches and refresh a tired mind.", icon: "🌿" },
    { title: "Nourished, Glowing Skin", description: "Natural oils moisturise and nourish your skin, leaving it feeling soft and refreshed after your session.", icon: "✨" },
  ];

  const relatedServices = [
    {
      title: "Swedish Massage",
      description: "Long, gliding strokes designed purely for deep relaxation and full body stress relief.",
      icon: "🌊",
      url: "/swedish-massage-in-delhi",
      linkText: "Explore Swedish Massage in Delhi",
    },
    {
      title: "Deep Tissue Massage",
      description: "Firm, focused pressure that targets chronic muscle knots and long-standing pain.",
      icon: "🩹",
      url: "/deep-tissue-massage-in-delhi",
      linkText: "Explore Deep Tissue Massage in Delhi",
    },
    {
      title: "Full Body Massage",
      description: "A complete head-to-toe massage that eases stress, improves circulation, and uplifts your energy levels.",
      icon: "🪨",
      url: "/full-body-massage-in-delhi",
      linkText: "Book Full Body Massage in Delhi",
    },
    {
      title: "Couple Massage",
      description: "Enjoy a relaxing aromatherapy-style session together in a private, comfortable room.",
      icon: "👫",
      url: "/couple-massage",
      linkText: "Explore Couples Massage in Delhi",
    },
    {
      title: "Aromatherapy Massage in Noida",
      description: "Calming essential oil blends close to Sector 18 — built for Noida's IT and corporate crowd.",
      icon: "📍",
      url: "/aromatherapy-massage-in-noida",
      linkText: "Book Aromatherapy Massage in Noida",
    },
  ];

  const pricingPlans = [
    {
      title: "Aromatherapy Outlet",
      price: "₹1999/-",
      description: "Perfect for a first relaxing aromatherapy massage session",
      features: ["Essential Oil Blend", "Gentle Full Body Technique", "Warm Oil Massage", "60 min Session"],
      highlight: false,
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Home Aromatherapy Spa",
      price: "₹15000/-",
      description: "Premium aromatherapy massage at your own location",
      features: ["Custom Oil Selection", "Private Setting", "Full Body Technique", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "5 Star Hotel Aromatherapy Spa",
      price: "₹20000/-",
      description: "Luxury aromatherapy massage experience with added treatments",
      features: ["Foreigner Therapist", "5 Star Property", "Private Suite", "Facial Session", "120 min Session"],
      highlight: false,
      icon: <FaCrown className="text-amber-500" />
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Meeting',
      description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
      image: '/images/mmeeting.webp',
    },
    {
      number: '02',
      title: 'Treatment',
      description: 'Your aromatherapy massage begins with an oil consultation, followed by warm oil application and relaxing full body strokes.',
      image: '/images/spa-treatments.jpg',
    },
    {
      number: '03',
      title: 'Finalizing',
      description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
      image: '/images/finalizing.avif',
    },
  ];

  const SERVICES_LEFT = [
    {
      id: 'therapists',
      title: 'Skilled International Therapists',
      subtitle: 'Calming, scent-guided technique from trained therapists',
      desc:
        "Our therapists are trained in aromatherapy blending and gentle massage technique, using the right oils to help you relax fully.",
      chips: ['Russian Therapist', 'Thai Therapist', 'Uzbeki Therapist'],
      time: '60-90 min',
      price: 'From ₹2,800',
      image: '/images/spamodel.webp',
    },
    {
      id: 'oils',
      title: 'Premium Essential Oils & Hygiene Standards',
      subtitle: 'Mastery across specialised relaxation modalities',
      desc:
        "Pure lavender, eucalyptus, rosemary, and chamomile oils are used across sessions. Every guest is first welcomed with strict cleanliness and safety practices.",
      chips: [
        'Lavender Oil',
        'Eucalyptus Oil',
        'Chamomile Oil',
        'Peppermint Oil',
        'Hot Stone',
        'Swedish Technique',
      ],
      time: '75-90 min',
      price: 'From ₹3,200',
      image: '/images/services.webp',
    },
  ]

  const SERVICES_RIGHT = [
    {
      id: 'outlets',
      title: '24+ Outlets Across Delhi NCR',
      subtitle: 'An aromatherapy massage spa near you, wherever you are',
      desc:
        "From Karol Bagh to Aerocity and Connaught Place, find a Luxury Russian Spa outlet close to you for a calming aromatherapy massage session.",
      chips: ['Central Delhi', 'Easy Metro Access', 'Easy Parking'],
      time: '60-120 min',
      price: 'From ₹2,500',
      image: '/images/HelpstoDe-Stress.webp',
    },
    {
      id: 'packages',
      title: '24/7 Appointment Assistance',
      subtitle: 'Outlet, home & hotel aromatherapy journeys',
      desc:
        "Book anytime — our help desk answers and helps with bookings around the clock, whether at our outlet or your location.",
      chips: ['Same-Day Booking', 'Flexible Timing', 'WhatsApp Support'],
      time: '3-6 hours',
      price: 'From ₹8,500',
      image: '/images/SpecializedTreatments.jpg',
    },
  ]

  const topSteps = [
    {
      icon: <FaHotel className="text-amber-700 text-xl" />,
      title: 'Select Your Treatment',
      text: 'Choose an aromatherapy massage, a combo session, or a hotel/home spa visit.',
    },
    {
      icon: <FaClock className="text-amber-700 text-xl" />,
      title: 'Instant Reservation Confirmation',
      text: 'Once you make a booking, our support staff will confirm your slot immediately, with no delays or confusion.',
    },
    {
      icon: <FaPhoneAlt className="text-amber-700 text-xl" />,
      title: 'Call or Connect via Telegram',
      text: 'Call or send a message on Telegram to the Luxury Russian Spa team to have your time fixed.',
    },
  ]

  const bottomSteps = [
    {
      icon: <FaSpa className="text-amber-700 text-2xl" />,
      title: 'Visit & Unwind',
      text: 'Visit your nearest outlet, or have our therapist reach you, at any time of your choice.',
    },
    {
      icon: <FaCreditCard className="text-amber-700 text-2xl" />,
      title: 'Flexible Payments & Feedback System',
      text: 'Pay via UPI, cash, card or online. After your session, rate your therapist and share feedback — we value your experience.',
    },
  ]

  return (
    <main>
      <div className="bg-rose-50 text-gray-800">
        {/* Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50">
          <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-amber-600"></div>
                <span className="text-amber-600 font-light tracking-widest">ESSENTIAL OIL THERAPY</span>
                <div className="w-12 h-px bg-amber-600"></div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-gray-800">
                <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Aromatherapy Massage in Delhi</span>
                <span className="block mt-1 text-2xl md:text-3xl font-normal text-gray-600">Calming Essential Oils for Deep Stress Relief</span>
              </h1>
              <div className="inline-flex items-center gap-2 mt-5 bg-rose-50 border border-rose-200 rounded-full px-5 py-2">
                <span className="text-rose-600 font-bold text-lg md:text-xl">First Visit Offer ₹1999</span>
              </div>

              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Looking for a massage that soothes your senses as much as your muscles? At Luxury Russian Spa, our aromatherapy massage blends gentle Swedish-style strokes with pure essential oils like lavender, eucalyptus, and chamomile for a truly calming experience.
              </p>
              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Searching for an aromatherapy massage near me? With 24+ outlets across Delhi NCR, including a central outlet in Karol Bagh, Luxury Russian Spa makes it easy to book a relaxing session close to you. Your first visit starts at just ₹1999 — book on WhatsApp today.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href='/massage-service-in-delhi'>
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
                    <span>View All Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </a>
                <a href='https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.'>
                  <button className="px-6 py-3 bg-white text-amber-800 rounded-sm border border-amber-200 hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 0 0 -5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1 -6 0 3 3 0 016 0zm6 3a2 2 0 1 1 -4 0 2 2 0 014 0zM7 10a2 2 0 1 1 -4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Book Appointment</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="relative h-80 md:h-96 lg:h-[450px]">
              <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
                <img
                  src="/images/aromatherapy-featured-jpg.webp"
                  alt="Aromatherapy Massage Therapy in Delhi"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6">
                <svg className="w-24 h-24 text-amber-600/30" viewBox="0 0 100 100">
                  <path
                    fill="currentColor"
                    d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
                  />
                </svg>
              </div>

              <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
                <div className="text-center">
                  <div className="text-2xl font-serif text-amber-800">12+</div>
                  <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
              <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
            </svg>
          </div>
        </div>
        {/* End Banner */}

        {/* content */}
        <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="absolute top-10 left-10 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path d="M50,15 C65,15 80,25 85,40 C90,55 85,70 70,85 C55,90 40,85 25,70 C15,55 15,40 25,25 C30,20 40,15 50,15 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute bottom-20 right-10 opacity-10 rotate-45">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <path d="M40,10 C50,10 60,15 65,25 C70,35 65,45 55,55 C45,60 35,65 25,55 C15,45 15,35 25,25 C30,20 35,15 40,10 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
            </svg>
          </div>

          <div className="max-w-[95%] mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-amber-700 font-medium tracking-wider">SCENT-GUIDED RELAXATION</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-4xl font-bold text-amber-900 mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                A Trusted Aromatherapy Massage Spa in Delhi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">for Total Calm</span>
              </motion.h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl z-10">
                  <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-1 rounded-2xl">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                        <img
                          src="/images/fpkdl.com_750_1758979994_natural-elements-spa-with-candles_23-2148199479.jpg"
                          alt="Aromatherapy Massage Essential Oils in Delhi"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute top-4 right-4 bg-amber-700 text-white text-sm px-3 py-1 rounded-full">
                          Most Requested
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-serif font-bold text-stone-800">Full Body Aromatherapy</h3>
                          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                            <span className="font-bold">₹1999</span> First Visit
                          </div>
                        </div>

                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Essential Oil Blend</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Gentle Swedish Technique</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Warm Oil Massage</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Full Body Focus</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Calming Ambience</span>
                          </li>
                        </ul>

                        <a
                          href="https://t.me/+yulqEcJa2dxhM2I9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                        >
                          <FaTelegram className="text-xl mr-3" />
                          Meet Our Team
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-200 rounded-full z-0"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2"
              >
                <div className="max-w-lg">
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    Looking for the best aromatherapy massage in Delhi? Welcome to Luxury Russian Spa, where our therapists pair gentle, flowing massage strokes with pure essential oils to create a genuinely calming, sensory experience — not just a standard rubdown.
                  </p>

                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Our aromatherapy massage spa in Delhi is available at outlets across the city, including a centrally located spa in Karol Bagh, along with home spa and hotel spa options. Whether you want lavender for deep relaxation or peppermint for a refreshing lift, our trained therapists help you choose the right blend.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">🌸</div>
                      <h4 className="font-medium text-stone-800">Pure Essential Oils</h4>
                      <p className="text-sm text-stone-600 mt-1">Lavender, eucalyptus & more</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">♨</div>
                      <h4 className="font-medium text-stone-800">Thermal Suite</h4>
                      <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">🧑‍⚕️</div>
                      <h4 className="font-medium text-stone-800">Trained Therapists</h4>
                      <p className="text-sm text-stone-600 mt-1">Skilled in oil blending</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">🌿</div>
                      <h4 className="font-medium text-stone-800">Organic Products</h4>
                      <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href='/spa-price-in-delhi'>
                      <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        View Packages
                      </button>
                    </a>
                    <a href='https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.'>
                      <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Book Appointment
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* end content */}

        {/* About Section */}
        <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="mr-2">✦</span> About Our Aromatherapy Massage Therapists
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Aromatherapy Massage in Delhi with <span className="relative">
                  <span className="text-amber-600 z-10 relative">Pure Essential Oils</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                </span>
              </motion.h2>
              <p className="text-gray-700 text-lg">
                Sometimes relaxation needs more than touch alone — it needs scent, too. Our aromatherapy massage combines gentle, flowing strokes with carefully chosen essential oils, engaging both your body and your senses for a deeper sense of calm.
              </p>
              <p className="text-gray-700 text-lg">
                At our aromatherapy massage spa in Delhi, you can also pair your session with related treatments like{" "}
                <Link href="/swedish-massage-in-delhi" className="text-amber-700 underline hover:text-amber-800">Swedish massage</Link>,{" "}
                <Link href="/deep-tissue-massage-in-delhi" className="text-amber-700 underline hover:text-amber-800">deep tissue massage</Link>, and{" "}
                <Link href="/full-body-massage-in-delhi" className="text-amber-700 underline hover:text-amber-800">full body massage</Link>. Whether your goal is stress relief, better sleep, or simply a moment of calm, our therapists tailor the oil blend and technique to your body.
              </p>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/fpkdl.com_960_1758980177_natural-elements-spa-with-candles_23-2148199485.jpg" alt="Aromatherapy Massage Oils in Delhi" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/spaExper2.webp" alt="Aromatherapy Massage Room in Delhi" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Long-form SEO content — scannable card layout */}
        <section className="bg-[#fff3e8] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Complete Guide</p>
              <h2 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">Aromatherapy Massage in Delhi — Oils, Benefits & How to Choose It</h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Everything you'd ask before booking an aromatherapy massage near me in Delhi, in four quick sections.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaLeaf /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Real Essential Oils, Chosen With Intent</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Not every spa uses genuine oils. We blend pure lavender, eucalyptus, rosemary, chamomile, and peppermint — each picked for a specific effect — so your therapist can tailor the blend to how you want to feel afterward.
                </p>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">How It Differs From a Regular Massage</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  The technique is close to a Swedish massage — long, gliding strokes to relax the muscles and calm the nervous system. What's different is the therapeutic-grade oils, absorbed through the skin and inhaled throughout the session.
                </p>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Who It's Really For</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  A popular pick for everyday anxiety, sleep trouble, and mental fatigue from work or travel. Lavender and chamomile support sleep; peppermint and eucalyptus help with tension headaches and a refreshing lift.
                </p>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#1f1a17]">Hygiene & Safety First</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  We always check for allergies or skin sensitivities before your session, so your therapist can pick oils that are genuinely safe — or adjust the treatment entirely if needed.
                </p>
              </motion.div>
            </div>

            <p className="mt-8 text-center text-gray-600">
              Looking for the <span className="font-semibold text-amber-700">best aromatherapy spa in Delhi</span>? First visit from ₹1999 —{" "}
              <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10 md:mb-12"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-amber-700 font-medium tracking-wider">WHY AROMATHERAPY</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-amber-900 mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Aromatherapy Massage</span>
              </motion.h2>

              <motion.p
                className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                An aromatherapy massage in Delhi does more than relax you — here's what essential oils and gentle touch can do together.
              </motion.p>

              <motion.div
                className="flex justify-center mt-10"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-50"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3 font-serif">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* End Benefits */}

        {/* Related Services Section */}
        <section id="services" className="py-10 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <motion.p
                className="text-amber-500 uppercase font-semibold tracking-wider mb-4"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Explore More Services
              </motion.p>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Other Massage <span className="text-amber-500">Services in Delhi</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-50 relative overflow-hidden group"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15 }}
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-5xl mb-6 text-amber-500">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a
                    href={service.url}
                    className="text-amber-600 font-medium flex items-center gap-2 group-hover:underline"
                  >
                    {service.linkText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1 -1.414-1.414L12.586 11H5a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* End Related Services */}

        {/* content section */}
        <section className="bg-gradient-to-b from-[#fffaf5] to-[#f8f0eb] py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-amber-700 tracking-widest">OUR SIGNATURE OFFERINGS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1f1a17] mt-4 mb-4 font-serif">Best Aromatherapy Massage in Delhi for Deep Relaxation</h2>
              <div className="mx-auto w-28 h-1 bg-amber-600 rounded-full" />
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                From trained therapists to hygienic outlets and 24/7 booking support, Luxury Russian Spa blends soothing essential oils with genuine care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {SERVICES_LEFT.map((s, idx) => (
                  <motion.div
                    key={s.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#f0dccb] overflow-hidden"
                    initial={false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  >
                    <div className="md:flex gap-6">
                      <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={s.image} alt={s.title} fill className="object-cover" />
                      </div>

                      <div className="mt-4 md:mt-0 flex-1">
                        <h3 className="text-2xl font-semibold text-amber-800">{s.title}</h3>
                        <p className="text-sm text-amber-700 mt-1 font-medium">{s.subtitle}</p>
                        <p className="text-gray-600 mt-3 leading-relaxed">{s.desc}</p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          {s.chips.slice(0, 6).map((c, i) => (
                            <span
                              key={i}
                              className="bg-[#fff6ee] text-amber-800 px-3 py-1 rounded-full text-sm"
                            >
                              {c}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="inline-block bg-amber-100 text-amber-800 py-1 px-3 rounded-full text-sm font-medium">
                            {s.time} • {s.price}
                          </span>
                          <a
                            href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-amber-200"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                {SERVICES_RIGHT.map((s, idx) => (
                  <motion.div
                    key={s.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#f0dccb] overflow-hidden"
                    initial={false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  >
                    <div className="md:flex gap-6">
                      <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={s.image} alt={s.title} fill className="object-cover" />
                      </div>

                      <div className="mt-4 md:mt-0 flex-1">
                        <h3 className="text-2xl font-semibold text-amber-800">{s.title}</h3>
                        <p className="text-sm text-amber-700 mt-1 font-medium">{s.subtitle}</p>
                        <p className="text-gray-600 mt-3 leading-relaxed">{s.desc}</p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          {s.chips.slice(0, 6).map((c, i) => (
                            <span
                              key={i}
                              className="bg-[#fff6ee] text-amber-800 px-3 py-1 rounded-full text-sm"
                            >
                              {c}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="inline-block bg-amber-100 text-amber-800 py-1 px-3 rounded-full text-sm font-medium">
                            {s.time} • {s.price}
                          </span>
                          <a
                            href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-amber-200"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-6 text-white shadow-xl"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold">Book Your Aromatherapy Massage Today!</h4>
                      <p className="mt-2 opacity-95">
                        Whether at our outlet, your hotel, or your home, Luxury Russian Spa's therapists bring calming, scent-guided relaxation to you. For anyone tired of everyday stress, just call and let our team guide you toward complete calm.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://t.me/+yulqEcJa2dxhM2I9"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-medium shadow-sm transition"
                      >
                        <FaTelegram className="text-white" /> Join Telegram
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <a
                href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                Book a Personalized Journey
              </a>
            </motion.div>
          </div>
        </section>
        {/* end */}

        {/* how to book */}
        <section className="w-full py-16 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <header className="text-center mb-14">
              <motion.h2
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900"
              >
                <span className="block font-[Great_Vibes] text-4xl md:text-5xl text-amber-800">
                  How to Book an Aromatherapy Massage in Delhi
                </span>
                <span className="block font-[Great_Vibes] text-3xl md:text-4xl bg-gradient-to-r from-amber-600 to-amber-400 text-transparent bg-clip-text">
                  It's Simple
                </span>
              </motion.h2>

              <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
                The process of beginning to relax with Luxury Russian Spa is easy. <span className="font-semibold text-amber-700">Here is how you can do it:</span>
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {topSteps.map((s, idx) => (
                <motion.article
                  key={idx}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100 text-center hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-100 mb-4">
                    {s.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-amber-800 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                </motion.article>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bottomSteps.map((s, idx) => (
                <motion.article
                  key={idx}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100 flex items-start gap-4 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-100">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-1">{s.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                Book Now on WhatsApp
              </a>
            </div>
          </div>
        </section>
        {/* end how to book */}

        {/* Pricing Section */}
        <section id="Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
          <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-15 blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10 md:mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaStar className="text-amber-500" />
                Affordable Relaxation
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Aromatherapy <span className="text-amber-600">Pricing Packages</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Calming, scent-guided sessions starting from just ₹1999. Choose the option that fits your schedule and setting.
              </motion.p>
              <motion.div
                className="flex justify-center mt-10"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "transform lg:-translate-y-4" : ""}`}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.highlight && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                      MOST POPULAR
                    </div>
                  )}

                  <div className={`h-full flex flex-col border ${plan.highlight ? "border-amber-500 shadow-xl" : "border-amber-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                    <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-amber-600 to-amber-700" : "bg-amber-800"}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">
                          {plan.icon}
                        </div>
                        <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-amber-100"}`}>
                          {plan.title}
                        </h3>
                      </div>
                      <p className={`text-lg ${plan.highlight ? "text-amber-100" : "text-amber-200"}`}>
                        {plan.description}
                      </p>
                    </div>

                    <div className="p-8 pt-12 pb-10 -mt-6 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">
                          {plan.price}
                        </span>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                            <span className="text-amber-800">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://t.me/+yulqEcJa2dxhM2I9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Meet Our Team
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* End Pricing Section */}

        {/* Our Process */}
        <section className="w-full py-10 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10 md:mb-12"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-amber-700 font-medium tracking-wider">Process</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Process</span>
              </motion.h2>

              <motion.div
                className="flex justify-center mt-10"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white shadow-lg rounded-2xl px-6 pt-24 pb-10 text-center hover:shadow-xl transition-shadow duration-300"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute top-4 left-4 text-3xl font-bold text-amber-300 opacity-30 z-0">
                    {step.number}
                  </div>

                  <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-rose-200 via-amber-100 to-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <h4 className="text-2xl font-semibold text-amber-800 mb-4 font-serif">
                    {step.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* End Our Process */}

        {/* FAQ Section */}
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
                Questions? We're here to help
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
                Frequently Asked <span className="text-amber-600">Questions</span>
              </h2>
              <p className="text-amber-800 max-w-2xl mx-auto text-lg">
                Everything you need to know about aromatherapy massage in Delhi and how to book it.
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </div>
            </motion.div>

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
          </div>
        </section>
      </div>
    </main>
  );
}
