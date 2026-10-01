import Couplepage from "./Couplepage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Couples Massage in Delhi", item: "https://www.luxuryrussianspa.com/couples-massage-in-delhi" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in a couples massage in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A couples massage in Delhi at Luxury Russian Spa includes personalised treatment, calming oils, and a private room with two massage tables so you and your partner can relax together.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a couple massage session last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sessions run 60 to 90 minutes, with longer customised couple spa packages in Delhi also available.",
      },
    },
    {
      "@type": "Question",
      name: "Is the couple spa in Delhi offered in a private room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every couple massage spa Delhi session takes place in a dedicated private room designed for two, ensuring full privacy and comfort.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer couple spa in Delhi NCR, including Gurgaon and Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our couple spa in Delhi NCR coverage includes outlets in Gurgaon and Noida in addition to Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best couple spa in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Experienced therapists, genuinely private rooms, quality oils, and transparent pricing make Luxury Russian Spa a consistent choice for the best couple massage in Delhi.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Couple Massage",
  name: "Couples Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Delhi",
  description:
    "Couple massage in Delhi at our Karol Bagh spa for partners to relax together, with certified therapists in private hygienic rooms.",
};

export const metadata = {
  title: "Couples Massage in Delhi - Best Couple Spa From ₹1999 | Luxury Russian Spa",
  description: "Couples massage in Delhi at our best couple spa outlets. Certified therapists, private hygienic rooms, couple spa packages across Delhi NCR. Book your slot now!",
  keywords: [
    "couples massage in delhi",
    "couple spa in delhi",
    "best couple spa in delhi",
    "best couple spa in delhi ncr",
    "couple spa in delhi ncr",
    "best couple massage in delhi",
    "best couple massage spa in delhi",
    "couple body massage in delhi",
    "couple body spa in delhi",
    "couple massage spa delhi",
    "couple spa packages delhi",
    "female to male massage delhi",
  ],
  openGraph: {
    title: "Couples Massage in Delhi - Best Couple Spa From ₹1999 | Luxury Russian Spa",
    description: "Looking for the best couple spa in Delhi? Certified therapists, private rooms, and couple spa packages across Delhi, Gurgaon & Noida.",
    images: ["https://www.luxuryrussianspa.com/images/Couple%20Massage.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/couples-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Couple%20Massage.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-couples-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-couples-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-couples-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Couplepage />
    </>
  );
}
