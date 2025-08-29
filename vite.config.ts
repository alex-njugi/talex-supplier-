// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite understands "/src" from project root, so no Node 'path' needed
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": "/src" }
  },
  server: { port: 5173 }
});
