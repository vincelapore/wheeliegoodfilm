import { defineQuery } from "next-sanity";

export const FILMS_QUERY = defineQuery(`
  *[_type == "film" && defined(title) && defined(youtubeId)] | order(sortOrder asc) {
    _id,
    title,
    year,
    runtime,
    kind,
    logline,
    youtubeId,
    heroNote
  }
`);

export const GALLERY_QUERY = defineQuery(`
  *[_type == "galleryItem" && defined(caption)] | order(sortOrder asc) {
    _id,
    media,
    caption,
    title,
    youtubeId,
    image {
      alt,
      hotspot,
      crop,
      asset,
      "dimensions": asset->metadata.dimensions,
      "lqip": asset->metadata.lqip
    }
  }
`);

export const VOLUNTEER_CALLS_QUERY = defineQuery(`
  *[_type == "volunteerCall" && defined(title)] | order(sortOrder asc) {
    _id,
    title,
    when,
    blurb,
    "roles": coalesce(roles, [])
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_id == "about"][0]{
    name,
    pronouns,
    bio,
    portrait {
      alt,
      hotspot,
      crop,
      asset,
      "dimensions": asset->metadata.dimensions,
      "lqip": asset->metadata.lqip
    }
  }
`);
