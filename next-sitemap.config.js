const DEFAULT_SITE_URL = "https://muhammadbilal-lime.vercel.app";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL;
const parsedSiteUrl = new URL(configuredSiteUrl);

if (parsedSiteUrl.protocol !== "http:" && parsedSiteUrl.protocol !== "https:") {
  throw new Error("The sitemap site URL must use HTTP or HTTPS.");
}

module.exports = {
  siteUrl: parsedSiteUrl.origin,
  generateRobotsTxt: true,
  exclude: ["/404", "/404.html", "/thanks", "/projects/clay-gatsby-theme"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
  },
};
