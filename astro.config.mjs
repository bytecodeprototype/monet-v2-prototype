import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://example.github.io/monet-v2-prototype';
const base = process.env.BASE_PATH || '/monet-v2-prototype';

export default defineConfig({
  site,
  base,
});
