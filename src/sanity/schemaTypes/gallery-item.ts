import { ImageIcon } from "@sanity/icons/Image";
import { defineField, defineType } from "sanity";

type GalleryParent = {
  media?: "still" | "video";
};

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery item",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "media",
      title: "Type",
      type: "string",
      initialValue: "still",
      options: {
        layout: "radio",
        list: [
          { title: "Photo", value: "still" },
          { title: "YouTube clip", value: "video" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => (parent as GalleryParent | undefined)?.media !== "still",
      fields: [
        defineField({
          name: "alt",
          title: "Description",
          type: "string",
          description: "What is in the photo, for people who cannot see it.",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) =>
        rule.custom((value, context) => {
          const media = (context.parent as GalleryParent | undefined)?.media;
          if (media === "still" && !value) return "Add a photo.";
          return true;
        }),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Used as the name of the clip.",
      hidden: ({ parent }) => (parent as GalleryParent | undefined)?.media !== "video",
      validation: (rule) =>
        rule.custom((value, context) => {
          const media = (context.parent as GalleryParent | undefined)?.media;
          if (media === "video" && !value) return "Add a title.";
          return true;
        }),
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube ID",
      type: "string",
      description:
        "The ID at the end of the YouTube link. For youtu.be/IqM7fzaLeME, the ID is IqM7fzaLeME.",
      hidden: ({ parent }) => (parent as GalleryParent | undefined)?.media !== "video",
      validation: (rule) =>
        rule.custom((value, context) => {
          const media = (context.parent as GalleryParent | undefined)?.media;
          if (media !== "video") return true;
          if (!value) return "Add a YouTube ID.";
          if (value.includes("/") || value.includes(" ") || value.includes("?")) {
            return "Paste the video ID only, not the full link.";
          }
          return true;
        }),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "The line under the photo or clip.",
      validation: (rule) => rule.required(),
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
    select: {
      caption: "caption",
      title: "title",
      media: "media",
      image: "image",
    },
    prepare({ caption, title, media, image }) {
      return {
        title: caption || title || "Gallery item",
        subtitle: media === "video" ? "YouTube clip" : "Photo",
        media: image,
      };
    },
  },
});
