import Axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
const instance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});
instance.interceptors.request.use((config) => {
  const userStore = useUserStore();
  if (userStore.token || userStore.token != "") {
    config.headers.token = userStore.token;
  }
  return config;
});
instance.interceptors.response.use(
  ({ data }) => {
    return data.data;
  },
  ({ response } = {}) => {
    const { error_code, msg } = response.data;
    ElMessage.error(msg);
    const has_login = [4001, 4002, 4003].includes(error_code);
  }
);
export default instance;
