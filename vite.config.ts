import path from "path";
// import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["**/*.test.tsx"],
    coverage: {
      exclude: ["./src/main.tsx", ".eslintrc.cjs", "./vite.config.ts"],
    },
    globals: true,
  },
});
