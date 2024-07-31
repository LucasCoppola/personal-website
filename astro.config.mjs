import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  site: "https://lucascoppola.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
