import Axios  from "axios";
const instance  =  Axios.create({
    baseURL:"/admin/v1",
    timeout:5000
})

instance.interceptors.request.use((config)=>{
    return config;
})

instance.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    console.log(error);
})
export default instance;