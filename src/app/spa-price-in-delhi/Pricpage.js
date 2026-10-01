'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaHotel, FaCrown, FaCheckCircle, FaStar, FaHotTub } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import WhatsappFloat from '../components/WhatsappFloat';
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
import { AnimatePresence } from "framer-motion";
import { FaTelegram } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Sparkles } from 'lucide-react';
import { Camera } from "lucide-react";
import { MapPin } from 'lucide-react';
import { Flower2, Bath, HeartHandshake } from "lucide-react";




export default function Pricpage() {
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
  const faqs = [
    {
      question: "What is the spa price in Delhi for a first visit?",
      answer: "Our spa price in Delhi starts from ₹1999 for a first-visit session. Pricing is transparent with no hidden charges, and we regularly run first-visit offers and seasonal discounts.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What is the full body massage price in Karol Bagh?",
      answer: "A full body massage at our Karol Bagh outlet starts from ₹1999. Reach out to our support team on WhatsApp for the exact price based on the treatment and duration you want.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    {
      question: "Do you offer package discounts and combos?",
      answer: "Yes, booking a combo session or more than one treatment together unlocks an extra discount. Check the pricing packages above, or ask our team while booking for the best current deal.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Do you run seasonal promotions on pricing?",
      answer: "Yes, we run seasonal and festival promotions with discounts on both combo packs and regular sessions. Message us on WhatsApp for whatever offer is currently running.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What are the spa prices in Noida?",
      answer: "Our Noida outlet offers the same transparent pricing as Delhi, starting from ₹1999, with both male and female therapist options for corporate employees and residents nearby.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Can I pay online for my services?",
      answer: "Yes, we offer secure online payment options through our website for your convenience.",
      icon: <FaSpa className="text-teal-600" />
    },
  ];

  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "30 min Consultation"],
      highlight: false,
      ctaLink: "https://wa.link/gdjc65",
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹13999/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "https://wa.link/gdjc65",
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "Premium Package",
      price: "₹4999/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Massage + Steam", "Aromatherapy", "Facial Session", "60 min Session"],
      highlight: false,
      ctaLink: "https://wa.link/gdjc65",
      icon: <FaCrown className="text-amber-500" />
    }
  ];
  const outlets = [
    {
      title: 'Aerocity',
      description: 'Our Aerocity outlet lists every Thai massage, couple spa, and full-body session with clear, upfront pricing — no surprises. Set inside luxury hotels near IGI Airport, we run 24×7 with sessions starting at ₹1,999, including a complimentary steam and shower.',
      image: '/images/RoseateHouse.jpg',
      link: 'https://wa.link/gdjc65',
      pageLink: '/spa-in-aerocity',
    },
    {
      title: 'New Friends Colony (NFC)',
      description: 'Our New Friends Colony centre publishes its full body-spa, Swedish, and couple massage pricing online, so there\'s nothing to guess before you arrive. Expect hotel-style rooms, organic oils, and late-night slots, with full body massage starting from ₹1,799.',
      image: '/images/fpkdl.com_960_1758981740_exterior-view-bellagio-caesars-palace-hotel-las-vegas-nevada-march-6-2024_943860-2321.jpg',
      link: 'https://wa.link/gdjc65',
      pageLink: null,
    },
    {
      title: 'Connaught Place',
      description: 'Right on Janpath, our Connaught Place outlet welcomes shoppers and office-goers with clear, upfront pricing. Book a Thai massage or a couple spa session from ₹2,099, both including a shower, steam, and complimentary foot ritual. Sessions run 60 to 120 minutes, daily.',
      image: '/images/pexels-pavel-danilyuk-9119782.jpg',
      link: 'https://wa.link/gdjc65',
      pageLink: '/spa-in-connaught-place',
    },
    {
      title: 'Grand Vasant Kunj',
      description: 'Tucked inside premium malls in Vasant Kunj, we publish every full-body massage rate online — no hidden costs. Solo and couple packages start from ₹1,899, with Himalayan salt rooms, Thai therapists, and free pickup within 5 km.',
      image: '/images/lajpatnagar.jpg',
      link: 'https://wa.link/gdjc65',
      pageLink: '/spa-in-vasant-kunj',
    },
  ];
  const teamMembers = [
    {
      name: "Chelsea Foster",
      designation: "Spa Therapist",
      image: "/images/spamodel.webp",
      socials: {
        WhatsApp: "https://wa.link/gdjc65",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Lane Parsons",
      designation: "Spa Therapist",
      image: "/images/spaExper2.webp",
      socials: {
        WhatsApp: "https://wa.link/gdjc65",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Haven West",
      designation: "Spa Therapist",
      image: "/images/spamodel2.webp",
      socials: {
        WhatsApp: "https://wa.link/gdjc65",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Avery Grace",
      designation: "Spa Therapist",
      image: "/images/spaExpert4.webp",
      socials: {
        WhatsApp: "https://wa.link/gdjc65",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
  ];
  {/* Our Process */ }
  const processSteps = [
    {
      number: '01',
      title: 'Select Hotel And Spa Outlet',
      description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
      image: '/images/mmeeting.webp',
    },
    {
      number: '02',
      title: 'Appointment',
      description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
      image: '/images/spa-treatments.jpg',
    },
    {
      number: '03',
      title: 'Visit',
      description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
      image: '/images/finalizing.avif',
    },
  ];
  {/* End Our Process */ }

  return (

    <main>
      {/* Banner */}
      <section
        className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/steptodown.com870307.webp')"
        }}
      >
        {/* Gradient Overlay with soft blur */}
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1
            className={`text-3xl md:text-5xl font-bold text-white leading-tight font-serif`}
          >
            Spa Price in Delhi — Clear, Honest Rates From ₹1999
          </h1>
          <p
            className={`mt-6 text-lg md:text-1xl text-white/90 font-light`}
          >
            Choose from flexible packages crafted for every need. No hidden fees. Just luxury and comfort, always within reach.
          </p>

          <a
            href="/massage-service-in-delhi"
            className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Our Services
          </a>
        </div>
      </section>
      <div className="w-full overflow-x-hidden bg-white relative">
        {/* End Banner */}

        <section id="services-section" className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-amber-50 to-white" >

          {/* Decorative Background (applies to full page) */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200 mix-blend-multiply"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-100 mix-blend-multiply"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-amber-300 mix-blend-multiply opacity-40"></div>
          </div>
          {/* Floating ✿ */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                ✿
              </motion.div>
            ))}
          </div>

          {/* Amber Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-700/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-800/5 to-transparent"></div>
          </div>
          {/* Section Title */}
          <div className="relative z-10 max-w-6xl mx-auto px-4">

            <motion.h2
              className="text-5xl md:text-6xl font-light text-center text-amber-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Spa & Massages Prices in Delhi
            </motion.h2>
            <motion.div
              className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformOrigin: 'center' }}
            ></motion.div>
            <motion.p
              className="mt-10 text-center text-xl md:text-2xl text-amber-800 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.
            </motion.p>
            {/* Price List Section */}
            <section className="relative z-10 mt-16 max-w-3xl mx-auto px-4">
              <motion.ul
                className="space-y-8"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  { title: "B2B Therapy", price: "₹1999", duration: "60 Minutes" },
                  { title: "Ayurvedic Massage", price: "₹1999", duration: "60 Minutes" },
                  { title: "Traditional Thai Massage", price: "₹1499", duration: "60 Minutes" },
                  { title: "Sandwich Massage", price: "₹1999", duration: "60 Minutes" },
                  { title: "Hotel Spa", price: "₹15999", duration: "60 Minutes" },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-amber-200 pb-4"
                  >
                    <div>
                      <h4 className="text-xl font-semibold text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-amber-700 font-light mt-1">{item.duration}</p>
                    </div>
                    <span className="text-amber-600 text-lg font-medium mt-2 md:mt-0">{item.price}</span>
                  </li>
                ))}
              </motion.ul>
            </section>
            {/* End Price List Section */}
            {/* CTA Button */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href='/outlets'>
                <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/30">
                  Outlets
                </button>
              </a>
              <p className="mt-6 text-amber-700 max-w-xl mx-auto">
                Experience the difference of our premium spa treatments. Book a consultation today and discover your path to wellness.
              </p>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-amber-400/50"></div>
          <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-amber-400/50"></div>
          <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-amber-400/50"></div>
          <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-amber-400/50"></div>
        </section>
      </div>
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
              Full Service Pricing — <span className="text-amber-600">Delhi, Noida &amp; Gurgaon</span>
            </motion.h2>
            <motion.p
              className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Tailored spa experiences starting from just ₹1999. Choose from our exclusive massage options, designed for your total relaxation and rejuvenation.
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
          {/* Section header */}
          <div className="text-center mb-10 md:mb-12">
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
              Spa Price in Delhi – First Visit Only ₹1999 | <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Top Spa in Delhi with Price & Offers.</span>
            </motion.h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>


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
                        src="/images/spapic.jpg" // Change path accordingly
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
                          <span className="text-stone-700">Couple Massage</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-amber-600 mr-2">✓</span>
                          <span className="text-stone-700">Jacuzzi Bath</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-amber-600 mr-2">✓</span>
                          <span className="text-stone-700">Private Room</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-amber-600 mr-2">✓</span>
                          <span className="text-stone-700">Oil & Cream Massage</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-amber-600 mr-2">✓</span>
                          <span className="text-stone-700">Aromatherapy</span>
                        </li>
                      </ul>
                      <a href='https://wa.link/gdjc65'>
                        <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                          Book Now
                        </button>
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
                  Looking for the best spa price in Delhi? Your search ends here. First-time guests pay just ₹1,999 for any 60-minute therapy — Swedish, aromatherapy, deep tissue, or Thai — with no hidden costs. The price already includes a steam shower, fresh towels, herbal tea, and a complimentary head massage. Our CIDESCO-trained therapists work in freshly sanitized rooms with clean linen for every client, and couples can book together at the same ₹1,999 rate each. We're located in a safe South Delhi spot, a five-minute walk from the metro with free parking, and open daily from 11 am to 10 pm (last booking 9 pm). Reserve by call or WhatsApp — we confirm within minutes.
                  {/* <span className="font-medium text-stone-800">hot stone massage</span>, 
                      <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                      and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                      designed private sanctuaries. */}
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
                    <div className="text-amber-600 text-2xl mb-2">★</div>
                    <h4 className="font-medium text-stone-800">starting At 1999</h4>
                    <p className="text-sm text-stone-600 mt-1">5-star rated luxury spa</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                    <div className="text-amber-600 text-2xl mb-2">🙎🏼‍♀️</div>
                    <h4 className="font-medium text-stone-800">Foreigner Therapist</h4>
                    <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                    <div className="text-amber-600 text-2xl mb-2">👩🏻‍❤️‍💋‍👨🏼</div>
                    <h4 className="font-medium text-stone-800">Couples Welcome</h4>
                    <p className="text-sm text-stone-600 mt-1">Private couple suites</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                    <div className="text-amber-600 text-2xl mb-2">🌿</div>
                    <h4 className="font-medium text-stone-800">Organic Products</h4>
                    <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href='/massage-service-in-delhi'>
                    <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                      View Treatments
                    </button>
                  </a>
                  <a href='https://wa.link/gdjc65'>
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

      {/* //// */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
              What's Included in <span className="text-amber-600">Every Session</span>
            </motion.h2>
            <motion.p
              className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Thai, Couple & Full Body Massage in Delhi Price List with Free Steam
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
          {/* Heading */}


          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <Flower2 className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Aroma Therapy</h3>
              <p className="text-gray-900">
                Warm lavender and lemongrass oils ease tension and lift your mood. A 60-minute aromatherapy session is ₹1,999 on your first visit, with a complimentary steam included.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <Bath className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Luxury Spa Bath</h3>
              <p className="text-gray-900">
                A deep soaking tub with warm water, rose petals, and a jet spray for your back — plus a complimentary head massage. First-time guests pay just ₹1,999.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <HeartHandshake className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Healing Massage</h3>
              <p className="text-gray-900">
                Firm, focused pressure releases muscle knots and improves circulation. A 60-minute healing massage is ₹1,999, with a 90-minute upgrade available for just ₹499 more.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* //// */}

      {/* /////? */}
      <section className="relative bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side Content */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900 leading-tight">
              Thai, Couple &amp; Full Body Massage <span className="text-amber-600">— Priced Simply</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Confused about spa pricing in Delhi? We keep it simple with a clear price card and no hidden charges. Thai massage is a flat ₹1,999 for a full 60-minute session, with therapists using knees, elbows, and gentle stretches to release tension from your back. A couples spa session is just ₹3,998 for two people in the same private room, with soft music and a relaxing ambience — perfect for an anniversary treat. Every first-visit option — Swedish, aromatherapy, or deep tissue — is priced the same at ₹1,999, so you can pick based on what you need rather than your budget. Want more time? A 90-minute full body massage upgrade is just ₹499 extra, still one of the most affordable in the city. We're open 11 am to 10 pm, five minutes from the metro with free parking. Book on WhatsApp and pay after your session.
            </p>
            {/* <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p> */}
            {/* <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p> */}

            {/* Highlights */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <Flower2 className="w-10 h-10 text-amber-600 mb-2" />
    <p className="font-semibold text-gray-800">Relaxing Aroma</p>
  </div>

  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <Bath className="w-10 h-10 text-amber-600 mb-2" />
    <p className="font-semibold text-gray-800">Luxury Spa</p>
  </div>

  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <HeartHandshake className="w-10 h-10 text-amber-600 mb-2" />
    <p className="font-semibold text-gray-800">Healing Touch</p>
  </div>
</div> */}
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Spa Pricing in Delhi - Private Treatment Room"
                width={600}
                height={600}
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
              ₹1,999 First Visit
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-10 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
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
              <span className="text-amber-700 font-medium tracking-wider">Process</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We Offer Luxurious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Treatments at Great Rates</span>
            </motion.h2>

            {/* <motion.p
            className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
          </motion.p> */}

            <motion.div
              className="flex justify-center mt-10"
              initial={false}
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
                initial={false}
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
      {/* About Us Section */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
              Full Body Massage in Delhi — Straightforward Pricing
            </h2>
            <p className="text-gray-700 text-lg">
              We keep our pricing simple, with the full rate posted at the door and no hidden charges or pressure to tip. Your first visit gets you a full 60-minute session — Swedish, aromatherapy, deep tissue, or Thai — for ₹1,999, along with a free steam shower, fresh towels, and lemon-honey water. Couples can book together for ₹3,998, in the same private room with soft music and rose petals on request. Want a longer session? A 90-minute upgrade is just ₹499 more. We're open 11 am to 10 pm, a five-minute walk from the metro, with free parking on-site. Reach out on WhatsApp, get your slot confirmed within minutes, and pay after your session.
            </p>

            {/* <p className="text-gray-700 text-lg">
                    Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                     From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
                     Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                  </p> */}
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/new5.jpeg" alt="Luxury Spa Room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/spa-treatments.jpg" alt="Massage Session" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* outlate */}
      <section className="py-10 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Best Spa in Delhi — <span className="text-amber-600">By the Numbers</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Compare pricing across our Aerocity, New Friends Colony, Connaught Place &amp; Vasant Kunj outlets.
            </motion.p>
          </div>

          {/* Grid Layout - 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {outlets.map((outlet, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={outlet.image}
                    alt={outlet.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10"></div> */}
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">
                    {outlet.title}
                  </h3>
                  <p className="text-gray-700 text-base mb-4">
                    {outlet.description}
                  </p>
                  <a
                    href="https://t.me/+yulqEcJa2dxhM2I9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <FaTelegram className="text-xl mr-3" />
                    Chat On Telegram
                  </a>
                  {outlet.pageLink && (
                    <Link href={outlet.pageLink} className="block mt-3 text-sm font-semibold text-amber-700 hover:underline">
                      View full {outlet.title} outlet details →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* End outlate */}
      {/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#fffaf5] via-[#fcf5e9] to-[#f9f1e2]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-10 md:mb-12">
            <motion.p
              className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Experts Therapy
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              International<span className="text-amber-600"> Therapists at affordable Price</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={false}
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