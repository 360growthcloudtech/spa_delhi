import Chandigarhpage, { faqs } from "./Chandigarhpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-chandigarh";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/hero/hb3-1252.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Outlets / Spa in Chandigarh).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Chandigarh", item: PAGE_URL },
  ],
};

// Chandigarh is home and hotel visits only (no outlet), so this is a Service with an area served, not a DaySpa with an address.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Home and Hotel Spa Massage in Chandigarh",
  serviceType: "Massage therapy",
  url: PAGE_URL,
  image: IMAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Luxury Russian Spa",
    url: "https://www.luxuryrussianspa.com/",
    telephone: "+91-8799716197",
  },
  areaServed: [
    { "@type": "City", name: "Chandigarh" },
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Panchkula" },
    { "@type": "City", name: "Zirakpur" },
  ],
  offers: [
    { "@type": "Offer", name: "Hotel Room Spa, 90 min", price: "14999", priceCurrency: "INR" },
    { "@type": "Offer", name: "5 Star Hotel Spa, 120 min", price: "19999", priceCurrency: "INR" },
  ],
};

export const metadata = {
  title: "Spa in Chandigarh - Body Massage at Home & Hotel | Luxury Russian Spa",
  description:
    "Luxury spa in Chandigarh that comes to you. Full body, Thai & couple massage at your home or hotel in Sector 8, 17, 35, Mohali & Zirakpur. See prices & book.",
  keywords: [
    "spa in chandigarh",
    "spa in chd",
    "body massage chandigarh",
    "body massage in chd",
    "massage in chandigarh",
    "massage at chandigarh",
    "best spa in chandigarh",
    "chandigarh massage center",
    "spa center in chandigarh",
    "chandigarh spa center",
    "massage spa chandigarh",
    "russian spa in chandigarh",
    "full body massage chandigarh",
    "full body massage chandigarh price",
    "spa near me chandigarh",
    "spa in chandigarh near me",
    "body spa chandigarh",
    "best massage in chandigarh",
    "thai massage in chandigarh",
    "thai spa in chandigarh",
    "best thai spa in chandigarh",
    "luxury spa in chandigarh",
    "luxury massage in chandigarh",
    "best body massage in chandigarh",
    "couple massage in chandigarh",
    "couple spa chandigarh",
    "b2b spa in chandigarh",
    "deep tissue massage chandigarh",
    "massage therapy in chandigarh",
    "chandigarh massage service",
    "chandigarh body massage services",
    "spa service in chandigarh",
    "full service spa in chandigarh",
    "spa price in chandigarh",
    "massage price in chandigarh",
    "body massage price in chandigarh",
    "chandigarh massage price",
    "spa in sector 35 chandigarh",
    "spa in sector 8 chandigarh",
    "spa in sector 17 chandigarh",
    "spa in sector 22 chandigarh",
    "spa in sector 9 chandigarh",
    "spa in sector 26 chandigarh",
    "spa in sector 44 chandigarh",
    "body massage in sector 35 chandigarh",
    "spa in manimajra chandigarh",
    "spa in zirakpur chandigarh",
    "spa near elante mall chandigarh",
    "spa near chandigarh airport",
    "massage for men in chandigarh",
    "top spa in chandigarh",
    "good spa in chandigarh",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa in Chandigarh | Body Massage at Your Home or Hotel",
    description:
      "Thai, Russian and Indian therapists come to your home or hotel anywhere in the tricity. Price confirmed on WhatsApp before you book.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1252, height: 834, alt: "Spa in Chandigarh at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Chandigarh | Body Massage at Your Home or Hotel",
    description:
      "Thai, Russian and Indian therapists come to your home or hotel anywhere in the tricity. Price confirmed on WhatsApp before you book.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-chandigarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-spa-in-chandigarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-spa-in-chandigarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Chandigarhpage />
    </>
  );
}
