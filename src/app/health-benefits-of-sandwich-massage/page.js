import Healthbenefits from "./Healthbenefits";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Health Benefits of Sandwich Massage", item: "https://www.luxuryrussianspa.com/health-benefits-of-sandwich-massage" },
  ],
};

export const metadata = {
  title: "Health Benefits of Sandwich Massage - Deep Relaxation | Luxury Russian Spa",
  description: "Health benefits of sandwich massage in Delhi - deep relaxation, better circulation & pain relief from two therapists in sync. Learn more and book your session!",
  keywords: ["health benefits of sandwich massage", "sandwich massage benefits", "sandwich massage advantages"],
  openGraph: {
    title: "Health Benefits of Sandwich Massage | Luxury Russian Spa",
    description: "Discover the health benefits of sandwich massage — deep relaxation, better circulation, and pain relief from two therapists working in sync. Learn more at Luxury Russian Spa.",
    images: ["https://www.luxuryrussianspa.com/images/HelpstoDe-Stress.webp"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/health-benefits-of-sandwich-massage",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/HelpstoDe-Stress.webp"]
  }
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-health-benefits-of-sandwich-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Healthbenefits />
    </>
  );
}
