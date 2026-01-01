/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // WARNING: This will allow builds to succeed even with TypeScript errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
