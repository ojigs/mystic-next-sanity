import { Author } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { Image } from "next-sanity/image";
import { FaUser } from "react-icons/fa";

type AuthorBioProps = {
  author: {
    name: string;
    picture: Exclude<Author["picture"], undefined> | null;
  };
};

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="flex items-center space-x-4 border-t border-b border-primary-100 py-4 my-16">
      {author.picture?.asset?._ref ? (
        <div className="h-24 w-24 rounded-full">
          <Image
            alt={author.picture?.alt || ""}
            className="h-full w-full rounded-full object-cover"
            height={96}
            width={96}
            src={
              urlForImage(author.picture)
                ?.height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <FaUser className="w-24 h-24 bg-gray-500 pt-2 text-gray-400 rounded-full" />
      )}
      <div>
        <h3 className="font-bold text-lg">{author.name}</h3>
        {/* <p className="text-gray-600">{author.bio}</p> */}
      </div>
    </div>
  );
}
