import {sanityFetch} from "@/sanity/lib/live";
import { SETTINGS } from "@/sanity/query/settings";

type Settings = {
    mail: string;
    headerNavigation: Link[];
    footerSitemap: Link[];
    footerAddress: Link;
    footerPhone: string;
    footerEmail: string;
}

export const fetchSettings = async (): Promise<Settings> => {
    const {data} = await sanityFetch({ query: SETTINGS });
    return data as Settings;
}