/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mysticfilms.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/blog/*"],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap-index.xml`],
  },
};
