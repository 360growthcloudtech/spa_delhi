import Pricpage, { PRICES, faqs } from "./Pricpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-price-in-delhi";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/price/hero-1280.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Services / Spa Price in Delhi).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.luxuryrussianspa.com/massage-in-delhi" },
    { "@type": "ListItem", position: 3, name: "Spa Price in Delhi", item: PAGE_URL },
  ],
};

// The price list as an offer catalog, built from the same PRICES the page shows.
const massages = [
  "Full Body Massage",
  "Deep Tissue Massage",
  "Thai Massage",
  "Swedish Massage",
  "Aromatherapy Massage",
  "B2B Massage",
  "Sandwich Massage",
];
const tierNames = [
  ["outlet", "at outlet"],
  ["home", "at home or hotel"],
  ["fiveStar", "5 star hotel spa"],
];
const priceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#prices`,
  name: "Spa and Massage Prices in Delhi",
  serviceType: "Massage therapy",
  url: PAGE_URL,
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Delhi Spa Price List",
    itemListElement: massages.flatMap((m) =>
      tierNames.map(([key, where]) => ({
        "@type": "Offer",
        name: `${m} ${where}, ${PRICES[key].time}`,
        price: String(PRICES[key].price),
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: m },
      }))
    ),
  },
};

export const metadata = {
  title: "Spa Price in Delhi 2026 - Massage Rates From ₹1999 | Luxury Russian Spa",
  description:
    "Spa price in Delhi: ₹1,999 for 60 min at any outlet, ₹14,999 for 90 min at home or hotel. Full body, Thai & couple spa rates. Same price in every area.",
  keywords: [
    "spa price in delhi",
    "delhi spa price",
    "spa delhi price list",
    "delhi spa center price list",
    "delhi spa rates",
    "spa rate in delhi",
    "spa charges in delhi",
    "spa cost in delhi",
    "best spa in delhi with price",
    "full body massage in delhi price",
    "full body massage price in delhi",
    "full body massage cost in delhi",
    "full body massage delhi price",
    "full body massage at home in delhi price",
    "full body spa price in delhi",
    "body massage in delhi price",
    "body massage price delhi",
    "body massage rate in delhi",
    "body massage charges in delhi",
    "body massage cost in delhi",
    "body spa in delhi price",
    "body spa in delhi with price",
    "massage price delhi",
    "delhi massage price",
    "massage rate in delhi",
    "massage charges in delhi",
    "massage center in delhi with price",
    "delhi massage center price",
    "delhi massage spa price",
    "spa massage delhi price",
    "spa massage delhi rate",
    "thai massage in delhi price",
    "couple spa in delhi price",
    "couple spa in delhi with price",
    "mahipalpur spa price",
    "spa in mahipalpur price",
    "lajpat nagar spa prices",
    "spa in uttam nagar with price",
    "full body massage centre paharganj delhi price",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa Price in Delhi | One Clear Price List From ₹1999",
    description:
      "₹1,999 for 60 minutes at any outlet, ₹14,999 at home or hotel, ₹19,999 for the 5-star package. Same rates in every part of Delhi NCR.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1280, height: 845, alt: "Spa price in Delhi at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Price in Delhi | One Clear Price List From ₹1999",
    description:
      "₹1,999 for 60 minutes at any outlet, ₹14,999 at home or hotel, ₹19,999 for the 5-star package. Same rates in every part of Delhi NCR.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="price-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <script
        id="faq-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Pricpage />
    </>
  );
}
