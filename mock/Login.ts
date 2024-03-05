import { MockConfig } from "vite-plugin-mock";
import type { MockMethod } from "vite-plugin-mock";
export default function (): Array<MockMethod> {
  return [
    {
      url: "/admin/v1/login/password",
      method: "post",
      response({ query }) {
        return {
          code: 200,
          data: {},
        };
      },
    },
    {
      url: "/admin/v1/login/userinfo",
      method: "get",
      response(opt) {
        return {
          code: 200,
          data: {},
        };
      },
    },
  ];
}
