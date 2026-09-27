  'use client';

  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Playfair_Display, Montserrat } from 'next/font/google';
  import Image from 'next/image';
  import { Check } from "lucide-react";
  import WhatsappFloat from '../components/WhatsappFloat';
  import { FaHotel, FaHome, FaMapMarkerAlt, FaWhatsapp   } from "react-icons/fa";
  import { FaTelegram } from "react-icons/fa";
  import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { FaSpa, FaHotTub } from 'react-icons/fa';
  import { FaStar } from "react-icons/fa";
  import { AnimatePresence } from "framer-motion";
  import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Head from "next/head";



//   import WhatsappFloat from '../../components/WhatsappFloat';

const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
];

  const featuresData = [
  {
    title: "Helps to De-Stress",
    description:
      "Soothes your mind and body through calming massage techniques, relaxing aromas, and a peaceful ambiance, leaving you refreshed and tension-free.",
    image: "/images/HelpstoDe-Stress.webp",
  },
  {
    title: "Improves Blood Flow and Circulation",
    description:
      "Relaxes muscles, stimulates lymphatic drainage, and promotes oxygen-rich blood flow for vitality, healing, and deep relaxation.",
    image: "/images/improvebloodflow.webp",
  },
  {
    title: "Makes Skin More Radiant",
    description:
      "Detoxifies, hydrates, and nourishes your skin, leaving it softer, smoother, and naturally radiant.",
    image: "/images/SkinMoreRadiant.jpeg",
  },
];

  const services = [
    {
      title: "AromaTherapy",
      image: "/images/aromatherapy-featured-jpg.webp",
      description: "Aromatherapy, available at our body spa in Delhi, dates back to ancient Egypt where people used scented oils for massage and bathing.",
      duration: "60-90 min"
    },
    {
      title: "Stone Therapy",
      image: "/images/19-2-1024x427.png",
      description: "Our spa service in Delhi gives best stone therapy; warm stones remove back pain, cool stones calm stress, feel fresh and sleep tight same day.",
      duration: "75 min"
    },
    {
      title: "Couple Massage",
      image: "/images/Couple Massage.webp",
      description: "A couples massage at our Delhi luxury spa allows you and your partner or family member to enjoy a relaxing massage together in the same room.",
      duration: "90 min"
    },
    {
      title: "Sandwich Massage",
      image: "/images/Sandwich Massage.webp",
      description: "Rebalance your energy with our soothing Sandwich Massage therapy. A layered, deeply relaxing treatment for full-body stress relief.",
      duration: "60 min"
    },
    {
      title: "Thai Massage",
      image: "/images/thaimassage.jpg",
      description: "Authentic Thai massage in Delhi combining traditional stretching and acupressure to relieve stress, improve flexibility, and boost circulation.",
      duration: "60 min",
      url: "/thai-massage-in-delhi",
    },
    {
      title: "Female To Male Massage",
      image: "/images/potliMassage.jpg",
      description: "Our luxury spa in Delhi offers the ancient Indian technique known as Potli massage. This treatment uses herbal pouches, warmed up and filled with spices and herbs,.",
      duration: "60 min"
    },
    {
      title: "Full-body Massage",
      image: "/images/happy-woman-in-spa-salon.jpg",
      description: "Full-body massage in Delhi spa gives full relax from head to toe. Our good hands remove all pain, stress and tiredness. You feel fresh like new. Come once, you will say wow. Best price, clean place, happy feeling every time.",
      duration: "60 min"
    },
    {
      title: "Nuru Massage",
      image: "/images/SpecializedTreatments.jpg",
      description: "While this is not all that can be had, a massage is the crown jewel at Luxury Spa in Delhi where we do have a variety of special treatments that can suit all your wellness needs.",
      duration: "60 min"
    },
    {
      title: "B2B Massage",
      image: "/images/SkincareTreatments.jpg",
      description: "B2B massage in Delhi spa is special skin-to-skin therapy for business friends. Our trained girls use warm oil and soft body slides to take away all office tension. Private rooms, safe place, good rate. Book quickly, feel super light and happy again.",
      duration: "90-120 min"
    },
    {
      title: "Reflexology",
      image: "/images/Reflexology.jpg",
      description: "Reflexology in Delhi spa presses right foot points to heal full body. No medicine, only thumb and finger magic—headache, back pain, sleep problem all gone in 30 min. Clean rooms, sweet smell, happy faces. Come for free tea, leave with light steps and big smile every time.",
      duration: "60 min"
    },
    {
      title: "Deep Tissue Massage",
      image: "/images/2147816920.jpg",
      description: "Deep tissue massage in Delhi uses slow, firm pressure to reach chronic knots and tension that a lighter massage can't touch — ideal for back, neck, and shoulder pain.",
      duration: "60-90 min",
      url: "/deep-tissue-massage-in-delhi",
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

  {/* Our Process */}
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
    description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Finalizing',
    description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
    image: '/images/finalizing.avif',
  },
];
const features2 = [
  { 
    title: 'Hotel OutLet', 
    icon: '/images/Group-42-1.png',
    description: 'Premium organic ingredients for radiant, healthy skin'
  },
  { 
    title: '24+ Spa Outlets', 
    icon: '/images/Group-48-1.png',
    description: 'Holistic treatments to melt away stress and tension'
  },
  { 
    title: 'Thai Staff', 
    icon: '/images/Group-47-1.png',
    description: 'Signature therapies tailored to your unique needs'
  },
  { 
    title: '24*7 Service Available', 
    icon: '/images/Group-45-1.png',
    description: 'Tranquil oasis designed for complete serenity'
  },

];
{/* End Our Process */}
const faqs = [
    
    {
      question: "Do you offer Spa Services in Karol Bagh?",
      answer: " Yes, We have a spa outlet in karol bagh. Where we provide full-body, sandwich and couple massage service with certified therapists, private rooms and follow all hygiene protocols. Contact us to experience massage Services in Karol Bagh.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Can I book a Female to Male  Massage Service in Delhi online?",
      answer: "Yes, you can easily book Female to Male Massage Service in Delhi From our official website or by Contact Us. Our trained therapists provide genuine services across Rajouri Garden, Rohini, Noida, and Aerocity to make your spa journey smooth, private, and stress-free.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    
    {
      question: "Can I combine multiple spa services in Delhi into a package?",
      answer: "Yes, you can book combo and customized spa service in Delhi (for example, full body plus aromatherapy or couple plus shower) are available. Pricing and duration are adjusted accordingly; request custom combos while booking or contact customer support for quotes.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Can I select my preferred therapist for my spa session?",
      answer: " Yes, at our spa in Delhi you can choose your preferred therapist. We always try to accommodate your request to ensure a comfortable, personalized, and relaxing spa experience tailored to your needs.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
          question: "What Spa Treatments Available at Spa Delhi?",
          answer: "We offer sandwich massage, couple massage, B2B massage, full-body massage, Thai massage, aromatherapy, nuru and hotel/home spa service in Delhi, plus therapist profiles, session durations and add-ons. Each service includes outlet availability and booking links for convenient scheduling.",
          icon: <FaHotTub className="text-teal-600" />
        },
        {
              question: "What are the benefits of getting a massage at your spa?",
              answer: "Our massages help reduce stress, improve circulation, promote relaxation, and rejuvenate your body, mind, and soul, making it the perfect escape from your busy lifestyle.",
              icon: <FaSpa className="text-teal-600" />
            },
  ];

  export default function Serpage() {
    <Head>
        <title>Best Massage & Spa Service in Delhi By Top Therapists</title>
        <meta
          name="description"
          content=" Experience top-notch spa service in Delhi at the best spa centre in Greater Kailash. Our top therapists are ready to give you relaxation in Delhi or NCR Areas. Check Out"
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

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById('services-section');
        if (element) {
          const top = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top < windowHeight * 0.8) {
            setIsVisible(true);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial load
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const Button = ({ href, children }) => (
      <a
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300"
      >
        {children}
      </a>
    );

    return (
      <main>
      <div className="w-full">
        {/* Banner */}         
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - more minimal */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-amber-600"></div>
              <span className="text-amber-600 font-light tracking-widest">OUR SERVICES</span>
              <div className="w-12 h-px bg-amber-600"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-800">
              <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Book</span>
            Massage Service in Delhi
              <span className="block mt-2 font-medium">With <span className="text-rose-600"> Foreigner Therapists</span></span>
            </h1>
            
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Our massage service in Delhi gives you complete rest from the busy, stressful pace of the city. At Spa Delhi, every session feels like a small holiday with trained staff who use good-quality oils and a mix of traditional and modern techniques, so your body gets full rest and fresh energy for the week ahead.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                 {/* Hotel Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V3h18v18M9 21v-6h6v6" />
              </svg>
                </div>
                <span className="text-sm text-gray-700">24+ Spa Outlet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C10.8954 2 10 2.89543 10 4V6H8C6.89543 6 6 6.89543 6 8V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V8C18 6.89543 17.1046 6 16 6H14V4C14 2.89543 13.1046 2 12 2ZM12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9Z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">12+ Hotel OutLet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                  {/* Muscle Relief / Healing Hand Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16c0-1.1.9-2 2-2h2v-5a2 2 0 114 0v5h2a2 2 0 110 4h-1l-1 3-1-3H6a2 2 0 01-2-2z" />
            </svg>
                </div>
                <span className="text-sm text-gray-700">Home Spa</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Delhi NCR</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
                <a href='/outlets'><span>Our Outlets</span></a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className=" text-blue-500 rounded-sm  hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

          {/* Image section - more elegant */}
          <div className="relative h-80 md:h-96 lg:h-[450px]">
    <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src="/images/fpkdl.com_750_1758779898_arafed-woman-laying-towel-with-candles-candles_900321-66547.jpg" // ✅ Yahan apna image path daal
          alt="Spa Environment"
          className="w-full h-full object-cover"
        />
      </div>
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

      {/* Services Section */}
      <section id="services-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white">

        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200 mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-100 mix-blend-multiply"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-amber-300 mix-blend-multiply opacity-40"></div>
        </div>
        {/* Floral decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-amber-200"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 24 + 16}px`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [0, 40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              ✿
            </motion.div>
          ))}
        </div>
        {/* Gold geometric patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-700/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-800/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-light text-center text-amber-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
             What we offer in our spa service in Delhi 
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'center' }}
          ></motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-10 text-center text-xl md:text-2xl text-amber-800 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Your body deserves best therapies for your complete relaxation. For this we offer top rated massage service in Delhi with popular therapies like B2B massage, Couples massage, and sandwich massage with trusted female therapists.
          </motion.p>
          
          {/* Services Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Service Card 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                    <FaHotel className="text-3xl text-amber-600" />
                  </div>

                </div>
                <h3 className="text-2xl font-light text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Hotel Spa</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                 We offer 5-star hotel spa service in Delhi with Indian and international therapists. All our therapists are experienced and trained to give a truly professional massage.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-amber-600 font-medium">60-90 min</span>
                  <a href='https://api.whatsapp.com/send?phone=919217255113'><button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Book Now
                  </button></a>
                </div>
              </div>
            </motion.div>
            
            {/* Service Card 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                    <FaHome className="text-3xl text-amber-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Home Spa</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  Want a massage at home in Delhi? We've got you covered. Spa Delhi offers home massage services with trusted, verified therapists who come to your home and deliver a professional massage experience.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-amber-600 font-medium">75-120 min</span>
                  <a href='https://api.whatsapp.com/send?phone=919217255113'><button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Book Now
                  </button></a>
                </div>
              </div>
            </motion.div>
            
            {/* Service Card 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                    <FaMapMarkerAlt className="text-3xl text-amber-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Spa OutLet</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  Spa Delhi has 24+ spa outlets across Delhi NCR. Every outlet maintains full privacy and safety during your session, using authentic methods and techniques for your massage service in Delhi.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-amber-600 font-medium">90-150 min</span>
                  <a href='https://api.whatsapp.com/send?phone=919217255113'><button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Book Now
                  </button></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
              {/* Our Signature Treatments */}
              <section className="w-full my-5 py-5 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
            >
              Relax & Rejuvenate
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6"
            >
              Our Top-Notch Massage service in Delhi
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-amber-800"
            >
              Our massage service in Delhi gives full body pain relief with expert therapists at low price, 24/7 open.
            </motion.p>
          </div>

          {/* Services grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={container}
            initial="hidden"
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
                        {service.url ? (
                          <a href={service.url} className="hover:text-amber-700 hover:underline">
                            {service.title}
                          </a>
                        ) : (
                          service.title
                        )}
                      </h3>
                      <p className="text-amber-800 mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <div>
                      <a 
                        href="tel:+919217255113" 
                        className="inline-flex items-center bg-gradient-to-r text-white rounded-full font-medium transition-all duration-300 hover:gap-3 hover:shadow-lg"
                      >
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
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
              </section>
              {/* End Our Signature Treatments */}
              {/* icon section */}
              <section className="relative bg-gradient-to-br from-[#f5fdfc] to-[#f8f0eb] py-24 px-6 lg:px-16 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5e4d7] rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e8d1c5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="max-w-7xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Text and Features */}
                        <div className="relative z-10">
                          <div className="mb-10">
                            <motion.span 
                              className="text-lg font-medium text-amber-800 tracking-widest"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              EXPERIENCE THE DIFFERENCE
                            </motion.span>
                            
                            <motion.h2 
                              className="text-4xl md:text-5xl font-bold text-[#113435] mt-2 mb-6 leading-tight"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                               Why Choose us for <span className="text-amber-700">Premium Massage Service in Delhi, Noida and Gurgaon</span>
                            </motion.h2>
                            
                            <motion.p 
                              className="text-lg text-[#5c4a42] max-w-xl mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              Treat your body to the best with an expert massage therapist in Delhi. Luxury spa brings promising benefits with premium massage service in Delhi. Schedule an appointment today and retrieve all the benefits. 
                            </motion.p>
                          </div>
              
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {features2.map((item, index) => (
                              <motion.div 
                                key={index}
                                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-5 border border-[#cdeceb] shadow-sm hover:shadow-md transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                              >
                                <div className="flex items-start gap-4">
                                  <div className="bg-amber-50 p-3 rounded-xl">
                                    <Image 
                                      src={item.icon} 
                                      alt={item.title} 
                                      width={36} 
                                      height={36} 
                                      className="object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold text-[#113435] mb-1">{item.title}</h3>
                                    <p className="text-sm text-[#7d6b62]">{item.description}</p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
              
                          <motion.div 
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <motion.button 
                              className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg transition-all"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                               <a
                        href="https://api.whatsapp.com/send?phone=919217255113"
                        
                      >
                        Book Your Spa Session
                      </a>
                             
                            </motion.button>
                            <motion.button 
                              className="border-2 border-amber-700 text-amber-700 px-8 py-3.5 rounded-full font-medium hover:bg-amber-50 transition-all"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <a href="/spa-price-in-delhi" className="flex items-center gap-2">
                                 Check Price
                              </a>
                              
                            </motion.button>
                          </motion.div>
                        </div>
              
                        {/* Right: Image */}
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image 
                              src="/images/spaExpert4.webp"
                              alt="Luxury Spa Treatment"
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Decorative frame */}
                          <div className="absolute inset-0 border-8 border-white border-opacity-30 rounded-[2.5rem] pointer-events-none"></div>
                          
                          {/* Floating badge */}
                          <motion.div 
                            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4 px-8 rounded-full shadow-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                              delay: 0.8,
                              duration: 0.8,
                              type: "spring",
                              stiffness: 100
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-5 h-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="font-semibold">500+ 5-Star Reviews</span>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </section>
              {/* ENd icon section */}
              {/* About Section */}
                    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#f5fdfc] to-[#f5fdfc] relative overflow-hidden">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
                      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"></div>
                      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-amber-100/40 blur-3xl"></div>
              
                      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                        
                        
              
                        {/* Right Text Section with Enhanced Styling */}
                        <motion.div
                          className="flex flex-col justify-between h-full"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <span className="mr-2">✦</span> About Our Luxury Spa
                          </motion.div>
              
                          <motion.h2
                            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            Enjoy a Full Body Massage <span className="relative">
                              <span className="text-amber-600 z-10 relative">Service in Aerocity for Full Relaxation</span>
                              <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                            </span>
                          </motion.h2>
              
                          <motion.div
                            className="space-y-6 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <p className="text-gray-600 text-lg leading-relaxed">
                            Feel fresh fast—get a full-body massage at our Aerocity spa, the trusted Spa service in Delhi. Gentle hands, warm oils, quiet room melt pain and stress in 30 min. Good rate, free tea, happy vibes. Step out light, sleep tight, face tomorrow bright.
                              <a href='/'><strong className="text-amber-600 font-medium"></strong></a>
                            </p>
                            {/* <p className="text-gray-600 text-lg leading-relaxed">Escape the hustle of Delhi and immerse yourself in rejuvenating treatments tailored to your needs.
                              Our expert therapists combine traditional healing methods with modern wellness practices to create custom treatments that will leave you feeling refreshed, balanced, and revitalized.
                            </p> */}
                          </motion.div>
              
                          {/* Feature Grid with Hover Effects */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {[ 
                              { title: "Foreigner Therapist", icon: "🌏" },
                              { title: "Female To Male Massage", icon: "💆‍♂️" },
                              { title: "Best Body To Body Spa", icon: "✨" },
                              { title: "Couple Massage", icon: "👩‍❤️‍👨" }
                            ].map((feature, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-50 hover:border-amber-100 group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="bg-amber-100 text-amber-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                  {feature.icon}
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-amber-600 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-gray-600 text-xs">Luxurious and personalized treatments</p>
                                </div>
                              </motion.div>
                            ))}
                        </motion.div>
              
                          {/* Action Buttons with Animation */}
                          <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <motion.a
                              href="/about-us"
                              className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 transition-all"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-all"></div>
                              <span className="relative z-10 flex items-center gap-2">
                                Learn More About Us
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </motion.a>
              
                            <motion.a
                              href="#"
                              className="px-8 py-4 rounded-full font-medium border-2 border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors relative overflow-hidden group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <a href="/spa-price-in-delhi" className="relative z-10 flex items-center gap-2 cursor-pointer">
                                View Pricing
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 000-1.676.62C6.602" />
                                </svg>
                              </a>
                            </motion.a>
                          </motion.div>
                        </motion.div>
                        {/* Left Image with Modern Frame & Parallax Effect */}
                            <motion.div
                              className="relative"
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
                                {/* Glass frame effect */}
                                {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] z-20 pointer-events-none"></div> */}
                                
                                {/* Image container */}
                                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                                  {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-amber-800/10 to-black/25 z-10"></div> */}
                                  {/* <div className="bg-gradient-to-tr from-amber-200 to-rose-100 w-full h-full animate-pulse"></div> */}
                                  <Image
                                   loading="lazy"
                                    src="/images/fpkdl.com_750_1758779863_woman-having-massage-spa-salon_952135-8315.jpg"
                                    alt="Spa Interior"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-[2.5rem] z-0"
                                  />
                                  {/* <video
                                      autoPlay
                                      loop
                                      muted
                                      playsInline
                                      className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] z-0"
                                    >
                                      <source src="/images/spavideo.mp4" type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video> */}
              
                                </div>
                                
                                {/* Floating decorative elements */}
                                {/* <motion.div
                                  className="absolute top-6 left-6 w-24 h-24 rounded-full bg-amber-500/10 blur-xl z-0"
                                  animate={{ 
                                    y: [0, -15, 0],
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, 0]
                                  }}
                                  transition={{ 
                                    duration: 8, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                  }}
                                /> */}
                                <motion.div
                                  className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-rose-300/20 blur-xl z-0"
                                  animate={{ 
                                    y: [0, 15, 0],
                                    scale: [1, 1.1, 1],
                                    rotate: [0, -5, 0]
                                  }}
                                  transition={{ 
                                    duration: 6, 
                                    repeat: Infinity, 
                                    ease: "easeInOut", 
                                    delay: 0.5 
                                  }}
                                />
                              </div>
                              
                              {/* Floating testimonials */}
                              {/* <motion.div 
                                className="absolute -bottom-6 right-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 w-64 border border-white/50"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                              >
                                <div className="flex items-center mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                  ))}
                                </div>
                                <p className="text-gray-700 text-sm font-medium">"The most rejuvenating experience in Delhi. Truly exceptional therapists!"</p>
                                <div className="mt-2 flex items-center">
                                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                                  <span className="text-xs font-medium text-amber-700">Priya Sharma</span>
                                </div>
                              </motion.div> */}
                            </motion.div>
                      </div>
                    </section>
                    
              
                          {/* Why Choose Us Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
              {/* Decorative elements */}
              <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-amber-200 opacity-20 blur-3xl -z-0"></div>
              <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-amber-300 opacity-15 blur-3xl -z-0"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                      Premium Wellness Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-6">
                      Experience our Premium <span className="text-amber-600">Massage Services in Lajpat Nagar or Karol Bagh</span>
                    </h2>
                    <p className="text-amber-800 text-lg md:text-xl leading-relaxed">
                      We stand apart through our commitment to authentic techniques, premium ingredients, and personalized care that revitalizes your mind, body and spirit. Explore our <a href='/outlets'><strong className="text-amber-600 font-medium">spa outlets across Delhi</strong></a> for the best experience.
                    </p>
                  </motion.div>
                </div>
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Expert Therapists */}
                  <motion.div 
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
                      <div className="p-8">
                        <div className="flex items-start mb-6">
                          <div className="bg-amber-100 p-3 rounded-lg mr-4 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-amber-800 font-serif mb-2">Expert Therapists</h3>
                            {/* <p className="text-amber-700">
                              Our therapists are trained in traditional Ayurvedic techniques with over 10 years of experience in therapeutic massage.
                            </p> */}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6">
                         Our massage staff are real experts—each one has ten-plus years of working hands in old Kerala and Delhi spas. They know which warm herbal oil fits your body type, how much pressure your back enjoys, and where the hidden pain points sleep. Tell them neck is stiff or legs feel heavy; they smile, press the right spots, and pain runs away like Delhi traffic at midnight. 
                        </p>
                        <p className="text-gray-700 mb-6">
                         They speak simple Hindi-English, never hurry, always ask “comfortable?” After one hour you stand up light, skin shiny, mind cool. Come once, you will say “yaar, these aunties-uncles have magic fingers!
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
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
                      <div className="relative h-96">
                        <Image 
                          src="/images/fpkdl.com_960_1758981403_modern-house-bed-room-interior-design_1143383-1039.jpg"
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
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-amber-800 font-serif mb-2">Premium Services</h3>
                            <p className="text-amber-700">
                              Want VIP feeling? Book our premium room—big soft bed, light aroma, your own shower, free green tea. Choose hot stone, chocolate scrub or four-hand massage; two therapists work together like Bollywood dance. We use imported almond-rose oil, fresh towels every time, and keep 100% privacy. Phone stay outside, only calm music inside. After treatment we give complimentary fruit bowl and ten-minute extra head massage. Price little higher, but you leave like five-star guest—fresh, glowing, ready for airport or board meeting.
                            </p>
                          </div>
                        </div>
                        
                        {/* <p className="text-gray-700 mb-6">
                          The calming aroma of essential oils adds a therapeutic layer, relieving stress and enhancing your overall sense of well-being. 
                          Regular sessions can improve flexibility, deepen sleep, and support emotional stability.
                        </p> */}
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-amber-700 mb-3">Signature Oil Blends</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {['AromaTherapy', 'Couple Massage', 'B2B Massage', 'Sandwich Massage', 'Thai Massage', 'Full-body Massage'].map((oil, index) => (
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
                  initial={{ opacity: 0, y: 30 }}
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
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-amber-900 font-serif text-center mb-12">
                    Benefits Of Taking Our Massage Service in Delhi
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Mindful Relaxation",
                        description: "Techniques that calm the mind and reduce stress through focused breathing and meditation",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        )
                      },
                      {
                        title: "Body Rejuvenation",
                        description: "Therapies that restore physical vitality and promote healing at the cellular level",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        )
                      },
                      {
                        title: "Spiritual Balance",
                        description: "Practices that align your energy centers and connect you with your inner self",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <a href='https://api.whatsapp.com/send?phone=919217255113'>
                  <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                    Book Your Spa Session Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
                  <section className="bg-gradient-to-b from-[#f5fdfc] to-[#f8f0eb] py-18 px-4 md:px-14">
                                                   <div className="max-w-6xl mx-auto">
                                                     {/* Section Header */}
                                                     {/* <motion.div 
                                                       className="text-center mb-16"
                                                       initial={{ opacity: 0, y: 20 }}
                                                       whileInView={{ opacity: 1, y: 0 }}
                                                       viewport={{ once: true }}
                                                       transition={{ duration: 0.6 }}
                                                     >
                                                       <span className="text-lg font-medium text-amber-700 tracking-widest">OUR SIGNATURE OFFERINGS</span>
                                                       <h1 className="text-4xl md:text-5xl font-bold text-[#113435] mt-4 mb-6">Top Rated Body Spa Services in Delhi for Complete Relaxation</h1>
                                                       <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
                                                     </motion.div> */}
                           
                                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                       
                                                       <div>
                                                         
                                                         {/* <motion.div 
                                                           className="bg-white bg-optage-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-[#cdeceb]"
                                                           initial={{ opacity: 0, x: 30 }}
                                                           whileInView={{ opacity: 1, x: 0 }}
                                                           viewport={{ once: true }}
                                                           transition={{ duration: 0.7 }}
                                                         >
                                                           <div className="flex items-center gap-4 mb-6">
                                                             <div className="bg-amber-100 p-3 rounded-xl">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                               </svg>
                                                             </div>
                                                             <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                               Foreigner Staff
                                                             </h2>
                                                           </div>
                                                            <p className="text-gray-600 leading-relaxed mb-6">
                                           We believe true wellness emerges from harmony between physical, mental, and energetic dimensions. Unlike conventional spas, our approach integrates three core principles:
                                                             </p>
                                                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                               {[
                                                                 {title: 'Russian Therapist', desc: 'Therapists trained in meditation techniques to create truly present healing experiences'},
                                                                 {title: 'Afgani Therapist', desc: 'Therapies designed to activate your body\'s innate healing capabilities'},
                                                                 {title: 'Uzbeki Therapist', desc: 'Space designed with sacred geometry to enhance therapeutic benefits'}
                                                               ].map((item, index) => (
                                                                 <div key={index} className="bg-indigo-50 p-4 rounded-xl">
                                                                   <h3 className="font-bold text-amber-800 mb-2">{item.title}</h3>
                                                                   <p className="text-sm text-gray-600">{item.desc}</p>
                                                                 </div>
                                                               ))}
                                                             </div>
                                                             <p className="text-gray-600 leading-relaxed">
                                                               This holistic framework allows us to create treatments that don't just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
                                                             </p>
                                                           <div className="mt-6">
                                                             <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">60-90 min | From ₹2,800</span>
                                                           </div>
                                                         </motion.div> */}
                                                         
                           
                                                         {/* Body Treatments */}
                                                         {/* <motion.div 
                                                           className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#cdeceb]"
                                                           initial={{ opacity: 0, x: -30 }}
                                                           whileInView={{ opacity: 1, x: 0 }}
                                                           viewport={{ once: true }}
                                                           transition={{ duration: 0.7, delay: 0.1 }}
                                                         >
                                                           <div className="flex items-center gap-4 mb-6">
                                                             <div className="bg-amber-100 p-3 rounded-xl">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                               </svg>
                                                             </div>
                                                             <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                               Why Go For Delhi Spa
                                                             </h2>
                                                           </div>
                                                                               <p className="text-gray-600 leading-relaxed mb-6">
                                                               Our team of 23 therapists represents the pinnacle of spa craftsmanship. Each practitioner undergoes 500+ hours of training in our proprietary modalities before touching clients. We source talent globally, with specialists in:
                                                             </p>
                                                             <ul className="grid grid-cols-2 gap-3 mb-6">
                                                               {[
                                                                 'Thai Herbal Compress', 'Shiatsu', 'Lymphatic Drainage', 
                                                                 'Ayurvedic Abhyanga', 'Hot Stone Therapy', 'Aromatherapy',
                                                                 'Deep Tissue Sculpting', 'Craniosacral'
                                                               ].map((item, index) => (
                                                                 <li key={index} className="flex items-center">
                                                                   <div className="w-2 h-2 bg-amber-800 rounded-full mr-3"></div>
                                                                   <span className="text-gray-600">{item}</span>
                                                                 </li>
                                                               ))}
                                                             </ul>
                                                             <p className="text-gray-600 leading-relaxed">
                                                               Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
                                                             </p>
                                                           <div className="mt-6">
                                                             <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">75-90 min | From ₹3,200</span>
                                                           </div>
                                                         </motion.div> */}
                                                       </div>
                           
                                                       {/* Right Column */}
                                                       <div>
                                                         
                           
                                                         {/* Massage Therapy */}
                                                         {/* <motion.div 
                                                           className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-[#cdeceb]"
                                                           initial={{ opacity: 0, x: -30 }}
                                                           whileInView={{ opacity: 1, x: 0 }}
                                                           viewport={{ once: true }}
                                                           transition={{ duration: 0.7 }}
                                                         >
                                                           <div className="flex items-center gap-4 mb-6">
                                                             <div className="bg-amber-100 p-3 rounded-xl">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                               </svg>
                                                             </div>
                                                             <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                               Top Rated Services
                                                             </h2>
                                                           </div>
                                                           <p className="text-gray-600 leading-relaxed mb-6">
                                                             Our commitment extends beyond individual wellness to planetary health. We're proud to be the first Carbon Neutral spa in our region, with initiatives including:
                                                             Unlike conventional spas, our approach integrates three core principles:
                                                           </p>
                                                           <div className="flex flex-wrap gap-4 mb-6">
                                                             {[
                                                               {icon: '♻️', text: 'Thai Massage'},
                                                               {icon: '🌱', text: 'B2B Massage'},
                                                               {icon: '💧', text: 'Couple Massage'},
                                                               {icon: '🌎', text: 'Female To Male Massage'},
                                                               // {icon: '🏺', text: 'Handcrafted Products'}
                                                             ].map((item, index) => (
                                                               <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                                                                 <span className="mr-2 text-xl">{item.icon}</span>
                                                                 {item.text}
                                                               </span>
                                                             ))}
                                                           </div>
                                                           <p className="text-gray-600 leading-relaxed">
                                                             Our product line features sustainably harvested ingredients from ethical cooperatives. We've partnered with local environmental initiatives, donating 5% of profits to wetland conservation. When you indulge at Serenity, you're supporting a healthier ecosystem.
                                                             Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
                                                           </p>
                                                           
                                                           <div className="mt-6">
                                                             <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">60-120 min | From ₹2,500</span>
                                                           </div>
                                                         </motion.div> */}
                                                         {/* Wellness Packages */}
                                                         {/* <motion.div 
                                                           className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#cdeceb]"
                                                           initial={{ opacity: 0, x: 30 }}
                                                           whileInView={{ opacity: 1, x: 0 }}
                                                           viewport={{ once: true }}
                                                           transition={{ duration: 0.7, delay: 0.1 }}
                                                         >
                                                           <div className="flex items-center gap-4 mb-6">
                                                             <div className="bg-amber-100 p-3 rounded-xl">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                               </svg>
                                                             </div>
                                                             <h2 className="text-2xl font-bold text-[#113435]">Home & Hotel Spa</h2>
                                                           </div>
                                                           <p className="text-gray-600 leading-relaxed mb-6">
                                                             Our commitment extends beyond individual wellness to planetary health. We're proud to be the first Carbon Neutral spa in our region, with initiatives including:
                                                           </p>
                                                           <div className="flex flex-wrap gap-4 mb-6">
                                                             {[
                                                               {icon: '🏨', text: 'JW Marriott Hotel Aerocity'},
                                                               {icon: '🏩', text: 'The Ashok (Chanakyapuri)'},
                                                               {icon: '🏨', text: 'The Park Connaught Place'},
                                                               {icon: '🏩', text: 'The Suryaa New Delhi (NFC)'},
                                                               // {icon: '🏨', text: 'The Grand New Delhi'},
                                                               // {icon: '🏩', text: 'Novotel New Delhi Aerocity'},
                                                             ].map((item, index) => (
                                                               <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                                                                 <span className="mr-2 text-xl">{item.icon}</span>
                                                                 {item.text}
                                                               </span>
                                                             ))}
                                                           </div>
                                                           <p className="text-gray-600 leading-relaxed">
                                                             Our product line features sustainably harvested ingredients from ethical cooperatives. We've partnered with local environmental initiatives, donating 5% of profits to wetland conservation.
                                                           </p>
                                                           <div className="mt-6">
                                                             <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">3-6 hours | From ₹8,500</span>
                                                           </div>
                                                         </motion.div> */}
                                                       </div>
                                                     </div>
                           
                                                     {/* Additional Information */}
                                                     <motion.div 
                                                       className="mt-16 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-white shadow-xl"
                                                       initial={{ opacity: 0, y: 30 }}
                                                       whileInView={{ opacity: 1, y: 0 }}
                                                       viewport={{ once: true }}
                                                       transition={{ duration: 0.7 }}
                                                     >
                                                       <div className="grid md:grid-cols-2 gap-8 items-center">
                                                         <div>
                                                           <h3 className="text-2xl font-bold mb-4">Heading: Get Home Massage Service Delhi Today – Book Now & Relax Tonight!</h3>
                                                           <p className="mb-4 opacity-90">
                                                             Stop bearing pain and stress; book our home massage service Delhi now and let certified therapists reach your flat in just 30 minutes. We work 24/7, serve both men and women, carry clean sheets, warm oils, and give relaxing full-body sessions at no extra travel cost. Pay cash or Paytm after service, enjoy instant pain relief, better sleep, fresh mood; one quick call is enough, so ring today and feel light tonight!
                                                           </p>
                                                           
                                                         </div>
                                                         <div className="flex justify-center">
                                                          
                                                           <a 
                                                               href='https://api.whatsapp.com/send?phone=919217255113'
                                                               target="_blank"
                                                               rel="noopener noreferrer"
                                                               className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                                             >
                                                               <FaWhatsapp className="text-xl mr-3" />
                                                               Book Your Session Now
                                                             </a>
                                                         </div>
                                                       </div>
                                                     </motion.div>
                                                   </div>
                   </section>
                    {/* end */}
                {/* Our Process */}
                <section className="w-full py-10 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
                                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                         {/* Section Header */}
                               <motion.div 
                                 className="text-center mb-20"
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true, margin: "-100px" }}
                                 transition={{ duration: 0.8 }}
                               >
                                 <motion.div
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: 0.2, duration: 0.5 }}
                                 >
                                   <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                   <span className="text-amber-700 font-medium tracking-wider">Process</span>
                                 </motion.div>
                                 
                                 <motion.h2
                                   className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.3, duration: 0.6 }}
                                 >
                                   Our Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">for Spa Services</span>
                                 </motion.h2>
                                 
                                 {/* <motion.p
                                   className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.4, duration: 0.5 }}
                                 >
                                   Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
                                 </motion.p> */}
                                 
                                 <motion.div
                                   className="flex justify-center mt-10"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.5, duration: 0.5 }}
                                 >
                                   <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                                 </motion.div>
                               </motion.div>
                                     
                                         {/* Process Steps */}
                                         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                           {processSteps.map((step, index) => (
                                             <motion.div
                                               key={index}
                                               className="relative bg-white shadow-lg rounded-2xl px-6 pt-24 pb-10 text-center hover:shadow-xl transition-shadow duration-300"
                                               initial={{ opacity: 0, y: 40 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true }}
                                               transition={{ duration: 0.5, delay: index * 0.2 }}
                                             >
                                               {/* Step Number */}
                                               <div className="absolute top-4 left-4 text-3xl font-bold text-amber-300 opacity-30 z-0">
                                                 {step.number}
                                               </div>
                                     
                                               {/* Image */}
                                               <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-rose-200 via-amber-100 to-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                                 <Image
                                                   src={step.image}
                                                   alt={step.title}
                                                   layout="fill"
                                                   objectFit="cover"
                                                   className="rounded-full"
                                                 />
                                               </div>
                       
                                     
                                               {/* Title */}
                                               <h4 className="text-2xl font-semibold text-amber-800 mb-4 font-serif">
                                                 {step.title}
                                               </h4>
                                     
                                               {/* Description */}
                                               <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                                             </motion.div>
                                           ))}
                                         </div>
                                       </div>
                                      </section>
                {/* End Our Process */}


              
              {/* Our Therapy Experts */}
                    <section className="py-16 px-4 bg-gradient-to-br from-[#f5fdfc] via-[#fcf5e9] to-[#f9f1e2]">
                      <div className="max-w-7xl mx-auto">
                        
                        <div className="text-center mb-16">
                        <motion.p
                          className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          Experts Therapy
                        </motion.p>
                        
                        <motion.h2
                          className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          Get massage service <span className="text-amber-600"> in Delhi with Special Offer</span>
                        </motion.h2>
                        
                        <motion.p
                          className="text-gray-600 max-w-2xl mx-auto text-lg"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                           Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
                        </motion.p>
                      </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                          {teamMembers.map((member, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
                            >
                              <div className="relative h-96 overflow-hidden">
                                <Image
                                loading="lazy"
                                  src={member.image}
                                  alt={member.name}
                                  width={400}
                                  height={400}
                                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                                  <h3 className="text-white text-xl font-semibold">
                                    {member.name}
                                  </h3>
                                  <p className="text-yellow-300">{member.designation}</p>
                                </div>
                              </div>
                               <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.WhatsApp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaWhatsapp /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  {/* <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a> */}
                </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </section>
                     {/* End Our Therapy Experts */}
              {/* end Testimonials */}
              <section className="relative bg-white py-16 px-4 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-20 rounded-xl" />

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                    Enjoy 1st Visit Offer at Just ₹1999
                  </h2>

                  <p className="text-gray-600 text-base sm:text-lg mb-3">
                    Take advantage of our Affordable <a href='/spa-price-in-delhi'><strong className="text-amber-600 font-medium">spa price in delhi</strong></a> and claim exclusive first visit offer for only ₹1999! Experience our luxurious treatments and Find Complete relaxation at an cheap & affordable price.
                  </p>

                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                   Relax with our hotel spa service in Delhi NCR—we bring full-body massage to your 4, 5, 7-star room. Enjoy Ayurvedic oil therapy, stress relief, and jet-lag treatment without stepping out. Premium spa near airport, Aerocity, Gurgaon; 24-hour open, doorstep service, best price. Book once, sleep deep, wake fresh.
                  </p>

                  <ul className="flex justify-center gap-6 flex-wrap text-gray-800 font-medium text-base mb-10">
                    {["4 Star Hotels", "5 Star Hotels", "7 Star Hotels"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="text-green-500 w-5 h-5" /> {item}
                      </li>
                    ))}
                  </ul>

                  <a href="https://api.whatsapp.com/send?phone=919217255113" className="bg-amber-600 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-amber-700 transition shadow-md">
              Book an Appointment
            </a>
                </div>
              </section>
 {/* Testimonials */}
              <section className="mt-20 py-18 px-16 md:px-16 bg-gradient-to-br from-amber-900 to-amber-700 relative overflow-hidden rounded-3xl shadow-xl">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="pattern-dots pattern-amber-500 pattern-bg-transparent pattern-opacity-100 pattern-size-4 w-full h-full"></div>
          </div>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Heading and Subheading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready for Your <span className="text-amber-300">Spa Journey?</span>
            </motion.h2>

            <motion.p
              className="text-amber-300 uppercase font-semibold tracking-wider mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our expert therapists are waiting to guide you through a transformative wellness experience.
            </motion.p>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-3 gap-6 justify-center items-center">
              <a
                href="tel:+919217255113"
                className="bg-white text-amber-700 px-8 py-4 rounded-full font-bold shadow-md hover:bg-amber-100 transition-all duration-300"
              >
                📞 Call to Book: +91 9217255113
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-white/10 transition-all duration-300"
              >
                ✉️ Send Inquiry
              </a>
              <a
                href="/outlets"
                className="bg-amber-300 text-amber-900 px-8 py-4 rounded-full font-bold shadow-md hover:bg-amber-400 transition-all duration-300"
              >
                💆‍♀️ View Outlets
              </a>
            </div>
          </div>
              </section>
          {/* Call to Action */}
          {/* <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/30">
              View All Services
            </button>
            <p className="mt-6 text-amber-700 max-w-xl mx-auto">
              Experience the difference of our premium spa treatments. Book a consultation today and discover your path to wellness.
            </p>
          </motion.div> */}
        
        
        {/* Corner decorative elements */}
        <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-amber-400/50"></div>
        <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-amber-400/50"></div>
        <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-amber-400/50"></div>
        <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-amber-400/50"></div>
      </section>
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
      </div>
      </main>
      
    );
  }
