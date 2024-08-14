import type { Metadata, ResolvingMetadata } from "next";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

import type {
  PortfolioQueryResult,
  PortfolioSlugsResult,
  SettingsQueryResult,
} from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { portfolioQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import HeroImage from "../../hero-image";
import GalleryImage from "../../gallery-image";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

const portfolioSlugs = groq`*[_type == "post"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<PortfolioSlugsResult>({
    query: portfolioSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const portfolio = await sanityFetch<PortfolioQueryResult>({
    query: portfolioQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(portfolio?.coverImage);

  return {
    title: portfolio?.title,
    description: portfolio?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PortfolioPage({ params }: Props) {
  const [portfolio, settings] = await Promise.all([
    sanityFetch<PortfolioQueryResult>({
      query: portfolioQuery,
      params,
    }),
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
  ]);

  if (!portfolio?._id) {
    return notFound();
  }

  return (
    <>
      <div className="bg-secondary text-primary min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <HeroImage
            image={portfolio.coverImage}
            priority
            className="opacity-50"
          />
          <div className="absolute z-10 inset-0 bg-gradient-to-t from-secondary to-accent/20 text-center text-primary-50 px-8 py-20 pt-36 ">
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
                {portfolio.title}
              </h1>
              <p className="text-lg text-primary-50 mb-8">
                {portfolio.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center glowRed">
              Gallery
            </h2>
            <p className="uppercase max-w-xl mx-auto text-xs mb-16 text-center">
              Our curated collection of{" "}
              <span className="glowing-text">moments</span>, each frame telling
              a unique story
            </p>
            <div className="max-w-7xl mx-auto">
              <div className="masonry-container">
                {portfolio.gallery?.map((image, index) => (
                  <div key={index} className="relative w-full masonry-item">
                    <GalleryImage
                      id={index.toString()}
                      slug={params.slug}
                      image={image}
                      priority
                    />
                    {/* <Image
                      src={urlForImage(image)?.url() as string}
                      alt={image.alt || ""}
                      width={500}
                      height={500}
                      className="rounded-md w-full h-auto"
                    /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
