import { definePostMock } from "../config";
import Mock from "mockjs";
import { page } from "../utils";
import { role } from "../database/auth";
export default definePostMock([
  {
    url: "/system/role",
    method: "GET",
    delay: 1000,
    body(request) {
      const { page: start, limit } = request.query;
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
      if (id && role.list[id - 1]) return role.list[id - 1];
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
      request.body.id = Mock.Random.integer();
      role.list.push(request.body);
      return request.body;
    },
  },
  {
    url: "/system/role/:id",
    method: "PUT",
    body(request) {
      // role.list[]
      const id = request.params.id as number;
      role.list[id - 1] = Object.assign(role.list[id - 1], request.body);
      return role.list[id - 1];
    },
  },
  {
    url: "/system/role/:id",
    method: "DELETE",
    body(request) {
      // role.list[]
      const id = request.params.id as number;
      role.list.splice(id - 1, 1);
      return role.list[id - 1];
    },
  },
]);
