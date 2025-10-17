/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Output standalone for better deployment
  output: 'standalone',
  
  // Disable experimental features that may cause build issues
  experimental: {},
  
  // Image optimization
  images: {
    unoptimized: true
  },
  
  // Webpack optimizations for faster builds
  webpack: (config, { isServer }) => {
    // Reduce bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  }
}

export default nextConfig
