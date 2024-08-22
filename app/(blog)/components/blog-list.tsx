import { BlogPostsQueryResult } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { Image } from "next-sanity/image";
import Link from "next/link";
import Avatar from "../avatar";
import DateComponent from "../date";

type BlogListProps = {
  blogPosts: BlogPostsQueryResult;
};

export default function BlogList({ blogPosts }: BlogListProps) {
  return (
    <section className="py-16 px-8 bg-secondary text-primary">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
            >
              <div className="w-full md:w-1/3">
                <Image
                  src={
                    urlForImage(post.coverImage)
                      ?.height(300)
                      .width(200)
                      .url() as string
                  }
                  alt={post.coverImage?.alt || ""}
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-sm text-accent uppercase tracking-widest font-bold mb-6 hover:underline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-base text-primary-100 mb-4">
                  {post.excerpt}..
                </p>
                <div className="flex justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mb-4 text-accent hover:text-primary border-accent hover:bg-accent transition-colors duration-500 ease-in-out font-semibold text-xs uppercase px-6 py-2 border "
                  >
                    Read more...
                  </Link>
                </div>
                <div className="flex items-center justify-between text-primary-50 gap-2 mb-4">
                  {post.author && (
                    <div className="text-sm">
                      <Avatar
                        name={post.author.name}
                        picture={post.author.picture}
                        className="h-8 w-8"
                      />
                    </div>
                  )}
                  <div className="justify-end">
                    <p className="text-xs text-end">
                      <DateComponent dateString={post.date} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
