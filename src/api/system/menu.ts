import request from "@/utils/request";
interface Menu {
  id: string;
  name: string;
  route_path: string;
}
const API_URL = "/system/menu";
export function put(id: number, data: Menu) {
  return request.put(`${API_URL}/${id}`, data);
}

export function post(data) {
  return request.post(API_URL, data);
}

export function get(data: Menu) {
  return request.get(`${API_URL}/${data.id}`);
}
export function deleted() {}
