"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonLink from "./button-link";

const HomeHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("canplaythrough", () => {
        setIsVideoLoaded(true);
      });
    }
    return () => {
      if (video) {
        video.removeEventListener("canplaythrough", () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  return (
    <>
      {!isVideoLoaded && (
        <Image
          src="/heroImage2.png"
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="opacity-50"
          priority
        />
      )}
      <video
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-50" : "opacity-0"
        }`}
        onCanPlay={() => setIsVideoLoaded(true)}
      />
      <div className="absolute text-center max-w-3xl mx-auto text-primary-50 px-8 z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
          Capturing moments and stillness
        </h1>
        <p className="text-xl md:text-2xl mt-6 max-w-xl mx-auto">
          We Bring Your Vision to Life with Expert Cinematography and
          Photography
        </p>
        <ButtonLink
          href="/contact"
          className="mt-10 px-12 py-3 bg-accent text-primary-50 rounded-lg text-lg"
        >
          Book Now
        </ButtonLink>
      </div>
    </>
  );
};

export default HomeHero;