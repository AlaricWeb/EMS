import { defineStore } from "pinia";
import request from "@/utils/request";
export const useUserStore = defineStore("user", {
   state() {
       return {
         token:"",
       }
   },
  actions:{
     async password(account:string,password:string){
       try {
        const result = await request({
          url:'/login/password',
          method:'post',
          data:{account,password}
        })
       } catch (error) {
         
       }
     }
  }
});
