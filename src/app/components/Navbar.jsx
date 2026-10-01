"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiChevronDown, FiMail, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { WHATSAPP_URL, TELEGRAM_URL, PHONE_LINK, PHONE_LABEL } from "./siteContact";

const EMAIL = "dmspadelhi@gmail.com";

const socials = [
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/delhi.luxury_spa/" },
  { name: "WhatsApp", icon: FaWhatsapp, link: WHATSAPP_URL },
  { name: "Telegram", icon: FaTelegramPlane, link: TELEGRAM_URL },
];

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
  { name: "Our Services", href: "/massage-service-in-delhi", children: servicesDropdown },
  { name: "Our Pricing", href: "/spa-price-in-delhi" },
  { name: "Gallery", href: "/gallery" },
  { name: "Outlets", href: "/outlets", children: outletDropdown },
  { name: "About", href: "/about-us" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      {/* Top contact bar: scrolls away, only the main bar below stays pinned */}
      <div className="hidden md:block bg-cream text-sm text-ink">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-5 md:px-8 h-11">
          <div className="flex items-center gap-7">
            <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaPhoneAlt size={12} className="text-primary" /> {PHONE_LABEL}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiMail size={14} className="text-primary" /> {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ name, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="size-8 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
            <a
              href={PHONE_LINK}
              className="ml-2 rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-white hover:bg-ink transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Header: stays pinned to the top while scrolling */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.08)]" : "border-b border-black/5"}`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center gap-6 px-5 md:px-8 h-[72px] lg:h-[84px]">
          <a href="/" aria-label="Luxury Russian Spa home" className="shrink-0">
            <Logo />
          </a>

          <div className="flex items-center gap-5 xl:gap-8">
            {/* Desktop Menu */}
            <ul className="hidden xl:flex items-center gap-7">
              {menu.map((item) => (
                <li key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`nav-link flex items-center gap-1 py-2 text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 ${isActive(item.href) ? "text-primary" : "text-ink hover:text-primary"}`}
                  >
                    {item.name}
                    {item.children && <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />}
                  </a>

                  {item.children && (
                    <div className="absolute left-1/2 top-full pt-6 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300">
                      <ul className="w-60 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-2 border border-black/5">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <a
                              href={child.href}
                              className="block px-4 py-2.5 rounded-xl text-sm text-ink hover:bg-cream hover:text-primary transition-colors duration-200"
                            >
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

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-7 py-3.5 bg-primary text-[15px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-ink"
            >
              Book Now
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden relative size-11 rounded-lg border border-black/10 cursor-pointer"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block absolute left-3 top-3.5 h-0.5 w-5 rounded bg-ink" />
              <span className="block absolute left-3 top-5 h-0.5 w-5 rounded bg-ink" />
              <span className="block absolute left-3 top-6.5 h-0.5 w-3.5 rounded bg-ink" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              id="mobile-menu"
              className="fixed top-0 right-0 bottom-0 z-[70] w-[86%] max-w-sm bg-white text-ink overflow-y-auto xl:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-center justify-between px-5 h-[72px] border-b border-black/5">
                <a href="/" aria-label="Luxury Russian Spa home">
                  <Logo />
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="size-10 rounded-lg bg-cream flex items-center justify-center hover:bg-primary hover:text-white transition"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              <ul className="px-5 py-3">
                {menu.map((item) => (
                  <li key={item.name} className="border-b border-black/5">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className={`block py-3.5 text-sm font-semibold uppercase tracking-[0.06em] ${isActive(item.href) ? "text-primary" : "text-ink"}`}
                      >
                        {item.name}
                      </a>
                      {item.children && (
                        <button
                          onClick={() => setOpenMobile(openMobile === item.name ? null : item.name)}
                          className="size-8 rounded-lg bg-cream flex items-center justify-center"
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
                          className="overflow-hidden mb-3 rounded-xl bg-cream px-4"
                        >
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <a href={child.href} className="block py-2.5 text-sm text-bodycolor hover:text-primary">
                                {child.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>

              <div className="p-5 space-y-4">
                <a href={WHATSAPP_URL} className="site-button w-full">
                  <FaWhatsapp /> Book Now
                </a>
                <a href={PHONE_LINK} className="flex items-center gap-3 text-sm text-ink">
                  <span className="size-10 rounded-full bg-cream text-primary flex items-center justify-center">
                    <FaPhoneAlt size={13} />
                  </span>
                  {PHONE_LABEL}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-ink">
                  <span className="size-10 rounded-full bg-cream text-primary flex items-center justify-center">
                    <FiMail size={15} />
                  </span>
                  {EMAIL}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
