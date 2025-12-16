import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luminous-badge-fa64222c36.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "0bysse967.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "10bysse967.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Turbopack configuration (Next.js 16+)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  // Keep webpack config for production builds
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
