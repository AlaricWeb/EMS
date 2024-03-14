import Mock from "mockjs";
import { column, find } from "../utils";
export const menu = [
  {
    id: 1,
    name: "控制台",
    route_path: "/console",
    parent_id: 0,
    icon: "mingcute:confused-fill",
    created_at: Mock.Random.datetime(),
    updated_at: Mock.Random.datetime(),
  },
  {
    id: 2,
    name: "工单管理",
    route_path: "/console",
    parent_id: 0,
    icon: "mingcute:confused-fill",
    created_at: Mock.Random.datetime(),
    updated_at: Mock.Random.datetime(),
  },
  {
    id: 3,
    name: "企业设置",
    route_path: "/system/menu",
    parent_id: 0,
    icon: "mingcute:confused-fill",
    has_children: true,
    created_at: Mock.Random.datetime(),
    updated_at: Mock.Random.datetime(),
  },
  {
    id: 4,
    name: "故障类型",
    route_path: "",
    parent_id: 3,
    icon: "mingcute:confused-fill",
    has_children: false,
    created_at: Mock.Random.datetime(),
    updated_at: Mock.Random.datetime(),
  },
  {
    id: 5,
    name: "保修部门",
    route_path: "",
    parent_id: 3,
    icon: "mingcute:confused-fill",
    has_children: false,
    created_at: Mock.Random.datetime(),
    updated_at: Mock.Random.datetime(),
  },
];
const roleData = {
  "id|+1": 1,
  "name|1": "@word",
  system_menu_ids: [1, 2, 3, 4],
  desc: "@paragraph",
  created_at: "@datetime",
  updated_at: "@datetime",
};
export const role = Mock.mock({
  "list|100": [roleData],
});

const userData = {
  "id|+1": 0,
  nickname: "@cname",
  avatar: function () {
    return `https://picsum.photos/id/${this.id}/400/300`;
  },
  "system_role_id|1-100": 1,
  account: "@name",
  role_name: function (params) {
    const result = find(role.list, { id: this.system_role_id });
    //@ts-ignore
    return result["name"];
  },
  "sex|1": ["男", "女"],
  created_at: "@datetime",
  updated_at: "@datetime",
};
export const user = Mock.mock({
  "list|100": [userData],
});
