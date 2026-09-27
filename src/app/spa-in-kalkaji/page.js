import Spainkalkaji from "./Spainkalkaji";
// src/app/spa-in-kalkaji/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Kalkaji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Kalkaji offers a first visit package starting at just ₹1999 — a low-pressure way to try us before booking anything longer.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Kalkaji Temple or Kalkaji Metro Station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Kalkaji outlet is close to both the Kalkaji Temple and Kalkaji Metro Station on the Violet Line, so it's easy to reach whether you're visiting the temple or just passing through on the metro.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa convenient for people working near Nehru Place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very much so. Nehru Place is right next to Kalkaji, and a good number of our regulars are office-goers who stop by after work or during a longer lunch break.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Kalkaji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa across Kalkaji and South Delhi. Our therapist brings everything needed for a relaxing, hygienic session to your home.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Kalkaji spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Kalkaji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Kalkaji outlet has private rooms for couple massage, including our popular female to male couple massage, so two people can relax together comfortably.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Kalkaji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Kalkaji packages include experienced Russian, Thai, and Uzbek therapists alongside our trained Indian staff, from ₹2,800 depending on the package.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Kalkaji? Do you offer night spa appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Kalkaji outlet and home spa booking are open with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Kalkaji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Kalkaji outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages start from ₹15,000 depending on duration.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Kalkaji - Full Body Massage & Wellness Centre | Luxury Russian Spa",
  description:
    "Spa in Kalkaji near Kalkaji Temple & Nehru Place for full body, deep tissue & couple massage. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
  keywords: [
    "spa in kalkaji",
    "massage in kalkaji",
    "full body massage in kalkaji",
    "massage centre in kalkaji",
    "body massage near me kalkaji",
    "spa near kalkaji temple",
    "spa near nehru place",
    "home spa in kalkaji",
    "hotel spa in kalkaji",
    "couple massage in kalkaji",
    "best spa in kalkaji",
    "russian spa in kalkaji",
    "female to male spa in kalkaji",
    "night spa in kalkaji",
    "spa near kalkaji metro station",
  ],
  openGraph: {
    title: "Spa in Kalkaji - Full Body Massage & Wellness Centre | Luxury Russian Spa",
    description:
      "Spa in Kalkaji near Kalkaji Temple & Nehru Place for full body, deep tissue & couple massage. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/Reflexology.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-kalkaji",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-kalkaji",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Reflexology.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Kalkaji", item: "https://www.luxuryrussianspa.com/spa-in-kalkaji" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-kalkaji"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-kalkaji"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Spainkalkaji />
    </>
  );
}
