import { definePostMock } from "../config";
import { user } from "../database/auth";
import Mock from "mockjs";
export default definePostMock([
  {
    url: "/system/user",
    method: "GET",
    body: {
      total: user.total,
      list: user.list,
    },
  },
  {
    url: "/system/user/:id",
    method: "GET",
    body(request) {
      const id = request.params.id as number;
      if (id && user.list[id - 1]) return user.list[id - 1];
      return {
        error_code: 400,
        msg: "author not found",
      };
    },
  },
  {
    url: "/system/user",
    method: "POST",
    body(request) {
      request.body.id = Mock.Random.integer();
      user.list.push(request.body);
      return request.body;
    },
  },
  {
    url: "/system/user/:id",
    method: "PUT",
    body(request) {
      // user.list[]
      const id = request.params.id as number;
      user.list[id - 1] = Object.assign(user.list[id - 1], request.body);
      return user.list[id - 1];
    },
  },
  {
    url: "/system/user/:id",
    method: "DELETE",
    body(request) {
      // user.list[]
      const id = request.params.id as number;
      user.list.splice(id - 1, 1);
      return user.list[id - 1];
    },
  },
]);
