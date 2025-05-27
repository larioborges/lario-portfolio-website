// @ts-check
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { globalStyle, typescript } from 'svelte-preprocess';
// import compressor from "astro-compressor";
//
// https://astro.build/config
export default defineConfig({
	site: 'https://www.lariocpt.biz',
	adapter: netlify({
		includeFiles: ['./src/data/**/*.json'],
		excludeFiles: [
			'/node_modules/**/*',
			'./node_modules/**/*',
			'./packages/**/*',
			'./.astro/**/*',
			'./.netlify/**/*',
			'./src/**/*.test.js',
			'./public/*',
			'/styles/global.css',
			'./*.ts',
		],
	}),
	integrations: [
		svelte({
			extensions: ['.svelte'],
			preprocess: [typescript(), globalStyle()],
		}),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		sitemap(),
		compress(),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			emptyOutDir: true,
			cssMinify: true,
			minify: 'esbuild',
		},
	},
	// integrations: [
	//   svelte({
	//     extensions: ['.svelte', '.svelte.js', '.svelte.ts'],
	//     preprocess: [typescript(), globalStyle()],
	//   }),
	//   partytown({
	//     config: {
	//       forward: ['dataLayer.push'],
	//     },
	//   }),
	//   sitemap(),
	//   compress(),
	// ],
});
