/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ibb.co"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://admin-gptc-pmna.vercel.app/api/public/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
