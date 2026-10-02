import Couplepage, { faqs } from "./Couplepage";

const PAGE_URL = "https://www.luxuryrussianspa.com/couple-massage";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/couple-massage-delhi.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Services / Couple Massage).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Massage Services", item: "https://www.luxuryrussianspa.com/massage-service-in-delhi" },
    { "@type": "ListItem", position: 3, name: "Couple Massage in Delhi", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Couple Massage",
  name: "Couple Massage in Delhi",
  url: PAGE_URL,
  image: IMAGE_URL,
  description:
    "Couple massage in Delhi: you and your partner side by side in a private room, each with your own therapist, at 24+ outlets, 5-star hotels or at home across Delhi NCR.",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: ["Delhi", "New Delhi", "Delhi NCR", "Noida", "Gurgaon"],
  offers: [
    { "@type": "Offer", name: "Spa Outlet – 60 min", price: "1999", priceCurrency: "INR" },
    { "@type": "Offer", name: "Hotel Outlet – 90 min", price: "15000", priceCurrency: "INR" },
    { "@type": "Offer", name: "5 Star Hotel Spa – 120 min", price: "20000", priceCurrency: "INR" },
  ],
};

export const metadata = {
  title: "Couple Massage in Delhi - Couples Spa From ₹1999 | Luxury Russian Spa",
  description:
    "Book a couple massage in Delhi side by side with your partner. Private couples spa rooms, romantic packages, home visits and 5-star hotel sessions across Delhi NCR.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Couple Massage in Delhi | Romantic Couples Spa, From ₹1999",
    description:
      "Two tables, one private room. Relax side by side with your partner at our outlets, a 5-star hotel or at home. See prices and book on WhatsApp.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1200, height: 800, alt: "Couple massage in Delhi in a private room for two" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couple Massage in Delhi | Romantic Couples Spa, From ₹1999",
    description:
      "Two tables, one private room. Relax side by side with your partner at our outlets, a 5-star hotel or at home. See prices and book on WhatsApp.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-couple-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-couple-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-couple-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Couplepage />
    </>
  );
}
