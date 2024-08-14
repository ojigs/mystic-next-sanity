// app/portfolio/[slug]/image/[id]/page.tsx
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { portfolioQuery } from "@/sanity/lib/queries";
import type { PortfolioQueryResult } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";

export default async function ImagePage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const portfolio = await sanityFetch<PortfolioQueryResult>({
    query: portfolioQuery,
    params: { slug: params.slug },
  });

  if (!portfolio?.gallery) {
    return null;
  }

  const imageIndex = parseInt(params.id);
  const image = portfolio.gallery[imageIndex];

  if (!image) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 pt-24 h-screen flex justify-center items-center">
      <Image
        src={urlForImage(image)?.url() as string}
        alt={image.alt || ""}
        width={1200}
        height={800}
        className="w-full h-auto sm:w-auto sm:h-full"
      />
    </div>
  );
}
