import { Image } from "next-sanity/image";

import type { Author } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { FaUser } from "react-icons/fa";

interface Props {
  name: string;
  picture: Exclude<Author["picture"], undefined> | null;
}

export default function Avatar({ name, picture }: Props) {
  return (
    <div className="flex items-center">
      {picture?.asset?._ref ? (
        <div className="mr-4 h-12 w-12">
          <Image
            alt={picture?.alt || ""}
            className="h-full rounded-full object-cover"
            height={48}
            width={48}
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
        <FaUser className="w-12 h-12 mr-4 bg-gray-400 pt-2 text-gray-300 rounded-full" />
      )}
      <div className="text-pretty font-semibold">{name}</div>
    </div>
  );
}
