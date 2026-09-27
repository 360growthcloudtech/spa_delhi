
import Isb2bmassagelegal from "./Isb2bmassagelegal";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Is B2B Massage Legal in India", item: "https://www.luxuryrussianspa.com/is-b2b-massage-legal-in-india" },
  ],
};

export const metadata = {
  title: "Is B2B Massage Legal in India - Know the Facts | Luxury Russian Spa",
  description: "B2B massage legality in India explained - laws, risks & how to choose safely. Trusted, professional guidance from Luxury Russian Spa in Delhi NCR. Read the full guide!",
  keywords: ["is b2b massage legal in india", "b2b massage law india", "b2b massage legality"],
  openGraph: {
    title: "Is B2B Massage Legal in India? Know the Facts",
    description: "Is b2b massage legal in India? Learn the law, risks, and how to choose a professional spa in Delhi for safe, discreet wellness.",
    images: ["https://www.luxuryrussianspa.com/images/b2b-massage.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/is-b2b-massage-legal-in-india",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/b2b-massage.jpg"]
  }
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-is-b2b-massage-legal-in-india"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Isb2bmassagelegal />
    </>
  );
}
