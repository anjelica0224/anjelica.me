import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
	loader: file("src/content/experiences.yaml"),
	schema: z.object({
		id: z.string(),
		role: z.string(),
		time: z.string(),
		job: z.string(),	
	})
})

export const collections = { experiences };
