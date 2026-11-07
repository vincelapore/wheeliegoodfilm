import type { PortableTextBlock } from "@portabletext/types";
import { stegaClean } from "next-sanity";

import { urlFor } from "./image";
import { sanityFetch } from "./live";
import {
  ABOUT_QUERY,
  FILMS_QUERY,
  GALLERY_QUERY,
  VOLUNTEER_CALLS_QUERY,
} from "./queries";

export type SiteFilm = {
  _id: string;
  title: string;
  year: string;
  runtime: string;
  kind: string;
  logline: string;
  youtubeId: string;
  heroNote: string;
};

export type SiteGalleryStill = {
  _id: string;
  media: "still";
  caption: string;
  alt: string;
  src: string;
  width: number;
  height: number;
};

export type SiteGalleryVideo = {
  _id: string;
  media: "video";
  title: string;
  caption: string;
  youtubeId: string;
};

export type SiteGalleryItem = SiteGalleryStill | SiteGalleryVideo;

export type SiteVolunteerCall = {
  _id: string;
  title: string;
  when: string;
  blurb: string;
  roles: string[];
};

export type SitePortrait = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SiteAbout = {
  name: string;
  pronouns: string;
  bio: PortableTextBlock[];
  portrait: SitePortrait | null;
};

export type SiteContent = {
  films: SiteFilm[];
  gallery: SiteGalleryItem[];
  volunteerCalls: SiteVolunteerCall[];
  about: SiteAbout;
};

type ImageField = {
  alt?: string | null;
  hotspot?: unknown;
  crop?: unknown;
  asset?: { _ref?: string | null } | null;
  dimensions?: { width?: number | null; height?: number | null } | null;
};

const fallbackBio: PortableTextBlock[] = [
  paragraph("bio-1", [
    {
      text: "Carter Jayne is a filmmaker working in film and theatre in Meanjin / Brisbane.",
    },
  ]),
  paragraph("bio-2", [
    {
      text: "Carter has a love for all aspects of live performances, with a special interest in theatre productions. They started volunteering with Brisbane Arts Theatre as a lighting and sound operator, hoping to learn more about the inner workings of theatre.",
    },
  ]),
  paragraph("bio-3", [
    { text: "Previous work includes lighting design for Ghostlight Theatre Co., " },
    { text: "Blood Brothers", marks: ["em"] },
    { text: " (2024), and most recently lighting design for " },
    { text: "Beans Means Love", marks: ["em"] },
    {
      text: " with Sandgate Theatre Inc. (May 2025). Carter is also a 2025 Technical Production Trainee with QPAC (Queensland Performing Arts Centre).",
    },
  ]),
];

const fallback: SiteContent = {
  films: [
    {
      _id: "fallback-stars",
      title: "The Stars",
      year: "2024",
      runtime: "8 min",
      kind: "Comedy",
      logline:
        "Rio takes on a missing-janitor case at school. Her friends plant the clues, then spend the day trying not to be caught.",
      youtubeId: "IqM7fzaLeME",
      heroNote:
        "The Stars, 2024. A comedy written and directed by Carter Jayne.",
    },
    {
      _id: "fallback-occ",
      title: "Obsessive Compulsive Confliction",
      year: "2024",
      runtime: "3 min",
      kind: "Short",
      logline: "A short about the difficult work of accepting an OCD diagnosis.",
      youtubeId: "VuvVMObebqU",
      heroNote: "",
    },
  ],
  gallery: [
    {
      _id: "fallback-gallery-stars",
      media: "video",
      title: "The Stars",
      caption: "The Stars · 2024",
      youtubeId: "IqM7fzaLeME",
    },
    {
      _id: "fallback-gallery-occ",
      media: "video",
      title: "Obsessive Compulsive Confliction",
      caption: "Obsessive Compulsive Confliction · 2024",
      youtubeId: "VuvVMObebqU",
    },
  ],
  volunteerCalls: [
    {
      _id: "fallback-crew",
      title: "Upcoming short film",
      when: "Dates TBC · Meanjin / Brisbane",
      blurb:
        "Looking for keen people to join the next Wheelie Good shoot. No fancy CV needed, just tell us what you can do and when you are free.",
      roles: [
        "Production assistant",
        "Camera assistant",
        "Lighting / grip",
        "Sound",
        "Art department",
        "Other / happy to help",
      ],
    },
  ],
  about: {
    name: "Carter Jayne",
    pronouns: "She/They",
    bio: fallbackBio,
    portrait: null,
  },
};

