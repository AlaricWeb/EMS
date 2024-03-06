import { fileURLToPath, URL } from "node:url";
import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath:"mock",
        enable:true
      })
    ],
    server: {
      host: true,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
});