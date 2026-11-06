// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nothowgamestudio.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/thanks') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
