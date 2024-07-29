import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  icon: StarIcon,
  type: "document",
  fields: [
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clientImage",
      title: "Client Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.clientImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            }),
        },
      ],
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
    }),
  ],
});
