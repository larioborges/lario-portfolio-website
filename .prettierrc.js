import prettierConfigStandard from 'prettier-config-standard' with { type: 'json' };

export default {
	...prettierConfigStandard,
	plugins: [
		'prettier-plugin-tailwindcss',
		'prettier-plugin-packagejson',
		'prettier-plugin-organize-imports',
		'prettier-plugin-astro',
		'prettier-plugin-svelte',
		'prettier-plugin-toml',
	],
	overrides: [
		{
			files: 'src/**/*.svelte',
			options: {
				parser: 'svelte',
			},
		},
		{
			files: 'src/**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	semi: true,
	singleQuote: true,
	tabWidth: 15,
	useTabs: true,
	arrowParens: 'avoid',
	singleAttributePerLine: true,
	svelteSortOrder: 'options-styles-scripts-markup',
	svelteStrictMode: false,
	svelteBracketNewLine: true,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
	astroSortOrder: 'styles | markup',
	astroAllowShorthand: true,
	files: [
		'src/**/*.ts',
		'src/**/*.mjs',
		'.prettierrc.js',
		'astro.config.js',
		'components.json',
		'eslint.config.ts',
		'netlify.toml',
		'package.json',
		'svelte.config.ts',
		'tsconfig.json',
		'src/**/*.json',
		'src/**/*.cjs',
		'src/**/*.js',
		'src/**/*.astro',
		'src/**/*.svelte',
		'src/**/*.toml',
		'src/**/*.json',
	],
};
