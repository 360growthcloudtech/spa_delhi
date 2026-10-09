import Bangalorepage, { faqs } from "./Bangalorepage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-bangalore";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/hero/hb2-1252.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Outlets / Spa in Bangalore).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Bangalore", item: PAGE_URL },
  ],
};

// Bangalore is home and hotel visits only (no outlet), so this is a Service with an area served, not a DaySpa with an address.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Home and Hotel Spa Massage in Bangalore",
  serviceType: "Massage therapy",
  url: PAGE_URL,
  image: IMAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Luxury Russian Spa",
    url: "https://www.luxuryrussianspa.com/",
    telephone: "+91-8799716197",
  },
  areaServed: {
    "@type": "City",
    name: "Bangalore",
    alternateName: "Bengaluru",
  },
  offers: [
    { "@type": "Offer", name: "Hotel Room Spa, 90 min", price: "14999", priceCurrency: "INR" },
    { "@type": "Offer", name: "5 Star Hotel Spa, 120 min", price: "19999", priceCurrency: "INR" },
  ],
};

export const metadata = {
  title: "Spa in Bangalore - Body Massage at Home & Hotel | Luxury Russian Spa",
  description:
    "Luxury spa in Bangalore that comes to you. Full body, Thai & B2B massage at your home or hotel in Koramangala, Indiranagar, Whitefield & more. Book on WhatsApp.",
  keywords: [
    "spa in bangalore",
    "bangalore spa",
    "best spa in bangalore",
    "body massage bangalore",
    "massage spa bangalore",
    "luxury spa in bangalore",
    "thai spa bangalore",
    "b to b massage in bangalore",
    "btob massage in bangalore",
    "body body massage bangalore",
    "full body massage bangalore",
    "home spa bangalore",
    "massage and spa bangalore",
    "massage bangalore",
    "massages in bangalore",
    "spa in bangalore koramangala",
    "best massage spa bangalore",
    "best luxury spa in bangalore",
    "spa in bangalore near me",
    "body massage spa bangalore",
    "best massage in bangalore",
    "spa in bangalore with price",
    "best thai spa in bangalore",
    "top spa in bangalore",
    "spa bangalore near me",
    "massage in bangalore near me",
    "best body massage bangalore",
    "best thai massage in bangalore",
    "body spa in bangalore",
    "best body spa in bangalore",
    "body massage and spa in bangalore",
    "famous spa in bangalore",
    "full body massage in bangalore near me",
    "full body spa bangalore",
    "full service spa bangalore",
    "good body massage in bangalore",
    "good massage bangalore",
    "good massage spa in bangalore",
    "massage bangalore near me",
    "massage near me bangalore",
    "wellness spa in bangalore",
    "unisex spa bangalore",
    "thailand massage in bangalore",
    "spa service bangalore",
    "spa charges in bangalore",
    "massage therapy bangalore",
    "massage service in bangalore",
    "home massage bengaluru",
    "spa in bengaluru",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa in Bangalore | Body Massage at Your Home or Hotel",
    description:
      "Skip the traffic. Thai, Russian and Indian therapists come to your home or hotel room anywhere from Koramangala to Whitefield.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1252, height: 834, alt: "Spa in Bangalore at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Bangalore | Body Massage at Your Home or Hotel",
    description:
      "Skip the traffic. Thai, Russian and Indian therapists come to your home or hotel room anywhere from Koramangala to Whitefield.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-bangalore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-spa-in-bangalore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-spa-in-bangalore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Bangalorepage />
    </>
  );
}
