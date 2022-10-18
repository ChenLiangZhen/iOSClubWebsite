/** @type {import('next').NextConfig} */
const nextConfig = {



  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig

module.exports = {

  images: {
    domains: ['horizones-space.sgp1.cdn.digitaloceanspaces.com'],
  },

}
