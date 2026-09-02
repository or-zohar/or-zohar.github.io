import { defineCollection, z } from 'astro:content';

const projectSchema = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    tags: z.array(z.string()),
    role: z.string().optional(),
    tools: z.array(z.string()).optional(),
    cover: image(),
    hideCoverOnDetail: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    externalUrl: z.string().url().optional(),
  });

const photoProjects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const designProjects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = {
  'photo-projects': photoProjects,
  'design-projects': designProjects,
};
