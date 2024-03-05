import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mockjs from "./packages/mock";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mockjs()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
