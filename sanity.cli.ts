import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

loadEnvConfig(process.cwd());

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "wheeliegoodfilm",
  deployment: {
    appId: "p3ox4dkalg3obqclfc4elkby",
  },
});
