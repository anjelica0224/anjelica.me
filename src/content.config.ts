import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
	loader: file("src/content/experiences.yaml"),
	schema: z.object({
		id: z.string(),
		role: z.string(),
		time: z.string(),
		job: z.string(),
		url: z.string()	
	})
})

const projects = defineCollection({
	loader: file("src/content/projects.yaml"),
	schema: z.object({
		id: z.string(),
		excerpt: z.string(),
		tech: z.array(z.string()),
		url: z.string(),
	})
})

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

export const collections = { experiences, projects, blog };
