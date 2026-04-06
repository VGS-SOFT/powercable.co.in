import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Only local images are used — no external domains needed.
    // Remove Unsplash patterns since all images are now served from /public/images/
    remotePatterns: [],
  },

  // Enforce HTTPS in production
  async headers() {
    return [
      {
        // Apply to all routes as a fallback (middleware also sets these)
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
