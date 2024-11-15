import type { NextConfig } from "next";

const isProd: boolean = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  output: "export",
};

export default nextConfig;
