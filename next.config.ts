import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Allow production builds to succeed even if ESLint errors exist.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/history/jesus',
        destination: '/history/christ',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
