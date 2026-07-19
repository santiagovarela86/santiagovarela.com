import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    lang: z.enum(['en', 'es']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
