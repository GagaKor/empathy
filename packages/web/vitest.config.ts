import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
  css: {
    // Vite 레벨에서 PostCSS 설정 (Vitest는 Vite 파이프라인을 사용)
    postcss: {}, // postcss.config.js 자동 로드
  },
  test: {
    environment: "node",
  },
});