import RohiniPage from "./RohiniPage";
// src/app/spa-in-rohini/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Rohini offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Rohini at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Rohini Metro Station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Rohini spa outlet is conveniently located close to Rohini Metro Station on the Red Line, making it easy to reach from Rohini West, Rohini East, and nearby sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Rohini and North West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Rohini outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Rohini packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff, offering guests more variety in massage styles. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Rohini outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹14,999.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa Rohini Sector 16 or near City Centre Mall Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Rohini outlet serves guests across all major sectors, including Sector 3, 7, 9, 11, 16, 17, and 24, and is a short distance from City Centre Mall Rohini, along with home spa visits to your exact address within these areas.",
      },
    },
    {
      "@type": "Question",
      name: "I searched for spa near me Rohini — will you actually come to my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you searched spa near me Rohini or spa near Rohini, our outlet, home spa, and hotel spa options are built to cover the whole of Rohini and North West Delhi, not just the area right around our door.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Rohini - All Sectors & City Centre Mall | Luxury Russian Spa",
  description:
    "Best spa in Rohini covering Sector 3 to 24 & City Centre Mall. Full body, deep tissue & couple massage near Rohini Metro. Certified therapists. Book from ₹1999!",
  keywords: [
    "spa in rohini",
    "massage in rohini",
    "full body massage in rohini",
    "massage centre in rohini",
    "body massage near me rohini",
    "spa near rohini metro station",
    "home spa in rohini",
    "hotel spa in rohini",
    "couple massage in rohini",
    "best spa in rohini delhi",
    "spa in rohini sector 3",
    "spa in rohini sector 7",
    "spa in rohini sector 16",
    "spa in rohini sector 17",
    "spa in rohini sector 24",
    "spa rohini sector 16",
    "spa near me rohini",
    "spa near rohini",
    "spa in city centre mall rohini",
    "russian spa in rohini",
    "spa with female therapists in rohini",
    "night spa in rohini",
  ],
  openGraph: {
    title: "Best Spa in Rohini - All Sectors & City Centre Mall | Luxury Russian Spa",
    description:
      "Best spa in Rohini covering Sector 3 to 24 & City Centre Mall. Full body, deep tissue & couple massage near Rohini Metro. Certified therapists. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981900_woman-getting-back-massage-from-masseur_23-2150461404.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-rohini",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-rohini",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981900_woman-getting-back-massage-from-masseur_23-2150461404.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Rohini", item: "https://www.luxuryrussianspa.com/spa-in-rohini" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-rohini"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-rohini"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RohiniPage />
    </>
  );
}
