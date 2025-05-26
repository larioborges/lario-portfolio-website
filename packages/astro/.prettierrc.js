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
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 160,
	tabWidth: 2,
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
	files: ['*.ts', '*.mjs', '*.json', '*.cjs', '*.js', '*.astro', '*.svelte', '*.toml', 'package.json'],
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
