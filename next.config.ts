import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Keep sharp out of the server bundle so Vercel traces its native Linux
  // binary into the function. When bundled, `require('@img/sharp-linux-x64')`
  // fails at runtime and sharp silently falls back to its WebAssembly build,
  // whose output Buffers live in a SharedArrayBuffer — which `fetch` refuses to
  // send, so every media upload 500'd with
  // "TypeError: ArrayBuffer: SharedArrayBuffer is not allowed."
  // See src/payload/hooks/copySharedImageBuffers.ts.
  serverExternalPackages: ["sharp"],
  images: {
    remotePatterns: [
      // Vercel Blob — where Payload stores media from Phase 4 onward.
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      // Legacy Strapi / Cloudinary / UploadThing hosts. Keep these until the
      // Phase 8 content migration completes — existing content still points at
      // them.
      {
        protocol: "https",
        hostname: "luminous-badge-fa64222c36.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "tasteful-fellowship-85303df149.media.strapiapp.com",
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

export default withPayload(nextConfig);
