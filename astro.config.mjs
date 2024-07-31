import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  output: "static",
  site: "https://lucascoppola.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercelStatic({
    webAnalytics: { enabled: true },
  }),
});
