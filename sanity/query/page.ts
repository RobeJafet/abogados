import { groq } from "next-sanity";
import { METADATA } from "@/sanity/utils/query";
import { sectionQueriesForDocument } from "@/sections/registry";
const homeSectionProjections = sectionQueriesForDocument("home");
const pageSectionProjections = sectionQueriesForDocument("page");
export const HOME = groq`
*[_type == "home"][0] {
  ${METADATA},
  sections[] {
    ${homeSectionProjections}
  }
}`;
