import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://mods.altie122.xyz',
  integrations: [react(), sitemap(), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: vercel()
});