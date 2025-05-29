import eslint from '@eslint/js';
import astroparser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import json from 'eslint-plugin-json';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sveltePlugin from 'eslint-plugin-svelte';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// import svelteConfig from './svelte.config';

export default tseslint.config(
	globalIgnores([
		'**/.astro/**/*',
		'**/.netlify/**/*',
		'**/.yarn/**/*',
		'**/packages/**/*',
		'**/node_modules/**/*',
		'**/dist/**/*',
	]),
	{
		files: [
			'src/**/*.ts',
			'*.ts',
			'src/**/*.js',
			'*.js',
			'src/**/*.astro',
			'src/**/*.svelte',
			'src/**/*.json',
			'*.json',
		],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				gtag: 'readonly',
				dataLayer: 'readonly',
				arguments: 'readonly',
			},
			parser: tseslint.parser,
			sourceType: 'module',
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
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
				ecmaVersion: 'latest',
				project: './tsconfig.json',
			},
		},
		rules: {
			'prettier/prettier': 'off',
		},
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
				project: './tsconfig.json',
				// svelteConfig,
			},
		},
	},
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			// disable warnings, since prettier should format on save
			'prettier/prettier': 'off',
			'function-paren-newline': ['error', { minItems: 3 }],
			'object-curly-newline': [
				'error',
				{
					ObjectExpression: 'always',
					ObjectPattern: { multiline: true, minProperties: 3 },
					ImportDeclaration: { multiline: true, minProperties: 3 },
					ExportDeclaration: { multiline: true, minProperties: 3 },
				},
			],
		},
	},
	eslint.configs.recommended,
	tseslint.configs.eslintRecommended,
	tseslint.configs.stylistic,
	eslintPluginAstro.configs['flat/recommended'],
	eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
	sveltePlugin.configs['flat/recommended'],
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
);
