import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from 'node:url'
import { URL } from 'node:url'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "App",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: { external: [] },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});