import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";
import { twMerge } from "tailwind-merge";

interface HeroImageProps {
  image: any;
  priority?: boolean;
  className: string;
}

export default function HeroImage(props: HeroImageProps) {
  const { image: source, priority, className } = props;
  const image = source?.asset?._ref ? (
    <Image
      alt={source?.alt || ""}
      src={urlForImage(source)?.height(1000).width(2000).url() as string}
      fill
      sizes="100vw"
      style={{ objectFit: "cover" }}
      className={twMerge("", className)}
      priority={priority}
    />
  ) : (
    <div className="bg-secondary-100" style={{ paddingTop: "50%" }} />
  );

  return <div className="relative w-full h-[50vh]">{image}</div>;
}
