// @ts-check

import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import astroCompressor from 'astro-compressor';
import purgecss from 'astro-purgecss';
import astroRobotsTxt from 'astro-robots-txt';

import { manifest, seoConfig } from './config/seoConfig';
import viteConfig from './config/vite.config';

const config: AstroUserConfig<never, never, never> = {
	prefetch: {
		prefetchAll: true,
	},
	site: seoConfig.baseURL,
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
		sitemap(),
		astroRobotsTxt(),
		purgecss(),
		AstroPWA({
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
		}),
		compress(),
		astroCompressor(),
	],
	vite: viteConfig,
};

// console.log(process.env.NETLIFY);

if (
	(
		process.env as {
			NETLIFY: string;
		}
	).NETLIFY !== 'disabled'
) {
	config.adapter = netlify({
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
	});
}

// TODO Lario PWA
export default defineConfig(config);
