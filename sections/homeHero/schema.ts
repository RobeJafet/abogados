import { defineField, defineType } from "sanity";

export default defineType({
    name: 'homeHero',
    title: 'Home Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'cta',
            title: 'CTA',
            type: 'link',
        }),
    ],
});