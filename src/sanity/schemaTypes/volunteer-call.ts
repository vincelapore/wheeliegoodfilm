import { UsersIcon } from "@sanity/icons/Users";
import { defineArrayMember, defineField, defineType } from "sanity";

export const volunteerCall = defineType({
  name: "volunteerCall",
  title: "Volunteer call",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "when",
      title: "When",
      type: "string",
      description: "Dates and place. For example: Dates TBC, Meanjin / Brisbane.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "blurb",
      title: "Details",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "roles",
      title: "Who you need",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "These roles also appear in the application form.",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "sortOrder",
      title: "Order",
      type: "number",
      description: "Lower numbers show first.",
      initialValue: 1,
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", when: "when" },
    prepare({ title, when }) {
      return { title, subtitle: when };
    },
  },
});
