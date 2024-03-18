import path from "node:path";
import { createDefineMock, type MockRequest } from "vite-plugin-mock-dev-server";
import { loadEnv } from "vite";
const env = loadEnv("mock", "");
const token = "123456";
function middleware(request: MockRequest, response, next) {
  const reqToken = request.headers.token;
  const errorInfo = {
    error_code: 4001,
    msg: "token does not exist please login and try again!",
  };
  if (reqToken == undefined || reqToken !== token) {
    response.statusCode = 400;
    response.end(JSON.stringify(errorInfo));
  }
}
export const definePostMock = createDefineMock((mock) => {
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
      middleware(req, res, next);
      //@ts-ignore
      mock.response(req, res, next);
    },
  };
});

export function where<T extends object>(node: T[], condition: Partial<T>) {
  return node.filter((item) => {
    return Object.keys(condition).every((key) => {
      return item[key] == condition[key];
    });
  });
}

export function find<T extends object>(node: T[], condition: Partial<T>): T | undefined {
  return node.find((item) => {
    return Object.keys(condition).every((key) => {
      return item[key] == condition[key];
    });
  });
}
/**
 * Returns a slice of an array from a specified start index to an end index.
 * @param node - The array to slice.
 * @param page - The index of the first element in the slice. Defaults to 1.
 * @param limit - The number of elements in the slice. Defaults to 10.
 * @returns The sliced array.
 */
export function page<T extends object>(node: T[], page: number = 1, limit: any = "10"): T[] {
  limit = parseInt(limit);
  const start = (page - 1) * limit;
  let end = start + limit;
  if (end > node.length) end = node.length;
  return node.slice(start, end);
}
export function column<T>(node: Array<T>, columnKey: keyof T) {
  return node.map((item) => item[columnKey]);
}
