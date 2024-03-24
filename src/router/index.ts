import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { useSettingStore } from "@/stores/setting";
const viewsPath = import.meta.glob(["@/views/**/*.vue", "!@/views/*.vue"]);

const autoView: RouteRecordRaw[] = [];
for (const [path, resovleImport] of Object.entries(viewsPath)) {
  const routePath = path.replace(/\/src\/views|\/index\.vue|\.vue/gi, "");
  autoView.push({
    path: routePath,
    component: resovleImport,
  });
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      redirect: "/console",
      children: [
        {
          path: "/console",
          component: () => import("@/views/console.vue"),
        },
        ...autoView,
      ],
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login.vue"),
      meta: {
        title: "登录",
      },
    },
  ],
});
router.beforeEach((item) => {
  const settingStore = useSettingStore();
  settingStore.activeURL = item.fullPath;
});
export default router;
