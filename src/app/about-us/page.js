import Abpage, { CONTACT_EMAIL, MAIN_ADDRESS, faqs } from "./Abpage";

const SITE = "https://www.luxuryrussianspa.com";
const PAGE_URL = `${SITE}/about-us`;
const IMAGE_URL = `${SITE}/images/about/hero-1252.webp`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / About Us).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "About Us", item: PAGE_URL },
  ],
};

// Tells search engines this page describes the business itself.
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PAGE_URL}#about`,
  url: PAGE_URL,
  name: "About Luxury Russian Spa",
  description:
    "Luxury Russian Spa runs 24+ massage spa outlets across Delhi NCR, including hotel spas at The Park, The Suryaa and Novotel, with home and hotel visits in Delhi NCR, Bangalore and Chandigarh.",
  primaryImageOfPage: IMAGE_URL,
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "Luxury Russian Spa",
    url: `${SITE}/`,
    logo: `${SITE}/images/luxuryrussianspa-logo.png`,
    image: IMAGE_URL,
    telephone: "+91-8799716197",
    email: CONTACT_EMAIL,
    address: { "@type": "PostalAddress", ...MAIN_ADDRESS, addressCountry: "IN" },
    areaServed: ["Delhi", "New Delhi", "Gurgaon", "Noida", "Faridabad", "Bangalore", "Chandigarh"],
    knowsAbout: ["Full body massage", "Deep tissue massage", "Thai massage", "Swedish massage", "Aromatherapy massage", "Couple massage"],
    sameAs: ["https://www.instagram.com/delhi.luxury_spa/", "https://t.me/+yulqEcJa2dxhM2I9"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8799716197",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  },
};

export const metadata = {
  title: "About Us - Luxury Russian Spa | 24+ Massage Spas Across Delhi NCR",
  description:
    "Meet Luxury Russian Spa: 24+ massage spas in Delhi NCR, hotel spas at The Park, The Suryaa & Novotel, and Russian, Thai & Indian therapists. Our story & promises.",
  keywords: [
    "about luxury russian spa",
    "luxury russian spa delhi",
    "russian spa delhi",
    "massage spa brand delhi",
    "spa outlets delhi ncr",
    "5 star hotel spa delhi",
    "russian and thai therapists delhi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About Luxury Russian Spa | Massage Spas Across Delhi NCR",
    description:
      "24+ outlets, three 5-star hotel spas, Russian, Uzbek, Thai and Indian therapists, and one honest price list. Here's who we are.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1252, height: 836, alt: "About Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Luxury Russian Spa | Massage Spas Across Delhi NCR",
    description:
      "24+ outlets, three 5-star hotel spas, Russian, Uzbek, Thai and Indian therapists, and one honest price list. Here's who we are.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="aboutpage-schema-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        id="faq-schema-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Abpage />
    </>
  );
}
