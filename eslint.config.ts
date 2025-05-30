import eslint from '@eslint/js';
import astroparser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import json from 'eslint-plugin-json';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sveltePlugin from 'eslint-plugin-svelte';
import {
	globalIgnores,
} from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import svelteConfig from './svelte.config';
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
	globalIgnores(
		[
			'**/.astro/**/*',
			'**/.netlify/**/*',
			'**/.yarn/**/*',
			'**/packages/**/*',
			'**/node_modules/**/*',
			'**/dist/**/*',
		],
	),
	{
		plugins: {
			'@stylistic': stylistic,
		},
	},
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
				svelteConfig,
			},
		},
	},
	{
		plugins: {
			prettier: prettierPlugin,
		},
	},
	eslint.configs.recommended,
	tseslint.configs.eslintRecommended,
	tseslint.configs.stylistic,
	eslintPluginAstro.configs['flat/recommended'],
	eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
	sveltePlugin.configs['flat/recommended'],
	eslintPluginPrettierRecommended,
	eslintConfigPrettier,
	{
		rules: {
			'prettier/prettier': 'off',
			'@stylistic/function-paren-newline': [
				'error',
				'multiline-arguments',
				// 'always',
			],
			'@stylistic/object-curly-newline': [
				'error',
				// 'always',
				{
					'ObjectExpression': {
						'multiline': true,
						'minProperties': 1,
					},
					'ObjectPattern': {
						'multiline': true,
						'minProperties': 1,
					},
					'ImportDeclaration': {
						'multiline': true,
						'minProperties': 1,
					},
					'ExportDeclaration': {
						'multiline': true,
						'minProperties': 1,
					},
				},
			],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/newline-per-chained-call': ['error', {
				'ignoreChainWithDepth': 1,
			}],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/object-property-newline': ['error'],
			'@stylistic/function-call-argument-newline': ['error', 'always'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/one-var-declaration-per-line': ['error', 'always'],
			'@stylistic/no-trailing-spaces': 'error',
		},
	},
);
