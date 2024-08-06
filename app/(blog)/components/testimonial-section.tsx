import { Suspense } from "react";
import TestimonialsSlider from "./testimonials-slider";
import { TestimonialsLoading } from "./loading-skeletons";
import { testimonialsQuery } from "@/sanity/lib/queries";
import { TestimonialsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";

export default async function TestimonialsSection() {
  const [testimonials] = await Promise.all([
    sanityFetch<TestimonialsQueryResult>({ query: testimonialsQuery }),
  ]);

  return (
    <section className="bg-secondary py-16 overflow-hidden relative">
      <div className="px-8 z-50">
        <h2 className="text-3xl font-bold mb-8 text-center glowRed">
          Testimonials
        </h2>
        <p className="uppercase text-xs mb-16 text-center">
          What our <span className="glowing-text">clients</span> say about us
        </p>
        <div className="max-w-sm mx-auto">
          <Suspense fallback={<TestimonialsLoading />}>
            <TestimonialsSlider testimonials={testimonials} />
          </Suspense>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute testimonial-bg-1 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/testimonial-bg-1.jpeg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className=""
            />
          </div>
        </div>
        <div className="absolute testimonial-bg-2 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/testimonial-bg-2.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className=""
            />
          </div>
        </div>
        <div className="absolute testimonial-bg-3 overflow-hidden z-10 bg-secondary p-3">
          <div className="relative w-full h-full">
            <Image
              src="/testimonial-bg-3.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
