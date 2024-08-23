import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";
import { twMerge } from "tailwind-merge";

interface CoverImageProps {
  image: any;
  priority?: boolean;
  className?: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, className } = props;
  const image = source?.asset?._ref ? (
    <Image
      className={twMerge("h-auto w-full", className)}
      width={2000}
      height={1000}
      alt={source?.alt || ""}
      src={urlForImage(source)?.height(1000).width(2000).url() as string}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-secondary-100" style={{ paddingTop: "50%" }} />
  );

  return (
    <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
      {image}
    </div>
  );
}
