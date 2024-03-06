import { defineStore } from "pinia";
import request from "@/utils/request";

<<<<<<< HEAD
export const useUserStore = defineStore("user", {
  state() {
    return {};
  },
  actions: {
    async password(account: string, password: string) {
      try {
        const user = await request.post("/login/password", {
          account,
          password,
        });
        return user;
      } catch (error) {
        return false;
=======
export default defineStore("user", {
  state() {
    return {
      token: "",
      auth: [],
      userinfo: {},
    };
  },
  actions: {
    async passowrd(account, password) {
      try {
        const user = await request<any, { token: string }>({
          url: "/login/password",
          method: "post",
          data: { account, password },
        });
        this.token = user.token;
      } catch (error) {
        return error;
      }
    },
    async usreinfo() {
      try {
        const userinfo = await request.get<any, { menu?: any[] }>(
          "/login/userinfo"
        ); // Making menu optional
        if (userinfo.menu) {
          this.auth = userinfo.menu as [];
          delete userinfo.menu; // Now it's valid since menu is optional
        }
        this.userinfo = userinfo;
      } catch (error) {
        console.error("An error occurred while fetching user info:", error);
        // Handle error appropriately
>>>>>>> a99526f50609857f79af0ff301bf8fc8caded149
      }
    },
  },
});
