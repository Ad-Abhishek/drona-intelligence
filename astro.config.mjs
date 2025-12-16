// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ad-abhishek.github.io',
  base: '/drona-intelligence',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});