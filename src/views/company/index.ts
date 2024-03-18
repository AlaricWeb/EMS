import request from "@/utils/request";
import { reactive, ref } from "vue";
const API_URL = "/company";
const config = reactive<PageConfig<User>>({
  pager: {
    page: 1,
    limit: 15,
  },
  total: 0,
  listing: [],
  loading: false,
});
export function fetchList() {
  config.loading = true;
  const refresh = () => {
    config.loading = true;
    request
      .get<any, { total: number; list: User[] }>(API_URL, { params: config.pager })
      .then((res) => {
        config.loading = false;
        config.total = res.total;
        config.listing = res.list;
      })
      .catch((error) => {
        config.loading = false;
        console.log(error);
      });
  };
  return {
    config,
    refresh,
  };
}

export function created(data: User) {
  if (data.id) {
    return request.put(`${API_URL}/${data.id}`, data);
  }
  return request.post(API_URL, data);
}

export async function remove(row: User) {
  if (!row.id) return false;
  const result = await request.delete(`${API_URL}/${row.id}`);
  return result;
}
