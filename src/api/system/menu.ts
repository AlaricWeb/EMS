import type { Page, PageConfig } from "@/typing/page";
import request from "@/utils/request";
import { VXETable } from "vxe-table";

export interface Menu {
  name: string;
  desc: string;
  id: number;
  has_children?: boolean;
  children: Array<Menu>;
  createTime: string;
  updateTime: string;
}

const API = "/system/menu";
export function fetch(params: PageConfig<Menu>) {
  const refresh = async () => {
    params.loading = true;
    const result = await request.get<any, { total: number; list: Menu[] }>(
      API,
      { params: params.pager }
    );

    params.loading = false;
    params.total = result.total;
    params.listing = result.list;
  };
  return refresh;
}
export async function remove(row: Menu, params: PageConfig<Menu>) {
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
export function push<T>(data: Partial<Menu>) {
  if (data.id) {
    const result = request.put(`${API}/${data.id}`, data);
    return result;
  }
  const result = request.post(API, data);
  return result;
}
export function fetchList<T extends object>(params: T) {
  return request.get<any, { list: Array<Menu> }>(API, { params });
}
