import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
