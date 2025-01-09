import { getServerSideSitemap } from "next-sitemap";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-02-28",
  useCdn: false,
});

export async function GET(request: Request) {
  try {
    // Fetch all blog posts from Sanity
    const posts = await client.fetch(`*[_type == "blogPost"]{
      "slug": slug.current,
      _updatedAt
    }`);

    // Generate sitemap entries for blog posts
    const fields = posts.map((post: any) => ({
      loc: `${process.env.SITE_URL}/blog/${post.slug}`,
      lastmod: new Date(post._updatedAt).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    }));

    // Add all static pages
    const staticPages = [
      "",
      "/about-us",
      "/portfolio",
      "/services",
      "/contact",
      "/portfolio/weddings",
      "/portfolio/portraits",
      "/portfolio/branding",
      "/portfolio/cinematography",
      "/services/cinematography",
      "/services/portraits",
      "/services/branding",
      "/services/weddings",
    ];

    staticPages.forEach((path) => {
      fields.push({
        loc: `${process.env.SITE_URL}${path}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: path === "" ? 1.0 : 0.7,
      });
    });

    return getServerSideSitemap(fields);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
