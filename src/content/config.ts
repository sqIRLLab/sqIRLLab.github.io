import { defineCollection, z } from 'astro:content';

// Strict date format validator (YYYY/MM/DD)
const dateSchema = z.string().regex(
	/^\d{4}\/\d{2}\/\d{2}$/,
	"Date must be in YYYY/MM/DD format (e.g., 2024/01/15)"
);

// Strict URL validator
const urlSchema = z.string().url("Must be a valid URL starting with http:// or https://");

// Email validator
const emailSchema = z.string().email("Must be a valid email address");

// Non-empty string validator
const nonEmptyString = z.string().min(1, "Cannot be empty");

// Image path validator (must end with common image extensions)
const imageSchema = z.string().regex(
	/\.(jpg|jpeg|png|gif|webp|svg)$/i,
	"Image must be a valid image file (.jpg, .jpeg, .png, .gif, .webp, or .svg)"
);

const people = defineCollection({
	type: 'data',
	schema: z.object({
		name: nonEmptyString,
		status: nonEmptyString,
		specialty: nonEmptyString,
		image: imageSchema,
		link: urlSchema,
	}).strict(), // Reject unknown fields
});

const publications = defineCollection({
	type: 'data',
	schema: z.object({
		title: nonEmptyString,
		date: dateSchema,
		conference: nonEmptyString,
		tags: z.array(z.string()),
		link: urlSchema.optional(),
		image: imageSchema,
		description: nonEmptyString,
	}).strict(), // Reject unknown fields
});

const events = defineCollection({
	type: 'data',
	schema: z.object({
		title: nonEmptyString,
		date: dateSchema,
		link: urlSchema,
		image: imageSchema,
		description: nonEmptyString,
	}).strict(), // Reject unknown fields
});

const news = defineCollection({
	type: 'data',
	schema: z.object({
		date: dateSchema,
		title: nonEmptyString,
		description: nonEmptyString,
		link: urlSchema.optional(),
	}).strict(), // Reject unknown fields
});

const home = defineCollection({
	type: 'data',
	schema: z.object({
		title: nonEmptyString,
		subtitle: nonEmptyString,
		description: nonEmptyString,
		email: emailSchema,
		logo: imageSchema,
	}).strict(), // Reject unknown fields
});

export const collections = { people, publications, events, news, home };
