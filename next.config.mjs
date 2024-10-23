/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com',
    ]
  },

  experimental: {
    images: {
      allowFutureImage: true,
    },
  }
};

export default nextConfig;
