import Lajpatpage, { faqs } from "./Lajpatpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-lajpat-nagar";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/spa-in-lajpat-nagar.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Outlets / Spa in Lajpat Nagar).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Lajpat Nagar", item: PAGE_URL },
  ],
};

// The Lajpat Nagar outlet as its own local business. No street address: the exact location is shared on booking.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Lajpat Nagar",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-8799716197",
  priceRange: "₹1999 - ₹19999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lajpat Nagar, New Delhi",
    addressRegion: "DL",
    postalCode: "110024",
    addressCountry: "IN",
  },
  areaServed: ["Lajpat Nagar", "Lajpat Nagar 2", "Lajpat Nagar 4", "Central Market", "Amar Colony", "Defence Colony", "South Extension", "South Delhi"],
  paymentAccepted: "Cash, UPI, Credit Card",
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Spa in Lajpat Nagar - Luxury Body Massage Spa | From ₹1999",
  description:
    "Best spa in Lajpat Nagar near Central Market. Russian & Indian therapists, private rooms, body massage & B2B spa from ₹1999. Call +91 87997 16197.",
  keywords: [
    "spa in lajpat nagar",
    "best spa in lajpat nagar",
    "body massage in lajpat nagar",
    "body spa in lajpat nagar",
    "lajpat nagar massage",
    "lajpat nagar massage spa",
    "lajpat nagar spa contact number",
    "luxury spa in lajpat nagar",
    "luxury spa lajpat nagar",
    "russian spa in lajpat nagar",
    "spa in lajpat nagar 2",
    "spa lajpat nagar 2",
    "b2b spa in lajpat nagar",
    "body massage spa in lajpat nagar",
    "massage spa in lajpat nagar central market",
    "lajpat nagar spa prices",
    "spa in lajpat nagar 4",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa in Lajpat Nagar | Luxury Body Massage Near Central Market",
    description:
      "Private rooms, Russian & Indian therapists and fixed prices from ₹1999. Book your body massage in Lajpat Nagar on WhatsApp.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1402, height: 1122, alt: "Spa in Lajpat Nagar at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Lajpat Nagar | Luxury Body Massage Near Central Market",
    description:
      "Private rooms, Russian & Indian therapists and fixed prices from ₹1999. Book your body massage in Lajpat Nagar on WhatsApp.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Lajpatpage />
    </>
  );
}
