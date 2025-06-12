/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Only add basePath if your repo name is NOT your GitHub username
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/angular-lifecycle-presentation' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/angular-lifecycle-presentation/' : '',
}

export default nextConfig
