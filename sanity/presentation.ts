import {
    defineDocuments,
    PresentationPluginOptions,
  } from "sanity/presentation";
  
  export const resolve: PresentationPluginOptions["resolve"] = {
    mainDocuments: defineDocuments([
      {
        route: "/",
        filter: `_type == 'home'`,
      },
    ]),
  };
  