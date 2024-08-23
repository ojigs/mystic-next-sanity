"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ImageGalleryProps = {
  images: { asset: { url: any }; alt: any }[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === null
        ? null
        : (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === null ? null : (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.asset.url}
              alt={image.alt}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-secondary/75 flex items-center justify-center z-50">
          <div className="max-w-4xl mx-auto relative">
            <Image
              src={images[currentImageIndex].asset.url}
              alt={images[currentImageIndex].alt}
              width={800}
              height={600}
              className="max-h-[80vh] w-auto"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 h-8 w-8 backdrop-blur-sm bg-secondary/50 hover:bg-opacity-100 rounded-full text-primary-100 hover:text-primary transition-all ease-in-out duration-500 text-2xl"
            >
              &times;
            </button>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 flex justify-center items-center transform -translate-y-1/2 h-12 w-12 backdrop-blur-sm bg-secondary/50 hover:bg-opacity-100 rounded-full text-primary-100 hover:text-primary transition-all ease-in-out duration-500 text-4xl"
            >
              <FaChevronLeft className="h-6 w-6" />{" "}
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 flex justify-center items-center transform -translate-y-1/2 h-12 w-12 backdrop-blur-sm bg-secondary/50 hover:bg-opacity-100 rounded-full text-primary-100 hover:text-primary transition-all ease-in-out duration-500 text-4xl"
            >
              <FaChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
