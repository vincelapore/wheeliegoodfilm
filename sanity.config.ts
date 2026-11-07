"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "wheelie-good",
  title: "Wheelie Good",
  basePath: "/studio",
  projectId,
  dataset,
  // Cookie auth is unreliable for embedded Studio. Token auth stores the
  // session in localStorage. Default providers stay available for the client.
  auth: {
    loginMethod: "token",
    redirectOnSingle: false,
  },
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
