import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const socials = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/+a5Bu6FBPN9FlOWM9" },
  { name: "WhatsApp", icon: FaWhatsapp, link: "https://api.whatsapp.com/send?phone=919217255113" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/delhi.luxury_spa/" },
];

const locations = [
  { name: "Gurgaon", link: "/spa-in-gurgaon" },
  { name: "Noida", link: "/spa-in-noida" },
  { name: "Paharganj", link: "/spa-in-paharganj" },
  { name: "Karol Bagh", link: "/spa-in-karol-bagh" },
  { name: "Lajpat Nagar", link: "/spa-in-lajpat-nagar" },
];

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "All Services", link: "/massage-service-in-delhi" },
  { name: "Outlets", link: "/outlets" },
  { name: "Pricing", link: "/spa-price-in-delhi" },
  { name: "Contact", link: "/contact" },
];

const marqueeItems = [
  "Sandwich Massage",
  "B2B Massage",
  "Full Body Massage",
  "Couples Massage",
  "Deep Tissue Massage",
  "Thai Massage",
  "Aromatherapy",
  "Swedish Massage",
];

function Heading({ children }) {
  return (
    <h4 className="font-title text-2xl font-semibold text-white mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-secondary after:rounded">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-10">
      {/* Marquee band */}
      <div className="relative z-10 -mb-8 mx-4 lg:mx-8 rounded-3xl bg-secondary overflow-hidden py-5 shadow-xl">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center font-title text-2xl md:text-3xl font-semibold text-dark whitespace-nowrap px-6">
              {item}
              <span className="ml-12 text-primary" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="bg-dark text-white/70 rounded-t-[40px] pt-24 pb-8 px-6 md:px-16 relative overflow-hidden">
        {/* Decorative rotating ring */}
        <div className="pointer-events-none absolute -right-40 -top-40 size-[420px] rounded-full border border-white/10 animate-rotate-slow after:content-[''] after:absolute after:size-3 after:rounded-full after:bg-secondary after:left-10 after:top-1/3" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-60 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {/* Brand & Socials */}
          <div className="min-w-0">
            <a href="/" className="inline-flex items-baseline gap-2 mb-5">
              <span className="font-display text-4xl text-secondary">Spa</span>
              <span className="font-title text-4xl font-bold text-white">Delhi</span>
            </a>
            <p className="mb-7 leading-relaxed">
              Luxury spa experiences for complete rejuvenation in the heart of Delhi.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ name, icon: Icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex items-center justify-center size-11 rounded-full bg-white/10 text-white text-lg transition duration-500 hover:bg-secondary hover:text-dark hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Our Locations */}
          <div className="min-w-0">
            <Heading>Our Locations</Heading>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc.link}>
                  <a href={loc.link} className="group inline-flex items-center gap-2 hover:text-secondary transition-colors">
                    <FiMapPin className="text-secondary shrink-0" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{loc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/outlets" className="mt-5 inline-flex items-center gap-1 font-semibold text-secondary hover:text-white transition-colors">
              View All Outlets <FiArrowUpRight />
            </a>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <Heading>Quick Links</Heading>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="group inline-flex items-center gap-2 hover:text-secondary transition-colors">
                    <span className="h-px w-3 bg-secondary transition-all duration-300 group-hover:w-6" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="min-w-0">
            <Heading>Contact Us</Heading>
            <ul className="space-y-5">
              <li>
                <a href="tel:+919217255113" className="flex items-center gap-4 group">
                  <span className="size-12 shrink-0 rounded-full bg-primary text-white flex items-center justify-center transition group-hover:bg-secondary group-hover:text-dark">
                    <FaPhoneAlt />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/50">Call Us</span>
                    <span className="font-title text-xl text-white">+91 9217255113</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:dmspadelhi@gmail.com" className="flex items-center gap-4 group">
                  <span className="size-12 shrink-0 rounded-full bg-primary text-white flex items-center justify-center transition group-hover:bg-secondary group-hover:text-dark">
                    <FiMail />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-white/50">Email</span>
                    <span className="text-white break-all">dmspadelhi@gmail.com</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50 relative z-10">
          <p>&copy; {new Date().getFullYear()} Spa Delhi. All rights reserved.</p>
          <p>
            Delhi <span className="text-secondary">•</span> Noida <span className="text-secondary">•</span> Gurgaon <span className="text-secondary">•</span> Ghaziabad
          </p>
        </div>
      </div>
    </footer>
  );
}
