interface User {
  id: number;
  account: string;
  nickname: string;
  system_role_id: number;
  password: string;
  confirm_password: string;
  sex: string;
  avatar: string;
  status: string;
  createTime: string;
  updateTime: string;
}

interface Menu {
  name: string;
  desc: string;
  id: number;
  has_children?: boolean;
  route_path: string;
  icon: string;
  parent_id: number;
  status: number;
  children: Array<Menu>;
  createTime: string;
  updateTime: string;
}

interface Role {
  name: string;
  desc: string;
  id: number;
  system_menu_ids: Array<number>;
  createTime: string;
  updateTime: string;
}
