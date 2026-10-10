import Gallerypage from "./Gallerypage";
import photos from "./galleryData";

const SITE = "https://www.luxuryrussianspa.com";
const PAGE_URL = `${SITE}/gallery`;
const IMAGE_URL = `${SITE}/images/gallery/g01-lg.webp`;

// Mirrors the visible breadcrumb on the page (Home / Gallery).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Gallery", item: PAGE_URL },
  ],
};

// Lets search engines read every photo on the page with its caption, for image search.
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Luxury Russian Spa Gallery",
  url: PAGE_URL,
  description: "Photos of our treatment rooms, massage sessions, therapies and outlets across Delhi NCR.",
  image: photos.map((p) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE}/images/gallery/${p.id}-lg.webp`,
    thumbnailUrl: `${SITE}/images/gallery/${p.id}-sm.webp`,
    caption: p.caption,
    description: p.alt,
  })),
};

export const metadata = {
  title: "Spa Gallery Delhi - Photos & Videos of Our Spa | Luxury Russian Spa",
  description:
    "See inside Luxury Russian Spa before you book: treatment rooms, massage sessions, couple suites, therapies and outlets across Delhi NCR. Photos and videos.",
  keywords: [
    "spa gallery delhi",
    "spa photos delhi",
    "massage spa photos",
    "luxury spa ambience delhi",
    "spa room photos",
    "couple massage room delhi",
    "spa videos delhi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa Gallery Delhi | Take a Look Inside Luxury Russian Spa",
    description:
      "Treatment rooms, massage sessions, couple suites and outlets across Delhi NCR. Browse photos and short videos before you book.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, alt: "Candle-lit massage room at Luxury Russian Spa in Delhi" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Gallery Delhi | Take a Look Inside Luxury Russian Spa",
    description:
      "Treatment rooms, massage sessions, couple suites and outlets across Delhi NCR. Browse photos and short videos before you book.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="imagegallery-schema-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <Gallerypage />
    </>
  );
}
