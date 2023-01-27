/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["commondatastorage.googleapis.com","upload.wikimedia.org"]
  }
}

module.exports = nextConfig
