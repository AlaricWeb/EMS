import path from "node:path";
import { createDefineMock } from "vite-plugin-mock-dev-server";
import { loadEnv } from "vite";
const env = loadEnv("mock", "");
export const defineMock = createDefineMock((mock) => {
  const fullURL = path.join(env.VITE_BASE_URL, mock.url);
  mock.url = fullURL;
  return {
    url: mock.url,
    //@ts-ignore
    method: mock.method,
    //@ts-ignore
    delay: mock.delay,
    //@ts-ignore
    headers: mock.headers,
    //@ts-ignore
    response(req, res, next) {
      // middleware(req, res, next);
      //@ts-ignore
      mock.response(req, res, next);
    },
  };
});
export function fail(res, error_code) {
  const data = {
    error_code,
    msg: "操作失败!",
  };
  const result = JSON.stringify(data);
  //@ts-ignore
  return res.end(result);
}
export function send(res: any, data: any) {
  data = {
    code: 0,
    data,
    msg: "获取成功",
  };
  const result = JSON.stringify(data);
  //@ts-ignore
  return res.end(result);
}
