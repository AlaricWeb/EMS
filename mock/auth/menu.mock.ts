import { definePostMock } from "../config";
import Mock from "mockjs";
import { page, where } from "../utils";
import { menu } from "../database/auth";

export default definePostMock([
  {
    url: "/system/menu",
    method: "GET",
    delay: 500,
    body(request) {
      let parent_id: number = request.query.parent_id || 0;
      parent_id =
        typeof parent_id === "string" ? parseInt(parent_id) : parent_id;
      const result = where(menu, { parent_id });
      if (parent_id) {
        return {
          list: result,
        };
      }
      return {
        total: result.length,
        list: page(result, request.query.page, request.query.limit),
      };
    },
  },
  {
    url: "/system/menu/:id",
    method: "GET",
    body(request) {
      const id = request.params.id as number;
      if (id && menu[id - 1]) return menu[id - 1];
      return {
        error_code: 400,
        msg: "author not found",
      };
    },
  },
  {
    url: "/system/menu",
    method: "POST",
    body(request: { body: any }) {
      request.body.id = Mock.Random.integer();
      menu.push(request.body);
      return request.body;
    },
  },
  {
    url: "/system/menu/:id",
    method: "PUT",
    body(request) {
      // menu[]
      const id = request.params.id as number;
      menu[id - 1] = Object.assign(menu[id - 1], request.body);
      return menu[id - 1];
    },
  },
  {
    url: "/system/menu/:id",
    method: "DELETE",
    body(request) {
      // menu[]
      const id = request.params.id as number;
      menu.splice(id - 1, 1);
      return menu[id - 1];
    },
  },
]);
