import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    URL: z.string().optional(),
    technologies: z.array(z.string()),
    githubURL: z.string().optional(),
    embedYT: z.string().optional(),
  }),
});

export const collections = { work, projects };
