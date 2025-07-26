/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // 👈 Required for using the /app directory
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
