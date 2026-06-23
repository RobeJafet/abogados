import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_BY_SLUG } from "@/sanity/query/page";
import type { Section } from "@/sections/types";

type Service = {
    _type: "service";
    title: string;
    slug: string;
    sections: Section[];
};

export const fetchService = async (slug: string): Promise<Service | null> => {
    const { data } = await sanityFetch({
        query: SERVICE_BY_SLUG,
        params: { slug },
    });
    return data as Service | null;
};
