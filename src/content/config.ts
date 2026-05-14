import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['evergreen', 'growing']).default('growing'),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays };
