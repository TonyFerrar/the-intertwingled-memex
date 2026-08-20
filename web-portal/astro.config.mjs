import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tonyferrar.github.io',
  base: '/the-interwingled-memex',
  integrations: [tailwind()],
  server: {
    port: 3000
  }
});
