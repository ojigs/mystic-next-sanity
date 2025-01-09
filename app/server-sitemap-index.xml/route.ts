import { getServerSideSitemapIndex } from "next-sitemap";

export default async function GET(request: Request) {
  return getServerSideSitemapIndex([
    `${process.env.SITE_URL}/server-sitemap.xml`,
  ]);
}
