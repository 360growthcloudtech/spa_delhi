import DeepTissueMassagePage, { faqs } from "./DeepTissueMassagePage";

const PAGE_URL = "https://www.luxuryrussianspa.com/deep-tissue-massage-in-delhi";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/deep-tissue/hero-1280.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Services / Deep Tissue Massage in Delhi).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.luxuryrussianspa.com/massage-in-delhi" },
    { "@type": "ListItem", position: 3, name: "Deep Tissue Massage in Delhi", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  serviceType: "Deep Tissue Massage",
  name: "Deep Tissue Massage in Delhi",
  url: PAGE_URL,
  image: IMAGE_URL,
  description:
    "Deep tissue massage therapy in Delhi for neck, shoulder and back tension. At 24+ outlets across Delhi NCR, or at your home or hotel. From ₹1999.",
  provider: {
    "@type": "Organization",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
  ],
  offers: [
    { "@type": "Offer", name: "Deep tissue massage at outlet, 60 min", price: "1999", priceCurrency: "INR" },
    { "@type": "Offer", name: "Deep tissue massage at home or hotel, 90 min", price: "14999", priceCurrency: "INR" },
    { "@type": "Offer", name: "5 star hotel deep tissue spa, 120 min", price: "19999", priceCurrency: "INR" },
  ],
};

export const metadata = {
  title: "Deep Tissue Massage in Delhi - Near You or at Home | From ₹1999",
  description:
    "Deep tissue massage in Delhi for neck, shoulder and lower back pain. Firm pressure by experienced therapists at 24+ outlets or at home. See prices & book.",
  keywords: [
    "deep tissue massage",
    "deep tissue massage in delhi",
    "deep tissue massage near me",
    "best deep tissue massage near me",
    "deep tissue massage therapist near me",
    "deep tissue massage therapy",
    "deep tissue therapy",
    "deep tissue massage treatment",
    "deep tissue massage spa",
    "deep tissue massage spa near me",
    "deep tissue massage prices",
    "deep tissue massage near me prices",
    "deep tissue massage at home",
    "in home deep tissue massage",
    "deep tissue massage home service",
    "mobile deep tissue massage",
    "full body deep tissue massage",
    "full body deep tissue massage near me",
    "90 minute deep tissue massage",
    "deep tissue massage for back pain",
    "deep tissue massage lower back pain",
    "deep tissue massage for neck pain",
    "deep tissue neck and shoulder massage",
    "deep tissue massage for shoulder pain",
    "deep tissue shoulder massage",
    "deep tissue calf massage",
    "deep tissue leg massage near me",
    "deep tissue foot massage",
    "deep tissue massage for sciatica",
    "deep tissue massage for athletes",
    "deep tissue sports massage",
    "sports and deep tissue massage",
    "deep tissue massage for men",
    "couples deep tissue massage",
    "deep tissue and swedish massage",
    "swedish deep tissue massage",
    "therapeutic deep tissue massage",
    "professional deep tissue massage",
    "intense deep tissue massage",
    "deep massage near me",
    "deep muscle massage near me",
    "deep body massage near me",
    "deep back massage near me",
    "strong massage near me",
    "tension massage near me",
    "deep tissue trigger point massage",
    "deep tissue muscle massage",
    "deep relaxation massage",
    "deep tissue massage today",
    "affordable deep tissue massage near me",
    "deep tissue massage places near me",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Deep Tissue Massage in Delhi | Firm Pressure for Back & Neck Pain",
    description:
      "Slow, firm pressure on the knots that won't go away. At 24+ outlets across Delhi NCR or at your home. From ₹1999, price confirmed before you book.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1280, height: 854, alt: "Deep tissue massage in Delhi at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Tissue Massage in Delhi | Firm Pressure for Back & Neck Pain",
    description:
      "Slow, firm pressure on the knots that won't go away. At 24+ outlets across Delhi NCR or at your home. From ₹1999, price confirmed before you book.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-deep-tissue-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-deep-tissue-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-deep-tissue-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DeepTissueMassagePage />
    </>
  );
}
