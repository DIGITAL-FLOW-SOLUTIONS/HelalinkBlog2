import { z } from "zod";

export const articleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  featuredImage: z.string(),
  category: z.string(),
  country: z.enum(['kenya', 'uganda', 'tanzania', 'general']),
  activationFee: z.string(),
  currency: z.string(),
  publishedAt: z.string(),
  metaDescription: z.string(),
  posters: z.array(z.string()),
});

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});

export type Article = z.infer<typeof articleSchema>;
export type Category = z.infer<typeof categorySchema>;
