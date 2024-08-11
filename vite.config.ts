import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@state": path.resolve(__dirname, "./src/state"),
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["**/*.test.tsx"],
    coverage: {
      exclude: [
        "./src/pages/index.tsx",
        ".eslintrc.cjs",
        "./vite.config.ts",
        "dist",
        "./next.config.mjs",
      ],
    },
    globals: true,
  },
});
