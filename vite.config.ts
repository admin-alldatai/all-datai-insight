import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // When deploying to GitHub Pages for a project page, set base to '/<repo-name>/'
  base: "/all-datai-insight/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // use 'docs' so GitHub Pages can serve from the main branch -> /docs
    outDir: "docs",
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
