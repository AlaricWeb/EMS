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
export function menu(): Array<Menu> {
  return [
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
}
export function user() {
  return [
    {
      id: 1,
      username: "admin",
      password: "<PASSWORD>",
      nickname: "管理员",
      role_id: 1,
      created_at: Mock.Random.datetime(),
      updated_at: Mock.Random.datetime(),
    },
  ];
}
export function role() {
  return [
    {
      id: 1,
      name: "超级管理员",
      desc: "拥有最高权限",
      created_at: Mock.Random.datetime(),
      updated_at: Mock.Random.datetime(),
    },
  ];
}
