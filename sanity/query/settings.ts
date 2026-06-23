import { groq } from "next-sanity";
import { LINK, IMG } from "@/sanity/utils/query";

export const SETTINGS = groq`
*[_type == "settings"][0] {
  mail,
  headerNavigation[] {
    ${LINK},
  },
  headerLogo {
    ${IMG}
  },
  footerSitemap[] {
    ${LINK},
  },
  footerAddress {
    ${LINK},
  },
  footerPhone,
  footerEmail,
  footerImage {
    alt,
    asset->{
      _id,
      metadata {
        dimensions,
        blurHash
      }
    },
    hotspot{ x, y }
  },
  footerSocial[] {
    ${LINK},
  },
}
`;