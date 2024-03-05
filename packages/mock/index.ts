import { Plugin } from "vite";
import path from "node:path";
export default function (): Plugin {
  return {
    name: "vite-plugin-vue-mocojs",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        next();
      });
      server.hot.on("connection", () => {});
    },
  };
}
