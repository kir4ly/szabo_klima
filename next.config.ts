import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack resolves modules from
  // ./node_modules and only watches this directory — a stray package-lock.json
  // in the home folder was otherwise making Next treat all of ~/ as the root.
  turbopack: { root: __dirname },
  // Allow q=80 in addition to the default 75. Bumping the carousel images to
  // q=80 also changes their /_next/image URLs, which forces browsers to drop
  // any stale (pre-rotation) cached copies.
  images: { qualities: [75, 82] },
};

export default nextConfig;
