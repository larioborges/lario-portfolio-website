// @ts-check
import AstroPWA from '@vite-pwa/astro'
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
// import playformInline from '@playform/inline';
import postcssNested from 'postcss-nested'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
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
import {
	manifest, seoConfig,
} from './config/seoConfig';

// TODO Lario PWA
export default defineConfig(
	{
		site: seoConfig.baseURL,
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
			sitemap(),
			astroRobotsTxt(),
			// playformInline(),
			AstroPWA(
				{
					registerType: 'autoUpdate',
					manifest,
					workbox: {
						globDirectory: 'dist',
						globPatterns: [
							'**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,md,mdx}',
						],
						// Don't fallback on document based (e.g. `/some-page`) requests
						// This removes an errant console.log message from showing up.
						navigateFallback: null,
					},
				},
			),
			compress(),
			astroCompressor(),
		],
		vite: {
			plugins: [
				tailwindcss(),
				devtoolsJson(),
			],
			css: {
				postcss: {
					plugins: [
						postcssNested(),
						autoprefixer(),
					],
				},
			},
			build: {
				emptyOutDir: true,
				cssMinify: true,
				minify: 'esbuild',
			},
		},
	},
);
