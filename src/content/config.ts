import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

const clients = defineCollection({
  type: "data",
  schema: z.object({
    testimonials: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        company: z.string(),
        quote: z.string(),
        avatarInitials: z.string(),
        avatarColor: z.string(),
        rating: z.number().min(1).max(5),
      }),
    ),
    companies: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        style: z.string(),
      }),
    ),
    caseStudy: z.object({
      company: z.string(),
      title: z.string(),
      metrics: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      ),
    }),
    metrics: z.array(
      z.object({
        target: z.number(),
        suffix: z.string(),
        prefix: z.string().optional(),
        label: z.string(),
        description: z.string(),
      }),
    ),
    socialProof: z.object({
      heroText: z.string(),
      fomoText: z.string(),
    }),
  }),
});

export const collections = { blog, clients };
