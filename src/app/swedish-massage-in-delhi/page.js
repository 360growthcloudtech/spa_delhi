import SwedishMassagePage from "./SwedishMassagePage";
// src/app/swedish-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Swedish massage and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swedish massage is a classic full body massage technique that uses long gliding strokes, kneading, and gentle circular movements to relax muscles and improve blood flow. It is one of the most popular massage styles in Delhi because it suits almost everyone, from first-timers to regular spa-goers.",
      },
    },
    {
      "@type": "Question",
      name: "How is Swedish massage different from deep tissue massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swedish massage uses lighter, flowing strokes mainly for relaxation, while deep tissue massage uses slower, firmer pressure to target chronic muscle knots. If you want to unwind and de-stress, Swedish massage is usually the better choice; for stubborn pain, deep tissue may suit you more.",
      },
    },
    {
      "@type": "Question",
      name: "Is Swedish massage painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Swedish massage is designed to be gentle and soothing rather than painful. The pressure is light to medium, and our therapists always check in and adjust based on your comfort level throughout the session.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Swedish massage session take in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body Swedish massage in Delhi typically lasts 60 to 90 minutes, giving our therapists enough time to work through your back, shoulders, arms, legs, and feet with smooth, relaxing strokes.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Swedish massage cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Swedish massage in Delhi starts at ₹1999 for a first-visit outlet session, with home spa and hotel spa packages available from ₹15,000 depending on duration and setting.",
      },
    },
    {
      "@type": "Question",
      name: "Is Swedish massage good for first-time spa visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Swedish massage is often recommended for people trying a spa for the first time because the pressure is gentle, the technique is relaxing rather than intense, and it introduces you to professional massage therapy without any discomfort.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request a male or female therapist for my Swedish massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can share your therapist preference at the time of booking, and we will do our best to accommodate your request for a comfortable, relaxing session.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I get a Swedish massage for stress relief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For general stress relief and relaxation, once every two to four weeks works well for most people. If you are going through a particularly demanding period, weekly sessions can help you stay on top of stress and tension.",
      },
    },
  ],
};

export const metadata = {
  title: "Swedish Massage in Delhi - Gentle Full Body Relaxation | Luxury Russian Spa",
  description:
    "Swedish massage in Delhi for deep relaxation, better circulation & stress relief. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
  keywords: [
    "swedish massage in delhi",
    "swedish massage near me",
    "full body swedish massage delhi",
    "swedish massage benefits",
    "swedish massage price in delhi",
    "best swedish massage spa in delhi",
    "relaxation massage in delhi",
    "swedish massage for stress relief",
    "swedish massage vs deep tissue massage",
  ],
  openGraph: {
    title: "Swedish Massage in Delhi - Gentle Full Body Relaxation | Luxury Russian Spa",
    description:
      "Swedish massage in Delhi for deep relaxation, better circulation & stress relief. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/female-therapist-rehabilitation-center-giving-back-massage.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/swedish-massage-in-delhi",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/swedish-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/female-therapist-rehabilitation-center-giving-back-massage.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Swedish Massage in Delhi", item: "https://www.luxuryrussianspa.com/swedish-massage-in-delhi" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Swedish Massage",
  name: "Swedish Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Delhi",
  description:
    "Swedish massage in Delhi for deep relaxation, better circulation, and stress relief, with certified therapists in private hygienic rooms.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-swedish"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-swedish-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-swedish-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SwedishMassagePage />
    </>
  );
}
