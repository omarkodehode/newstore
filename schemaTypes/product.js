import { defineType, defineField } from "sanity"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" } }),
    defineField({ name: "price", type: "number", title: "Price" }),
    defineField({ name: "image", type: "image", title: "Image" }),
    defineField({ name: "description", type: "text", title: "Description" }),
  ],
})
