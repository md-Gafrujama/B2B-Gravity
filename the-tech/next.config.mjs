/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
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
  }
}

export default nextConfig
