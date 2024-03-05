import { defineStore } from "pinia";
import request from "@/utils/request";

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
      }
    },
  },
});
