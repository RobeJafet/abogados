import { groq } from "next-sanity";
import { LINK } from "@/sanity/utils/query";

export const SETTINGS = groq`
*[_type == "settings"][0] {
  mail,
  headerNavigation[] {
    ${LINK},
  },
  footerSitemap[] {
    ${LINK},
  },
  footerAddress {
    ${LINK},
  },
  footerPhone,
  footerEmail,
}
`;