/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com'],
    dangerouslyAllowSVG: true
  }
};

module.exports = nextConfig;
