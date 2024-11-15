const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
    path: `${basePath}/_next/image`
  },
  assetPrefix: basePath,
  basePath: basePath,
  output: "export",
  trailingSlash: true,
  compress: false
};

module.exports = nextConfig;
