import { fileURLToPath, URL } from "node:url";
import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
<<<<<<< HEAD
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default function ({ mode }: ConfigEnv): UserConfigExport {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock",
        enable: true,
        watchFiles: true,
        logger: true,
        configPath: "vite.mock.config.ts",
      }),
    ],
    server: {
      host: true,
=======
import mockjs from "./packages/mock";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mockjs()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
>>>>>>> a99526f50609857f79af0ff301bf8fc8caded149
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
