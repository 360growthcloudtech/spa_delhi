import Fullbodypage from "./Fullbodypage";
// src/app/full-body-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a full body massage spa in Delhi?", acceptedAnswer: { "@type": "Answer", text: "A full body massage spa in Delhi is an outlet offering a complete head-to-toe massage — back, shoulders, arms, legs, and feet — performed by trained therapists in a private room." } },
    { "@type": "Question", name: "Do you offer luxury full body massage in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, our luxury full body massage in Delhi is available at select five-star hotels across the city, with a longer session, private suite, and optional facial add-on." } },
    { "@type": "Question", name: "What is the difference between body massage and full body massage in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Body massage is often used loosely to mean any massage service, while a full body massage in Delhi specifically covers every major muscle group — not just one targeted area." } },
    { "@type": "Question", name: "What is the full body massage price in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Our full body massage price in Delhi starts from ₹1999 at the outlet, ₹15,000 for home spa, and ₹20,000 for luxury hotel spa, depending on duration and location." } },
    { "@type": "Question", name: "What is the full body massage at home in Delhi price?", acceptedAnswer: { "@type": "Answer", text: "Full body massage at home in Delhi starts from ₹15,000 for a 90-minute session, with the same certified therapists and premium oils used at our outlets." } },
    { "@type": "Question", name: "Do you offer female to male body massage in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, female to male body massage in Delhi is available at all our outlets and for home and hotel bookings — just mention your therapist preference when you book." } },
    { "@type": "Question", name: "Can I book a full body massage at a hotel in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, we regularly serve guests staying at hotels across Delhi, including Roseate House, The Oberoi, and The Suryaa — just share your hotel and room details when booking." } },
  ],
};

export const metadata = {
  title: "Full Body Massage in Delhi - Affordable Luxury | Luxury Russian Spa",
  description:
    "Affordable full body massage in Delhi at 24+ outlets. Luxury full body massage spa options at hotels & home too. Certified therapists. Book from ₹1999 today!",
  keywords: [
    "full body massage in delhi",
    "affordable full body massage in delhi",
    "full body massage spa in delhi",
    "luxury full body massage in delhi",
    "body massage in delhi",
    "full body massage near me delhi",
    "full body spa delhi karol bagh",
    "full body massage price in delhi",
    "full body massage in delhi price",
    "full body massage at home in delhi price",
    "female to male body massage delhi",
    "russian body spa mahipalpur",
    "body massage mahipalpur",
    "body massage in lajpat nagar",
    "body massage saket",
    "full body massage in rohini",
    "full body massage in rohini delhi",
  ],
  openGraph: {
    title: "Full Body Massage in Delhi - Affordable Luxury | Luxury Russian Spa",
    description:
      "Affordable full body massage in Delhi at 24+ outlets. Luxury full body massage spa options at hotels & home too. Certified therapists. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/MassageSession.webp"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/full-body-massage-in-delhi",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/full-body-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/MassageSession.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Full Body Massage in Delhi", item: "https://www.luxuryrussianspa.com/full-body-massage-in-delhi" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Full Body Massage",
  name: "Full Body Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-9217255113",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Delhi",
  description:
    "Affordable full body massage in Delhi at 24+ outlets, with luxury hotel and home spa options and certified therapists, from ₹1999.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-full-body-massage-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-full-body-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-full-body-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Fullbodypage />
    </>
  );
}
