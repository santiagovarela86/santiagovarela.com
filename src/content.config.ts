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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(z.object({
      label: z.string(),
      href: z.string().url(),
    })).default([]),
    featured: z.boolean().default(false),
    order: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
