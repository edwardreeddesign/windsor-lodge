// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// module.exports = nextConfig = {
//   reactStrictMode: true,
// };

// next.config.js
module.exports = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "canadianhorseracinghalloffame.s3.amazonaws.com",
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
