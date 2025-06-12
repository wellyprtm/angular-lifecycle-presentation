/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Build optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Replace with your actual repo name
  basePath: process.env.NODE_ENV === 'production' ? '/angular-lifecycle-presentation' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/angular-lifecycle-presentation/' : '',
}

export default nextConfig
