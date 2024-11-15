const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  output: "export",
};
