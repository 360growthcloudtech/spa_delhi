import Logo from "./Logo";
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiMail, FiChevronDown } from "react-icons/fi";

const socials = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/+yulqEcJa2dxhM2I9" },
  { name: "WhatsApp", icon: FaWhatsapp, link: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." },
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

// "Find a spa in your area" (Avataar's city finder), all real location pages
const areas = [
  { name: "Aerocity", link: "/spa-in-aerocity" },
  { name: "Connaught Place", link: "/spa-in-connaught-place" },
  { name: "Dwarka", link: "/spa-in-dwarka" },
  { name: "Faridabad", link: "/spa-in-faridabad" },
  { name: "Greater Kailash", link: "/spa-in-greater-kailash" },
  { name: "Gurgaon", link: "/spa-in-gurgaon" },
  { name: "Hauz Khas", link: "/spa-in-hauz-khas" },
  { name: "Janakpuri", link: "/spa-in-janakpuri" },
  { name: "Kalkaji", link: "/spa-in-kalkaji" },
  { name: "Karol Bagh", link: "/spa-in-karol-bagh" },
  { name: "Lajpat Nagar", link: "/spa-in-lajpat-nagar" },
  { name: "Laxmi Nagar", link: "/spa-in-laxmi-nagar" },
  { name: "Mahipalpur", link: "/spa-in-mahipalpur" },
  { name: "Noida", link: "/spa-in-noida" },
  { name: "Paharganj", link: "/spa-in-paharganj" },
  { name: "Paschim Vihar", link: "/spa-in-paschim-vihar" },
  { name: "Pitampura", link: "/spa-in-pitampura" },
  { name: "Preet Vihar", link: "/spa-in-preet-vihar" },
  { name: "Punjabi Bagh", link: "/spa-in-punjabi-bagh" },
  { name: "Rajouri Garden", link: "/spa-in-rajouri-garden" },
  { name: "Rohini", link: "/spa-in-rohini" },
  { name: "Saket", link: "/spa-in-saket" },
  { name: "Uttam Nagar", link: "/spa-in-uttam-nagar" },
  { name: "Vasant Kunj", link: "/spa-in-vasant-kunj" },
];

function Heading({ children }) {
  return <p className="font-title text-lg font-semibold text-ink mb-4">{children}</p>;
}

export default function Footer() {
  return (
    <footer className="bg-mist text-bodycolor">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="min-w-0">
            <a href="/" aria-label="Luxury Russian Spa home" className="inline-block mb-5">
              <Logo />
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Luxury spa experiences for complete rejuvenation in the heart of Delhi.
            </p>
            <p className="font-title text-lg font-semibold text-ink mb-3">Follow Us</p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ name, icon: Icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex items-center justify-center size-10 rounded-full bg-white text-ink shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Our Locations */}
          <div className="min-w-0">
            <Heading>Our Locations</Heading>
            <ul className="space-y-2.5 text-sm">
              {locations.map((loc) => (
                <li key={loc.link}>
                  <a href={loc.link} className="hover:text-primary transition-colors">
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/outlets" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline underline-offset-4">
              View All Outlets →
            </a>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <Heading>Quick Links</Heading>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="min-w-0">
            <Heading>Contact Us</Heading>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:++91 8799716197" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <span className="size-9 shrink-0 rounded-full bg-cream text-primary flex items-center justify-center">
                    <FaPhoneAlt size={13} />
                  </span>
                  +91 8799716197
                </a>
              </li>
              <li>
                <a href="mailto:dmspadelhi@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <span className="size-9 shrink-0 rounded-full bg-cream text-primary flex items-center justify-center">
                    <FiMail size={15} />
                  </span>
                  <span className="break-all">dmspadelhi@gmail.com</span>
                </a>
              </li>
            </ul>
            <a href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." className="site-button mt-6 !py-3">
              Book a Session
            </a>
          </div>
        </div>

        {/* Find a spa in your area */}
        <details className="group mt-12 rounded-xl bg-[#e9e9e9] open:bg-white open:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-colors">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-2 py-3.5 text-ink [&::-webkit-details-marker]:hidden">
            Find a Spa in Your Area
            <FiChevronDown className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <ul className="flex flex-wrap justify-center gap-2 px-4 pb-5">
            {areas.map((a) => (
              <li key={a.link}>
                <a href={a.link} className="block rounded-full bg-cream px-4 py-1.5 text-sm text-[#37312e] transition-colors hover:bg-primary hover:text-white">
                  Spa in {a.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pb-5 text-center">
            <a href="/outlets" className="text-sm font-semibold text-primary hover:underline underline-offset-4">
              View All Outlets →
            </a>
          </div>
        </details>

        {/* Copyright */}
        <div className="mt-10 border-t border-black/10 pt-6 text-center text-xs text-bodycolor/80 space-y-1.5">
          <p>&copy; {new Date().getFullYear()} Luxury Russian Spa. All rights reserved.</p>
          <p>
            Mail <a href="mailto:dmspadelhi@gmail.com" className="hover:text-primary">dmspadelhi@gmail.com</a> | Phone{" "}
            <a href="tel:++91 8799716197" className="hover:text-primary">+91 8799716197</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
