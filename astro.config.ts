// @ts-check
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import Biome from '@playform/format';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import astroCompressor from 'astro-compressor';
import purgecss from 'astro-purgecss';
import astroRobotsTxt from 'astro-robots-txt';
import viteConfig from './config/vite.config';
import { BASE_URL } from './src/constants';

interface COMMAND_ENV {
	NETLIFY?: 'enabled' | 'disabled';
	ROBOTS: 'on' | 'off';
}

const netlifyAdapter =
	(process.env as unknown as COMMAND_ENV).NETLIFY !== 'disabled'
		? {
				adapter: netlify({
					includeFiles: [
						'./src/data/**/*.json',
					],
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
			}
		: {};

const robots =
	(process.env as unknown as COMMAND_ENV).ROBOTS === 'on'
		? [
				astroRobotsTxt(),
			]
		: [];

// TODO Lario PWA
export default defineConfig({
	prefetch: true,
	site: BASE_URL,
	...netlifyAdapter,
	image: {
		domains: [
			'images.ctfassets.net',
		],
		remotePatterns: [
			{
				protocol: 'https',
			},
		],
	},
	integrations: [
		partytown({
			config: {
				forward: [
					'dataLayer.push',
				],
			},
		}),
		sitemap(),
		...robots,
		purgecss(),
		// TODO Lario: preload
		// @vite-pwa/astro
		// AstroPWA({
		// 	registerType: 'autoUpdate',
		// 	manifest,
		// 	workbox: {
		// 		globDirectory: 'dist',
		// 		globPatterns: [
		// 			'**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,md,mdx}',
		// 		],
		// 		// Don't fallback on document based (e.g. `/some-page`) requests
		// 		// This removes an errant console.log message from showing up.
		// 		navigateFallback: null,
		// 	},
		// }),
		Biome(),
		compress(),
		astroCompressor(),
	],
	vite: viteConfig,
});
