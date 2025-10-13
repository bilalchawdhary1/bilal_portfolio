/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings for browser extensions
  reactStrictMode: true,
  swcMinify: true,
  // Add experimental features to help with hydration
  experimental: {
    optimizeCss: true,
  },
  // Add webpack configuration to handle hydration issues
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
