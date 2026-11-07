import type { SchemaTypeDefinition } from "sanity";

import { about } from "./about";
import { film } from "./film";
import { galleryItem } from "./gallery-item";
import { volunteerCall } from "./volunteer-call";

export const schemaTypes: SchemaTypeDefinition[] = [
  about,
  film,
  galleryItem,
  volunteerCall,
];
