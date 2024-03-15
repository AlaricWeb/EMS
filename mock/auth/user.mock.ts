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
      const index = user.list.findIndex((item) => item.id == id);
      if (index) return user.list[index];
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
      user.list.unshift(request.body);
      return request.body;
    },
  },
  {
    url: "/system/user/:id",
    method: "PUT",
    body(request) {
      const id = request.params.id as number;
      const index = user.list.findIndex((item) => item.id == id);
      Object.assign(user.list[index], request.body);
      return user.list[index];
    },
  },
  {
    url: "/system/user/:id",
    method: "DELETE",
    body(request) {
      const id = request.params.id as number;
      const index = user.list.findIndex((item) => item.id == id);
      const deleteRueslt = user.list.splice(index, 1);
      if (deleteRueslt) {
        return {
          error_code: 400,
          msg: "author not found",
        };
      }
      const result = user.list[index];
      return result;
    },
  },
]);
