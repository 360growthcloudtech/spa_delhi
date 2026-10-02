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
      // Couple massage page moved so the URL leads with the primary keyword
      {
        source: "/couples-massage-in-delhi",
        destination: "/couple-massage",
        permanent: true,
      },
      {
        source: "/hotel-and-home-spa",
        destination: "/massage-service-in-delhi",
        permanent: true,
      },
      {
        source: "/hotel-and-home-spa/",
        destination: "/massage-service-in-delhi",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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
