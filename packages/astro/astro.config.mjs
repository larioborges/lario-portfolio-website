// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import svelte from '@astrojs/svelte';
import netlify from "@astrojs/netlify";
import {
    typescript,
    globalStyle,
  } from 'svelte-preprocess';
import compress from 'astro-compress';
// import compressor from "astro-compressor";
// 
// https://astro.build/config
export default defineConfig({
    site: 'https://www.lariocpt.biz',
    adapter: netlify({
      includeFiles: [
        './data/**/*.json'
      ],
      excludeFiles: [
        './node_modules/**/*',
        './packages/**/*',
        './.astro/**/*',
        './.netlify/**/*',
        './src/**/*.test.js',
        './public/*',
        '/styles/global.css',
        './*.ts'
      ]}),
    vite: {
        plugins: [tailwindcss()],
        build: {
            emptyOutDir: true,
        }
    },
    integrations: [partytown({
        config: {
            forward: ['dataLayer.push'],                
        },
    }), sitemap(), svelte({
        extensions: [
            '.svelte',
            '.svelte.js',
            '.svelte.ts',
        ],
        preprocess: [
            typescript(),
            globalStyle(),    
        ]
    }),
    compress(),
    ],
});
