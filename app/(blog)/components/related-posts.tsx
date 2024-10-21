import { sanityFetch } from "@/sanity/lib/fetch";
import { relatedPostsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { RelatedPostsQueryResult } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { Image } from "next-sanity/image";

type RelatedPostsProps = {
  categories: { _id: string; title: string | null; value: string | null }[];
  currentPostId: string;
};

export default async function RelatedPosts({
  categories,
  currentPostId,
}: RelatedPostsProps) {
  const relatedPosts = await sanityFetch<RelatedPostsQueryResult>({
    query: relatedPostsQuery,
    params: { categories: categories.map((c) => c._id), currentPostId },
  });

  return (
    <>
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <Link
                href={`/blog/${post.slug?.current}`}
                key={post._id}
                className="block"
              >
                <div className="bg-primary-100 text-secondary-100 shadow-accent/40 shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src={
                      urlForImage(post.coverImage)
                        ?.height(1000)
                        .width(2000)
                        .url() as string
                    }
                    alt={post.coverImage?.alt || ""}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
