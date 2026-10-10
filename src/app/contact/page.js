import Conpage, { faqs } from "./Conpage";
import { CONTACT_EMAIL, MAIN_ADDRESS } from "../components/siteContact";

const SITE = "https://www.luxuryrussianspa.com";
const PAGE_URL = `${SITE}/contact`;
const IMAGE_URL = `${SITE}/images/gallery/g01-lg.webp`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Contact).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
  ],
};

// Marks this as the contact page and lists every way to reach the business.
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${PAGE_URL}#contact`,
  url: PAGE_URL,
  name: "Contact Luxury Russian Spa",
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "Luxury Russian Spa",
    url: `${SITE}/`,
    telephone: "+91-8799716197",
    email: CONTACT_EMAIL,
    address: { "@type": "PostalAddress", ...MAIN_ADDRESS, addressCountry: "IN" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8799716197",
        contactType: "reservations",
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      { "@type": "ContactPoint", email: CONTACT_EMAIL, contactType: "customer service" },
    ],
  },
};

export const metadata = {
  title: "Contact Luxury Russian Spa - WhatsApp, Call or Visit | Book 24/7",
  description:
    "Contact Luxury Russian Spa: WhatsApp or call +91 87997 16197, Telegram, or email. Bookings 24/7 across 24+ outlets in Delhi NCR. Main address in Aerocity.",
  keywords: [
    "contact luxury russian spa",
    "luxury russian spa phone number",
    "luxury russian spa whatsapp number",
    "luxury russian spa booking",
    "luxury russian spa address",
    "spa booking delhi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Luxury Russian Spa | WhatsApp, Call or Visit",
    description:
      "Message us on WhatsApp, call, or visit our main address in Aerocity. We usually reply within minutes and take bookings 24/7.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, alt: "Luxury Russian Spa treatment room" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Luxury Russian Spa | WhatsApp, Call or Visit",
    description:
      "Message us on WhatsApp, call, or visit our main address in Aerocity. We usually reply within minutes and take bookings 24/7.",
    images: [IMAGE_URL],
  },
};

export default function contact() {
  return (
    <>
      <script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="contactpage-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        id="faq-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Conpage />
    </>
  );
}
