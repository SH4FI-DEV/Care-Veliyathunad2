import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://homefor1000.org',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});
