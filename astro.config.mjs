// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ✅ Astro configuration for GitHub Pages + TailwindCSS
export default defineConfig({
  site: "https://lecturerkarare.github.io/MoffatPortfolio/", // 🌐 Full live site URL
  base: "/MoffatPortfolio/", // 📁 Must match your repository name exactly
  vite: {
    plugins: [tailwindcss()],
  },
});
