import SandwichMassageGurgaonPage from "./SandwichMassageGurgaonPage";
// src/app/sandwich-massage-in-gurgaon/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for sandwich massage in Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "Our sandwich massage in Gurgaon starts at ₹2999 for a first-visit session at our outlet, close to Cyber Hub." } },
    { "@type": "Question", name: "What exactly is a sandwich massage?", acceptedAnswer: { "@type": "Answer", text: "A sandwich massage involves two therapists working in sync on both sides of your body at once, delivering deeper, more layered relaxation than a single-therapist session." } },
    { "@type": "Question", name: "Is your sandwich massage spa near Cyber Hub or MG Road?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Gurgaon outlet is a short drive from Cyber Hub, MG Road, and Golf Course Road, making it an easy stop after work." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists for sandwich massage in Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are available for sandwich sessions alongside our experienced Indian staff, from ₹2,800 per therapist depending on the package." } },
    { "@type": "Question", name: "Can I book a night sandwich massage appointment in Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
    { "@type": "Question", name: "Do you offer home sandwich massage near Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send two therapists to your home anywhere in and around Gurgaon for the same synchronized experience." } },
    { "@type": "Question", name: "Is sandwich massage worth trying if I've never had one?", acceptedAnswer: { "@type": "Answer", text: "Most first-timers say it's noticeably different from a standard massage — the coordinated, two-therapist technique is worth trying at least once." } },
    { "@type": "Question", name: "How much does a sandwich massage cost in Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "A sandwich massage at our Gurgaon outlet starts from ₹2999 for the first visit. Home and hotel packages start from ₹18,000 depending on duration." } },
  ],
};

export const metadata = {
  title: "Sandwich Massage in Gurgaon - Two-Therapist Session | Luxury Russian Spa",
  description:
    "Sandwich massage in Gurgaon near Cyber Hub for a unique two-therapist relaxation session. Certified therapists, hygienic setting. Book from ₹2999 today!",
  keywords: [
    "sandwich massage in gurgaon",
    "sandwich massage near cyber hub gurgaon",
    "sandwich massage price in gurgaon",
    "best sandwich massage spa gurgaon",
    "sandwich massage near mg road",
    "russian sandwich massage gurgaon",
    "night sandwich massage gurgaon",
    "two therapist massage gurgaon",
  ],
  openGraph: {
    title: "Sandwich Massage in Gurgaon - Two-Therapist Session | Luxury Russian Spa",
    description:
      "Sandwich massage in Gurgaon near Cyber Hub for a unique two-therapist relaxation session. Certified therapists, hygienic setting. Book from ₹2999 today!",
    images: ["https://www.luxuryrussianspa.com/images/Hyatt_Regency_Gurgaon.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/sandwich-massage-in-gurgaon",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/sandwich-massage-in-gurgaon",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Hyatt_Regency_Gurgaon.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Sandwich Massage in Gurgaon", item: "https://www.luxuryrussianspa.com/sandwich-massage-in-gurgaon" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sandwich Massage",
  name: "Sandwich Massage in Gurgaon",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Gurgaon",
  description:
    "Sandwich massage in Gurgaon near Cyber Hub for a unique two-therapist relaxation session, with certified therapists in a hygienic setting.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-sandwich-gurgaon"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-sandwich-massage-in-gurgaon"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-sandwich-massage-in-gurgaon"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SandwichMassageGurgaonPage />
    </>
  );
}
