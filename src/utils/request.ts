import Axios from "axios";
import { ElMessage } from "element-plus";
const instance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});
instance.interceptors.request.use((config) => {

  return config;
});
instance.interceptors.response.use(({ data }) => {
  return data;
}, (error) => {
  ElMessage.error(`${error.response.data.msg}:${error.message}`)
  return Promise.reject(error);
})
export default instance;
