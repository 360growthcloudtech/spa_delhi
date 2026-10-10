import Noipage, { faqs } from "./Noipage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-noida";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/noida/hero-960.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Outlets / Spa in Noida).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Noida", item: PAGE_URL },
  ],
};

// The Noida outlet as its own local business. No street address: the exact location is shared on booking.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Noida",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-8799716197",
  priceRange: "₹1999 - ₹19999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sector 18, Noida",
    addressRegion: "UP",
    postalCode: "201301",
    addressCountry: "IN",
  },
  areaServed: ["Noida", "Noida Sector 18", "Noida Sector 62", "Noida Sector 104", "Noida Extension", "Gaur City", "Greater Noida"],
  paymentAccepted: "Cash, UPI, Credit Card",
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Spa in Noida - Body Massage Near Sector 18 & at Home | From ₹1999",
  description:
    "Luxury spa in Noida near Sector 18, plus massage at home across Noida, Noida Extension & Greater Noida. Russian & Thai therapists, private rooms. From ₹1999.",
  keywords: [
    "spa in noida",
    "best spa in noida",
    "spa near me noida",
    "noida spa near me",
    "spa in noida sector 18",
    "best spa in noida sector 18",
    "sector 18 spa noida",
    "noida sector 18 spa",
    "body massage in noida",
    "body massage in noida price",
    "body massage in noida sector 18",
    "body massage near me noida",
    "body massage spa in noida",
    "body spa in noida",
    "noida body spa",
    "massage in noida",
    "massage near me noida",
    "massage spa noida",
    "massage and spa in noida",
    "luxury spa in noida",
    "best massage in noida",
    "best body massage in noida",
    "best massage spa in noida",
    "good spa in noida",
    "full body massage in noida",
    "full body spa in noida",
    "full body massage at home in noida",
    "massage at home noida",
    "massage in noida at home",
    "spa at home noida",
    "body massage at home noida",
    "doorstep massage noida",
    "couple massage in noida",
    "couple spa in noida",
    "russian spa in noida",
    "russian massage in noida",
    "thai massage in noida",
    "thai spa in noida",
    "best thai spa in noida",
    "b2b spa in noida",
    "b to b massage in noida",
    "sandwich massage in noida",
    "indian massage and spa in noida",
    "24 hour spa in noida",
    "night spa in noida",
    "spa in noida sector 62",
    "spa in noida sector 63",
    "spa in noida sector 104",
    "spa in noida sector 50",
    "spa in sector 51 noida",
    "spa in sector 76 noida",
    "spa in noida sector 15",
    "spa in noida extension",
    "massage in noida extension",
    "spa in gaur city",
    "spa in jagat farm greater noida",
    "spa in gip mall noida",
    "spa in dlf mall noida",
    "spa in wave mall noida",
    "massage in shopprix mall noida",
    "spa near noida uttar pradesh",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa in Noida | Body Massage Near Sector 18 or at Your Home",
    description:
      "Private rooms near Sector 18, or a therapist at your home anywhere in Noida and Greater Noida. Russian, Thai and Indian therapists. From ₹1999.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 960, height: 639, alt: "Spa in Noida at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Noida | Body Massage Near Sector 18 or at Your Home",
    description:
      "Private rooms near Sector 18, or a therapist at your home anywhere in Noida and Greater Noida. Russian, Thai and Indian therapists. From ₹1999.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Noipage />
    </>
  );
}
