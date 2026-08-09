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
