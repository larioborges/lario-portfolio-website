import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astroparser from 'astro-eslint-parser';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import sveltePlugin from 'eslint-plugin-svelte';
// import json from 'eslint-plugin-json';

export default defineConfig(
  globalIgnores([
    '**.astro/**/*',
    '**.netlify/**/*',
    '**packages/**/*',
    '**node_modules/**/*',
    '**dist/**/*',
    '**strapi/**/*'
  ]),
  {
    files: ['./**/*.svelte'],
    plugins: {
      svelte: sveltePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...sveltePlugin.configs.recommended.rules,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
  // {
  //   files: ["**/*.json"],
  //   plugins: { prettier: prettierPlugin, json },
  //   processor: "json/json",
  // },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        gtag: 'readonly',
        dataLayer: 'readonly',
      },
      ecmaVersion: 'latest',
      parser: astroparser,
    },
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
);
