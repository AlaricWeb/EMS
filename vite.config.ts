import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import inspect from "vite-plugin-inspect";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "");
  return {
    base: "/EMS",
    plugins: [vue(), inspect()],
    server: {
      host: true,
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_API_URL,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
