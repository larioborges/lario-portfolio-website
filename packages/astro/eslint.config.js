import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from "eslint/config";
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import * as tsEslintPlugin from "@typescript-eslint";

export default defineConfig([
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  extends: ["eslint:recommended", 
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',],  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.],
  parser: "@typescript-eslint/parser",
  plugins: {
    "@typescript-eslint": tsEslintPlugin,
    react: reactPlugin,
    'react-hooks': hooksPlugin
  },
  },
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
      rules: {
        ...reactPlugin.configs.recommended.rules,
        ...hooksPlugin.configs.recommended.rules,
        ...tsEslintPlugin.configs.recommended.rules,s
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
  },
  globalIgnores(['**/.astro/**', '**/node_modules/**'])
]);
