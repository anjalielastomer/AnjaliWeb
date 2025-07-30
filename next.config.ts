import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lovable-gift-31985371d0.media.strapiapp.com","0bysse967.ufs.sh","10bysse967.ufs.sh"],
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
