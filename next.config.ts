import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.ata.uz",
      },
      {
        protocol: "https",
        hostname: "cdn-don-dev.ata.uz",
      },
    ],
  },
};

export default nextConfig;
