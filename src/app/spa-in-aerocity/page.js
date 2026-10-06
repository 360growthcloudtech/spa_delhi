import Aeropage, { AEROCITY_ADDRESS, faqs } from "./Aeropage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-aerocity";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/spa-treatments.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Outlets / Spa in Aerocity).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Aerocity", item: PAGE_URL },
  ],
};

// The Aerocity outlet as its own local business, for local search.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Aerocity",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-8799716197",
  priceRange: "₹1999 - ₹19999",
  address: { "@type": "PostalAddress", ...AEROCITY_ADDRESS, addressCountry: "IN" },
  areaServed: ["Aerocity", "Mahipalpur", "IGI Airport", "Dwarka", "Vasant Kunj", "New Delhi"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Spa in Aerocity - Russian Spa Near Airport | Luxury Russian Spa",
  description:
    "Russian spa in Aerocity near Lemon Tree and IGI Airport, open 24/7. Massage at our outlet or in your room at JW Marriott, Novotel or Pullman. From ₹1999.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa in Aerocity | Russian Spa Near IGI Airport, Open 24/7",
    description:
      "Massage at our Aerocity outlet near Lemon Tree, or in your room at a partner hotel. Open all night for late flights. From ₹1999.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1920, height: 1280, alt: "Spa in Aerocity at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Aerocity | Russian Spa Near IGI Airport, Open 24/7",
    description:
      "Massage at our Aerocity outlet near Lemon Tree, or in your room at a partner hotel. Open all night for late flights. From ₹1999.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Aeropage />
    </>
  );
}
