import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about").title("About")),
      S.divider(),
      S.listItem()
        .title("Films")
        .schemaType("film")
        .child(
          S.documentTypeList("film")
            .title("Films")
            .defaultOrdering([{ field: "sortOrder", direction: "asc" }]),
        ),
      S.listItem()
        .title("Gallery")
        .schemaType("galleryItem")
        .child(
          S.documentTypeList("galleryItem")
            .title("Gallery")
            .defaultOrdering([{ field: "sortOrder", direction: "asc" }]),
        ),
      S.listItem()
        .title("Volunteer calls")
        .schemaType("volunteerCall")
        .child(
          S.documentTypeList("volunteerCall")
            .title("Volunteer calls")
            .defaultOrdering([{ field: "sortOrder", direction: "asc" }]),
        ),
    ]);
