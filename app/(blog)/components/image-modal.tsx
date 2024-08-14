import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import Link from "next/link";
import { Modal } from "./modal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageModalProps {
  images: any[];
  currentIndex: number;
  slug: string;
}

export default function ImageModal({
  images,
  currentIndex,
  slug,
}: ImageModalProps) {
  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <Modal slug={slug} previousIndex={previousIndex} nextIndex={nextIndex}>
      <Image
        src={urlForImage(images[currentIndex])?.url() as string}
        alt={images[currentIndex]?.alt || ""}
        width={1000}
        height={600}
        className="mx-auto w-full h-auto sm:w-auto sm:h-full aspect-auto"
      />
      <div>
        <Link
          href={`/portfolio/${slug}/image/${previousIndex}`}
          scroll={false}
          shallow
          replace
          className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          <FaChevronLeft className="h-6 w-6" />
        </Link>
        <Link
          href={`/portfolio/${slug}/image/${nextIndex}`}
          scroll={false}
          shallow
          replace
          className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          <FaChevronRight className="h-6 w-6" />
        </Link>
      </div>
    </Modal>
  );
}
