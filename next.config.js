/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.wonni.site/api/:path*",
      },
      {
        source: "/api3/:path*",
        destination: "https://jsonplaceholder.typicode.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
