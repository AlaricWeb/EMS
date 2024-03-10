import Axios  from "axios";
const instance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});
instance.interceptors.request.use((config) => {
  return config;
});
instance.interceptors.response.use(({data})=>{
    return data.data;
},(error)=>{
    console.log(error);
})
export default instance;