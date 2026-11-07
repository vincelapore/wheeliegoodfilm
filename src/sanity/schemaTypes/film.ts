import { PlayIcon } from "@sanity/icons/Play";
import { defineField, defineType } from "sanity";

export const film = defineType({
  name: "film",
  title: "Film",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "runtime",
      title: "Runtime",
      type: "string",
      description: "For example: 8 min",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      description: "For example: Comedy, Short, Showreel",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logline",
      title: "Logline",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube ID",
      type: "string",
      description:
        "The ID at the end of the YouTube link. For youtu.be/IqM7fzaLeME, the ID is IqM7fzaLeME.",
      validation: (rule) =>
        rule.required().custom((value) => {
          if (!value) return true;
          if (value.includes("/") || value.includes(" ") || value.includes("?")) {
            return "Paste the video ID only, not the full link.";
          }
          return true;
        }),
    }),
    defineField({
      name: "heroNote",
      title: "Homepage player line",
      type: "text",
      rows: 2,
      description:
        "Optional line under the player at the top of the homepage. Only the film with the lowest order number is shown there.",
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
    select: { title: "title", year: "year", kind: "kind" },
    prepare({ title, year, kind }) {
      return { title, subtitle: [kind, year].filter(Boolean).join(", ") };
    },
  },
});
