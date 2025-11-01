import {
	type Article,
	type Person,
	type WebSite,
	type WithContext,
} from "schema-dts";
import avatar from "../assets/avatar.jpg";
import type { CollectionEntry } from "astro:content";

export const blogsWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: `${import.meta.env.SITE}/blogs/`,
	name: "Raghav Ruia • Blogs",
	description: "Blogs, writings from Raghav Ruia",
	inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: import.meta.env.SITE,
	name: "Raghav Ruia",
	description: "Raghav Ruia's personal portfolio website",
	inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Raghav Ruia",
	url: `${import.meta.env.SITE}`,
	image: `${import.meta.env.SITE}${avatar.src}`,
	sameAs: [
		"https://www.linkedin.com/in/lakshaybhushan/",
	],
};

export function getArticleSchema(post: CollectionEntry<"blogs">) {
	const articleStructuredData: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.data.title,
		url: `${import.meta.env.SITE}/blogs/${post.id}/`,
		image: {
			"@type": "ImageObject",
			url: `${import.meta.env.SITE}${post.data.cover.src}/`,
		},
		description: post.data.excerpt,
		datePublished: post.data.date.toString(),
		publisher: {
			"@type": "Person",
			name: "Raghav Ruia",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		author: {
			"@type": "Person",
			name: "Raghav Ruia",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
	};
	return articleStructuredData;
}
