import { sanityFetch } from "@/sanity/lib/fetch";
import { blogPostQuery } from "@/sanity/lib/queries";
import VideoPlayer from "@/app/(blog)/components/video-player";
import AuthorBio from "@/app/(blog)/components/author-bio";
import RelatedPosts from "@/app/(blog)/components/related-posts";
import ImageGallery from "@/app/(blog)/components/image-gallery";
import { BlogPostQueryResult, BlogPostSlugsResult } from "@/sanity.types";
import DateComponent from "../../components/date";
import PortableText from "../../components/portable-text";
import { groq, PortableTextBlock } from "next-sanity";
import CoverImage from "../../components/cover-image";
import ContactSection from "../../components/contact-section";
import { Metadata, ResolvingMetadata } from "next";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const blogPostSlugs = groq`*[_type == "post"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<BlogPostSlugsResult>({
    query: blogPostSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch<BlogPostQueryResult>({
    query: blogPostQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<BlogPostQueryResult>({
    query: blogPostQuery,
    params: { slug: params.slug },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div className="bg-secondary text-primary">
      <article className="max-w-4xl mx-auto px-8 pt-24">
        {/* Hero Section */}
        <div className="relative min-h-96 mb-8 overflow-clip">
          <CoverImage
            image={post.coverImage}
            className="h-full bg-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent p-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 break-words hyphens-auto">
              {post.title}
            </h1>
            <div className="text-primary opacity-75">
              By {post.author?.name} on <DateComponent dateString={post.date} />
            </div>
            <div className="mt-2">
              {post.categories?.map((category) => (
                <span
                  key={category._id}
                  className="inline-block bg-accent text-primary-50 px-2 py-1 rounded-full text-sm mr-2"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg mx-auto text-primary-50">
          <PortableText
            value={post.content as PortableTextBlock[]}
            className="text-primary-50"
          />
        </div>

        {/* Image Gallery */}
        {post.gallery && post.gallery.length > 0 && (
          <ImageGallery
            images={post.gallery.map((image) => ({
              asset: { url: image.asset?.url || "" },
              alt: image.alt || "",
            }))}
          />
        )}

        {/* Video Section */}
        {post.videos && post.videos.length > 0 && (
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            <div className="masonry-container video">
              {post.videos.map(
                (video, index) =>
                  video.asset?.url && (
                    <VideoPlayer key={index} url={video.asset.url} />
                  )
              )}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="hidden md:mb-12 md:block">
          {post.author && <AuthorBio author={post.author} />}
        </div>
        {/* Related Posts */}
        {post.categories && post.categories.length > 0 && (
          <RelatedPosts
            categories={post.categories || []}
            currentPostId={post._id}
          />
        )}
      </article>
      {/* Contact Section */}
      <ContactSection
        title="Let us write your story"
        description="Every moment has a story, and we are here to tell yours. Dive into our insights and experiences as we capture life's most memorable events."
      />
    </div>
  );
}
