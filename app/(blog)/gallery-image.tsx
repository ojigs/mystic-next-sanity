// components/GalleryImage.tsx
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import Link from "next/link";

interface GalleryImageProps {
  image: any;
  priority?: boolean;
  slug: string;
  id: string;
}

export default function GalleryImage(props: GalleryImageProps) {
  const { image: source, priority, slug, id } = props;

  const image = source?.asset?._ref ? (
    <Image
      className="w-full h-auto rounded-lg shadow-md cursor-pointer"
      width={1000}
      height={500}
      alt={source?.alt || ""}
      src={urlForImage(source)?.url() as string}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
  );

  return (
    <Link href={`/portfolio/${slug}/image/${id}`} scroll={false} passHref>
      {image}
    </Link>
  );
}
