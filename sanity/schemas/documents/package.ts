import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

import portfolioType from "./portfolio";

export default defineType({
  name: "package",
  title: "Package",
  icon: TagIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: portfolioType.name }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "category.image",
      subtitle: "category.title",
    },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: `Category: ${subtitle}` };
    },
  },
});
