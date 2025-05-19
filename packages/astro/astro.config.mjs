// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
// import compressor from "astro-compressor";
// 
// https://astro.build/config
export default defineConfig({
    site: 'https://astro.lariocpt.biz',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap(), partytown(), react()/*,compressor()*/],
});
