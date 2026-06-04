import home from '@/sanity/documents/home'
import settings from '@/sanity/documents/settings'
import link from '@/sanity/objects/link';

import { SECTIONS } from '@/sections/registry';

const sections = SECTIONS.map((s) => s.schema);
const documents = [home, settings];
const objects = [link];

export const schema = [
  ...documents,
  ...objects,
  ...sections,
]
