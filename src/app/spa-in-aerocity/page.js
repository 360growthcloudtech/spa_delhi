import Aeropage from "./Aeropage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Aerocity", item: "https://www.luxuryrussianspa.com/spa-in-aerocity" },
  ],
};

export const metadata = {
  title: "Spa in Aerocity - 5-Star Hotel Massage Near Airport | Luxury Russian Spa",
  description: "Spa in Aerocity offering 5-star hotel massage service near Delhi airport. Certified therapists deliver true relaxation and comfort. Book your visit today!",
  keywords: ["spa in aerocity", "massage in aerocity", "hotel spa aerocity", "body massage aerocity"],
  openGraph: {
    title: "Top-Notch Massage spa in Aerocity | 5 Star Hotel Spa in aerocity",
    description: "Looking for a massage spa in Aerocity? We offer spa service in Aerocity and hotel spa in aerocity. Our service always gives relaxation to customers. So visit our spa in Aerocity now.",
    images: ["https://www.luxuryrussianspa.com/images/NovotelNewDelhiAerocity.webp"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-aerocity",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/NovotelNewDelhiAerocity.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Aeropage />
    </>
  );
}
