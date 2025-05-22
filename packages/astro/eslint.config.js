import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import astroparser from 'astro-eslint-parser';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
    },
  },
  globalIgnores(['**/.astro/**', '**/node_modules/**', '**/dist/**']),
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
