// app/portfolio/[slug]/@modal/(..)image/[id]/page.tsx
import ImageModal from "@/app/(blog)/components/image-modal";
import { sanityFetch } from "@/sanity/lib/fetch";
import { portfolioQuery } from "@/sanity/lib/queries";
import type { PortfolioQueryResult } from "@/sanity.types";

export default async function ImageModalPage({
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

  return (
    <ImageModal
      images={portfolio.gallery}
      currentIndex={parseInt(params.id)}
      slug={params.slug}
    />
  );
}
