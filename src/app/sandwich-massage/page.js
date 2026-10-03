import Sandpage, { faqs } from "./Sandpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/sandwich-massage";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/sandwich-massage-delhi.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Services / Sandwich Massage).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Massage Services", item: "https://www.luxuryrussianspa.com/massage-in-delhi" },
    { "@type": "ListItem", position: 3, name: "Sandwich Massage in Delhi", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sandwich Massage",
  name: "Sandwich Massage in Delhi",
  url: PAGE_URL,
  image: IMAGE_URL,
  description:
    "Sandwich massage in Delhi: a full body massage by two trained therapists working at the same time, at 24+ outlets and 5-star hotels across Delhi NCR.",
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
  title: "Sandwich Massage in Delhi - Price From ₹1999 | Luxury Russian Spa",
  description:
    "Best sandwich massage in Delhi by two trained therapists. See the sandwich massage price, find a sandwich massage centre near you and book on WhatsApp.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Sandwich Massage in Delhi | Two Therapists, From ₹1999",
    description:
      "A full body massage by two therapists at once. Outlets across Delhi NCR and 5-star hotel sessions. See prices and book on WhatsApp.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1280, height: 1279, alt: "Sandwich massage in Delhi by two therapists" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandwich Massage in Delhi | Two Therapists, From ₹1999",
    description:
      "A full body massage by two therapists at once. Outlets across Delhi NCR and 5-star hotel sessions. See prices and book on WhatsApp.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-sandwich-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-sandwich-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-sandwich-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Sandpage />
    </>
  );
}
