const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  output: "export",
  // Handle hydration errors by suppressing specific warnings
  onDemandEntries: {
    // This will help reduce client/server mismatches
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};
