/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/avatars/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/image/*",
        port: "",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
