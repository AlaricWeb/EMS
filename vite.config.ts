import { fileURLToPath, URL } from "node:url";
import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "");
  return {
    plugins: [
      vue(),
    ],
    server: {
      host: true,
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_API_URL
        }
      }
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  }
});