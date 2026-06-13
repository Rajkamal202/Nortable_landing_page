/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@splinetool/react-spline'],
  experimental: {
    // @vercel/blob bundles a modern build of undici that Next 13.5.4's bundler
    // can't parse. Externalize it so it runs as a plain Node dependency on the server.
    serverComponentsExternalPackages: ['@vercel/blob'],
  },
}

module.exports = nextConfig
