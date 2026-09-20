// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://burnhamparkbaguio.com',
	output: 'static',
	adapter: cloudflare({
		mode: 'directory',
		imageService: 'passthrough',
	}),
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'monthly',
			priority: 0.7,
			lastmod: new Date(),
			// Huwag isama ang offline fallback page ng PWA sa sitemap
			filter: (page) => !page.includes('/offline/'),
		}),
	],
	vite: {
		build: {
			cssCodeSplit: true,
			rollupOptions: {
				output: {
					manualChunks: undefined,
				},
			},
		},
	},
});
