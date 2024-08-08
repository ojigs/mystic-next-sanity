import Link from "next/link";
import { Suspense } from "react";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import MoreStories from "./more-stories";
import Onboarding from "./onboarding";
import PortableText from "./portable-text";

import type {
  HeroQueryResult,
  SettingsQueryResult,
  TestimonialsQueryResult,
} from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  heroQuery,
  settingsQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";
import Image from "next/image";
import ServicesSection from "./components/service-section";
import TestimonialsSection from "./components/testimonial-section";
import BlogSection from "./components/blog-section";
import ContactSection from "./components/contact-section";

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
        {title || demo.title}
      </h1>
      <h2 className="text-pretty mt-5 text-center text-lg lg:pl-8 lg:text-left">
        <PortableText
          className="prose-lg"
          value={description?.length ? description : demo.description}
        />
      </h2>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article>
      <Link className="group mb-8 block md:mb-16" href={`/posts/${slug}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-pretty mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && (
            <p className="text-pretty mb-4 text-lg leading-relaxed">
              {excerpt}
            </p>
          )}
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </article>
  );
}

export default async function Page() {
  const [settings, heroPost, testimonials] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
    sanityFetch<TestimonialsQueryResult>({ query: testimonialsQuery }),
  ]);

  const weddingImages = [
    { src: "/wedding-2.jpg", alt: "Wedding ceremony" },
    { src: "/wedding-3.jpg", alt: "Wedding ceremony" },
    { src: "/wedding-4.webp", alt: "Bridal bouquet" },
    { src: "/wedding-5.jpg", alt: "Bridal bouquet" },
    { src: "/wedding-6.jpg", alt: "Bridal bouquet" },
  ];

  return (
    <div className="bg-secondary text-primary">
      {/* Hero section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/heroImage.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
          priority
        />
        <div className="absolute text-center max-w-3xl mx-auto text-primary-50 px-8 ">
          <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
            Capturing momemts and stillness
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-xl mx-auto">
            We Bring Your Vision to Life with Expert Cinematography and
            Photography
          </p>
          <button className="mt-10 px-12 py-3 bg-accent hover:bg-opacity-75 transition-colors text-primary-50 rounded-lg text-lg">
            Book Now
          </button>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 md:px-8 text-primary-50">
        <div className="flex flex-col gap-28 md:gap-8 md:flex-row items-center max-w-6xl mx-auto">
          {/* Images container */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[300px] md:h-[500px]">
              {/* Image 1 */}
              <div className="w-full h-full md:pt-3 md:pr-3 relative md:absolute md:bottom-0 md:left-0 md:w-3/4 md:h-3/4 z-10 md:z-30 bg-secondary">
                <div className="relative w-full h-full">
                  <Image
                    src="/pexels.jpeg"
                    alt="Photographer in action"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className=""
                  />
                </div>
              </div>
              {/* Image 2 */}
              <div className="w-3/4 h-3/4 pt-3 pl-3 md:pt-0 md:pl-0 absolute -bottom-1/4 right-0 md:top-0 md:right-0 md:w-3/4 md:h-3/4 z-20 bg-secondary">
                <div className="relative w-full h-full">
                  <Image
                    src="/inspire.jpeg"
                    alt="Still photography"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full px-8 md:w-1/2 md:pl-16 md:pr-0">
            <h2 className="text-sm font-bold mb-4 text-accent uppercase tracking-widest">
              About Us
            </h2>
            <p className="text-3xl font-bold mb-4 leading-relaxed">
              We create a story with your beautiful memories
            </p>
            <p className="mb-4 text-primary-100">
              We are passionate about capturing life's most precious moments
              through the art of photography and videography. Our team of
              skilled professionals brings years of experience and creativity to
              every project.
            </p>
            <p className="mb-8 text-primary-100">
              Whether it's a wedding, corporate event, or personal portrait
              session, we strive to deliver stunning visuals that tell your
              unique story. Our commitment to quality and attention to detail
              sets us apart in the industry.
            </p>
            <Link
              href={"/about"}
              className="bg-accent hover:bg-opacity-75 transition-colors text-primary py-2 px-4 rounded"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center glowRed">
            Featured Portfolio
          </h2>

          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            {/* Main featured image */}
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pl-8">
              <div className="relative w-full h-[400px] lg:h-[600px]">
                <Image
                  src="/wedding-1.webp"
                  alt="Featured wedding photo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/3">
              <h3 className="text-sm font-bold mb-4 text-accent uppercase tracking-widest">
                Weddings
              </h3>
              <p className="text-2xl font-bold mb-4">
                Capturing Your <span className="glowing-text">Special</span> Day
              </p>
              <p className="mb-4 text-primary-100">
                We specialize in documenting every precious moment of your
                wedding day. From the nervous excitement of getting ready to the
                joyous celebration at the reception, our team ensures that no
                detail is missed.
              </p>
              <p className="mb-8 text-primary-100">
                Our approach combines candid shots that capture raw emotions
                with carefully composed portraits that you'll treasure for a
                lifetime.
              </p>
              <Link
                href="/portfolio/weddings"
                className="inline-block bg-accent hover:bg-opacity-75 transition-colors text-primary py-2 px-4 rounded"
              >
                View Wedding Portfolio
              </Link>
            </div>
          </div>

          {/* Grid of smaller images */}
          <div className="masonry-container">
            {weddingImages.map((img, index) => (
              <div key={index} className="relative w-full masonry-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  // fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={500}
                  height={500}
                  // style={{ objectFit: "contain" }}
                  className="rounded-md w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service section */}
      <ServicesSection />

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* <Intro title={settings?.title} description={settings?.description} />
      {heroPost ? (
        <HeroPost
          title={heroPost.title}
          slug={heroPost.slug}
          coverImage={heroPost.coverImage}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
          author={heroPost.author}
        />
      ) : (
        <Onboarding />
      )}
      {heroPost?._id && (
        <aside>
          <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            More Stories
          </h2>
          <Suspense>
            <MoreStories skip={heroPost._id} limit={100} />
          </Suspense>
        </aside>
      )} */}
    </div>
  );
}
