import JanakpuriPage from "./JanakpuriPage";
// src/app/spa-in-janakpuri/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Janakpuri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Janakpuri offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Janakpuri at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Janakpuri West Metro Station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Janakpuri spa outlet is conveniently located close to Janakpuri West Metro Station, the interchange between the Blue Line and Magenta Line, as well as Janakpuri East and District Centre.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Janakpuri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Janakpuri and West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Janakpuri spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Janakpuri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Janakpuri outlet has private rooms designed for couple massage, including our popular female to male couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Janakpuri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Janakpuri packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Janakpuri? Do you offer night spa appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Janakpuri outlet and home spa booking support are available with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa near Janakpuri District Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Janakpuri outlet serves guests across all major blocks, including areas close to District Centre Janakpuri, along with home spa visits to your exact address within these areas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Janakpuri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Janakpuri outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Janakpuri - Full Body Massage Near Metro | Luxury Russian Spa",
  description:
    "Spa in Janakpuri for full body, deep tissue & couple massage near Janakpuri West Metro. Certified therapists, hygienic private rooms. Book today!",
  keywords: [
    "spa in janakpuri",
    "massage in janakpuri",
    "full body massage in janakpuri",
    "massage centre in janakpuri",
    "body massage near me janakpuri",
    "spa near janakpuri west metro station",
    "home spa in janakpuri",
    "hotel spa in janakpuri",
    "couple massage in janakpuri",
    "best spa in janakpuri",
    "russian spa in janakpuri",
    "female to male spa in janakpuri",
    "night spa in janakpuri",
    "spa near janakpuri district centre",
  ],
  openGraph: {
    title: "Spa in Janakpuri - Full Body Massage Near Metro | Luxury Russian Spa",
    description:
      "Spa in Janakpuri for full body, deep tissue & couple massage near Janakpuri West Metro. Certified therapists, hygienic private rooms. Book today!",
    images: ["https://www.luxuryrussianspa.com/images/pexels-pavel-danilyuk-9119782.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-janakpuri",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-janakpuri",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/pexels-pavel-danilyuk-9119782.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Janakpuri", item: "https://www.luxuryrussianspa.com/spa-in-janakpuri" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-janakpuri"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-janakpuri"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <JanakpuriPage />
    </>
  );
}
