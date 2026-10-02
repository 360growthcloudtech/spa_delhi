
'use client';
import React from 'react';
// import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
// import {Raleway } from 'next/font/google'
import WhatsappFloat from '../components/WhatsappFloat';
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { FaHotTub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { Building2 } from "lucide-react";
import { Star, MapPin, Sparkles, Hotel } from 'lucide-react';
import { FaHands, FaHeartbeat, FaClock, FaEye, FaBullseye, FaHandsHelping } from 'react-icons/fa'



// const raleway = Raleway({
//   subsets: ['latin'],
//   variable: '--font-raleway',
//   weight: ['300', '400']
// })

// All FontAwesome icons from react-icons/fa
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpa,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaHotel,
  FaCrown
} from 'react-icons/fa';
const faqs = [

  {
    question: "What makes Luxury Russian Spa different from other massage services in Delhi?",
    answer: "The remarkable difference is that at Luxury Russian Spa, we have integrated luxury, professionalism and personalization. We provide our services in high-end hotels only, so the atmosphere is world-class with complete relaxation.",
    icon: <FaSpa className="text-teal-600" />
  },
  {
    question: "Can I book a couple massage at my hotel room in Delhi?",
    answer: "Absolutely! Luxury Russian Spa offers a couple massages that are delivered right in your hotel room to produce the ideal marital and refreshing experience.",
    icon: <FaHandSparkles className="text-teal-600" />
  },

  {
    question: "Are your therapists certified and experienced?",
    answer: "Yes, all our therapists are qualified practitioners with decades of experience in various massage therapies, ensuring they are both safe and effective.",
    icon: <FaLeaf className="text-teal-600" />
  },
  {
    question: "Do you offer late-night massage services in hotels in Delhi?",
    answer: "Yes, Luxury Russian Spa offers convenient opening and closing times, including late-night sessions, allowing travelers and guests can relax at unusual times.",
    icon: <FaSpa className="text-teal-600" />
  },
  {
    question: "How can I book my massage session?",
    answer: "Reservation is easy, select your hotel, select a therapy and reserve. We have a rapid, smooth and safe booking system.",
    icon: <FaHotTub className="text-teal-600" />
  },
  {
    question: "Need Luxury massage in Luxury Russian Spa? Book Today?",
    answer: "We revisit the concept of relaxation at Luxury Russian Spa by incorporating a luxurious, comfortable and professional approach. You are there to do business, have fun, or fall in love; our services will provide you with a memorable experience of wellness in Delhi. It is not too late and you can book your massage therapy and enjoy the reason why Luxury Russian Spa is the No.1 Massage Brand in Delhi.",
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
    features: ["International Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "Facial Session", "120 min Session"],
    highlight: false,
    ctaLink: "#",
    icon: <FaCrown className="text-amber-500" />
  }
];

const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/staff1.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/staff2.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/staff3.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
];

const featuresData = [
  {
    title: "Wide Range of Luxurious Services",
    description:
      "Luxury Russian Spa offers a wide range of massage treatments, carefully selected to suit each individual's mood, lifestyle, and requirements. Since a Full-Body Massage can be so invigorating, our B2B Massage and couples ' massages are designed to uplift your physical and emotional well-being. Every session is designed to offer the utmost relaxation, and each visit becomes a journey of comfort to remember.",
    image: "/images/HelpstoDe-Stress.webp",
  },
  {
    title: "Highly Skilled & Professional Therapists",
    description:
      "In our opinion, the competence of therapists significantly influences the quality of a spa. We have a team of certified, trained and highly skilled therapists at Luxury Russian Spa who know the art of healing touch. They are not only interested in relaxation but also in providing high-quality personalised care, which helps reduce stress and enhances the state of well-being by improving blood flow and circulation.",
    image: "/images/improvebloodflow.webp",
  },
  {
    title: " Luxurious Ambience & Top Hotels Partnership",
    description:
      "The difference that makes Luxury Russian Spa special is that we provide our exclusive services in 5-star hotels in Delhi NCR only, in places like Connaught Place, Dwarka, Aerocity, Noida and Gurgaon. Through these alliances, we can offer massages in five-star hotel environments, with a blend of both luxury and peace. The calmness, modernity and professionalism have guaranteed you the best spa experience in Delhi.",
    image: "/images/SkinMoreRadiant.jpeg",
  },
];
const services = [
  {
    title: "Aromatherapy",
    description: "Essential oils for emotional and physical well-being",
    icon: "🌸",
  },
  {
    title: "Deep Tissue",
    description: "Targets chronic muscle tension with slow, deep pressure",
    icon: "💆‍♂️",
  },
  {
    title: "Hot Stone Therapy",
    description: "Warm stones to melt away tension and improve circulation",
    icon: "🪨",
  },
  {
    title: "Couples Massage",
    description: "Shared relaxation experience for two in a private suite",
    icon: "👫",
  },
];
const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "International Therapist",
];

