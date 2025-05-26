import eslint from '@eslint/js';
import astroparser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import json from 'eslint-plugin-json';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sveltePlugin from 'eslint-plugin-svelte';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import svelteConfig from './svelte.config';

export default tseslint.config(
	globalIgnores(['**.astro/**/*', '**.netlify/**/*', '**packages/**/*', '**node_modules/**/*', '/node_modules/**/*', '**dist/**/*', '**strapi/**/*']),
	{
		files: ['**/*.ts', '*.ts', '**/*.js', '*.js', '**/*.astro', '**/*.svelte', '*.json'],
		plugins: {
			prettier: prettierPlugin,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				gtag: 'readonly',
				dataLayer: 'readonly',
			},
			ecmaVersion: 'latest',
		},
	},
	{
		files: ['**/*.json'],
		plugins: {
			json,
		},
		processor: 'json/json',
	},
	{
		files: ['**/*.astro'],
		plugins: {
			astro: eslintPluginAstro,
		},
		languageOptions: {
			parser: astroparser,
		},
		rules: {
			'prettier/prettier': 'off',
		},
		// ...eslintPluginAstro.configs.recommended,
		// ...eslintPluginPrettierRecommended,
	},
	{
		files: ['**/*.svelte'],
		plugins: {
			svelte: sveltePlugin,
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: tseslint.parser,
				svelteConfig,
			},
		},
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	tseslint.configs.stylistic,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs['jsx-a11y-recommended'],
	eslintPluginPrettierRecommended,
	...sveltePlugin.configs.prettier,
);
