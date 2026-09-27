import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hotel, Star, MapPin, Heart, ArrowRight } from 'lucide-react';

const LuxuryHotelPartners = () => {
  const [activeHotel, setActiveHotel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-rotate featured hotels
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveHotel(prev => (prev + 1) % hotels.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const hotels = [
    {
      id: 1,
      name: "Andaz Delhi",
      location: "Aerocity, New Delhi",
      image: "/images/hotel-andaz-delhi.jpg",
      rating: 4.9,
      description: "A luxurious retreat near IGI Airport offering high-level ambiance and signature hotel spa therapy.",
      features: ["In-Room Spa", "Russian Therapist", "Private Suites", "Discreet Service"]
    },
    {
      id: 2,
      name: "The Park Hotel",
      location: "Connaught Place, New Delhi",
      image: "/images/hotel-resort-pool.jpg",
      rating: 4.8,
      description: "Experience premium relaxation in Central Delhi with private therapist sessions delivered to your room.",
      features: ["Couple Massage", "Aromatherapy", "Sandwich Massage", "24/7 Booking"]
    },
    {
      id: 3,
      name: "The Suryaa",
      location: "New Friends Colony, New Delhi",
      image: "/images/hotel-grand-palace.jpg",
      rating: 4.7,
      description: "Quiet, calm surroundings with exceptional full-body and Thai wellness therapies delivered right to your suite.",
      features: ["Full Body Therapy", "Swedish Massage", "Private Setting", "Certified Staff"]
    },
    {
      id: 4,
      name: "Welcomhotel by ITC",
      location: "Dwarka, New Delhi",
      image: "/images/hotel-grand-vista.jpg",
      rating: 4.9,
      description: "Grand 5-star luxury and serene hospitality with on-demand room spa sessions across West & South Delhi.",
      features: ["VIP Privilege", "Deep Tissue", "B2B Massage", "Foreign Therapists"]
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-amber-200/20 blur-3xl -z-0"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <motion.span 
            className="inline-block text-amber-600 font-bold tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Exclusive Partnerships
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-amber-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Luxury Hotel Partners
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience our premium spa services at these exquisite partner locations worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Hotel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <motion.div 
                key={hotel.id}
                className={`relative bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 border-2 cursor-pointer overflow-hidden group ${
                  activeHotel === index 
                    ? 'border-amber-500 shadow-2xl' 
                    : 'border-white hover:border-amber-300'
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveHotel(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Highlight indicator */}
                {activeHotel === index && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl group-hover:bg-amber-200 transition-colors">
                    <Hotel className="w-8 h-8 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                      <span className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                        <Star className="w-4 h-4 mr-1 fill-amber-500" />
                        {hotel.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1 flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-amber-600" />
                      {hotel.location}
                    </p>
                    <p className="text-gray-700 mt-3 line-clamp-2">{hotel.description}</p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Featured Hotel Showcase */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${hotels[activeHotel].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[600px]">
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-amber-300 text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
                      Featured Location
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-3">
                      {hotels[activeHotel].name}
                    </h3>
                    <p className="text-amber-200 mt-1 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {hotels[activeHotel].location}
                    </p>
                  </div>
                  <div className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 mr-1 fill-white" />
                    <span className="text-xl font-bold">{hotels[activeHotel].rating}</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <p className="text-amber-100 text-lg">
                    {hotels[activeHotel].description}
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-amber-300 font-bold mb-3">Resort Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {hotels[activeHotel].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-t from-black/80 to-transparent">
                <motion.button 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Spa Experience
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
                
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                    <span className="text-amber-300 text-sm ml-2">Complimentary spa access</span>
                  </div>
                  <div className="h-4 w-px bg-amber-400/30"></div>
                  <div className="flex items-center">
                    <Hotel className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-300 text-sm ml-2">VIP guest privileges</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 group flex items-center justify-center gap-2 mx-auto">
            Explore All Partner Hotels
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {["Marriott", "Hilton", "Hyatt", "Four Seasons", "Ritz-Carlton"].map((brand, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm border border-amber-100">
                <span className="text-amber-900 font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-amber-400/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-20 w-6 h-6 rounded-full bg-amber-500/30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default LuxuryHotelPartners;



  // const hotels = [
  //   {
  //     id: 1,
  //     name: "The Serenity Resort",
  //     location: "Bali, Indonesia",
  //     rating: 4.9,
  //     description: "A luxurious beachfront retreat with panoramic ocean views and our signature spa treatments.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path d="M11.47 3.84a.75.75 0 0 1 1 .06 0l8.69 8.69a.75.75 0 1 0 1 .06-1.06l-8.689-8.69a2.25 2.25 0 0 0 -3.182 0l-8.69 8.69a.75.75 0 001.06 1 1 .06l8.69-8.69z" />
  //         <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 0 1 -1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.43z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     id: 2,
  //     name: "Azure Heights",
  //     location: "Santorini, Greece",
  //     rating: 4.8,
  //     description: "Stunning cliffside villas with infinity pools and exclusive access to our premium spa services.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1 -.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 0 1 -.879-2.121v-5.02a23.614 23.614 0 0 0 -3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0 -3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 0 1 -.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V4.064z" clipRule="evenodd" />
  //       </svg>
  //     )
  //   },
  //   {
  //     id: 3,
  //     name: "Emerald Bay Resort",
  //     location: "Phuket, Thailand",
  //     rating: 4.7,
  //     description: "Tropical paradise with private villas surrounded by lush gardens and our award-winning spa.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
  //         <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 01 0 1 .5H2.25a.75.75 0 0 1 0 -1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
  //       </svg>
  //     )
  //   },
  //   {
  //     id: 4,
  //     name: "Alpine Sanctuary",
  //     location: "Swiss Alps, Switzerland",
  //     rating: 4.9,
  //     description: "Mountain chalet retreat offering panoramic alpine views and our exclusive wellness programs.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3-3v-9z" clipRule="evenodd" />
  //       </svg>
  //     )
  //   }
  // ];
  //     <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
  //     <div className="max-w-7xl mx-auto">
  //       <div className="text-center mb-14">
  //         <span className="text-amber-600 font-semibold tracking-wider uppercase">Exclusive Partnerships</span>
  //         <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-4 mb-6">
  //           Luxury Hotel Partners
  //         </h2>
  //         <p className="text-xl text-gray-700 max-w-2xl mx-auto">
  //           Experience our premium spa services at these exquisite partner locations around the world
  //         </p>
  //       </div>

  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //           {hotels.map((hotel) => (
  //             <div 
  //               key={hotel.id}
  //               className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 border-2 cursor-pointer ${
  //                 activeHotel === hotel.id 
  //                   ? 'border-amber-500 shadow-xl transform -translate-y-1' 
  //                   : 'border-white'
  //               }`}
  //               onClick={() => setActiveHotel(hotel.id)}
  //             >
  //               <div className="flex items-start gap-4">
  //                 <div className="bg-amber-100 p-3 rounded-xl">
  //                   {hotel.icon}
  //                 </div>
  //                 <div>
  //                   <div className="flex justify-between items-start">
  //                     <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
  //                     <span className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
  //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
  //                         <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  //                       </svg>
  //                       {hotel.rating}
  //                     </span>
  //                   </div>
  //                   <p className="text-gray-600 text-sm mt-1">{hotel.location}</p>
  //                   <p className="text-gray-700 mt-3 line-clamp-2">{hotel.description}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
          
  //         <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-3xl overflow-hidden shadow-2xl">
  //           <div className="h-full flex flex-col">
  //             <div className="p-8 flex-1">
  //               <div className="flex justify-between items-start">
  //                 <div>
  //                   <span className="text-amber-300 text-sm font-medium">Featured Location</span>
  //                   <h3 className="text-3xl font-bold text-white mt-1">
  //                     {hotels.find(h => h.id === activeHotel)?.name}
  //                   </h3>
  //                   <p className="text-amber-200 mt-2">
  //                     {hotels.find(h => h.id === activeHotel)?.location}
  //                   </p>
  //                 </div>
  //                 <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-xl font-bold">
  //                   {hotels.find(h => h.id === activeHotel)?.rating}
  //                 </div>
  //               </div>
                
  //               <div className="mt-6 bg-amber-800/30 backdrop-blur-sm rounded-xl p-5">
  //                 <p className="text-amber-100">
  //                   {hotels.find(h => h.id === activeHotel)?.description}
  //                 </p>
                  
  //                 <div className="mt-6 grid grid-cols-2 gap-4">
  //                   {[
  //                     { name: "Spa Packages", value: "12+" },
  //                     { name: "Treatment Rooms", value: "15" },
  //                     { name: "Swimming Pools", value: "3" },
  //                     { name: "Exclusive Offers", value: "Yes" }
  //                   ].map((item, idx) => (
  //                     <div key={idx} className="text-center">
  //                       <div className="text-amber-300 text-2xl font-bold">{item.value}</div>
  //                       <div className="text-amber-100 text-sm">{item.name}</div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
              
  //             <div className="p-8 bg-amber-900/30">
  //               <button className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
  //                 Book Spa Experience
  //               </button>
  //               <div className="mt-4 flex justify-center">
  //                 <span className="text-amber-300 text-sm flex items-center">
  //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
  //                     <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1 -1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1 -3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 0 0 1 .14-.094l3.75-5.25z" clipRule="evenodd" />
  //                   </svg>
  //                   Complimentary access for hotel guests
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
        
  //       <div className="mt-16 text-center">
  //         <button className="px-8 py-3 bg-white border-2 border-amber-700 text-amber-700 font-bold rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300">
  //           View All Partner Hotels
  //         </button>
  //       </div>
  //     </div>
  //   </section>
  {/* demo 2 */}
        <section className="bg-gradient-to-b from-[#f9f6f2] to-[#f0eae3] py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 relative">
            {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#c5a491]"></div> */}
  
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
              <span className="text-amber-700 font-medium tracking-wider">Sanctuary Story</span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Sanctuary Story</span>
            </motion.h2>
            
            <motion.p
              className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
             Discover the journey, philosophy, and passion that created your urban oasis
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
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Journey Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 000 16zm1-11a1 1 0 1 0 -2 0v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Our Journey</h2>
                  </div>
                  <p className="text-[#6d5d54] mb-4 leading-relaxed">
                    Serenity Springs was born from a simple vision: to create an urban oasis where modern wellness meets ancient healing traditions. Founded in 2010 by renowned holistic therapist Elena Rodriguez, our spa began as a single-treatment room with a passionate mission. Today, we've grown into an award-winning sanctuary serving over 5,000 clients annually, yet we've maintained our core commitment to personalized care.
                  </p>
                  <p className="text-[#6d5d54] leading-relaxed">
                    Our journey mirrors the transformations we facilitate - starting small, nurturing growth, and evolving while staying true to our essence. Each expansion was guided by client feedback and emerging wellness research, resulting in our unique blend of evidence-based therapies and intuitive body wisdom.
                  </p>
                </div>
                <div className="bg-[#f8f5f2] p-6 border-t border-[#e8e0d9]">
                  <div className="flex flex-wrap gap-4 justify-center ">
                    {[2010, 2014, 2018, 2022, 2024].map((year, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-amber-800">{year}</div>
                        <div className="text-sm text-[#6d5d54]">{index === 0 ? 'Founded' : index === 4 ? 'Today' : 'Expansion'}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Philosophy Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0 1 12 2v5h4a1 1 0 0 1 .82 1.573l-7 10A1 1 0 0 1 8 18v-5H4a1 1 0 0 1 -.82-1.573l7-10a1 1 0 0 1 1.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Healing Philosophy</h2>
                  </div>
                  <p className="text-[#6d5d54] mb-6 leading-relaxed">
                    We believe true wellness emerges from harmony between physical, mental, and energetic dimensions. Unlike conventional spas, our approach integrates three core principles:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {[
                      {title: 'Mindful Presence', desc: 'Therapists trained in meditation to create truly present healing experiences'},
                      {title: 'Biome Intelligence', desc: 'Therapies designed to activate your body\'s innate healing capabilities'},
                      {title: 'Energy Alignment', desc: 'Space designed with sacred geometry to enhance therapeutic benefits'}
                    ].map((item, index) => (
                      <div key={index} className="bg-indigo-50 p-5 rounded-xl border border-[#e8e0d9]">
                        <h3 className="font-bold text-lg text-amber-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-[#6d5d54]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#6d5d54] leading-relaxed">
                    This holistic framework allows us to create treatments that don't just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-12">
              {/* Therapists Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 1 0 0-6 3 3 0 000 6zm-7 9a7 7 0 1 1 14 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Our Healers</h2>
                  </div>
                  <p className="text-[#6d5d54] mb-6 leading-relaxed">
                    Our team of 23 therapists represents the pinnacle of spa craftsmanship. Each practitioner undergoes 500+ hours of training in our proprietary modalities before touching clients. We source talent globally, with specialists in diverse healing traditions:
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      'Thai Herbal Compress', 'Shiatsu', 'Lymphatic Drainage', 
                      'Ayurvedic Abhyanga', 'Hot Stone Therapy', 'Aromatherapy',
                      'Deep Tissue Sculpting', 'Craniosacral Therapy',
                      'Reflexology', 'Prenatal Massage', 'Cupping', 'Reiki'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-800 rounded-full mt-2 mr-3"></div>
                        <span className="text-[#6d5d54]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#6d5d54] leading-relaxed">
                    Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
                  </p>
                </div>
              </div>
  
              {/* Sustainability Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a2 2 0 0 0 -2 2v11a3 3 0 1 0 6 0V4a2 2 0 0 0 -2-2H4zm1 14a1 1 0 1 0 0-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 0 0 0-2.828L13.485 5.1a2 2 0 0 0 -2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Sustainable Wellness</h2>
                  </div>
                  <p className="text-[#6d5d54] mb-6 leading-relaxed">
                    Our commitment extends beyond individual wellness to planetary health. We're proud to be the first Carbon Neutral spa in our region, with initiatives including:
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      {icon: '♻️', text: 'Zero-Waste Policy'},
                      {icon: '🌱', text: 'Organic Linens'},
                      {icon: '💧', text: 'Water Recycling'},
                      {icon: '🌎', text: 'Carbon Offsetting'},
                      {icon: '🏺', text: 'Handcrafted Products'},
                      {icon: '🚫', text: 'Cruelty-Free'}
                    ].map((item, index) => (
                      <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                        <span className="mr-2 ">{item.icon}</span>
                        {item.text}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#6d5d54] leading-relaxed">
                    Our product line features sustainably harvested ingredients from ethical cooperatives. We've partnered with local environmental initiatives, donating 5% of profits to wetland conservation. When you indulge at Serenity Springs, you're supporting a healthier ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Testimonial Section */}
          <div className="mt-20 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center ">Voices of Transformation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {name: 'Sarah K.', text: "Serenity Springs changed my relationship with my body. After years of chronic pain, their therapists helped me find relief I thought impossible."},
                  {name: 'Michael T.', text: "The attention to detail here is extraordinary. From the moment you enter, you feel transported to a sacred healing space."},
                  {name: 'Priya M.', text: "More than a spa - it's a wellness education. I've incorporated techniques learned here into my daily routine with remarkable results."}
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0 -.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0 -1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0 -.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-amber-800 mb-6">
              Begin Your Wellness Journey
            </h2>
            <p className="text-[#6d5d54] max-w-2xl mx-auto mb-8 text-lg">
              We invite you to experience the difference that intention, expertise, and genuine care can make. Whether seeking relief from chronic stress, post-injury recovery, or simply sacred "me time," our doors open to welcome you home to yourself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 px-8 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Your Sanctuary Experience
              </button>
              <button className="bg-white border-2 border-amber-500 text-amber-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-amber-50 transition-all duration-300 shadow hover:shadow-md">
                Explore Our Treatments
              </button>
            </div>
          </div>
        </div>
      </section>
        {/* end demo 2 */}