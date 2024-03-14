import { definePostMock } from "../config";
import { user, role } from "../database/auth";
import Mock from "mockjs";
import { page, find } from "../utils";
export default definePostMock([
  {
    url: "/system/user",
    method: "GET",
    delay: 500,
    body(request) {
      const { page: start = 1, limit = 10 } = request.query;
      const result = page(user.list, start, limit);
      return {
        total: user.list.length,
        list: result,
      };
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
      request.body.id = 0;
      //@ts-ignore
      request.body.role_name = find(role.list, {
        id: request.body.system_role_id,
      })["name"];
      request.body.avatar = "https://picsum.photos/id/1/400/300";
      request.body.created_at = Mock.Random.datetime();
      request.body.updated_at = Mock.Random.datetime();
      console.log("添加");
      user.list.unshift(request.body);
      return request.body;
    },
  },
  {
    url: "/system/user/:id",
    method: "PUT",
    body(request) {
      // user.list[]
      console.log("更新");
      const id = request.params.id as number;
      const result = find(user.list, { id });
      return result;
    },
  },
  {
    url: "/system/user/:id",
    method: "DELETE",
    body(request) {
      const id = request.params.id as number;
      user.list.splice(id - 1, 1);
      return user.list[id - 1];
    },
  },
]);
