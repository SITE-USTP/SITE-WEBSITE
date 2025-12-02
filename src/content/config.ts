import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(), // Reference to officer filename
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const events = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        location: z.string(),
        registrationLink: z.string().optional(),
        status: z.enum(['Upcoming', 'Completed', 'Cancelled']),
        flyer: z.string().optional(),
    }),
});

const officers = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        avatar: z.string().optional(),
        bio: z.string().optional(),
        socials: z.object({
            github: z.string().optional(),
            linkedin: z.string().optional(),
        }).optional(),
    }),
});

const resources = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        fileUrl: z.string(),
        category: z.enum(['Academic', 'Career', 'Other']).optional(),
    }),
});

export const collections = {
    posts,
    events,
    officers,
    resources,
};
