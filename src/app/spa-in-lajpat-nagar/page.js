import Lajpatpage from "./Lajpatpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Lajpat Nagar", item: "https://www.luxuryrussianspa.com/spa-in-lajpat-nagar" },
  ],
};

export const metadata = {
  title: "Spa in Lajpat Nagar - Best Body Massage Centre | Luxury Russian Spa",
  description: "Spa in Lajpat Nagar offering B2B, full body & sandwich massage services. Trusted certified therapists in a comfortable setting. Book your session today!",
  keywords: ["spa in lajpat nagar", "massage in lajpat nagar", "body massage lajpat nagar"],
  openGraph: {
    title: "Visit Spa Centre in Lajpat Nagar | Get Body Massage in Lajpat nagar",
    description: "Looking to get a body massage in lajpat nagar? Visit our spa centre in lajpat nagar. We are the best spa in lajpat nagar for top massage services like B2B, Full Body Massage, Sandwich Massage Etc.",
    images: ["https://www.luxuryrussianspa.com/images/ErosHotel_lajpatnagar.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-lajpat-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/ErosHotel_lajpatnagar.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Lajpatpage />
    </>
  );
}
