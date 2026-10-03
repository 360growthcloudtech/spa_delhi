/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Canonical host: www.luxuryrussianspa.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "luxuryrussianspa.com" }],
        destination: "https://www.luxuryrussianspa.com/:path*",
        permanent: true,
      },
      // Old domain -> new domain (301 keeps existing search rankings)
      {
        source: "/:path*",
        has: [{ type: "host", value: "spadelhi.com" }],
        destination: "https://www.luxuryrussianspa.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.spadelhi.com" }],
        destination: "https://www.luxuryrussianspa.com/:path*",
        permanent: true,
      },
      // Sandwich massage page moved so the URL leads with the primary keyword
      {
        source: "/sandwich-massage-in-delhi",
        destination: "/sandwich-massage",
        permanent: true,
      },
      // Blog slug changed so it stops competing with /sandwich-massage for "sandwich massage in delhi"
      {
        source: "/blog/sandwich-massage-in-delhi",
        destination: "/blog/first-sandwich-massage-what-to-expect",
        permanent: true,
      },
      // Services page moved so the URL matches the primary keyword "massage in delhi"
      {
        source: "/massage-service-in-delhi",
        destination: "/massage-in-delhi",
        permanent: true,
      },
      // Saket couple page removed; send its visitors and link value to the main couple page
      {
        source: "/couple-massage-in-saket",
        destination: "/couple-massage",
        permanent: true,
      },
      // Couple massage page moved so the URL leads with the primary keyword
      {
        source: "/couples-massage-in-delhi",
        destination: "/couple-massage",
        permanent: true,
      },
      {
        source: "/hotel-and-home-spa",
        destination: "/massage-in-delhi",
        permanent: true,
      },
      {
        source: "/hotel-and-home-spa/",
        destination: "/massage-in-delhi",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Default list goes up to 3840px; nothing on the site needs more than 1920px.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.luxuryrussianspa.com',
        pathname: '/**',
      },
      // add more patterns if needed
    ],
  },
  // other config...
};



export default nextConfig;
