const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['files.stripe.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        port: '',
        pathname: 'links/**'
      },
    ],
  },
}

module.exports = withImages(nextConfig);
