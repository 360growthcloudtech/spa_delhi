import Conaughtpage, { CP_ADDRESS, faqs } from "./Conaughtpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-connaught-place";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/TheParkConnaughtPlace.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Outlets / Spa in Connaught Place).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Connaught Place", item: PAGE_URL },
  ],
};

// The Connaught Place outlet as its own local business, for local search.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Connaught Place",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-8799716197",
  priceRange: "₹1999 - ₹19999",
  address: { "@type": "PostalAddress", ...CP_ADDRESS, addressCountry: "IN" },
  areaServed: ["Connaught Place", "Janpath", "Barakhamba Road", "Rajiv Chowk", "Gole Market", "Central Delhi", "New Delhi"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Spa in Connaught Place - Best Russian Spa in CP | From ₹1999",
  description:
    "Best spa in Connaught Place, inside The Park hotel. Russian & Indian therapists, private rooms, open 24/7. Full body, B2B & couple massage in CP from ₹1999.",
  keywords: [
    "spa in connaught place",
    "russian spa in connaught place",
    "best spa in connaught place",
    "metropolitan hotel connaught place",
    "massage parlours in connaught place",
    "massage in connaught place",
    "body massage in cp",
    "spa in cp delhi",
    "full body massage in connaught place",
    "spa near rajiv chowk",
    "5 star hotel spa connaught place",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa in Connaught Place | Russian Spa at The Park, Open 24/7",
    description:
      "Massage at our CP outlet inside The Park hotel, or in your room at The LaLiT, The Imperial or Shangri-La Eros. Open 24/7. From ₹1999.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 800, height: 600, alt: "Spa in Connaught Place at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Connaught Place | Russian Spa at The Park, Open 24/7",
    description:
      "Massage at our CP outlet inside The Park hotel, or in your room at The LaLiT, The Imperial or Shangri-La Eros. Open 24/7. From ₹1999.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Conaughtpage />
    </>
  );
}
