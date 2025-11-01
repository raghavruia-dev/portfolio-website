import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import rehypePrettyCode from "rehype-pretty-code";
import tailwindcss from "@tailwindcss/vite";
import { rehypeHeadingAnchors } from './src/utils/rehype-heading-anchors.js';

// https://astro.build/config
export default defineConfig({
	output: "static",
	integrations: [
		react(),
		mdx({
			syntaxHighlight: false,
			rehypePlugins: [
				rehypeSlug,
				rehypeHeadingAnchors,
				[
					rehypePrettyCode,
					{
						theme: "everforest-dark",
					},
				],
			],
		}),
		sitemap(),
		robotsTxt(),
		icon(),
	],
	security: {
    	contentSecurityPolicy: {
      		'frame-ancestors': ["'self'"],
    	},
  	},

	site: "https://raghavruia.com",

	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		includeFiles: ["./public/fonts/Satoshi-Medium.ttf", "./public/fonts/Satoshi-Bold.ttf"],
	}),

	vite: {
		plugins: [tailwindcss()],
	},

	server: {
		headers: {
			"Content-Security-Policy":
				"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://generativelanguage.googleapis.com; frame-ancestors 'none';",
		},
	},
});
