import type { PageConfig } from "@/typing/page";
import request from "@/utils/request";
import { VXETable } from "vxe-table";

export interface Role {
  name: string;
  desc: string;
  id: number;
  system_menu_ids: Array<number>;
  createTime: string;
  updateTime: string;
}

const API = "/system/role";
export function fetch(params: PageConfig<Role>) {
  const refresh = async () => {
    params.loading = true;
    const result = await request.get<any, { total: number; list: Role[] }>(
      API,
      { params: params.pager }
    );

    params.loading = false;
    params.total = result.total;
    params.listing = result.list;
  };
  return refresh;
}
export async function remove(row: Role, params: PageConfig<Role>) {
  const type = await VXETable.modal.confirm("您确定要删除该数据?");
  if (type !== "confirm") return false;
  params.loading = true;
  await request.delete(`${API}/${row.id}`);
  params.loading = false;
  return true;
}

/**
 *  提交数据到后台
 * @param data  提交数据
 * @returns Promise
 */
export function push<T>(data: Partial<Role>) {
  if (data.id) {
    const result = request.put(`${API}/${data.id}`, data);
    return result;
  }
  const result = request.post(API, data);
  return result;
}
