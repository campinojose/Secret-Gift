import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generates a static HTML/CSS/JS export
  basePath: "/Secret-Gift", // Necessary for GitHub Pages subfolder deployment
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
