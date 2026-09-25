import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://or-zohar.github.io',
  integrations: [sitemap()],
  redirects: {
    '/about': '/info',
    '/contact': '/info',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
});
