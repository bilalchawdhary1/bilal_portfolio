/** @type {import('next').NextConfig} */
const DEFAULT_SITE_URL = "https://muhammadbilal-lime.vercel.app";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL;
const parsedSiteUrl = new URL(configuredSiteUrl);

if (parsedSiteUrl.protocol !== "http:" && parsedSiteUrl.protocol !== "https:") {
  throw new Error("The portfolio site URL must use HTTP or HTTPS.");
}

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: parsedSiteUrl.origin,
  },
};

module.exports = nextConfig;
