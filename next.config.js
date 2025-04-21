/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Add webpack configuration to optimize Fast Refresh
  webpack: (config, { isServer }) => {
    // Keep Fast Refresh enabled in development
    if (!isServer) {
      config.optimization.runtimeChunk = 'single';
    }
    return config;
  },
}

module.exports = nextConfig
