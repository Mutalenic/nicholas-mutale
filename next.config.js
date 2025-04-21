/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Add webpack configuration to optimize Fast Refresh
  webpack: (config, { isServer, dev }) => {
    // Keep Fast Refresh enabled in development
    if (!isServer && dev) {
      config.optimization.runtimeChunk = 'single';
      
      // Ensure these modules get all changes
      const fullReloadModules = ['tailwind.config.js', 'postcss.config.js'];
      const ignorePatterns = fullReloadModules.map(module => `**/${module}`);
      
      // Set up watchOptions
      config.watchOptions = config.watchOptions || {};
      
      // Handle the 'ignored' property correctly regardless of its current type
      if (!config.watchOptions.ignored) {
        // If it doesn't exist, just use our patterns
        config.watchOptions.ignored = ignorePatterns;
      } else if (Array.isArray(config.watchOptions.ignored)) {
        // If it's already an array, we can concatenate
        config.watchOptions.ignored = config.watchOptions.ignored.concat(ignorePatterns);
      } else {
        // If it's a string or RegExp, convert to array that includes original value
        config.watchOptions.ignored = [config.watchOptions.ignored, ...ignorePatterns];
      }
    }
    return config;
  },
}

module.exports = nextConfig