function paragraph(
  key: string,
  children: { text: string; marks?: string[] }[],
): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: children.map((child, index) => ({
      _type: "span",
      _key: `${key}-${index}`,
      text: child.text,
      marks: child.marks ?? [],
    })),
  };
}

function text(value: string | null | undefined) {
  return stegaClean(value ?? "").trim();
}

function portraitFrom(image: ImageField | null | undefined): SitePortrait | null {
  const width = image?.dimensions?.width;
  const height = image?.dimensions?.height;
  if (!image?.asset?._ref || !width || !height) return null;
  const src = urlFor(image).width(Math.min(1600, width)).url();
  if (!src) return null;
  return {
    src,
    alt: text(image.alt) || "Carter Jayne",
    width,
    height,
  };
}

type FilmDoc = {
  _id: string;
  title?: string | null;
  year?: string | null;
  runtime?: string | null;
  kind?: string | null;
  logline?: string | null;
  youtubeId?: string | null;
  heroNote?: string | null;
};

type GalleryDoc = {
  _id: string;
  media?: string | null;
  caption?: string | null;
  title?: string | null;
  youtubeId?: string | null;
  image?: ImageField | null;
};

type CallDoc = {
  _id: string;
  title?: string | null;
  when?: string | null;
  blurb?: string | null;
  roles?: Array<string | null> | null;
};

type AboutDoc = {
  name?: string | null;
  pronouns?: string | null;
  bio?: PortableTextBlock[] | null;
  portrait?: ImageField | null;
};

function mapFilms(docs: FilmDoc[]): SiteFilm[] {
  return docs.flatMap((film) => {
    const title = text(film.title);
    const youtubeId = text(film.youtubeId);
    if (!title || !youtubeId) return [];
    return [
      {
        _id: film._id,
        title,
        year: text(film.year),
        runtime: text(film.runtime),
        kind: text(film.kind),
        logline: text(film.logline),
        youtubeId,
        heroNote: text(film.heroNote),
      },
    ];
  });
}

function mapGallery(docs: GalleryDoc[]): SiteGalleryItem[] {
  return docs.flatMap((item): SiteGalleryItem[] => {
    const caption = text(item.caption);
    if (!caption) return [];
    if (item.media === "video") {
      const youtubeId = text(item.youtubeId);
      const title = text(item.title);
      if (!youtubeId || !title) return [];
      return [{ _id: item._id, media: "video", title, caption, youtubeId }];
    }
    const still = portraitFrom(item.image);
    if (!still) return [];
    return [
      {
        _id: item._id,
        media: "still",
        caption,
        alt: text(item.image?.alt) || caption,
        src: still.src,
        width: still.width,
        height: still.height,
      },
    ];
  });
}

function mapCalls(docs: CallDoc[]): SiteVolunteerCall[] {
  return docs.flatMap((call) => {
    const title = text(call.title);
    if (!title) return [];
    return [
      {
        _id: call._id,
        title,
        when: text(call.when),
        blurb: text(call.blurb),
        roles: (call.roles ?? []).map((role) => text(role)).filter(Boolean),
      },
    ];
  });
}

function mapAbout(doc: AboutDoc | null): SiteAbout | null {
  const name = text(doc?.name);
  if (!doc || !name) return null;
  const bio = Array.isArray(doc.bio) ? doc.bio : [];
  if (bio.length === 0) return null;
  return {
    name,
    pronouns: text(doc.pronouns),
    bio,
    portrait: portraitFrom(doc.portrait),
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const [films, gallery, volunteerCalls, about] = await Promise.all([
      sanityFetch({ query: FILMS_QUERY, stega: false }),
      sanityFetch({ query: GALLERY_QUERY, stega: false }),
      sanityFetch({ query: VOLUNTEER_CALLS_QUERY, stega: false }),
      sanityFetch({ query: ABOUT_QUERY, stega: false }),
    ]);

    return {
      films: mapFilms((films.data ?? []) as FilmDoc[]),
      gallery: mapGallery((gallery.data ?? []) as GalleryDoc[]),
      volunteerCalls: mapCalls((volunteerCalls.data ?? []) as CallDoc[]),
      about: mapAbout(about.data as AboutDoc | null) ?? fallback.about,
    };
  } catch (error) {
    console.error("Sanity content failed to load. Showing the last published copy.", error);
    return fallback;
  }
}
