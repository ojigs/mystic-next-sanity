// import { defineField, defineType } from "sanity";
// import { FolderIcon } from "@sanity/icons";

// export default defineType({
//   name: "portfolioCategory",
//   title: "Portfolio Category",
//   icon: FolderIcon,
//   type: "document",
//   fields: [
//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "description",
//       title: "Description",
//       type: "text",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "coverImage",
//       title: "Cover Image",
//       type: "image",
//       fields: [
//         {
//           name: "alt",
//           type: "string",
//           title: "Alternative text",
//           description: "Important for SEO and accessibility.",
//           validation: (rule) =>
//             rule.custom((alt, context) => {
//               if ((context.document?.image as any)?.asset?._ref && !alt) {
//                 return "Required";
//               }
//               return true;
//             }),
//         },
//       ],
//       options: {
//         hotspot: true,
//         aiAssist: {
//           imageDescriptionField: "alt",
//         },
//       },
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "gallery",
//       title: "Gallery",
//       type: "array",
//       of: [
//         {
//           type: "image",
//           options: {
//             hotspot: true,
//             aiAssist: {
//               imageDescriptionField: "alt",
//             },
//           },
//           fields: [
//             {
//               name: "alt",
//               type: "string",
//               title: "Alternative text",
//               description: "Important for SEO and accessibility.",
//               validation: (rule) =>
//                 rule.custom((alt, context) => {
//                   if ((context.document?.image as any)?.asset?._ref && !alt) {
//                     return "Required";
//                   }
//                   return true;
//                 }),
//             },
//           ],
//         },
//       ],
//       options: {
//         layout: "grid",
//       },
//     }),
//   ],
// });
import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export default defineType({
  name: "portfolioCategory",
  title: "Portfolio Category",
  icon: FolderIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.image as any)?.asset?._ref && !alt) {
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            aiAssist: {
              imageDescriptionField: "alt",
            },
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
              validation: (rule) =>
                rule.custom((alt, context) => {
                  if ((context.document?.image as any)?.asset?._ref && !alt) {
                    return "Required";
                  }
                  return true;
                }),
            },
          ],
        },
        {
          type: "object",
          name: "video",
          title: "Video",
          fields: [
            {
              name: "url",
              title: "Video URL",
              type: "url",
              validation: (rule) => rule.required(),
            },
            {
              name: "alt",
              title: "Video Description",
              type: "string",
              description: "Description of the video content.",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
});
