declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		
	};

	type DataEntryMap = {
		"events": {
"acrai-research-day": {
	id: "acrai-research-day";
  collection: "events";
  data: InferEntrySchema<"events">
};
"becode": {
	id: "becode";
  collection: "events";
  data: InferEntrySchema<"events">
};
"clusity": {
	id: "clusity";
  collection: "events";
  data: InferEntrySchema<"events">
};
"flanders-ai-day": {
	id: "flanders-ai-day";
  collection: "events";
  data: InferEntrySchema<"events">
};
"kekule-cycle": {
	id: "kekule-cycle";
  collection: "events";
  data: InferEntrySchema<"events">
};
"vaia-webinar": {
	id: "vaia-webinar";
  collection: "events";
  data: InferEntrySchema<"events">
};
"visapp25": {
	id: "visapp25";
  collection: "events";
  data: InferEntrySchema<"events">
};
"wids": {
	id: "wids";
  collection: "events";
  data: InferEntrySchema<"events">
};
};
"home": {
"main": {
	id: "main";
  collection: "home";
  data: InferEntrySchema<"home">
};
};
"news": {
"2024-03-wids": {
	id: "2024-03-wids";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2024-09-workshop": {
	id: "2024-09-workshop";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2024-10-peter": {
	id: "2024-10-peter";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2024-10-tmlr": {
	id: "2024-10-tmlr";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2024-12-neurocomputing": {
	id: "2024-12-neurocomputing";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2025-01-iclr": {
	id: "2025-01-iclr";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2025-06-ecml": {
	id: "2025-06-ecml";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2025-09-renata": {
	id: "2025-09-renata";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2025-10-neurocomputing-hdc": {
	id: "2025-10-neurocomputing-hdc";
  collection: "news";
  data: InferEntrySchema<"news">
};
"2025-11-neurocomputing": {
	id: "2025-11-neurocomputing";
  collection: "news";
  data: InferEntrySchema<"news">
};
};
"people": {
"benjamin": {
	id: "benjamin";
  collection: "people";
  data: InferEntrySchema<"people">
};
"fabian": {
	id: "fabian";
  collection: "people";
  data: InferEntrySchema<"people">
};
"jose": {
	id: "jose";
  collection: "people";
  data: InferEntrySchema<"people">
};
"peter": {
	id: "peter";
  collection: "people";
  data: InferEntrySchema<"people">
};
"renata": {
	id: "renata";
  collection: "people";
  data: InferEntrySchema<"people">
};
"saja": {
	id: "saja";
  collection: "people";
  data: InferEntrySchema<"people">
};
"salma": {
	id: "salma";
  collection: "people";
  data: InferEntrySchema<"people">
};
"thomas": {
	id: "thomas";
  collection: "people";
  data: InferEntrySchema<"people">
};
};
"publications": {
"arabic-absa": {
	id: "arabic-absa";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"bilinear-autoencoders": {
	id: "bilinear-autoencoders";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"bilinear-mlps": {
	id: "bilinear-mlps";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"capsnet-representations": {
	id: "capsnet-representations";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"compositionality": {
	id: "compositionality";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"hsi-contrastive": {
	id: "hsi-contrastive";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"hsi-multilabel": {
	id: "hsi-multilabel";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"matrix-capsnet": {
	id: "matrix-capsnet";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"radio-fingerprint": {
	id: "radio-fingerprint";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"simplestories": {
	id: "simplestories";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"smooth-infomax": {
	id: "smooth-infomax";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"taxonomy-capsnet": {
	id: "taxonomy-capsnet";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"tokenized-saes": {
	id: "tokenized-saes";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"trifecta": {
	id: "trifecta";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"twin-network-cnn": {
	id: "twin-network-cnn";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"twin-network-snn": {
	id: "twin-network-snn";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
"weight-based-decomposition": {
	id: "weight-based-decomposition";
  collection: "publications";
  data: InferEntrySchema<"publications">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
