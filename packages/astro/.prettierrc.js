import prettierConfigStandard from 'prettier-config-standard' with { type: 'json' };

export default {
	...prettierConfigStandard,
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	arrowParens: 'avoid',
	plugins: [
		'prettier-plugin-tailwindcss',
		'prettier-plugin-packagejson',
		'prettier-plugin-astro',
		'prettier-plugin-svelte',
		'prettier-plugin-organize-imports',
		'prettier-plugin-toml',
	],
	svelteSortOrder: 'options-styles-scripts-markup',
	svelteStrictMode: false,
	svelteBracketNewLine: true,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
	astroSortOrder: 'styles | markup',
	astroAllowShorthand: true,
	files: ['*.ts', '*.mjs', '*.json', '*.cjs', '*.js', '*.astro', '*.svelte', '*.toml'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
