import { defineStore } from "pinia";
import request from "@/utils/request";
export const useUserStore = defineStore("user", {
   state() {
       return {
         token:"",
         userinfo:{
           nickname:""
         }
       }
   },
  actions:{
     async password(account:string,password:string){
       try {
        const user = await request<any,{token:string}>({
          url:'/login/password',
          method:'post',
          data:{account,password}
        })
         this.token = user.token;
         return user;
       } catch (error) {
         return false;
       }
     },
     async userinfo(){
        const userinfo  = await request({
           url:"/login/userinfo",
           method:'get'
        });
        return userinfo;
     }
  },
  persist:true
});
