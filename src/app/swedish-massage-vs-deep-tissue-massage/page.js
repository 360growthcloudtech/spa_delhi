import Swedishvsdeeptissue from "./Swedishvsdeeptissue";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Swedish Massage vs Deep Tissue Massage", item: "https://www.luxuryrussianspa.com/swedish-massage-vs-deep-tissue-massage" },
  ],
};

export const metadata = {
  title: "Swedish vs Deep Tissue Massage - Which Is Right for You | Luxury Russian Spa",
  description: "Swedish massage vs deep tissue massage compared - key differences & benefits explained for Delhi readers. Trusted guidance from Luxury Russian Spa's therapists. Read now!",
  keywords: ["swedish massage vs deep tissue massage", "swedish massage delhi", "difference between swedish and deep tissue massage"],
  openGraph: {
    title: "Swedish Massage vs Deep Tissue Massage | Which One is Right for You",
    description: "Confused between Swedish massage and deep tissue massage? Learn the key differences, benefits, and which therapy suits your needs best at Luxury Russian Spa.",
    images: ["https://www.luxuryrussianspa.com/images/SpecializedTreatments.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/swedish-massage-vs-deep-tissue-massage",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/SpecializedTreatments.jpg"]
  }
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-swedish-massage-vs-deep-tissue-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Swedishvsdeeptissue />
    </>
  );
}
