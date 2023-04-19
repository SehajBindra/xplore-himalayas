/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      "img.freepik.com",
      "unsplash.com",
      "localhost",
      "images.unsplash.com",
      "cdn.sanity.io",
    ],
  },
};
