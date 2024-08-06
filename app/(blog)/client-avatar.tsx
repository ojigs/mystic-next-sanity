import { Image } from "next-sanity/image";

import type { Author } from "@/sanity.types";
import type { Testimonial } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { FaUser } from "react-icons/fa";

interface Props {
  picture: Exclude<Testimonial["clientImage"], undefined> | null;
}

export default function ClientAvatar({ picture }: Props) {
  return (
    <div className="flex items-center text-xl">
      {picture?.asset?._ref ? (
        <div className="h-24 w-24 mb-4 rounded-full">
          <Image
            alt={picture?.alt || ""}
            className="h-full w-full rounded-full object-cover"
            height={96}
            width={96}
            src={
              urlForImage(picture)
                ?.height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <FaUser className="w-24 h-24 bg-gray-500 pt-2 text-gray-400 mb-4 rounded-full" />
      )}
    </div>
  );
}
