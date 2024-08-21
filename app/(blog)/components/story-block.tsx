"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonLink from "../button-link";

interface StoryBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  reverse?: boolean;
}

export default function StoryBlock({
  title,
  description,
  imageSrc,
  link,
  reverse = false,
}: StoryBlockProps) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      } py-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 py-8 md:p-8">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={500}
          className="rounded-md md:rounded-lg shadow-lg shadow-primary-50/30"
        />
      </div>
      <div className="md:w-1/2 py-8 md:p-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-primary-100 mb-6">{description}</p>
        <ButtonLink href={link} className=" bg-accent px-8">
          View Packages
        </ButtonLink>
      </div>
    </motion.div>
  );
}
