import { Plugin } from "vite";
import path from "node:path";
import.meta;
export default function (): Plugin {
  return {
    name: "vite-plugin-vue-mockjs",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        next();
      });
      server.hot.on("connection", () => {});
    },
  };
}
