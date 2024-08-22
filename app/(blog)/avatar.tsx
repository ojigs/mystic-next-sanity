import { Image } from "next-sanity/image";

import type { Author } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { FaUser } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  picture: Exclude<Author["picture"], undefined> | null;
  className?: string;
}

export default function Avatar({ name, picture, className }: Props) {
  return (
    <div className="flex items-center">
      {picture?.asset?._ref ? (
        <div className={twMerge("mr-4 h-12 w-12", className)}>
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
        <FaUser
          className={twMerge(
            "w-12 h-12 mr-4 bg-gray-400 pt-2 text-gray-300 rounded-full",
            className
          )}
        />
      )}
      <div className="text-pretty font-semibold">{name}</div>
    </div>
  );
}
