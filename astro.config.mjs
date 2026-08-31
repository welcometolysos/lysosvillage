// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lysosvillage.com',
  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'en',
    routing: {
      // English lives at /, Greek at /el/
      prefixDefaultLocale: false,
    },
  },
});
