"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown, FiMail, FiX } from "react-icons/fi";
import Image from "next/image";

const WHATSAPP = "https://api.whatsapp.com/send?phone=919217255113";

const servicesDropdown = [
  { name: "Sandwich Massage", href: "/sandwich-massage-in-delhi" },
  { name: "Couple Massage", href: "/couples-massage-in-delhi" },
  { name: "B2B Massage", href: "/b2b-massage-in-delhi" },
  { name: "Full Body Massage", href: "/full-body-massage-in-delhi" },
  { name: "Deep Tissue Massage", href: "/deep-tissue-massage-in-delhi" },
];

const outletDropdown = [
  { name: "Aerocity", href: "/spa-in-aerocity" },
  { name: "Connaught Place", href: "/spa-in-connaught-place" },
  { name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
  { name: "Gurugram", href: "/spa-in-gurgaon" },
  { name: "Noida", href: "/spa-in-noida" },
];

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/massage-service-in-delhi", children: servicesDropdown },
  { name: "Pricing", href: "/spa-price-in-delhi" },
  { name: "Outlet", href: "/outlets", children: outletDropdown },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 140);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the drawer on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobile(null);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
      {/* Top Strip */}
      <div className="hidden md:block bg-dark text-white/85 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2.5">
          <div className="flex items-center gap-6">
            <a href="tel:+919217255113" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaPhoneAlt className="text-secondary" size={12} /> +91-9217255113
            </a>
            <a href="mailto:dmspadelhi@gmail.com" className="hidden lg:flex items-center gap-2 hover:text-secondary transition-colors">
              <FiMail className="text-secondary" /> dmspadelhi@gmail.com
            </a>
          </div>
          <p className="font-title text-base tracking-wide">
            Book Your Appointment : <span className="text-secondary">Delhi | Noida | Gurgaon | Ghaziabad</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/delhi.luxury_spa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary hover:-translate-y-0.5 transition">
              <FaInstagram size={17} />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-secondary hover:-translate-y-0.5 transition">
              <FaWhatsapp size={17} />
            </a>
            <a href="https://t.me/+a5Bu6FBPN9FlOWM9" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-secondary hover:-translate-y-0.5 transition">
              <FaTelegramPlane size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Placeholder keeps layout stable when the header becomes fixed */}
      <div className={isScrolled ? "h-[76px] lg:h-[88px]" : "hidden"} aria-hidden="true" />

      {/* Main Header */}
      <header
        className={`w-full z-50 transition-colors duration-500 ${
          isScrolled
            ? "fixed top-0 left-0 bg-primary rounded-b-3xl shadow-2xl shadow-primary/20 animate-header-drop"
            : "relative bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-6 h-[76px] lg:h-[88px]">
          {/* Logo */}
          <a href="/" aria-label="Spa Delhi home" className={`rounded-2xl transition-all duration-500 ${isScrolled ? "bg-white px-3 py-1.5" : ""}`}>
            <div className="w-32 h-10 relative">
              <Image src="/images/spadelhilogo22.webp" alt="Delhi Body Spa Logo" fill className="object-contain" priority />
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menu.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`nav-link flex items-center gap-1 font-title text-lg font-medium transition-colors duration-300 ${
                    isScrolled
                      ? isActive(item.href) ? "text-secondary" : "text-white hover:text-secondary"
                      : isActive(item.href) ? "text-primary" : "text-dark hover:text-primary"
                  }`}
                >
                  {item.name}
                  {item.children && <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />}
                </a>

                {item.children && (
                  <div className="absolute left-1/2 top-full pt-5 -translate-x-1/2 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-500">
                    <ul className="w-60 bg-white rounded-2xl shadow-2xl shadow-primary/15 p-3 border-t-4 border-secondary">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <a
                            href={child.href}
                            className="group/sub flex items-center gap-2 px-4 py-2.5 rounded-xl text-[15px] font-medium text-dark hover:bg-lightturquoise hover:text-primary transition-all duration-300"
                          >
                            <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover/sub:w-4" />
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              className={`site-button !hidden sm:!inline-flex !py-3 !px-6 !text-base ${isScrolled ? "light" : ""}`}
            >
              <FaWhatsapp /> Book Appointment
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden relative size-11 rounded-xl cursor-pointer ${isScrolled ? "bg-white/15" : "bg-dark"}`}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block absolute left-2.5 top-3.5 h-0.5 w-5.5 rounded bg-white" />
              <span className="block absolute left-2.5 top-5.5 h-0.5 w-6 rounded bg-white" />
              <span className="block absolute left-2.5 top-7.5 h-0.5 w-4 rounded bg-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              id="mobile-menu"
              className="fixed top-0 left-0 bottom-0 z-[70] w-[85%] max-w-sm bg-dark text-white overflow-y-auto lg:hidden rounded-r-3xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <a href="/" className="bg-white rounded-xl px-3 py-1.5">
                  <div className="w-28 h-9 relative">
                    <Image src="/images/spadelhilogo22.webp" alt="Delhi Body Spa Logo" fill className="object-contain" />
                  </div>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              <ul className="p-5 space-y-1">
                {menu.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                    className="border-b border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className={`block py-3 font-title text-xl ${isActive(item.href) ? "text-secondary" : "text-white hover:text-secondary"}`}
                      >
                        {item.name}
                      </a>
                      {item.children && (
                        <button
                          onClick={() => setOpenMobile(openMobile === item.name ? null : item.name)}
                          className="size-8 rounded-full bg-white/10 flex items-center justify-center"
                          aria-label={`Toggle ${item.name} menu`}
                          aria-expanded={openMobile === item.name}
                        >
                          <FiChevronDown className={`transition-transform duration-300 ${openMobile === item.name ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {item.children && openMobile === item.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 border-l-2 border-secondary mb-3"
                        >
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <a href={child.href} className="block py-2 text-white/75 hover:text-secondary">
                                {child.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>

              <div className="p-5 space-y-4">
                <a href={WHATSAPP} className="site-button w-full">
                  <FaWhatsapp /> Book Appointment
                </a>
                <a href="tel:+919217255113" className="flex items-center gap-3 text-white/80">
                  <span className="size-10 rounded-full bg-secondary text-dark flex items-center justify-center">
                    <FaPhoneAlt size={14} />
                  </span>
                  +91-9217255113
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
