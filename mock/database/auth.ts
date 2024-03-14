import Mock from "mockjs";
interface Menu {
  id: number;
  name: string;
  route_path: string;
  parent_id: number;
  icon: string;
  has_children?: boolean;
  created_at: string;
  updated_at: string;
}
export const menu: Array<Menu> = [
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
export const user = Mock.mock({
  "total|1-1000": 1,
  "list|10": [
    {
      "id|+1": 1,
      nickname: "@cname",
      avatar: "https://cdn.seovx.com/d/?mom=302",
      "system_role_id|1-6": 1,
      account: "@name",
      "role_name|1": ["超级管理员", "管理员", "员工"],
      "sex|1": ["男", "女"],
      created_at: "@datetime",
      updated_at: "@datetime",
    },
  ],
});
