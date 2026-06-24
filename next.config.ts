import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle for a small Docker image.
  output: "standalone",
  // The site ships its own SVG charts and local assets; no remote image hosts.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
