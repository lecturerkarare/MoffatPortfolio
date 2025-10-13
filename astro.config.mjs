// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ✅ Astro configuration for GitHub Pages + TailwindCSS
export default defineConfig({
  site: "https://lecturerkarare.github.io/MoffatPortfolio/", // Your live site URL
  base: "/MoffatPortfolio/", // Must match your repo name exactly
  vite: {
    plugins: [tailwindcss()],
  },
});
