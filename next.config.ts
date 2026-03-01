import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false, //this to remove the next logo
  images: {
    domains: [],
  },
  turbopack: {},
};

export default nextConfig;
