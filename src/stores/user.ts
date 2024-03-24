import { defineStore } from "pinia";
import request from "@/utils/request";
import type { MenuItem } from "@/layout/NavMenu.vue";
import { convertToTree } from "@/utils/tools";
interface Userinfo {
  token: string;
  userinfo: null | User;
  auth: MenuItem[];
  [props: string]: any;
}
export const useUserStore = defineStore("user", {
  state(): Userinfo {
    return {
      token: "",
      userinfo: null,
      auth: [],
    };
  },
  actions: {
    async login(account: string, password: string) {
      const data = await request.post<any, { token?: string; auth?: MenuItem[] }>(
        "/login/password",
        {
          account,
          password,
        }
      );
      if (data.token && data.auth) {
        this.token = data.token;
        this.auth = data.auth;
      }
      delete data.auth;
      delete data.token;
      this.userinfo = data as User;
      return data;
    },
    async getUserInfo() {
      try {
        const data = await request.get<any, { auth: any[] }>("/login/userinfo");
        this.auth = data.auth;
        return data;
      } catch (error) {
        return false;
      }
    },
    async logout() {
      const { data } = await request.get("/login/logout");
      return data;
    },
  },
  getters: {
    isLogin: (state: Userinfo) => {
      return state.token !== "";
    },
    tree(state) {
      //@ts-ignore
      const result = convertToTree(state.auth, "id", "parent_id");
      return result;
    },
    navigator(state) {
      // const menu = (node: MenuItem[]) => {
      //   const list: MenuItem[] = [];
      //   node.map((item) => {
      //     if (item.children && item.children.length > 0) {
      //       const result = menu(item.children);
      //       list.push(...result);
      //     } else {
      //       list.push(item);
      //     }
      //   });
      //   return list;
      // };
      return state.auth;
    },
  },
  persist: true,
});
