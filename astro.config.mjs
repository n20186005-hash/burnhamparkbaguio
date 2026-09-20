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
			// Kasama rin dito ang mga lumang (Tagalog) URL na ngayon ay nagsusumite lamang
			// patungo sa mga bagong pahinang may English slug — hindi na ito dapat i-crawl
			// Tandaan: ibinibigay ng filter ang BUONG url (kasama ang domain), kaya substring
			// ang paghahambing — hindi eksaktong pagtutugma ng path
			filter: (page) => {
				const excluded = [
					'/offline/',
					'/kasaysayan/',
					'/oras/',
					'/pagbiyahe/',
					'/plano/',
					'/pagkain/',
					'/matutuluyan/',
				];
				return !excluded.some((path) => page.includes(path));
			},
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
