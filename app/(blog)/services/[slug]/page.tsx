import type { Metadata, ResolvingMetadata } from "next";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

import type {
  ServiceQueryResult,
  ServiceSlugsResult,
  SettingsQueryResult,
} from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { serviceQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import HeroImage from "../../components/hero-image";
import GalleryImage from "../../components/gallery-image";
import GalleryVideo from "../../components/gallery-video";
import { PackagesSection } from "../../components/package-section";
import { ProcessSection } from "../../components/process-section";
import { FAQsSection } from "../../components/faq-section";
import { Image } from "next-sanity/image";

type Props = {
  params: { slug: string };
};

const serviceSlugs = groq`*[_type == "service"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<ServiceSlugsResult>({
    query: serviceSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = await sanityFetch<ServiceQueryResult>({
    query: serviceQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(service?.coverImage);

  return {
    title: service?.title,
    description: service?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function ServicePage({ params }: Props) {
  const [service, settings] = await Promise.all([
    sanityFetch<ServiceQueryResult>({
      query: serviceQuery,
      params,
    }),
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
  ]);

  if (!service?._id) {
    return notFound();
  }

  return (
    <>
      <div className="bg-secondary text-primary min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <HeroImage
            image={service.coverImage}
            priority
            className="opacity-50"
          />

          <div className="absolute z-10 inset-0 bg-gradient-to-t from-secondary to-accent/20 text-center text-primary-50 px-8 py-20 pt-36">
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-sm text-accent uppercase tracking-widest font-bold mb-6">
                  Our Service
                </h2>
                <p className="text-lg text-primary-50">{service.shortStory}</p>
              </div>
              <div className="flex-1">
                <Image
                  src={urlForImage(service.coverImage)?.url() as string}
                  alt="Story Image"
                  className="w-full h-auto rounded-lg shadow-md"
                  width={1000}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {service.gallery && (
          <section className="py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center glowRed">
                Gallery
              </h2>
              <div className="flex overflow-x-auto">
                {service.gallery?.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/3 px-2"
                  >
                    <GalleryImage
                      id={index.toString()}
                      slug={params.slug}
                      image={image}
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packages Section */}
        <PackagesSection
          packages={service.packages ?? []}
          link={service.formLink}
        />

        {/* Process Section */}
        <ProcessSection steps={service.process ?? []} />

        {/* FAQs Section */}
        <FAQsSection faqs={service.faq ?? []} />
      </div>
    </>
  );
}
