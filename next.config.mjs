/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Add this if your repo name is not your username
  basePath: process.env.NODE_ENV === 'production' ? '/angular-lifecycle-presentation' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/angular-lifecycle-presentation/' : '',
}

export default nextConfig
