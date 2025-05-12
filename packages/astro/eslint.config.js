import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from "eslint/config";
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint';
import astroparser from 'astro-eslint-parser';

export default defineConfig(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // languageOptions: {
    //   parser: tseslint,
    // },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
        ...reactPlugin.configs.recommended.rules,
        ...hooksPlugin.configs.recommended.rules,
        "no-unused-vars": ["warn", { "varsIgnorePattern": "React" }],
    },
  },
  globalIgnores(['**/.astro/**', '**/node_modules/**']),
  {
    languageOptions: {
      parser: astroparser,
    },
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
);
