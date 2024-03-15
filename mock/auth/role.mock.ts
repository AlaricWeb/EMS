import { definePostMock } from "../config";
import { role } from "../database/auth";
import Mock from "mockjs";
import { page, find } from "../utils";
export default definePostMock([
  {
    url: "/system/role",
    method: "GET",
    delay: 500,
    body(request) {
      const { page: start = 1, limit = 10 } = request.query;
      const result = page(role.list, start, limit);
      return {
        total: role.list.length,
        list: result,
      };
    },
  },
  {
    url: "/system/role/:id",
    method: "GET",
    body(request) {
      const id = request.params.id as number;
      const index = role.list.findIndex((item) => item.id == id);
      if (index) return role.list[index];
      return {
        error_code: 400,
        msg: "author not found",
      };
    },
  },
  {
    url: "/system/role",
    method: "POST",
    body(request) {
      request.body.id = role.list.length + 10;
      request.body.created_at = Mock.Random.datetime();
      request.body.updated_at = Mock.Random.datetime();
      role.list.unshift(request.body);
      return request.body;
    },
  },
  {
    url: "/system/role/:id",
    method: "PUT",
    body(request) {
      const id = request.params.id as number;
      const index = role.list.findIndex((item) => item.id == id);
      Object.assign(role.list[index], request.body);
      return role.list[index];
    },
  },
  {
    url: "/system/role/:id",
    method: "DELETE",
    body(request) {
      const id = request.params.id as number;
      const index = role.list.findIndex((item) => item.id == id);
      const deleteRueslt = role.list.splice(index, 1);
      if (deleteRueslt) {
        return {
          error_code: 400,
          msg: "author not found",
        };
      }
      const result = role.list[index];
      return result;
    },
  },
]);
