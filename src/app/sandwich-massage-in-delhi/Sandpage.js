'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Check } from "lucide-react";
// import WhatsappFloat from '../components/WhatsappFloat';
import WhatsappFloat from '../components/WhatsappFloat';
import { Spa, SpaOutlined, SelfImprovement, HealthAndSafety, Air } from '@mui/icons-material';
import { ArrowRight } from 'lucide-react';
import { FaCrown } from 'react-icons/fa';
import { FaSpa, FaHotel, FaStar, FaCheckCircle } from "react-icons/fa";
import luxuryhotelpartners from '../components/LuxuryHotelPartners';
import LuxuryHotelShowcase from '../components/LuxuryHotelShowcase';
import { FaTelegram } from 'react-icons/fa';
import { FaLeaf, FaHotTub, FaHandSparkles } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';




const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat'
});
const services = [
  {
    title: "Regulation of the Warm Oil",
    image: "/images/Sandwich Massage.webp",
    description: "These warmed oils are used by our therapists to nourish the skin and relax the muscles and stimulate an increased circulation that can improve the massage effects.",
    // duration: "60 min"
  },
  {
    title: "Consecutive Relaxation Pressure",
    image: "/images/Couple Massage.webp",
    description: "Both massaging with gentle strokes and applying force can make particular muscles to be massaged in a way they deserve to be massaged.",
    // duration: "90 min"
  },

  {
    title: "Custom Aromatherapy Infusion",
    image: "/images/thaimassage.jpg",
    description: "A natural essential oil is added to every massage, taking you to a new level of relaxation and refreshment.",
    // duration: "60 min"
  },
  {
    title: "Smooth Full Body Coverage",
    image: "/images/potliMassage.jpg",
    description: "Our method will not leave any area untouched, giving you a chance to relax in full.",
    // duration: "60 min"
  }
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};


{/* End Our Process */ }

