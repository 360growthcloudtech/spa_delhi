import Serpage, { faqs } from "./Serpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/massage-in-delhi";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/banner1.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Massage Services).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Massage in Delhi", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage",
  name: "Massage in Delhi",
  url: PAGE_URL,
  image: IMAGE_URL,
  description:
    "Massage in Delhi at 24+ outlets across Delhi NCR, in partner 5-star hotels or at home: full body, couple, sandwich, Thai, deep tissue, Swedish, aromatherapy and hot stone massage.",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: ["Delhi", "New Delhi", "Delhi NCR", "Noida", "Gurgaon"],
  offers: [
    { "@type": "Offer", name: "Spa Outlet – 60 min", price: "1999", priceCurrency: "INR" },
    { "@type": "Offer", name: "Hotel Outlet – 90 min", price: "14999", priceCurrency: "INR" },
    { "@type": "Offer", name: "5 Star Hotel Spa – 120 min", price: "19999", priceCurrency: "INR" },
  ],
};

export const metadata = {
  title: "Massage in Delhi - Spa, Home & Hotel Massage From ₹1999 | Luxury Russian Spa",
  description:
    "Full body massage in Delhi at 24+ massage centres across Delhi NCR, in 5-star hotels or at home. Thai, deep tissue, couple and more. See prices and book on WhatsApp.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Massage in Delhi | Spa, Home & Hotel Massage From ₹1999",
    description:
      "Every massage in one place: full body, couple, Thai, deep tissue and more, at our outlets, your hotel or your home. See prices and book on WhatsApp.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1915, height: 1132, alt: "Massage in Delhi at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage in Delhi | Spa, Home & Hotel Massage From ₹1999",
    description:
      "Every massage in one place: full body, couple, Thai, deep tissue and more, at our outlets, your hotel or your home. See prices and book on WhatsApp.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Serpage />
    </>
  );
}
