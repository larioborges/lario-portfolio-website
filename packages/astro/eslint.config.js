import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from "eslint/config";
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

export default defineConfig([
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
//   ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
        react: reactPlugin,
        'react-hooks': hooksPlugin
      },
      rules: {
        ...reactPlugin.configs.recommended.rules,
        ...hooksPlugin.configs.recommended.rules
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
  },
  globalIgnores(['**/.astro/**', '**/node_modules/**'])
]);
