import { Plugin } from "vite";
import path from "node:path";
<<<<<<< HEAD
import.meta;
export default function (): Plugin {
  return {
    name: "vite-plugin-vue-mockjs",
=======
export default function (): Plugin {
  return {
    name: "vite-plugin-vue-mocojs",
>>>>>>> a99526f50609857f79af0ff301bf8fc8caded149
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        next();
      });
      server.hot.on("connection", () => {});
    },
  };
}
