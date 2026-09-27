import Abpage from "./Abpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.luxuryrussianspa.com/about-us" },
  ],
};

export const metadata = {
  title: "Best Spa in Delhi - 5-Star Outlets Across Delhi NCR | Luxury Russian Spa",
  description: "Best spa in Delhi with 5-star outlets across Delhi NCR. Relaxing body, couple & ayurvedic therapies by certified therapists. Discover our story - book now!",
  keywords: ["about luxury russian spa", "delhi spa outlets", "5 star spa in delhi", "wellness centre delhi", "ayurvedic massage delhi"],
  openGraph: {
    title: "About Our Delhi Spa | 5 star outlets in Delhi",
    description: "Explore our Delhi spa for relaxing body, couple, and ayurvedic therapies — delivering unmatched wellness experiences across Delhi NCR.",
    images: ["https://www.luxuryrussianspa.com/images/aboutusbanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/about-us",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/aboutusbanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Abpage />
    </>
  );
}
