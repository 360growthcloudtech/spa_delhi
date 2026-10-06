import SwedishMassageRajouriGardenPage from "./SwedishMassageRajouriGardenPage";
// src/app/swedish-massage-in-rajouri-garden/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for Swedish massage in Rajouri Garden?", acceptedAnswer: { "@type": "Answer", text: "Our Swedish massage in Rajouri Garden starts at just ₹1999 for a first-visit outlet session, close to City Square Mall." } },
    { "@type": "Question", name: "Is your Swedish massage spa near Rajouri Garden Metro Station?", acceptedAnswer: { "@type": "Answer", text: "Yes, our outlet is a short walk from Rajouri Garden Metro Station on the Blue Line, easy to reach from City Square Mall, Tagore Garden, and Subhash Nagar." } },
    { "@type": "Question", name: "Is Swedish massage painful?", acceptedAnswer: { "@type": "Answer", text: "No, Swedish massage is designed to be gentle and soothing rather than painful. Pressure stays light to medium throughout the session." } },
    { "@type": "Question", name: "How is Swedish massage different from deep tissue massage?", acceptedAnswer: { "@type": "Answer", text: "Swedish massage uses lighter, flowing strokes mainly for relaxation, while deep tissue uses slower, firmer pressure to target chronic muscle knots." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists trained in Swedish technique?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are trained in Swedish technique alongside our experienced Indian staff, with sessions available from ₹2,800." } },
    { "@type": "Question", name: "Can I book a night Swedish massage appointment in Rajouri Garden?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
    { "@type": "Question", name: "Do you offer home Swedish massage near Rajouri Garden?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send a therapist to your home anywhere in and around Rajouri Garden for the same gentle technique." } },
    { "@type": "Question", name: "How much does a Swedish massage cost in Rajouri Garden?", acceptedAnswer: { "@type": "Answer", text: "A Swedish massage at our Rajouri Garden outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹14,999 depending on duration." } },
  ],
};

export const metadata = {
  title: "Swedish Massage in Rajouri Garden - Gentle Relaxation | Luxury Russian Spa",
  description:
    "Swedish massage in Rajouri Garden near City Square Mall for gentle, full body relaxation. Certified therapists, hygienic setting. Book from ₹1999 today!",
  keywords: [
    "swedish massage in rajouri garden",
    "swedish massage near rajouri garden metro",
    "best swedish massage spa rajouri garden",
    "swedish massage price in rajouri garden",
    "swedish massage near city square mall",
    "russian swedish massage rajouri garden",
    "night swedish massage rajouri garden",
    "gentle massage rajouri garden",
  ],
  openGraph: {
    title: "Swedish Massage in Rajouri Garden - Gentle Relaxation | Luxury Russian Spa",
    description:
      "Swedish massage in Rajouri Garden near City Square Mall for gentle, full body relaxation. Certified therapists, hygienic setting. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/spa-in-Rajouri-Garden.webp"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/swedish-massage-in-rajouri-garden",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/swedish-massage-in-rajouri-garden",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/spa-in-Rajouri-Garden.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Swedish Massage in Rajouri Garden", item: "https://www.luxuryrussianspa.com/swedish-massage-in-rajouri-garden" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Swedish Massage",
  name: "Swedish Massage in Rajouri Garden",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Rajouri Garden",
  description:
    "Swedish massage in Rajouri Garden near City Square Mall for gentle, full body relaxation, with certified therapists in a hygienic setting.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-swedish-rajouri-garden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-swedish-massage-in-rajouri-garden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-swedish-massage-in-rajouri-garden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SwedishMassageRajouriGardenPage />
    </>
  );
}
