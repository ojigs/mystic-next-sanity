import { Suspense } from "react";
import { blogFeatureQuery } from "@/sanity/lib/queries";
import { BlogFeatureQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

export default async function BlogSection() {
  const [blogPosts] = await Promise.all([
    sanityFetch<BlogFeatureQueryResult>({ query: blogFeatureQuery }),
  ]);

  return (
    <section className="bg-secondary py-16 overflow-hidden relative">
      <div className="px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center glowRed">
          Latest Blog Posts
        </h2>
        <p className="uppercase text-xs mb-16 text-center">
          Explore our <span className="glowing-text">latest</span> insights and
          stories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {blogPosts.map((post: any) => (
            <div
              key={post._id}
              className="bg-primary-100 text-secondary-100 shadow-accent/40 shadow-lg rounded-lg overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`}>
                <CoverImage image={post.coverImage} priority={false} />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="text-accent transition-colors text-center">
                      {post.title}
                    </span>
                  </Link>
                </h3>
                <div className="flex items-center justify-between gap-2 mb-4">
                  {post.author && (
                    <div className="">
                      <Avatar
                        name={post.author.name}
                        picture={post.author.picture}
                      />
                    </div>
                  )}
                  <div className="justify-end">
                    <p className="text-xs text-end">
                      <DateComponent dateString={post.date} />
                    </p>
                  </div>
                </div>
                <p className=" mb-6">{post.excerpt}</p>

                <div className="flex justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mb-4 text-accent hover:text-primary border-accent hover:bg-accent transition-colors duration-500 ease-in-out font-semibold text-xs uppercase px-6 py-2 border "
                  >
                    Continue reading...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
