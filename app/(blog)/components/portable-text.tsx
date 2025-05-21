/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        const imageUrl = urlForImage(value)?.url();
        if (!imageUrl) return null;

        return (
          <div className="my-4">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              width={800}
              height={600}
              className="rounded-lg"
            />
            {value.alt && (
              <p className="text-sm text-center text-primary-50 mt-2">
                {value.alt}
              </p>
            )}
          </div>
        );
      },
    },
  };

  return (
    <div
      className={["prose prose-invert", className].filter(Boolean).join(" ")}
    >
      <PortableText components={components} value={value} />
    </div>
  );
}
