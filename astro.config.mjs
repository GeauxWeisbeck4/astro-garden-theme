// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';

import expressiveCode from 'astro-expressive-code';

import markdoc from '@astrojs/markdoc';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({

  site: 'https://astro-garden-theme.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), sitemap(), alpinejs(), react(), expressiveCode(), markdoc(), icon()]
});