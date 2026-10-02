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
import Head from "next/head";


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
    title: "Romantic Aromatherapy with the Partner",
    image: "/images/aromatherapy-featured-jpg.webp",
    description: "Take part in an aromatherapy session that will result in soothing and relieving aromatics creating a romantic and intimate atmosphere. This is a method that nurtures emotional attachment and melts away stress.",
    // duration: "60-90 min"
  },

  {
    title: "Swedish Couple Massage Rejuvenating",
    image: "/images/Couple Massage.webp",
    description: "Couple massage at home in Delhi gives gentle Swedish strokes with warm oil; you and partner lie side-by-side, talk, laugh, feel fresh, light, happy again in just sixty calm minutes.",
    // duration: "60 min"
  },
  {
    title: "Stress-Busting Deep Tissue Therapy for Couples",
    image: "/images/thaimassage.jpg",
    description: "Deep strokes are used by our specialized therapists to ease tense muscles, giving couples the ultimate physical relaxation combined with enhanced flexibility in their joints.",
    // duration: "60 min"
  },
  {
    title: "Ayurvedic Couple Massage for Complete Wellness",
    image: "/images/potliMassage.jpg",
    description: "Connect to the wealth of Ayurveda through herbalized oil, rhythmic movements using synchronized rhythmic strokes that benefit balance and rejuvenation, harmony between both partners.",
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

export default function Couplepage() {
  <Head>
    <title>Couple Massage in Delhi | Female to male Couple Massage</title>
    <meta
      name="description"
      content="Looking for a couple massage in Delhi? Visit our spa in Karol bagh for the best couples massage. We have certified therapists to provide you perfect relaxation."
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
      question: "What is included in a Couple Massage in Karol Bagh?",
      answer: "Couple massage offers personalized treatments, calming oils, a private couple's massage room, and shared relaxation areas for couples to enjoy together.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What is the duration of a couple's massage session?",
      answer: "Typical sessions range between 60 and 90 minutes, but you can opt to go with the customized packages that will last longer.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Is Couple Massage in Karol Bagh offered in a private room?",
      answer: "Yes, Luxury Russian Spa offers exquisitely designed individual couple massage rooms to ensure relaxation, privacy, and a level of tranquility.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Are the oils in a couple massage safe?",
      answer: "It contains high-quality, skin-safe essential oils that are safe and natural, helping both partners relax during intimate activity.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Is it possible to book a few massages on special occasions?",
      answer: "Absolutely! Many couples also book our spa on anniversaries, birthdays, and other romantic occasions to create lasting memories.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Why is Luxury Russian Spa considered the top couple massage centre in Delhi?",
      answer: "Experienced therapists, a genuinely private ambience, quality aromatic oils, and honestly priced packages — that combination is why Luxury Russian Spa is a regular first choice for couples across the city.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    {
      question: "Do you offer couple spa in Delhi NCR, not just South or Central Delhi?",
      answer: "Yes, our couple spa in Delhi NCR coverage includes outlets in Gurgaon and Noida in addition to Delhi, so you don't need to cross the city for a good couple massage spa Delhi experience.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What's the difference between your couple spa packages in Delhi?",
      answer: "Our couple spa packages in Delhi range from a focused 60-minute oil massage to longer hotel-spa experiences with added treatments — pick based on how much time you have and how indulgent you want the session to be.",
      icon: <FaLeaf className="text-teal-600" />
    },
  ];

  const [activeHotel, setActiveHotel] = useState(1);
  const highlights = [
    {
      icon: <Spa className="text-amber-600" />,
      title: "Boost well being",
      description: "Our couple massage in Delhi boosts your emotional strength, cuts down stress, and builds bonds and relaxation moments with your partner."
    },
    {
      icon: <SelfImprovement className="text-amber-600" />,
      title: "Improve circulation",
      description: "Couple massage in Karol Bagh is ideal way to transform physical intimacy with improved circulation, joint flexibility, and overall body relaxation for couples"
    },
    {
      icon: <HealthAndSafety className="text-amber-600" />,
      title: "Builds bond",
      description: "You two talk freely, laugh softly, and become best friends again while our oil makes you both fresh and happy."
    },
    {
      icon: <Air className="text-amber-600" />,
      title: "Release tension ",
      description: "Get ready to release tension by 50% with couple massage service in Delhi. Choose our couple massage spa in Delhi to experience the true benefits."
    }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    {
      title: "Warm Oil Therapy, Side by Side",
      description1:
        "Our warm jasmine-coconut oil therapy is one of the most-loved couple spa packages in Delhi. Two therapists work at the same unhurried pace, so you both settle into the same rhythm and genuinely unwind together. Would rather stay in? Our couple massage at home in Delhi brings fresh sheets, warm oils, and soft candlelight straight to your bedroom — no travel, no extra charge, complete privacy. In about 60 minutes, you'll both feel lighter, calmer, and properly reconnected. Perfect for an anniversary, a quiet date night, or simply a day you decide you deserve it.",
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
      ctaLink: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
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
                <span className="text-amber-600 font-light tracking-widest">Massage TREATMENT</span>
                <div className="w-12 h-px bg-amber-600"></div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-gray-800">
                <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Slow Down Together</span>
                with Delhi's Favourite
                <span className="block mt-2 font-medium"> Couples <span className="text-rose-600">Massage in Delhi</span></span>
              </h1>

              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Between work, traffic, and everyday stress, quality time together can feel rare. Our couple spa in Delhi gives you and your partner a shared hour to switch off, relax side by side, and reconnect — in a calm, private room designed for two.
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
                <a href='/sandwich-massage'>
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
                    <span>Explore Sandwich Massage</span>
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
                    href="https://t.me/+yulqEcJa2dxhM2I9"
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
                <Image
                  src="/images/couple-bathrobes-posing-embraced.jpg"
                  alt="Couple Massage Spa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
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
                Why Couples Keep <span className="text-amber-600">Coming Back to Us</span>
              </motion.h2>
              {/* <motion.p
                    className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Get ready to release tension by 50% with couple massage service in Delhi. Choose our couple massage spa in Delhi to experience the true benefits.
                  </motion.p> */}
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[100%] mx-auto">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-amber-100"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-5 text-amber-800 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <a
                href="https://t.me/+yulqEcJa2dxhM2I9"
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
                More Than Relaxation — <span className="text-amber-600">A Reason to Reconnect</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A good couple body massage in Delhi does more than ease sore muscles — it gives you both a genuine break, together, away from screens and deadlines.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Improve well being",
                  description: "Guests often tell us this feels like the best couple massage in Delhi they've tried — soothing therapy that rekindles warmth and genuine closeness.",
                  icon: "💆‍♀️"
                },
                {
                  title: "Boost emotional strength",
                  description: "Build trust at an emotional level as you savour stress-free couple massage sessions.",
                  icon: "🧘‍♂️"
                },
                {
                  title: "Deep relaxation ",
                  description: "Feel deeply recharged with a couple massages in Delhi every day.",
                  icon: "❤️"
                },
                {
                  title: "Boost health",
                  description: "What sets a best couple massage spa in Delhi apart is consistency — every session here is built to leave you both genuinely better than when you walked in.",
                  icon: "✨"
                },
                {
                  title: "Sooth your mind and body",
                  description: "Enjoy your hassle-free vacation with soothing couple massage offers in Delhi.",
                  icon: "🌿"
                },
                {
                  title: "Better Sleep",
                  description: "Exchange pleasant memories through the indulgent couple spa packages in an exclusive atmosphere.",
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
                Delhi's Favourite <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Couple Spa Experience</span>
              </motion.h2>

              <motion.p
                className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                This is our most-booked couple spa in Delhi package — see exactly what's included below.
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
                            <span className="text-stone-700">Romantic setup</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Two therapists</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Private couple suite</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Stress relief together</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-amber-600 mr-2">✓</span>
                            <span className="text-stone-700">Herbal welcome drink</span>
                          </li>
                        </ul>

                        {/* <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                             Book Now
                           </button> */}
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
                    Want to share quality time with your partner? Book our <a><span className="font-medium text-stone-800">couples massage in Delhi</span></a> and relax side-by-side in a private, softly-lit room. Two experienced therapists work in sync with warm oils, easing tension from both of you at the same gentle pace. Each 60-minute session ends with light refreshments, so you both leave relaxed and refreshed. As one of the best couple spa outlets in Delhi NCR, we also serve guests across Gurgaon and Noida — it's a popular choice for anniversaries and special occasions alike, with clean, fresh towels and a fully private, comfortable space every time.
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
                    <a href='/massage-service-in-delhi'>
                      <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        View Treatments
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
                Pick the Technique <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">That Fits You Both</span>
              </motion.h2>

              <motion.p
                className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Every couple massage spa Delhi session here blends time-tested and modern techniques, so your experience feels personal, not generic.
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
                                                     href="https://t.me/+yulqEcJa2dxhM2I9" 
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
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
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
                  What Makes Us <span className="text-amber-600">the Best Couple Spa in Delhi</span>
                </h2>
                <p className="text-amber-800 text-lg md:text-xl leading-relaxed">
                  Luxury Russian Spa is recognised as the best couple spa in Delhi NCR for a simple reason — skilled therapists, quality oils, and a genuinely private, luxurious space for every session.
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
                        <h3 className="text-2xl font-bold text-amber-800 font-serif mb-2">A Room Built for Two</h3>
                        <p className="text-amber-700">
                          Our couple spa centre in Delhi is designed around comfort and privacy — soft music, warm lighting, and side-by-side massage tables so you're never far apart.
                        </p>
                      </div>
                    </div>
                    <h4 className='font-bold text-amber-800'>No Rush, No Distractions</h4>
                    <p className="text-gray-700 mb-6">
                      Your session is fully yours — no interruptions, no watching the clock. Just focus on enjoying a deeply relaxing couple massage in Karol Bagh and our other outlets across the city. Book your first session and give your bond some real, uninterrupted attention.
                    </p>

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
                        <h3 className="text-2xl font-bold text-amber-800 font-serif mb-2">Experienced and Professional Therapists</h3>
                        <p className="text-amber-700">
                          At Luxury Russian Spa, our team of experienced and professional massage therapists is highly trained to provide personalized treatments, ensuring optimum comfort and relaxation.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      Our therapists come from India, Russia, Thailand, and beyond, each trained to deliver a genuinely top-class couple body spa in Delhi. Whether you're closer to Karol Bagh or Paschim Vihar, the same care and technique carries through — book your session in a click via Telegram.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-amber-700 mb-3">Signature Oil Blends</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Lavender Dream', 'Eucalyptus Renewal', 'Rosemary Harmony', 'Sandalwood Serenity', 'Jasmine Bliss', 'Frankincense Balance'].map((oil, index) => (
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
                Booking Takes Less Time Than Getting Ready
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Reach out to us Via Telegram",
                    description: "Book your preferred couple massage in Delhi via Telegram. All your details and booking will be private with complete confidentiality.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  },
                  {
                    title: "Customized Consultation Before Massage",
                    description: "The therapists will first discuss with you what your preferences are and make the couple massage a personal and effective experience.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0 -6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0 -6.364 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Private Couple Massage Rooms for Intimacy",
                    description: "We offer rooms designed compassionately with a calming atmosphere, giving privacy and a tranquil environment to both partners.",
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
              <a href='/massage-service-in-delhi'>
                <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                  Book Your Rejuvenating Experience
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
                    <a href='/spa-price-in-delhi'>
                      <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] transform">
                        Our pricing
                      </button>
                    </a>
                    <a href='/outlets'>
                      <button className="px-6 py-3 bg-white text-amber-700 border border-amber-300 font-medium rounded-full shadow-sm hover:shadow transition-all duration-300">
                        Outlets
                      </button>
                    </a>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">
                    Planning a date near Select Citywalk?{" "}
                    <a href="/couple-massage-in-saket" className="text-amber-700 font-semibold underline">
                      Book Couple Massage in Saket
                    </a>
                    .
                  </p>

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
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-amber-800 opacity-5"></div>
          <div className="container mx-auto px-4 relative">

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
                <span className="text-amber-700 font-medium tracking-wider">Specialty</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                A Little Escape, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Right in the Middle of Delhi</span>
              </motion.h2>

              <motion.p
                className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Fragrant rooms, soft lighting, and hands that know exactly where the tension sits — this is what makes our couple massage spa Delhi outlets worth returning to, again and again.
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
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Set the Mood With Candlelight</h3>
                <p className="text-gray-700 mb-6">
                  Ambience matters when you're relaxing as a couple. Enjoy a calming session in candlelit rooms, surrounded by fragrant oils and soothing music, as you both unwind together.
                </p>
                <h4 className="text-xl font-semibold text-amber-800 mb-4">Couple Spa Packages Delhi Guests Actually Ask For</h4>
                <p className="text-gray-700 mb-6">
                  From a quick reset to a full rejuvenation itinerary with treatments and refreshments included, our couple spa packages in Delhi are built around how much time you actually have.
                </p>
                {/* Bullet Points instead of Image */}
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Highly trained and certified therapists</li>
                  <li>Wide range of massage techniques</li>
                  <li>Focus on relaxation & stress relief</li>
                  <li>Customized treatments for every client</li>
                  <li>Professional and hygienic environment</li>
                </ul>

                <p className="text-gray-700 mb-6">
                  Our Delhi spa centres offer some of the best massage options in the NCR. Guests love our full-body massage, Thai stretch therapy, four-hand sandwich massage, and oil-based treatments for pain and stress relief. Just tell our team what you're looking for — relaxation, pain relief, or something in between — and we'll get it sorted quickly, with clear pricing and a clean, comfortable room.
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
                <span className="font-semibold text-amber-800 mb-4">Couples Massage at Home in Delhi</span>
                <p className="text-gray-700 mb-6">
                  Prefer to stay in? Our couples massage at home service brings everything to your door — clean linens, warm oils, and a calming setup. Simply share your address on WhatsApp and our therapists arrive within 45 minutes, ready to work on both of you at the same time in a private, comfortable setting. It's a safe, fully private option at the same price as an in-outlet session. Book ahead for same-day appointments.
                </p>
                <span className="font-semibold text-amber-800 mb-4">Hot Stone Massage in Delhi</span>
                <p>
                  Looking for deeper relief? Our hot stone massage uses smooth, heated stones placed along your back to help release muscle tension and improve circulation. The gentle warmth eases tightness while calming music and light aromatherapy help you fully relax. Sessions run about an hour and are a popular pick on a lunch break or after a long flight — you'll leave feeling lighter and refreshed.
                </p>
                {/* <p>
                          Perfect for individuals suffering from stress, muscle pain, or hormonal imbalance, this massage harmonizes body rhythms and enhances immunity. The continuous motion and warm oil offer a meditative experience.
                        </p> */}
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
        </section>
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
                Simple Pricing, <span className="text-amber-600">No Surprises</span>
              </motion.h2>
              <motion.p
                className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our couple spa packages in Delhi are priced clearly upfront, whatever your budget, so you can plan your visit without any guesswork.
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
        <LuxuryHotelShowcase service="Couple Massage" serviceHref="/couples-massage-in-delhi" serviceLower="couple massage" />
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
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Your Time Together Starts With One Message</h2>
            <p className="text-amber-100 max-w-2xl mx-auto mb-10 text-lg">
              Book your couples massage in Delhi today — a private room, warm oils, and an hour that's just for the two of you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://t.me/+yulqEcJa2dxhM2I9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <FaTelegram className="text-xl mr-3" />
                Chat On Telegram
              </a>
              <a href='https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.'>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Call: +91 8799716197
                </button>
              </a>
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
      Treat yourself and your partner to our premium couples massage – a journey to complete physical and mental rejuvenation.
      Book now to experience it for yourself.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.">
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
              Still Deciding? <span className="text-amber-600">Start Here</span>
            </h2>
            <p className="text-amber-800 max-w-2xl mx-auto text-lg">
              Everything you need to know about our couples massage in Delhi before you book.
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
