import Link from "next/link";

interface GalleryVideoProps {
  videoUrl: string | undefined;
  slug: string;
  id: string;
}

export default function GalleryVideo({
  videoUrl,
  slug,
  id,
}: GalleryVideoProps) {
  return (
    // <Link href={`/portfolio/${slug}/video/${id}`} scroll={false} passHref>
    <div className="relative p-1 bg-secondary-100 w-full h-auto rounded-lg shadow-md cursor-pointer">
      <iframe
        className="w-full h-auto"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        // width="560"
        // height="315"
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    // {/* </Link> */}
  );
}
