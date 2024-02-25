import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // output: "server", //TODO: Enable again
  // adapter: vercel(),
  integrations: [tailwind()]
});