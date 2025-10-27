/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only need if still on Next <16.0.3-canary or using legacy image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;