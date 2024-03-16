import request from "@/utils/request";
import { reactive, ref } from "vue";
import { clear } from "@/utils/tools";
import FormDialog from "@/components/FormDialog.vue";
const API_URL = "/system/user";

const config = reactive<PageConfig<User>>({
  pager: {
    page: 1,
    limit: 10,
  },
  total: 0,
  listing: [],
  loading: false,
});
const formData = reactive<Partial<User>>({});
const formref = ref<InstanceType<typeof FormDialog>>();
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
export function modify() {
  clear(formData);
  return {
    formref,
    FormData,
  };
}
