import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["luminous-badge-fa64222c36.media.strapiapp.com","0bysse967.ufs.sh","10bysse967.ufs.sh","res.cloudinary.com"],
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
