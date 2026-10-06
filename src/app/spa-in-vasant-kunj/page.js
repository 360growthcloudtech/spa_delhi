import VasantKunjPage from "./VasantKunjPage";
// src/app/spa-in-vasant-kunj/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Vasant Kunj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Vasant Kunj offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Vasant Kunj at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Ambience Mall Vasant Kunj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Vasant Kunj spa outlet is conveniently located close to Ambience Mall and the DLF Promenade, making it easy to combine a shopping trip with a relaxing massage session.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Vasant Kunj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Vasant Kunj and South Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Vasant Kunj spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Vasant Kunj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Vasant Kunj outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Vasant Kunj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Vasant Kunj packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Vasant Kunj? Do you offer night spa appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Vasant Kunj outlet and home spa booking support are available with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa in Vasant Kunj Sector B or Sector D?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Vasant Kunj outlet serves guests across all major sectors and pockets, including Sector B, Sector C, and Sector D, along with home spa visits to your exact address within these areas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Vasant Kunj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Vasant Kunj outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹14,999.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Vasant Kunj - Luxury Full Body Massage | Luxury Russian Spa",
  description:
    "Spa in Vasant Kunj for full body, deep tissue & couple massage near Ambience Mall. Certified therapists, hygienic rooms. Book from ₹1999 today!",
  keywords: [
    "spa in vasant kunj",
    "massage in vasant kunj",
    "full body massage in vasant kunj",
    "massage centre in vasant kunj",
    "body massage near me vasant kunj",
    "spa near ambience mall vasant kunj",
    "home spa in vasant kunj",
    "hotel spa in vasant kunj",
    "couple massage in vasant kunj",
    "best spa in vasant kunj",
    "russian spa in vasant kunj",
    "spa with female therapists in vasant kunj",
    "night spa in vasant kunj",
    "spa in vasant kunj sector d",
  ],
  openGraph: {
    title: "Spa in Vasant Kunj - Luxury Full Body Massage | Luxury Russian Spa",
    description:
      "Spa in Vasant Kunj for full body, deep tissue & couple massage near Ambience Mall. Certified therapists, hygienic rooms. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/pexels-olly-3673941.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-vasant-kunj",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-vasant-kunj",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/pexels-olly-3673941.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Vasant Kunj", item: "https://www.luxuryrussianspa.com/spa-in-vasant-kunj" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-vasant-kunj"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-vasant-kunj"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VasantKunjPage />
    </>
  );
}
