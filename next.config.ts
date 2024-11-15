const isProd: boolean = process.env.NODE_ENV === "production";
const basePath: string = isProd ? "/portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["localhost"],
    path: `${basePath}/_next/image`,
  },
  assetPrefix: basePath,
  basePath: basePath,
  output: "export",
  trailingSlash: true,
  compress: false,
};

export default nextConfig;
