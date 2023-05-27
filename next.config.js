/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "http://localhost:3000/",
      },
    ]
  },
}

module.exports = nextConfig
