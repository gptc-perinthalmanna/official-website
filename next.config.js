/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://admin-gptc-pmna.vercel.app/api/public/:path*',
      },
    ]
  },
  // env: {
  //   DETA_PROJECT_ID: "",
  // },
}
