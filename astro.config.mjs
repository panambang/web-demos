// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH lets the same build live at a sub-path (e.g. /demos on the portfolio)
// or at the root of its own domain / Cloudflare Pages project.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
