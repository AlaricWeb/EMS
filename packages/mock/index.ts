import { Plugin } from "vite";
import path from "node:path";
interface Option{
   root:string,
   mockDir:string
}
export default function (Option:Partial<Option> = {root:"/api/v1",mockDir:"mock"}): Plugin {
  return {
    name: "vite-plugin-vue-mockjs",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        console.log(request.url);
        next();
      });
      server.hot.on("connection", () => {});
    },
  };
}