export default function Sandpage() {
  <Head>
    <title>Visit Our Best Sandwich Massage Spa in Delhi </title>
    <meta
      name="description"
      content="Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi."
    />
  </Head>
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
      question: "What is Sandwich Massage, and how is it helpful?",
      answer: "Sandwich Massage is an exclusive body treatment that uses a combination of layers of massage strokes which relieves the body, enhances circulation and invigorates energies. It is perfect to relieve stress and achieve deep relaxation in the best spas of Delhi.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What is the usual duration of a Sandwich Massage?",
      answer: "A Sandwich Massage will typically take between 60-90 minutes since therapists will have enough time to massage the entire body and get the full relaxation effects.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Sandwich Massage suitable for all people?",
      answer: "Yes, Sandwich Massage is safe for all adults generally. It is recommended, however, that persons with medical conditions seek medical advice before booking.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "What makes Aerocity popular for Sandwich Massage in Delhi?",
      answer: "Aerocity has been renowned for offering excellent hotels and luxurious spas, and as such, it is the best place to get Sandwich Massage experiences.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Do you give a Sandwich Massage in the luxury hotels?",
      answer: "We have special Sandwich Massage services in Andaz, The Park, Surya,and  ITC Welcomhotel luxury hotels in Delhi.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Can I reserve a Sandwich Massage in Delhi?",
      answer: "It is easy to book it. Get in touch with our spa directly or book through our hotel partners a Sandwich Massage in a luxurious way in Delhi.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
  ];

  const [activeHotel, setActiveHotel] = useState(1);
  const highlights = [
    {
      icon: <Spa className="text-amber-600" />,
      title: "Luxury Spa Rooms Designed for Comfort",
      description:
        "Enter into separate spa rooms with serene lighting, comfy decor and fragrant environment to promise a five-star experience.",
      points: [
        "State of the art relaxation lounges",
        "Custom-inexperienced massage tables",
        "Relaxing aroma diffusion",

      ],
    },
    {
      icon: <SelfImprovement className="text-amber-600" />,
      title: "Professional Therapists with Global Expertise",
      description:
        "Our professional therapists are well cultured in order to offer full rejuvenation with international massage styles.",
      points: [
        "Knowledge in multi-layer massage methods",
        "Well-informed and personal service",
        "Years of professional experience",

      ],
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    {
      title: "Soothing Oil Therapy in Delhi",
      description1:
        "At our spa we make your Sandwich Massage in Delhi more relaxing with oil treatment. Specially selected essential oils add another dimension to your massage, moisturising your skin, and increasing circulation. All oil blends are created to help you relax and unwind, de-stress and re-energize. Do you need the most relaxing garden scent of lavender, the feel-good muscle relief of eucalyptus, or the calming grounding scenery of sandalwood? Our professionals have developed the best oil-based therapy according to your needs. The luxury of lavish oils, combined with the sophisticated Sandwich Massage moves will guarantee that your spa experience is comfy and transformative.",
      image: "/images/137.jpg",
    },
    // {
    //   title: "Ayurvedic Massage",
    //   description1:
    //     "Ayurvedic oil massage, also known as Abhyanga, uses herbal oils that balance the body's doshas—Vata, Pitta, and Kapha. The warm oil is massaged into the skin to energize vital points, improve blood circulation, and promote internal healing. This therapy not only revitalizes the skin but also clears toxins stored in deeper tissues.",
    //   description2:
    //     "Perfect for individuals suffering from stress, muscle pain, or hormonal imbalance, this massage harmonizes body rhythms and enhances immunity. The continuous motion and warm oil offer a meditative experience, calming the nervous system and stimulating marma points for rejuvenation and internal balance.",
    //   image: "/images/SpecializedTreatments.jpg",
    // },
    // {
    //   title: "Full Body Relief",
    //   description1:
    //     "Our full body oil massage is a holistic experience combining techniques like kneading, long strokes, and pressure point activation. It aims to release deep-seated tension, ease joint stiffness, and soothe sore muscles. This deeply immersive treatment melts away physical stress while reviving your body's natural healing process.",
    //   description2:
    //     "Whether you’ve had a long week or simply need a reset, this therapy will leave you feeling light, centered, and refreshed. Regular sessions can improve flexibility, deepen sleep, and support emotional stability. It's the ultimate way to recharge your energy and reconnect with inner peace.",
    //   image: "/images/2147816920.jpg",
    // },
  ];
  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Consultation", "shower"],
      highlight: false,
      ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      icon: <FaCrown className="text-amber-500" />
    }
  ];


  return (
    <main>

      <div className="font-sans overflow-hidden">
        {/* Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50">
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>

          {/* Main content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Text content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-amber-600"></div>
                <span className="text-amber-600 font-light tracking-widest">SIGNATURE TREATMENT</span>
                <div className="w-12 h-px bg-amber-600"></div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-gray-800">
                <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Sandwich Massage</span>
                in Delhi –
                <span className="block mt-2 font-medium">Discover the <span className="text-rose-600">Ultimate Relaxation</span></span>
              </h1>

              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Sandwich Massage in Delhi is a blend of rejuvenation, luxury and comfort. The relaxation methods given at our Spa will ensure complete relaxation.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                    {/* Hotel Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V3h18v18M9 21v-6h6v6" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Luxury Hotel Spa</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                    {/* Oil / Spa Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.8954 2 10 2.89543 10 4V6H8C6.89543 6 6 6.89543 6 8V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V8C18 6.89543 17.1046 6 16 6H14V4C14 2.89543 13.1046 2 12 2ZM12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9Z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Warm Herbal Oils</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                    {/* Muscle Relief / Healing Hand Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16c0-1.1.9-2 2-2h2v-5a2 2 0 1 1 4 0v5h2a2 2 0 1 1 0 4h-1l-1 3-1-3H6a2 2 0 0 1 -2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Deep Muscle Relief</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0 -6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0 -6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Romantic Spa Ambience</span>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href='/massage-service-in-delhi'>
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
                    <span>Explore Our Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </a>
                <button className=" text-blue-500 rounded-sm  hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 0 0 -5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1 -6 0 3 3 0 016 0zm6 3a2 2 0 1 1 -4 0 2 2 0 014 0zM7 10a2 2 0 1 1 -4 0 2 2 0 014 0z" />
                  </svg>
                  <a
                    href="https://t.me/+a5Bu6FBPN9FlOWM9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <FaTelegram className="text-xl mr-3" />
                    Meet Our Team
                  </a>
                </button>
              </div>
            </div>

            {/* Image section */}
            <div className="relative h-80 md:h-96 lg:h-[450px]">
              <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
                <img
                  src="/images/Sandwich Massage.webp"
                  alt="Sandwich Massage Spa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating leaf decoration */}
              <div className="absolute -bottom-6 -right-6">
                <svg className="w-24 h-24 text-amber-600/30" viewBox="0 0 100 100">
                  <path
                    fill="currentColor"
                    d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
                  />
                </svg>
              </div>

              {/* Minimalist stats */}
              <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
                <div className="text-center">
                  <div className="text-2xl font-serif text-amber-800">12+</div>
                  <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
              <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
            </svg>
          </div>
        </div>
        {/* End Banner */}
        {/* highlights */}
        <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Our Sandwich Massage <span className="text-amber-600">Spa New Delhi</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Luxury Russian Spa is known as the best place to avail Sandwich Massage in Delhi with the ultimate luxury and wellness.
              </motion.p>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-amber-100"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-5 text-amber-800 text-2xl">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <a
                href="https://t.me/+a5Bu6FBPN9FlOWM9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-10 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <FaTelegram className="text-xl" />
                  Book Your Session
                </button>
              </a>
            </div>

          </div>
        </section>
        {/* end highlights */}
        <luxuryhotelpartners />

        {/* Benefits Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Transformative Benefits of <span className="text-amber-600">Sandwich Massage in Delhi</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Discover the healing powers of Sandwich Massage in Delhi and how it can elevate relaxation and stress-freedom to a whole new level. Book your relaxing massage <strong className="text-amber-600 font-medium"><a href='/'>spa in delhi</a></strong> today!
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Muscle Relief",
                  description: "Restore your body to all its vibrancy with a Sandwich Massage that returns health and harmony to the heart of Delhi.",
                  icon: "💆‍♀️"
                },
                {
                  title: "Stress Reduction",
                  description: "Relax uncomfortable muscles and stress and ease them by undergoing our professional Sandwich Massage services in a state of complete relief.",
                  icon: "🧘‍♂️"
                },
                {
                  title: "Improved Circulation",
                  description: "Enhance blood flow and elasticity of the body by getting a Sandwich Massage enrolment in the best spa centres in Delhi.",
                  icon: "❤️"
                },
                {
                  title: "Skin Rejuvenation",
                  description: "Enhance sleep and mental concentration and feel the relaxing Sandwich Massage in the safest spas in Delhi.",
                  icon: "✨"
                },
                {
                  title: "Detoxification",
                  description: "Rejuvenate, feel free, and remove fatigue through the healing hands of our Sandwich Massage therapists in Delhi.",
                  icon: "🌿"
                },
                {
                  title: "Better Sleep",
                  description: "Obtain total recovery and relaxation by using the skilled Sandwich Massage therapy in Delhi.",
                  icon: "😴"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Section */}
        {/* content */}
        <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          {/* Decorative elements */}
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
            {/* Section Header */}
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
                <span className="text-amber-700 font-medium tracking-wider">PREMIUM EXPERIENCE</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Most Demanding Sandwich <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Massage in Aerocity, Delhi</span>
              </motion.h2>

              <motion.p
                className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Book <a href='/massage-service-in-delhi'><strong className="text-amber-600 font-medium">Massage Services in Delhi</strong></a> by professional therapists Our spa therapists apply unique techniques that are a mixture of ancient discipline and modern treatments to bring unparalleled relaxation and rejuvenation.
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


            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Image & Content */}

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
                          src="/images/hb3.webp" // Change path accordingly
                          alt="Premium Body Spa"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                        <div className="absolute top-4 right-4 bg-amber-700 text-white text-sm px-3 py-1 rounded-full">
                          Most Popular
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-serif font-bold text-stone-800">Premium Body Spa</h3>
                          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                            <span className="font-bold">₹1999</span> First Visit
                          </div>
                        </div>

                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Dual therapist session</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Full-body relaxation</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Relieves muscle tension</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Improves circulation</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Aromatic oil therapy</span>
                          </li>
                        </ul>

                        {/* <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                             Book Now
                           </button> */}
                        <a
                          href="https://t.me/+a5Bu6FBPN9FlOWM9"
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

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-200 rounded-full z-0"></div>
              </motion.div>

              {/* Right Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2"
              >
                <div className="max-w-lg">
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    Aerocity, one of the most renowned wellness hubs in Delhi, is home to some of the best sandwich massage sessions in the city. Our packages combine skilled therapy, well-trained therapists, and a relaxing ambience so you can unwind completely. Every session is designed to relieve stress, restore balance, and leave you feeling energized — a favourite among both regular travelers and Delhi locals alike.
                    {/* <span className="font-medium text-stone-800"> </span> */}
                  </p>



                  {/* <p className="text-stone-600 mb-6 leading-relaxed">
                       We specialize in world-class therapies including <span className="font-medium text-stone-800">hot stone massage</span>, 
                       <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                       and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                       designed private sanctuaries.Escape the city's hustle and indulge in a tranquil haven where serenity meets sophistication. 
                       Our premium spa is nestled within Aerocity's most luxurious 5-star hotels, offering an oasis 
                       of calm in the heart of Delhi.
                     </p> */}

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">🌹</div>
                      <h4 className="font-medium text-stone-800">Couple Suite</h4>
                      <p className="text-sm text-stone-600 mt-1">5-star rated luxury spa</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">🕯 </div>
                      <h4 className="font-medium text-stone-800">Candlelight Ambience</h4>
                      <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">💆‍♀️ </div>
                      <h4 className="font-medium text-stone-800">Customized Massage Choice</h4>
                      <p className="text-sm text-stone-600 mt-1">Private couple suites</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                      <div className="text-amber-600 text-2xl mb-2">☕ </div>
                      <h4 className="font-medium text-stone-800">Complimentary Refreshments</h4>
                      <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href='/spa-price-in-delhi'>
                      <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        View packages
                      </button>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=9310xxxxxx'>
                      <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Book Appointment
                      </button>
                    </a>
                  </div>

                  <p className="text-sm text-stone-600 mt-4">
                    Working near Cyber Hub? <a href="/sandwich-massage-in-gurgaon" className="text-amber-700 font-semibold underline">Book Sandwich Massage in Gurgaon</a>.
                  </p>

                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* end content */}
        {/* Our Signature Treatments */}
        <section className="w-full my-5 py-5 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-70 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-50 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
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
                <span className="text-amber-700 font-medium tracking-wider">Relax & Rejuvenate</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our Sandwich <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Massage Techniques</span>
              </motion.h2>

              <motion.p
                className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Our Sandwich Massage therapists apply unique techniques that are a mixture of ancient discipline and modern treatments to bring unparalleled relaxation and rejuvenation.
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

            {/* Services grid */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
              variants={container}
              initial={false}
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`flex flex-col md:flex-row h-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="relative h-64 md:h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                        <Image
                          src={service.image}
                          alt={service.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-0.5 bg-amber-600"></div>
                          <span className="text-amber-600 font-medium">Treatment</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-amber-800 mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        {/* <div className="inline-flex items-center bg-gradient-to-r text-white rounded-full font-medium transition-all duration-300 hover:gap-3 hover:shadow-lg">
                                     <a 
                                                     href="https://t.me/+a5Bu6FBPN9FlOWM9" 
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                                   >
                                                     <FaTelegram className="text-xl mr-3" />
                                                     Meet Our Team
                                                   </a>
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1 -1.414-1.414L12.586 11H5a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                                     </svg>
                                   </div> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>
        {/* End Our Signature Treatments */}
        {/* Why Choose Us Section */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-amber-200 opacity-20 blur-3xl -z-0"></div>
          <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-amber-300 opacity-15 blur-3xl -z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-5xl mx-auto mb-10 md:mb-12">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Premium Wellness Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-6">
                  Why Choose <span className="text-amber-600"> Spa in Delhi for Sandwich Massage Services Delhi?</span>
                </h2>
                <p className="text-amber-800 text-lg md:text-xl leading-relaxed">
                  Luxury Russian Spa is a place that offers luxurious Sandwich Massage sessions with reasonable <strong className="text-amber-600 font-medium"><a href='/spa-price-in-delhi'>spa price in delhi</a></strong> to give unwinding, refreshing, and an incomparable sensation of relaxation.
                </p>
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Expert Therapists */}
              <motion.div
                className="flex flex-col"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 1 0 0-6 3 3 0 000 6zm-7 9a7 7 0 1 1 14 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-800 font-serif mb-2">High-end luxury experience</h3>
                        <p className="text-amber-700">
                          We are experts in offering international standards facilities,  contemporary spa rooms, and skilled therapists to make your Sandwich Massage an unparalleled experience in our <strong className="text-amber-600 font-medium"><a href='/outlets'>hotel spa in Delhi</a></strong>.
                        </p>
                      </div>
                    </div>


                    <div className="flex flex-wrap gap-3 mb-8">
                      {['10+ Years Experience', 'Personalized Techniques', 'Deep Tissue Mastery'].map((item, index) => (
                        <div key={index} className="bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-96">
                    <Image
                      src="/images/446979.jpg"
                      alt="Expert therapist performing massage"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Premium Oils */}
              <motion.div
                className="flex flex-col"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
                  <div className="relative h-96">
                    <Image
                      src="/images/447701.jpg"
                      alt="Premium spa oils"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 1 1 -16 0 8 8 0 0116 0zm-7-4a1 1 0 1 1 -2 0 1 1 0 012 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0 -1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-800 font-serif mb-2">Reputed Health Resort</h3>
                        <p className="text-amber-700">
                          Our spa is the preferred destination of customers in Delhi who want quality, luxury, and professional relaxation therapies.
                        </p>
                      </div>
                    </div>

                    {/* <p className="text-gray-700 mb-6">
                                                     The calming aroma of essential oils adds a therapeutic layer, relieving stress and enhancing your overall sense of well-being. 
                                                     Regular sessions can improve flexibility, deepen sleep, and support emotional stability.
                                                   </p> */}

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-amber-700 mb-3">Our Services</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Foreign Therapist', 'Indian Therapist', 'B2B Massage', 'Sandwich Massage'].map((oil, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                            <span className="text-amber-800">{oil}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial Section */}
            {/* <motion.div 
                                             className="mt-20 bg-gradient-to-r from-amber-700 to-amber-800 rounded-3xl overflow-hidden shadow-2xl"
                                             initial={false}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ duration: 0.7 }}
                                           >
                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                               <div className="p-10 flex flex-col justify-center">
                                                 <div className="mb-6">
                                                   <div className="flex mb-4">
                                                     {[...Array(5)].map((_, i) => (
                                                       <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
                                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0 -.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0 -1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0 -.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                                                       </svg>
                                                     ))}
                                                   </div>
                                                   <blockquote className="text-2xl italic text-white leading-relaxed">
                                                     "The oil therapy treatment was transformative. I've never felt so deeply relaxed and rejuvenated. The therapist's expertise was evident in every movement."
                                                   </blockquote>
                                                 </div>
                                                 
                                                 <div className="flex items-center">
                                                   <div className="mr-4">
                                                     <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-300">
                                                       <Image 
                                                         src="/images/couple-bathrobes-posing-embraced.jpg"
                                                         alt="Client testimonial"
                                                         width={64}
                                                         height={64}
                                                         className="object-cover w-full h-full"
                                                       />
                                                     </div>
                                                   </div>
                                                   <div>
                                                     <h4 className="text-xl font-bold text-amber-50">Priya Sharma</h4>
                                                     <p className="text-amber-200">Regular Client since 2020</p>
                                                   </div>
                                                 </div>
                                               </div>
                                               
                                               <div className="relative h-full min-h-[400px]">
                                                 <Image 
                                                   src="/images/137.jpg"
                                                   alt="Spa treatment"
                                                   layout="fill"
                                                   objectFit="cover"
                                                   className="transition-transform duration-700 hover:scale-105"
                                                 />
                                                 <div className="absolute -top-6 -right-6 bg-amber-100 p-6 rounded-full shadow-lg">
                                                   <span className="text-amber-800 text-4xl font-serif">"</span>
                                                 </div>
                                               </div>
                                             </div>
                                           </motion.div> */}

            {/* Benefits Section */}
            <motion.div
              className="mt-20"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-amber-900 font-serif text-center mb-12">
                Our Approach to Sandwich Massage
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Mindful Relaxation",
                    description: "Individual massage services, which are customized to the needs of your body to get fully cured and relaxed.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  },
                  {
                    title: "Body Rejuvenation",
                    description: "First-class spa environment with an atmosphere designed to achieve the utmost comfort and serenity.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0 -6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0 -6.364 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Spiritual Balance",
                    description: "Professional therapists so each of the sessions is indugled, therapeutic and life-giving.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 0 1 -5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1 -18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 text-center"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-amber-800 mb-3">{benefit.title}</h4>
                    <p className="text-amber-700">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-20"
              initial={false}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href='https://api.whatsapp.com/send?phone=9310xxxxxx'>
                <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                  Book Your Appointment Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1 -1.414-1.414L12.586 11H5a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </a>
              <p className="text-amber-700 mt-4">
                Limited slots available. Reserve your session today.
              </p>
            </motion.div>
          </div>
        </section>
        {/* content section */}

        {/* About Oil Therapy Section */}
        {sections.map((section, index) => (
          <section
            key={index}
            className="relative py-16 bg-gradient-to-br from-amber-50/70 to-white overflow-hidden"
          >

            <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-28 left-1/4 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">


                <div className={`relative h-96 md:h-[500px] group ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-300/10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-500"></div>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover rounded-3xl shadow-xl relative transform transition-all duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute -inset-4 rounded-3xl border-2 border-amber-200/40 transform rotate-1 scale-[0.98] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                </div>


                <div className={`relative ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                  <div className="inline-block mb-6">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-800 mb-3 relative inline-block">
                      {section.title}
                      <div className="absolute bottom-2 left-0 w-full h-2 bg-amber-300/40 -z-10"></div>
                    </h2>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed font-light">{section.description1}</p>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">{section.description2}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href='https://api.whatsapp.com/send?phone=9310xxxxxx'>
                      <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] transform">
                        Book Now
                      </button>
                    </a>
                    <a href='/outlets'>
                      <button className="px-6 py-3 bg-white text-amber-700 border border-amber-300 font-medium rounded-full shadow-sm hover:shadow transition-all duration-300">
                        View Outlets
                      </button>
                    </a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-3">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-white shadow-sm animate-[float_4s_ease-in-out_infinite]"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      Trusted by over{" "}
                      <span className="font-bold text-amber-700 relative">
                        5,000 clients in Delhi
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400/50"></span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}



        {/* Why Choose Us Section */}
        {/* <section className="py-16 relative">
                  <div className="absolute inset-0 bg-amber-800 opacity-5"></div>
                  <div className="container mx-auto px-4 relative">
                    
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
                    <span className="text-amber-700 font-medium tracking-wider">Specialty</span>
                  </motion.div>
                  
                  <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Our Specialty <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Services at Delhi Spa</span>
                  </motion.h2>
                  
                  <motion.p
                    className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Erotic and Nuru Massage, Thai Massage, Sandwich Massage, Full Body Massage by Expert Therapists
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
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-semibold text-amber-800 mb-4">Expert Therapists</h3>
                            <p className="text-gray-700 mb-6">
                              When it comes to indulgent relaxation and rejuvenation, Delhi spa centers stand out for their exceptional massage therapies. Among the most popular and sought-after treatments are erotic massage, nuru massage, thai massage, sandwich massage, and full body massage. Whether you seek pure relaxation, therapeutic relief, or something more sensual, Delhi's best spas offer a range of services tailored to suit every need. With both Indian and foreign therapists, these therapies are designed to promote deep relaxation, reduce stress, and rejuvenate the body.
        
                            </p>
                          
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Highly trained and certified therapists</li>
                            <li>Wide range of massage techniques</li>
                            <li>Focus on relaxation & stress relief</li>
                            <li>Customized treatments for every client</li>
                            <li>Professional and hygienic environment</li>
                          </ul>
                          
                          <p className="text-gray-700 mb-6">
                              When it comes to indulgent relaxation and rejuvenation, Delhi spa centers stand out for their exceptional massage therapies. Among the most popular and sought-after treatments are erotic massage, nuru massage, thai massage, sandwich massage, and full body massage. Whether you seek pure relaxation, therapeutic relief, or something more sensual, Delhi's best spas offer a range of services tailored to suit every need.
        
                            </p>
                      </div>
                      
                      <div className="relative">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
                          <img
                            src="/images/staff2.jpg"
                            alt="Client Testimonial"
                            className="object-cover w-full h-full rounded-xl"
                          />
                        </div>
                        <div className="absolute -top-6 -right-6 bg-amber-100 p-6 rounded-full">
                          <span className="text-amber-800 text-xl font-serif">"</span>
                        </div>
                      </div>
        
                      
                      <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <span className="font-semibold text-amber-800 mb-4">Erotic Massage in Delhi: An Intimate Experience</span>
                        <p className="text-gray-700 mb-6">
                          The erotic massage in Delhi is a highly specialized and intimate therapy that offers a combination of relaxation and sensuality. Ideal for those who wish to experience heightened pleasure while relieving stress, this service is carried out by expert therapists who understand how to deliver a soothing, yet deeply stimulating experience. If you're looking for something beyond the usual therapeutic massage, the erotic massage is a great choice, enhancing both emotional and physical well-being. This service is performed with care and professionalism, ensuring you receive the highest quality relaxation.                  
                        </p>
                        <span className="font-semibold text-amber-800 mb-4">Nuru Massage in Delhi: A Luxurious Sensation</span>
                        <p>
                         The nuru massage in Delhi is a uniquely sensual experience that has gained popularity for its exotic, slippery, and intimate nature. This Japanese massage style uses a special gel derived from seaweed, which makes the skin glide smoothly, allowing for a deep body-to-body connection between the therapist and the client. It’s a treatment that blends relaxation with sensual indulgence, making it ideal for individuals seeking a luxurious and intimate spa experience. Nuru massage offers a heightened sense of intimacy while still ensuring ultimate relaxation and stress relief.
                        </p>
                        
                        <div className="flex mt-6">
                          {['Lavender', 'Eucalyptus', 'Rosemary', 'Sandalwood'].map((oil, index) => (
                            <div key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mr-2">
                              {oil}
                            </div>
                          ))}
                        </div>
                      </div>
        
                    </div>
                  </div>
                </section> */}
        {/* Pricing Section */}
        <section id="Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-15 blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Heading */}
            <div className="text-center mb-10 md:mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaStar className="text-amber-500" />
                Affordable Luxury
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Our Pricing Package <span className="text-amber-600">for Sandwich Massage in Delhi</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Affordable luxury meets world-class relaxation with our Sandwich Massage pricing packages in Delhi.
              </motion.p>
            </div>

            {/* Pricing Cards */}
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
                  {/* Featured badge */}
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
                      {/* Price circle */}
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
                        href={plan.ctaLink}
                        className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${plan.highlight
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:from-amber-600 hover:to-amber-700"
                            : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                          }`}
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional information */}
            {/* <motion.div 
                  className="mt-16 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 md:p-8 text-center"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1 -18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2">Flexible Booking Options</h3>
                      <p className="text-amber-800 max-w-2xl">
                        All packages include free rescheduling up to 24 hours before your appointment. 
                        <span className="font-semibold"> Group discounts available for 3+ bookings!</span>
                      </p>
                    </div>
                  </div>
                </motion.div> */}
          </div>
        </section>
        {/* End Pricing Section */}
        <LuxuryHotelShowcase service="Sandwich Massage" serviceHref="/sandwich-massage-in-delhi" serviceLower="sandwich massage" />
        {/* Testimonials */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Client <span className="text-amber-600">Experiences</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Hear from those who have experienced the transformative power of our oil therapy massage.
              </motion.p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Arjun Verma",
                  role: "Regular Client",
                  review:
                    "I booked a massage after a long week at work. The therapist understood exactly where the pain was. After the session, my back felt much lighter. Very peaceful place and good service.",
                },
                {
                  name: "Rahul Singh",
                  role: "Fitness Enthusiast",
                  review:
                    "This spa is really worth the money. I tried the deep tissue massage and it helped a lot with my shoulder stiffness. Staff is polite and the environment is very relaxing.",
                },
                {
                  name: "Imran Khan",
                  role: "Working Professional",
                  review:
                    "Great experience! The hot stone therapy was amazing. I felt completely relaxed and stress-free afterward. Will definitely come again with my friends.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-amber-200 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-amber-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-4">"{item.review}"</p>

                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0 -.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0 -1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0 -.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Book a Sandwich Massage in Delhi today!</h2>
            <p className="text-amber-100 max-w-2xl mx-auto mb-10 text-lg">
              At Re-Vitalize Body-Soul-Spirit, welcome to rejuvenating your body, refreshing your mind, and restoring your spirit with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://t.me/+a5Bu6FBPN9FlOWM9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <FaTelegram className="text-xl mr-3" />
                Chat On Telegram
              </a>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Call: +91 9217255113
              </button>
            </div>
          </div>
        </section>

      </div>
      {/* Call to Action Section */}
      {/* <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50/80 to-rose-50/50 z-0"></div>
  <div className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-amber-200/30 z-0"></div>
  <div className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-amber-100/40 z-0"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4 leading-tight"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      Experience <span className="text-amber-600">Ultimate Relaxation</span>
    </motion.h2>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
      Treat yourself to our premium sandwich massage – a journey to complete physical and mental rejuvenation.
      Book now and receive a complimentary aromatherapy session.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="https://api.whatsapp.com/send?phone=9310xxxxxx">
        <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          Book Your Session
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </a>

      <a href="#Pricing">
        <button className="bg-white text-amber-800 font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-amber-800 shadow-sm hover:shadow-md transition-all duration-300">
          View Packages
        </button>
      </a>
    </div>

    <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-600 animate-pulse"></div>
          <span className="text-gray-700 text-sm sm:text-base font-medium">No commitment required</span>
        </div>
      ))}
    </div>
  </div>
</section> */}
      {/* End Call to Action Section */}

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
              Questions? We’re here to help
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
