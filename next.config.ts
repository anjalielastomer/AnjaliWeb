import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lovable-gift-31985371d0.media.strapiapp.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
