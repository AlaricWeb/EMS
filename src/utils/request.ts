import Axios  from "axios";
const instance = Axios.create({
  baseURL: import.meta.env.VITE_API_VERSION,
  timeout: 5000,
});
instance.interceptors.request.use((config) => {
  return config;
});
instance.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    console.log(error);
})
export default instance;