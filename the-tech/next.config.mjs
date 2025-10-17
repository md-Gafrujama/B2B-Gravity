/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React strict mode for faster builds
  reactStrictMode: false,
  
  // Disable source maps in production to save memory
  productionBrowserSourceMaps: false,
  
  // Remove powered by header
  poweredByHeader: false,
  
  // Optimize on-demand entries
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  
  // Compress assets
  compress: true,
  
  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react', 'react-icons'],
  },
};

export default nextConfig;