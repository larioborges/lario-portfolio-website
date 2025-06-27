import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
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
});
