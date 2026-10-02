import UttamNagarPage from "./UttamNagarPage";
// src/app/spa-in-uttam-nagar/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Uttam Nagar near the metro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Uttam Nagar, close to both Uttam Nagar East and West Metro Stations on the Blue Line, offering full body, Thai, and deep tissue massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Uttam Nagar for residents across West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage spa in Uttam Nagar for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage spa in Uttam Nagar welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is home service available — spa in Uttam Nagar home service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer spa in Uttam Nagar home service across West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Luxury Russian Spa Uttam Nagar spa contact number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach our Uttam Nagar spa contact number on WhatsApp or call at +91 8799716197, available 24/7 to help you book outlet, home, or hotel spa sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Thai massage or foreign therapists in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, thai massage is one of our most requested treatments in Uttam Nagar, delivered by experienced Thai, Russian, and Uzbek therapists alongside our skilled Indian staff.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Uttam Nagar outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a body spa in Uttam Nagar cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A body spa in Uttam Nagar at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and treatment.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Uttam Nagar - Body Massage & Thai Spa | Luxury Russian Spa",
  description:
    "Best spa in Uttam Nagar for body massage, body spa & Thai massage near the metro. Certified therapists, hygienic private rooms, home service. Book from ₹1999!",
  keywords: [
    "spa in uttam nagar",
    "uttam nagar spa",
    "best spa in uttam nagar",
    "body massage spa in uttam nagar",
    "body spa in uttam nagar",
    "spa in uttam nagar home service",
    "uttam nagar spa contact number",
    "thai massage",
    "thai massage in uttam nagar",
    "massage in uttam nagar",
    "full body massage in uttam nagar",
    "massage centre in uttam nagar",
    "body massage near me uttam nagar",
    "spa near uttam nagar metro station",
    "home spa in uttam nagar",
    "hotel spa in uttam nagar",
    "couple massage in uttam nagar",
    "spa with female therapists in uttam nagar",
    "night spa in uttam nagar",
  ],
  openGraph: {
    title: "Best Spa in Uttam Nagar - Body Massage & Thai Spa | Luxury Russian Spa",
    description:
      "Best spa in Uttam Nagar for body massage, body spa & Thai massage near the metro. Certified therapists, hygienic private rooms, home service. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-uttam-nagar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-uttam-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Uttam Nagar", item: "https://www.luxuryrussianspa.com/spa-in-uttam-nagar" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-uttam-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-uttam-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UttamNagarPage />
    </>
  );
}
