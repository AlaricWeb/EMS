import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state() {
    return {
      tabs: [],
      activeURL: "/console",
      theme: {
        default: "drak",
        color: {},
      },
    };
  },
});
