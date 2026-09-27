import Hotstonemassagework from "./Hotstonemassagework";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "How Hot Stone Massage Works", item: "https://www.luxuryrussianspa.com/how-hot-stone-massage-works-in-delhi-spa" },
  ],
};

export const metadata = {
  title: "How Hot Stone Massage Works - Relieve Stress & Pain | Luxury Russian Spa",
  description: "Hot stone massage in Delhi to relax muscles, reduce stress & ease pain. Trusted certified therapists at our best-rated spa in Delhi NCR. Book your session now!",
  keywords: ["hot stone massage delhi", "how hot stone massage works", "hot stone therapy delhi"],
  openGraph: {
    title: "How Hot Stone Massage Works | Best Spa in Delhi",
    description: "Learn how hot stone massage works and what it is. Relax muscles, reduce stress & pain at the best hot stone massage spa in Delhi NCR. Book now!",
    images: ["https://www.luxuryrussianspa.com/images/Reflexology.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/how-hot-stone-massage-works-in-delhi-spa",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Reflexology.jpg"]
  }
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-how-hot-stone-massage-works-in-delhi-spa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hotstonemassagework />
    </>
  );
}