{/* Our Process */ }
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
{/* End Our Process */ }
const outlets = [
  {
    name: "JW Marriott Hotel Aerocity",
    desc: "Luxury spa at the heart of downtown with panoramic city views",
    rating: 5,
    tag: "Hotel Spa",
    icon: <Sparkles className="w-6 h-6 text-amber-600" />
  },
  {
    name: "Lemon Tree Premier Aerocity",
    desc: "Beachfront sanctuary with ocean-inspired treatments",
    rating: 4.9,
    tag: "Hotel Spa",
    icon: <Hotel className="w-6 h-6 text-amber-600" />
  },
  {
    name: "Novotel New Delhi Aerocity",
    desc: "Rooftop wellness center with city skyline views",
    rating: 4.8,
    tag: "Hotel Spa",
    icon: <Building2 className="w-6 h-6 text-amber-600" />
  },
  {
    name: "The Grand New Delhi",
    desc: "Historic mansion transformed into a luxury spa retreat",
    rating: 5,
    tag: "Hotel Spa",
    icon: <MapPin className="w-6 h-6 text-amber-600" />
  },
];

// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
// const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function Abpage({
  imageSrc = '/images/staff5.jpg',
  alt = 'Relaxing spa treatment',
  title = 'Our Team of Certified Indian & International Therapists',
  subtitle = 'Rejuvenate your body and mind with our signature therapies designed for ultimate comfort and wellness.',
  ctaText = 'Book Your Session',
  ctaHref = '#book',
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="font-sans overflow-hidden">

      {/* Banner */}
      {/* <section
      className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/aboutusbanner.jpg')", // ✅ Change image as needed
      }}
    >
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide font-[PlayfairDisplay]">
          Discover Tranquility
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Welcome to our world of calm and luxury. Rejuvenate your body and soul.
        </p>
      </motion.div>
    </section> */}
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
              <span className="text-amber-600 font-light tracking-widest">ABOUT US</span>
              <div className="w-12 h-px bg-amber-600"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-800">

              <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Welcome</span>
              To Luxury Russian Spa
              <span className="block mt-2 font-medium"> Luxury Spa <span className="text-rose-600">Services Across NCR</span></span>
            </h1>

            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At Luxury Russian Spa, we are not only a massage centre, but also your entire companion in relaxation, rejuvenation, and overall well-being. Premium services include spa therapies designed to restore your body, mind, and spirit, and are offered at the city's most prestigious hotels in Delhi.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/spa-price-in-delhi"
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Prices</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

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

          {/* Image section - more elegant */}
          <div className="relative h-80 md:h-96 lg:h-[450px]">
            <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
              <div className="relative w-full h-full">
                <img
                  src="/images/aromatherapy-featured-jpg.webp" // ✅ Yahan apna image path daal
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
      {/* ////// */}
      {/* Services Section */}

      {/* End Services Section */}
      {/* about us */}
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
              <span className="mr-2">✦</span> About Our Luxury Russian Spa
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our Promise –<span className="relative">
                <span className="text-amber-600 z-10 relative">Luxury, Privacy & Professional Service</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
              </span>
            </motion.h2>
            <p className="text-gray-700 text-lg">
              Luxury Russian Spa is not just another massage and wellness spa it is a place where luxury, relaxation, and holistic healing collide. We are very proud to have re-engineered the concept of body wellness by incorporating the old massage therapy with modern spa ideas. Having launched with the aim of offering a stress-free holiday resort to working professionals, couples, and travellers, Luxury Russian Spa has emerged to be one of the most reliable and most demanded wellness resorts in the Delhi NCR.
            </p>
            <p className="text-gray-700 text-lg">
              Our exceptionally trained therapists, top of the world spa facilities, keen concern towards hygiene and comfort assure our all the guests a memorable relaxing experience. Unlike other spas, Luxury Russian Spa believes in designing a personalized therapy that can do best to your body needs, be it the need to relax and unwind after a hectic day, revitalize your body after a busy day, or even to have a spa date with your loved one.
            </p>
            <p className="text-gray-700 text-lg">
              We have established an image over the years not only of providing quality services but also of an environment that is safe, luxurious, and customer-centric. Luxury Russian Spa is renowned today as the premier body massage service in Delhi, offering a diverse range of services that include full-body therapies, Ayurvedic treatments, couples' massages, and B2B massages.
            </p>

            {/* <p className="text-gray-700 text-lg">
              Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
              From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit. Our body spa treatments combine traditional techniques with modern wellness practices, ensuring every guest experiences deep relaxation and rejuvenation. Whether you seek relief from stress, muscle tension, or simply wish to indulge in self-care, our expert therapists tailor each session to your unique needs, helping you restore balance and vitality. </p> */}
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] relative">
              <Image src="/images/about-luxury-russian-spa.jpg" alt="About Our Luxury Russian Spa" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] relative">
              <Image src="/images/hotel-andaz-delhi.jpg" alt="Luxury Hotel Spa in Delhi" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* luxury spa content section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
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
              <span className="text-amber-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6 font-serif"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Top Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Luxury Spa in Delhi Noida Gurgoan</span>
            </motion.h2>

            <motion.p
              className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover our unique, high-end spa locations in Delhi, each offering world-class treatment.
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
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
            {/* Image */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/spa-therapist-team.jpg"
                alt="Luxury Spa in Delhi"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg p-8 rounded-xl"
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Your Trusted Massage <span className="relative">
                  <span className="text-amber-600 z-10 relative">Spa in Karol Bagh for Luxury & Healing</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                </span>
              </motion.h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our <span className="font-semibold text-amber-700"><a href='/'>massage spa in Delhi</a></span> was founded with one goal in mind: to give people struggling to find peace a genuine sense of relaxation. Professional therapists, high-quality oils, and customized treatments come together here to create a long-lasting feeling of renewal — blending modern techniques with traditional practices to build therapy plans that fit your body and lifestyle.
              </p>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
            {/* Text */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg p-8 rounded-xl order-2 md:order-1"
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Comfort & Wellness <span className="relative">
                  <span className="text-amber-600 z-10 relative">at Our Luxury Massage Spa in Connaught Place</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                </span>
              </motion.h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our full-body massage in Connaught Place is the perfect way to unwind, with deep relaxation therapy led by experienced massage therapists. We combine modern techniques with traditional practices to design therapy plans suited to your body and lifestyle — one of the reasons we're known as one of the most trusted luxury spas in Delhi.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <Image
                src="/images/239544.jpg"
                alt="Full Body Massage in Connaught Place"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* end luxury spa content section */}
      {/* //// */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT: Image with stylish overlay */}
            <div className="relative order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-80 sm:h-[420px] lg:h-[520px]">
                <Image
                  src='/images/185.jpg'
                  alt={alt}
                  fill
                  className="object-cover transform-gpu transition-transform duration-700 ease-out hover:scale-105"
                  priority
                />
              </div>

              {/* soft radial accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 rounded-full bg-amber-200 opacity-60 blur-3xl"
              />

              {/* glass info card */}
              <div className="absolute left-6 bottom-6 w-[85%] sm:w-2/3 md:w-1/2 bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md">
                <div className="flex items-start gap-3">
                  <div className="flex-none w-12 h-12 rounded-lg bg-amber-600/95 text-white grid place-items-center font-semibold">SG</div>
                  <div className="flex-1">
                    <p className="text-xs text-amber-900/80 uppercase font-medium">Signature</p>
                    <p className="text-sm font-semibold text-amber-900">Therapy — Relax & Renew</p>
                    <p className="mt-1 text-xs text-gray-700">60 min • Aromatherapy • Expert therapist</p>
                  </div>
                  <div className="flex-none text-right">
                    <p className="text-sm text-amber-900 font-bold">₹1,499</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-600 text-white text-sm font-semibold">Spa Outlet</span>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-amber-900 leading-tight">
                5-Star Experience at<span className="text-amber-600"> Premium Hotel Spa in Aerocity

                </span>
              </h2>

              <p className="mt-4 text-gray-700 max-w-xl">
                We have also had the honour of collaborating with some of the most esteemed hotels to provide in-room massage and <a href='/spa-in-aerocity'><span className="text-amber-600"> spa in Aerocity</span></a>, Connaught Place (CP),  Noida, Gurgaon or Dwarka, Luxury Russian Spa will bring its spa to your door.
              </p>

              {/* three highlight chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
                  <div className="w-8 h-8 rounded-md bg-amber-600/10 grid place-items-center text-amber-700 font-semibold">✓</div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">International Therapists</p>
                    <p className="text-xs text-gray-600">Trained by hospitality pros</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
                  <div className="w-8 h-8 rounded-md bg-amber-600/10 grid place-items-center text-amber-700 font-semibold">★</div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">5-Star Ambience</p>
                    <p className="text-xs text-gray-600">Hotel-grade comfort & privacy</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
                  <div className="w-8 h-8 rounded-md bg-amber-600/10 grid place-items-center text-amber-700 font-semibold">⏱</div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Flexible Slots</p>
                    <p className="text-xs text-gray-600">Morning to late-evening</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
                  <div className="w-8 h-8 rounded-md bg-amber-600/10 grid place-items-center text-amber-700">
                    <FaHotel className="text-lg" />  {/* Hotel icon */}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">5 Star Outlet</p>
                    <p className="text-xs text-gray-600">Morning to late-evening</p>
                  </div>
                </div>
              </div>

              {/* description list */}
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">•</span>
                  <span>Personalised treatment plan after a short consultation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">•</span>
                  <span>Premium oils & clean, scented linens for absolute comfort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">•</span>
                  <span>Strict safety protocols and trained staff at every outlet.</span>
                </li>
              </ul>

              {/* CTA row */}
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
                  className="inline-block px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:scale-[1.02] transition-transform"
                >
                  Book a Session
                </a>

                <a href="/massage-service-in-delhi" className="text-amber-900 font-medium hover:underline">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //// */}
      {/* end content section */}
      {/* new content */}
      <section
        className="bg-gradient-to-b from-amber-50 via-white to-amber-100 py-16"
        aria-labelledby="spa-content-heading"
        role="region"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* IMAGE COLUMN */}
            <motion.div
              className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl bg-white"
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-72 sm:h-96 lg:h-[480px]">
                {imageSrc ? (
                  <Image
                    src='/images/staff5.jpg'
                    alt={alt || 'Spa image'}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-amber-50 text-amber-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 opacity-40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9a5 5 0 1 1 10 0c0 2.96-3.5 6.96-5 8.93C10.5 15.96 7 11.96 7 9z" />
                    </svg>
                  </div>
                )}

                {/* Badge overlay */}
                <div className="absolute left-6 bottom-6 bg-amber-900/85 text-white rounded-xl px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm opacity-90">Signature Package</p>
                  <p className="font-semibold leading-tight">Relax & Renew — 60 mins</p>
                </div>
              </div>
            </motion.div>

            {/* TEXT COLUMN */}
            <motion.div
              className="order-2 lg:order-1"
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-block px-3 py-1 rounded-full bg-amber-600 text-white text-sm font-semibold">Premium Spa</p>

              <h2 id="spa-content-heading" className="mt-6 text-3xl md:text-4xl font-extrabold text-amber-900 leading-tight">{title}</h2>

              <p className="mt-4 text-gray-700 max-w-xl">{subtitle}</p>

              {/* <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
  {ctaHref ? (
    <Link
      href={ctaHref}
      aria-label={ctaText || 'Book session'}
      className="inline-block px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:brightness-95 transition"
    >
      {ctaText}
    </Link>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:brightness-95 transition"
            aria-label={ctaText || 'Book session'}
          >
            {ctaText}
          </button>
        )}

        <a
          href="#learn"
          className="inline-block px-6 py-3 rounded-full border border-amber-200 text-amber-900 font-medium hover:bg-amber-50 transition text-center"
          aria-label="Learn more about treatments"
        >
          Learn More
        </a>
      </div> */}


              {/* === static content blocks (no Feature function) === */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="text-amber-900 font-semibold">Skilled Therapists</h4>
                  <p className="text-sm text-gray-600 mt-1">Certified professionals handpicked for expertise and care.</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="text-amber-900 font-semibold">Safe & Hygienic</h4>
                  <p className="text-sm text-gray-600 mt-1">Strict sanitation protocols and premium linens for client safety.</p>
                </div>
              </div>
              {/* === end static blocks === */}

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 bg-amber-50 px-3 py-2 rounded-full border border-amber-100">
                  <span className="text-amber-900 font-semibold">24+</span>
                  <span className="text-sm text-gray-600">Outlets</span>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 px-3 py-2 rounded-full border border-amber-100">
                  <span className="text-amber-900 font-semibold">5★</span>
                  <span className="text-sm text-gray-600">Hotel partners</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ///// */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left Image */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-80 sm:h-[420px] lg:h-[520px]">
                <Image
                  src="/images/80535.webp"
                  alt="Relaxing spa interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-sm font-medium text-amber-600 uppercase">Our Promise</p>
              <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-amber-900 leading-tight">
                Why Choose Luxury Russian Spa for Relaxation & Wellness
              </h3>
              <p className="mt-4 text-gray-700 max-w-xl">
                A sanctuary crafted for deep relaxation — curated therapies, expert therapists,
                and a mindful experience designed to restore balance.
              </p>

              {/* Static feature points */}
              <div className="mt-8 border-l-2 border-amber-100 pl-6 space-y-6">
                <div className="relative pl-2">
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm">
                    <FaLeaf className="w-3 h-3" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-900">Holistic Therapies</h4>
                  <p className="text-sm text-gray-600 mt-1">We are providing a team of highly experienced <span className="text-sm text-amber-600 mt-1 font-bold">international therapists, Thai therapists, and Indian therapists,</span> all professionally trained in luxury spa treatments.</p>
                </div>

                <div className="relative pl-2">
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm">
                    <FaHands className="w-3 h-3" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-900">Our Services</h4>
                  <p className="text-sm text-gray-600 mt-1">Choose from a wide range of our signature therapies including: <span className="text-sm text-amber-600 mt-1 font-bold">B2B Massage, Couple Massage, Erotic Massage</span></p>
                </div>

                <div className="relative pl-2">
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm">
                    <FaHeartbeat className="w-3 h-3" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-900">5-Star Outlets</h4>
                  <p className="text-sm text-gray-600 mt-1">We proudly serve our guests at luxury 5-star hotels across Delhi NCR: <span className='text-sm text-amber-600 mt-1 font-bold'>Novotel, The Suryaa, The Park</span></p>
                </div>

                <div className="relative pl-2">
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm">
                    <FaClock className="w-3 h-3" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-900">Flexible Timings</h4>
                  <p className="text-sm text-gray-600 mt-1">Extended hours & easy booking to suit busy lives.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* //// */}
      <section className="py-16 bg-white" aria-labelledby="about-extra-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-amber-600 uppercase">About Us — Quick Look</p>
            <h2 id="about-extra-heading" className="mt-3 text-3xl md:text-4xl font-extrabold text-amber-900">
              Our Vision, Mission & Values at Spa in Delhi
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We combine luxury hospitality and evidence-based therapies to create a calm, restorative experience for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <article className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700 mb-4">
                <FaEye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Vision</h3>
              <p className="text-sm text-gray-600">
                To be the best massage centre in Delhi. All treatments are designed not only to restore your muscles but also to rejuvenate your energy, alleviate stress, and promote overall well-being. Ayurvedic massages, including aromatherapy, are among the methods we use in treatment to heal the body.
              </p>
            </article>

            {/* Mission */}
            <article className="bg-white border border-amber-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700 mb-4">
                <FaBullseye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Mission</h3>
              <p className="text-sm text-gray-600">
                We strive to offer a sense of wellness, relaxation, and rejuvenation to all individuals who enter our doors. Our mission is to provide an environment that combines luxury and affordability and where therapies that are designed to meet the lifestyle of each client are offered.
              </p>
            </article>

            {/* Values */}
            <article className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700 mb-4">
                <FaHandsHelping className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Values</h3>
              <p className="text-sm text-gray-600">
                We are of the opinion that trust forms the basis of any wellness endeavour. This is the reason why Luxury Russian Spa ensures the hygiene, privacy, as well as professionalism. All therapists receive specialized training and each session will be quality checked to maintain a safe, comfortable environment among all of our guests.
              </p>
            </article>
          </div>

          {/* Stats & CTA */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <div className="text-amber-900 font-extrabold text-2xl">24+</div>
                <div className="text-sm text-gray-600">Outlets</div>
              </div>
              <div className="text-center">
                <div className="text-amber-900 font-extrabold text-2xl">5★</div>
                <div className="text-sm text-gray-600">Hotel partners</div>
              </div>
              <div className="text-center">
                <div className="text-amber-900 font-extrabold text-2xl">100k+</div>
                <div className="text-sm text-gray-600">Happy customers</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="inline-block px-5 py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:brightness-95 transition"
              >
                Contact & Book
              </a>
              <a
                href="/spa-therapist-jobs-in-delhi"
                className="text-amber-900 font-medium hover:underline"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////// */}

      {/* ///////// */}

      {/* new content */}

      {/* icon uytlet */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
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
              <span className="text-amber-700 font-medium tracking-wider">Hotel Outlet</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Spa Services  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">at Top 5-Star Hotels in Delhi</span>
            </motion.h2>

            <motion.p
              className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover our exclusive spa outlets at top luxury hotels across the city
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

          {/* Enhanced Outlets Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {outlets.map((outlet, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-amber-100 relative overflow-hidden group"
              >
                {/* Premium ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  <span>{outlet.rating}</span>
                </div>

                {/* Icon with subtle shine effect */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-full shadow-inner group-hover:shadow-md transition-all duration-300">
                      {outlet.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Hotel Name */}
                <h3 className="text-xl font-bold text-amber-900 mb-3 font-serif">
                  {outlet.name}
                </h3>

                {/* Tag */}
                <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs px-3 py-1 rounded-full mb-4">
                  {outlet.tag}
                </div>

                {/* Description */}
                <p className="text-amber-800/80 text-sm leading-relaxed mb-6">
                  {outlet.desc}
                </p>

                {/* Decorative line */}
                <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent w-3/4 mx-auto group-hover:via-amber-400 transition-colors duration-300"></div>

                {/* Button */}
                {/* <div className="mt-6">
                <button className="text-amber-700 text-sm font-medium hover:text-amber-900 flex items-center justify-center gap-1.5 mx-auto transition-colors duration-200 group-hover:gap-2">
                  <span>Explore Location</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* icon uytlet */}

      {/* About Us Section */}

      {/* Why Choose */}
      <section className="w-full py-16 bg-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-yellow-100/50 backdrop-blur-sm -z-10" />
        <div className="max-w-7xl mx-auto px-6">
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
              <span className="text-amber-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-amber-900 mb-6 font-serif"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Foreign Certified Staff <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">best for Thai spa & B2B Therapy  in Luxury Russian Spa</span>
            </motion.h2>

            <motion.p
              className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We take pride in the fact that at Luxury Russian Spa we are the first in luxury experience in massage and spa in Delhi. Much of our reputation is based on a flawless combination of professionalism, relaxation and high-quality hospitality. You are either in need of a deep-seated relaxation after a hard-working day or a luxurious weekend getaway, or you need a solution to your stress issues and body pains, Luxury Russian Spa provides the best experience ever.
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


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuresData.map((item, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-800 font-serif mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* content */}
      {/* content section */}
      {/* <section className="bg-gradient-to-b from-[#fffaf5] to-[#f8f0eb] py-16 px-6 md:px-16">
                                      <div className="max-w-6xl mx-auto">
                                        
                                        <motion.div 
                                          className="text-center mb-10 md:mb-12"
                                          initial={false}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6 }}
                                        >
                                          <span className="text-lg font-medium text-amber-700 tracking-widest">OUR SIGNATURE OFFERINGS</span>
                                          <h2 className="text-4xl md:text-5xl font-bold text-[#1f1a17] mt-4 mb-6">Why Guests Choose Our Premium Spa in Delhi, Noida &amp; Gurgaon</h2>
                                          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
                                        </motion.div>
              
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                         
                                          <div>
                                            
                                            <motion.div 
                                              className="bg-white bg-optage-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-[#f0dccb]"
                                              initial={false}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 0.7 }}
                                            >
                                              <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-amber-100 p-3 rounded-xl">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 0 0 -5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1 -6 0 3 3 0 016 0zm6 3a2 2 0 1 1 -4 0 2 2 0 014 0zM7 10a2 2 0 1 1 -4 0 2 2 0 014 0z" />
                                                  </svg>
                                                </div>
                                                <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                  International Staff
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
                                            </motion.div>
                                            
                                            <motion.div 
                                              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#f0dccb]"
                                              initial={false}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 0.7, delay: 0.1 }}
                                            >
                                              <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-amber-100 p-3 rounded-xl">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0 -6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0 -6.364 0z" />
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
                                            </motion.div>
                                          </div>
              
                                          <div>
                                            
                                            <motion.div 
                                              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-[#f0dccb]"
                                              initial={false}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 0.7 }}
                                            >
                                              <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-amber-100 p-3 rounded-xl">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 0 1 -5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1 -18 0 9 9 0 0118 0z" />
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
                                                  {icon: '♻️', text: 'Zero-Waste Policy'},
                                                  {icon: '🌱', text: 'Organic Linens'},
                                                  {icon: '💧', text: 'Water Recycling'},
                                                  {icon: '🌎', text: 'Carbon Offsetting'},
                                                 {icon: '🏺', text: 'Handcrafted Products'}
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
                                            </motion.div>
                                            
                                            <motion.div 
                                              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#f0dccb]"
                                              initial={false}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 0.7, delay: 0.1 }}
                                            >
                                              <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-amber-100 p-3 rounded-xl">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4" />
                                                  </svg>
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#1f1a17]">Home & Hotel Spa</h2>
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
                                            </motion.div>
                                          </div>
                                        </div>
              
                                        <motion.div 
                                          className="mt-16 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-white shadow-xl"
                                          initial={false}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.7 }}
                                        >
                                          <div className="grid md:grid-cols-2 gap-8 items-center">
                                            <div>
                                              <h3 className="text-2xl font-bold mb-4">Special Offer: First Visit Full Body Massage Spa in Delhi @1999 </h3>
                                              <p className="mb-4 opacity-90">
                                                Every visit begins with a confidential wellness consultation where our specialists listen to your concerns and goals. We consider your lifestyle, stress levels, and any physical discomfort to create a truly personalized treatment plan.
                                              </p>
                                              <p className="opacity-90">
                                                Our exclusive loyalty program offers priority booking, complimentary upgrades, and special members-only events. Corporate wellness packages are available for businesses looking to invest in their team's wellbeing.
                                              </p>
                                            </div>
                                            <div className="flex justify-center">
                                              <a 
                                                  href="https://t.me/+yulqEcJa2dxhM2I9" 
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                                >
                                                  <FaTelegram className="text-xl mr-3" />
                                                  Join Telegram Channel
                                                </a>
                                            </div>
                                          </div>
                                        </motion.div>
                                      </div>
      </section> */}
      {/* end */}

      {/* end content */}

      {/* 18+ Exclusive Section */}
      <section
        className="relative py-16 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/luxurySpaRoom.jpg')" }}
      >
        {/* Enhanced gradient overlay with subtle grain texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#3A2415]/80 to-black/90 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto text-[#FAF3E9]">
          {/* Elegant heading with decorative elements */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#fdc28c] to-transparent mb-8" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 text-[#fdc28c] tracking-wide">
              <span className="block text-xl font-light tracking-widest text-[#fdc28c] mb-2">
                PREMIUM WELLNESS DESTINATIONS
              </span>
              24+ Exclusive Body Spa Outlets
            </h2>
            <div className="w-16 h-0.5 bg-[#fdc28c] mt-6" />
          </div>

          {/* Refined description */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed font-raleway tracking-wide">
            Indulge in unparalleled luxury & holistic wellness experiences across our premier 5-star locations worldwide.
          </p>

          {/* Sophisticated features grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {specialFeatures.map((item, index) => (
              <li key={index}>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-[#fdc28c]/30 bg-gradient-to-b from-[#2D1B0F]/60 to-[#1A1109]/60 backdrop-blur-sm hover:border-[#fdc28c]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-black/20">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#fdc28c] group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
                0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
                36.204 0L192 312.69 432.095 72.596c9.997-9.997 
                26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 
                9.997 26.206 0 36.204l-294.4 294.401c-9.998 
                9.997-26.207 9.997-36.204-.001z"/>
                  </svg>
                  <span className="text-left font-light text-[#FAF3E9] group-hover:text-[#fdc28c] transition-colors">
                    {item}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Decorative corner elements */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#fdc28c]/50" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#fdc28c]/50" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#fdc28c]/50" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#fdc28c]/50" />
        </div>
      </section>

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


    </div>

  );
}
