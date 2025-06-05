import type {
	ManifestOptions,
} from 'vite-plugin-pwa';
import favicon from '../src/assets/favicons/favicon.webp';

const DEFAULT_WEBSITE_NAME = 'Lario Borges - Full Stack Web Engineer',
	DEFAULT_BASE_URL = 'https://lariocpt.biz',
	DEFAULT_DESCRIPTION = 'Bright, seasoned and diligent Full Stack Web Engineer who specializes in JavaScript and Front-End development. Get to know some the nut in this shell!';

export const seoConfig = {
	baseURL: DEFAULT_BASE_URL,
	description: DEFAULT_DESCRIPTION,
	type: 'website',
	image: {
		url: 'https://picsum.photos/1200/630',
		alt: 'OpenGraph thumbnail description.',
		width: 1200,
		height: 630,
	},
	siteName: DEFAULT_WEBSITE_NAME,
	twitter: {
		card: 'summary_large_image',
	},
}

export const manifest: Partial<ManifestOptions> = {
	name: DEFAULT_WEBSITE_NAME,
	short_name: DEFAULT_WEBSITE_NAME,
	description: DEFAULT_DESCRIPTION,
	theme_color: '#30E130', // Change this to your primary color.
	background_color: '#ffffff', // Change this to your background color.
	display: 'minimal-ui',
	icons: [
		{
			// TODO Lario: get correct favicon asset
			// src: '/favicons/favicon-192x192.png',
			src: favicon.src,
			sizes: '192x192',
			type: 'image/png',
		},
		{
			// TODO Lario: get correct favicon asset
			// src: '/favicons/favicon-512x512.png',
			src: favicon.src,
			sizes: '512x512',
			type: 'image/png',
		},
	],
}
