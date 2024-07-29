import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

import portfolioType from "./portfolio";

export default defineType({
  name: "homeFeature",
  title: "Featured Portfolio",
  icon: HomeIcon,
  type: "document",
  fields: [
    defineField({
      name: "featuredPortfolio",
      title: "Featured Portfolio",
      type: "reference",
      to: [{ type: "portfolioCategory" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "featuredPortfolio.title",
      media: "featuredPortfolio.image",
    },
    prepare({ title, media }) {
      return { title, media };
    },
  },
});
