/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [splitVendorChunkPlugin(), react()],
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    exclude: ["node_modules", "tests-e2e"],
  },
});
