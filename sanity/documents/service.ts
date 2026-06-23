import { defineField, defineType } from "sanity";
import { sectionsField } from "@/sanity/utils/sections";
import { contentGroup } from "@/sanity/utils/groups";

export default defineType({
    name: "service",
    title: "Servicios",
    type: "document",
    groups: [contentGroup],
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: Rule => Rule.required(),
        }),
        sectionsField("service"),
    ],
    preview: {
        select: { title: "title", subtitle: "slug.current" },
    },
});
