export default {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: true,
  svelteBracketNewLine: false,
  svelteAllowShorthand: true,
  svelteIndentScriptAndStyle: true,
  overrides: [
    {
      files: [
        './src/*.svelte',
        './src/*.svelte.js',
        './src/*.svelte.ts',
      ],
      options: { parser: 'svelte' },
    },
  ],
};
