import Gallerypage from "./Gallerypage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://www.luxuryrussianspa.com/gallery" },
  ],
};

export const metadata = {
  title: "Spa Gallery Delhi - See Our Luxury Outlets & Ambience | Luxury Russian Spa",
  description: "Spa gallery for Delhi's luxury outlets showcasing private suites & massage rooms. Premium 5-star hotel ambience across Delhi NCR. View photos & book a visit!",
  keywords: ["spa gallery delhi", "spa photos delhi", "luxury spa ambience delhi"],
  openGraph: {
    title: "Spa Gallery Delhi | Photos of Our Luxury Spa Outlets & Ambience",
    description: "Take a look inside Luxury Russian Spa's luxury outlets — private suites, massage rooms, and premium spa ambience across our 5-star hotel locations in Delhi NCR.",
    images: ["https://www.luxuryrussianspa.com/images/5StarHotelSpa.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/gallery",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/5StarHotelSpa.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Gallerypage />
    </>
  );
}

