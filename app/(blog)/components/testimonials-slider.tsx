"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { TestimonialsQueryResult } from "@/sanity.types";
import ClientAvatar from "../client-avatar";

interface TestimonialsSliderProps {
  testimonials: TestimonialsQueryResult;
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Swiper
      modules={[A11y, Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      effect="fade"
      a11y={{
        containerRoleDescriptionMessage: "Group of slides showing testimonials",
        itemRoleDescriptionMessage: "Testimonial slide",
      }}
      autoplay={{
        delay: 10000,
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial._id}>
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-secondary">
            <ClientAvatar picture={testimonial.clientImage} />
            <p className="text-lg mb-8 text-center">{testimonial.review}</p>
            <h3 className="font-semibold text-accent">
              {testimonial.clientName}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
