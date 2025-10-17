/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Output standalone for better deployment
  output: 'standalone',
  
  // Optimize package imports
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'lucide-react',
      'react-icons'
    ],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    unoptimized: true // Speeds up build if you're not using next/image extensively
  },
  
  // Webpack optimizations for faster builds
  webpack: (config, { isServer }) => {
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
