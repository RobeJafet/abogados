import {homeHeroModule} from './homeHero/index';
import {serviciosModule} from './servicios/index';

export const SECTIONS = [
    homeHeroModule,
    serviciosModule,
] as const;

export type SectionName = (typeof SECTIONS)[number]["name"];

export function sectionsForDocument(doc: "home" | "page") {
    return SECTIONS.filter((s) =>
      (s.usableIn as readonly string[]).includes(doc)
    );
  }

export function sectionQueriesForDocument(doc: "home" | "page") {
return sectionsForDocument(doc)
    .map((s) => s.query)
    .join(",\n");
}