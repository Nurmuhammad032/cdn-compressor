import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_CDN_URL}`)],
  },
};

export default nextConfig;
