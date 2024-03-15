import { defineStore } from "pinia";
import request from "@/utils/request";
import type { MenuItem } from "@/layout/NavMenu.vue";
import type { User } from "@/api/system/user";

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
      try {
        const data = await request.post<
          any,
          { token?: string; auth?: MenuItem[] }
        >("/login/password", {
          account,
          password,
        });
        if (data.token && data.auth) {
          this.token = data.token;
          this.auth = data.auth;
        }
        delete data.auth;
        delete data.token;
        this.userinfo = data as User;
        return data;
      } catch (error) {
        return false;
      }
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
    navigator(state) {
      const menu = (node: MenuItem[]) => {
        const list: MenuItem[] = [];
        node.map((item) => {
          if (item.children && item.children.length > 0) {
            const result = menu(item.children);
            list.push(...result);
          } else {
            list.push(item);
          }
        });
        return list;
      };
      return menu(state.auth);
    },
  },
  persist: true,
});
