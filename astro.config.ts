// @ts-check
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import playformInline from '@playform/inline';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';
import astroCompressor from 'astro-compressor';
import astroRobotsTxt from 'astro-robots-txt';
import {
	defineConfig, 
} from 'astro/config';
import {
	globalStyle, typescript, 
} from 'svelte-preprocess';
import devtoolsJson from 'vite-plugin-devtools-json';

// TODO Lario PWA
export default defineConfig(
	{
		site: 'https://www.lariocpt.biz',
		adapter: netlify(
			{
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
			},
		),
		integrations: [
			svelte(
				{
					extensions: ['.svelte'],
					preprocess: [typescript(), globalStyle()],
				},
			),
			partytown(
				{
					config: {
						forward: ['dataLayer.push'], 
					}, 
				},
			),
			sitemap(),
			astroRobotsTxt(),
			playformInline(),
			compress(),
			astroCompressor(),
		],
		vite: {
			plugins: [tailwindcss(), devtoolsJson()],
			build: {
				emptyOutDir: true,
				cssMinify: true,
				minify: 'esbuild',
			},
		},
	},
);
