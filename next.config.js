/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: "file-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
