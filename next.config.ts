import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // The Artist Series is a standalone static page in public/artist-series.
  async rewrites() {
    return [
      { source: "/artist-series", destination: "/artist-series/index.html" },
    ];
  },
};

export default nextConfig;
