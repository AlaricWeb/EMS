import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state() {
    return {
      tabs: [],
      activeURL: "/console",
      collapse: false,
      theme: {
        default: "drak",
        color: {},
      },
    };
  },
});
