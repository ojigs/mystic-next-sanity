import { defineField, defineType } from "sanity";
import { TransferIcon } from "@sanity/icons";

export default defineType({
  name: "category",
  title: "Blog Category",
  icon: TransferIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
    }),
  ],
});
