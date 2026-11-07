import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;
const force = process.argv.includes("--force");

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity project id, dataset, or write token");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-02-01",
  token,
  useCdn: false,
});

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function block(key, children) {
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

async function wipeContentTypes() {
  const ids = await client.fetch(
    `*[_type in ["film", "galleryItem", "volunteerCall"]]._id`,
  );
  if (!ids.length) return;
  const tx = client.transaction();
  for (const id of ids) tx.delete(id);
  await tx.commit();
  console.log(`Removed ${ids.length} existing content documents`);
}

async function seedAbout() {
  const existing = await client.fetch(`*[_id == "about"][0]{ _id, "asset": portrait.asset._ref }`);
  let assetId = existing?.asset;

  if (!assetId || force) {
    const asset = await client.assets.upload(
      "image",
      createReadStream(path.join(root, "public/carter.jpg")),
      { filename: "carter.jpg" },
    );
    assetId = asset._id;
  }

  await client.createOrReplace({
    _id: "about",
    _type: "about",
    name: "Carter Jayne",
    pronouns: "She/They",
    portrait: {
      _type: "image",
      alt: "Carter Jayne",
      asset: { _type: "reference", _ref: assetId },
    },
    bio: [
      block("bio-1", [
        {
          text: "Carter Jayne is a filmmaker working in film and theatre in Meanjin / Brisbane.",
        },
      ]),
      block("bio-2", [
        {
          text: "Carter has a love for all aspects of live performances, with a special interest in theatre productions. They started volunteering with Brisbane Arts Theatre as a lighting and sound operator, hoping to learn more about the inner workings of theatre.",
        },
      ]),
      block("bio-3", [
        { text: "Previous work includes lighting design for Ghostlight Theatre Co., " },
        { text: "Blood Brothers", marks: ["em"] },
        { text: " (2024), and most recently lighting design for " },
        { text: "Beans Means Love", marks: ["em"] },
        {
          text: " with Sandgate Theatre Inc. (May 2025). Carter is also a 2025 Technical Production Trainee with QPAC (Queensland Performing Arts Centre).",
        },
      ]),
    ],
  });
  console.log("Upserted about");
}

async function seedFilms() {
  await client.createOrReplace({
    _id: "film-the-stars",
    _type: "film",
    title: "The Stars",
    year: "2024",
    runtime: "8 min",
    kind: "Comedy",
    logline:
      "Rio takes on a missing-janitor case at school. Her friends plant the clues, then spend the day trying not to be caught.",
    youtubeId: "IqM7fzaLeME",
    heroNote: "The Stars, 2024. A comedy written and directed by Carter Jayne.",
    sortOrder: 1,
  });
  await client.createOrReplace({
    _id: "film-obsessive-compulsive-confliction",
    _type: "film",
    title: "Obsessive Compulsive Confliction",
    year: "2024",
    runtime: "3 min",
    kind: "Short",
    logline: "A short about the difficult work of accepting an OCD diagnosis.",
    youtubeId: "VuvVMObebqU",
    sortOrder: 2,
  });
  console.log("Upserted films");
}

async function seedGallery() {
  await client.createOrReplace({
    _id: "gallery-the-stars",
    _type: "galleryItem",
    media: "video",
    title: "The Stars",
    youtubeId: "IqM7fzaLeME",
    caption: "The Stars · 2024",
    sortOrder: 1,
  });
  await client.createOrReplace({
    _id: "gallery-obsessive-compulsive-confliction",
    _type: "galleryItem",
    media: "video",
    title: "Obsessive Compulsive Confliction",
    youtubeId: "VuvVMObebqU",
    caption: "Obsessive Compulsive Confliction · 2024",
    sortOrder: 2,
  });
  console.log("Upserted gallery items");
}

async function seedCalls() {
  await client.createOrReplace({
    _id: "volunteer-upcoming-short",
    _type: "volunteerCall",
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
    sortOrder: 1,
  });
  console.log("Upserted volunteer call");
}

async function allowStudioOrigins() {
  const origins = ["http://localhost:3000", "https://wheeliegoodfilm.vercel.app"];
  const endpoint = `https://api.sanity.io/v2021-06-07/projects/${projectId}/cors`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const current = await fetch(endpoint, { headers });
  if (!current.ok) {
    console.log(
      `Could not update Studio login origins (${current.status}). Add http://localhost:3000 in Sanity Manage → API → CORS origins.`,
    );
    return;
  }
  const existing = await current.json();
  const known = new Set((existing ?? []).map((entry) => entry.origin));
  for (const origin of origins) {
    if (known.has(origin)) {
      console.log(`CORS already allows ${origin}`);
      continue;
    }
    const created = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ origin, allowCredentials: true }),
    });
    console.log(
      created.ok
        ? `Allowed ${origin}`
        : `Could not allow ${origin} (${created.status})`,
    );
  }
}

console.log(`Seeding ${projectId}/${dataset}${force ? " (force)" : ""}`);
if (force) await wipeContentTypes();
await seedAbout();
await seedFilms();
await seedGallery();
await seedCalls();
await allowStudioOrigins();

const summary = await client.fetch(`{
  "films": *[_type == "film"] | order(sortOrder asc) { title, year, youtubeId },
  "gallery": *[_type == "galleryItem"] | order(sortOrder asc) { media, caption },
  "calls": *[_type == "volunteerCall"] | order(sortOrder asc) { title, when },
  "about": *[_id == "about"][0]{ name, pronouns, "hasPortrait": defined(portrait.asset) }
}`);
console.log(JSON.stringify(summary, null, 2));
