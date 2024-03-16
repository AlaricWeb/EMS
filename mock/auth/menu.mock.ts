import { definePostMock } from "../config";
import { menu } from "../database/auth";
import Mock from "mockjs";
import { page, find, where } from "../utils";
export default definePostMock([
  {
    url: "/system/menu",
    method: "GET",
    delay: 500,
    body(request) {
      const { page: start = 1, limit = 10 } = request.query;
      const parent_id = request.query.parent_id || 0;
      console.log(parent_id);
      const result = where(menu.list, { parent_id });
      const res = page(result, start, limit);
      return {
        total: menu.list.length,
        list: res,
      };
    },
  },
  {
    url: "/system/menu/:id",
    method: "GET",
    body(request) {
      const id = request.params.id as number;
      const index = menu.list.findIndex((item) => item.id == id);
      if (index) return menu.list[index];
      return {
        error_code: 400,
        msg: "author not found",
      };
    },
  },
  {
    url: "/system/menu",
    method: "POST",
    body(request) {
      request.body.id = menu.list.length + 10;
      request.body.created_at = Mock.Random.datetime();
      request.body.updated_at = Mock.Random.datetime();
      //@ts-ignore
      menu.list.unshift(request.body);
      return request.body;
    },
  },
  {
    url: "/system/menu/:id",
    method: "PUT",
    body(request) {
      const id = request.params.id as number;
      const index = menu.list.findIndex((item) => item.id == id);
      Object.assign(menu.list[index], request.body);
      return menu.list[index];
    },
  },
  {
    url: "/system/menu/:id",
    method: "DELETE",
    body(request) {
      const id = request.params.id as number;
      const index = menu.list.findIndex((item) => item.id == id);
      const deleteRueslt = menu.list.splice(index, 1);
      if (deleteRueslt) {
        return {
          error_code: 400,
          msg: "author not found",
        };
      }
      const result = menu.list[index];
      return result;
    },
  },
]);
