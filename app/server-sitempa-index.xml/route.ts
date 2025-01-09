import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET(request: Request) {
  return getServerSideSitemapIndex([
    `${process.env.SITE_URL}/server-sitemap.xml`,
  ]);
}
