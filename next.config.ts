import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Secret-Gift",
  assetPrefix: "/Secret-Gift",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
