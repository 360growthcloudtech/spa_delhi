import Pricpage from "./Pricpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa Price in Delhi", item: "https://www.luxuryrussianspa.com/spa-price-in-delhi" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the spa price in Delhi for a first visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa price in Delhi starts from ₹1999 for a first-visit session. Pricing is transparent with no hidden charges, and we regularly run first-visit offers and seasonal discounts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the full body massage price in Karol Bagh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Karol Bagh outlet starts from ₹1999. Reach out to our support team on WhatsApp for the exact price based on the treatment and duration you want.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer package discounts and combos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, booking a combo session or more than one treatment together unlocks an extra discount. Check the pricing packages, or ask our team while booking for the best current deal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you run seasonal promotions on pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we run seasonal and festival promotions with discounts on both combo packs and regular sessions. Message us on WhatsApp for whatever offer is currently running.",
      },
    },
    {
      "@type": "Question",
      name: "What are the spa prices in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Noida outlet offers the same transparent pricing as Delhi, starting from ₹1999, with both male and female therapist options for corporate employees and residents nearby.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay online for my services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer secure online payment options through our website for your convenience.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa Price in Delhi - Full Body Massage From ₹1999 | Luxury Russian Spa",
  description: "Spa price in Delhi starting from just ₹1999 at our top 5-star outlets across Delhi NCR. Transparent pricing, certified therapists. Check rates and book now!",
  keywords: [
    "spa price in delhi",
    "massage price in delhi",
    "full body massage price delhi",
    "spa cost delhi",
    "body massage price in delhi",
    "spa price list delhi",
    "couple spa price in delhi",
    "spa price in karol bagh",
    "spa price in noida",
  ],
  openGraph: {
    title: "Spa Price in Delhi - Full Body Massage From ₹1999 | Luxury Russian Spa",
    description: "Clear, honest spa pricing in Delhi starting from ₹1999. Certified therapists, 5-star outlets across Delhi, Noida & Gurgaon. Check rates and book now!",
    images: ["https://www.luxuryrussianspa.com/images/PricingBanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-price-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/PricingBanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
