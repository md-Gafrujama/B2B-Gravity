/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for faster builds
  output: 'export',
  trailingSlash: true,
  
  // Optimize images
  images: {
    unoptimized: true
  },
  
  // Skip build-time optimizations during development
  ...(process.env.NODE_ENV === 'development' && {
    swcMinify: false,
    experimental: {
      esmExternals: false
    }
  }),
  
  // Build optimization
  experimental: {
    optimizeCss: true,
  },
  
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

module.exports = nextConfig
