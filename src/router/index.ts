import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
const viewsPath = import.meta.glob(["@/views/**/*.vue", "!@/views/*.vue"]);
console.log("hellfsfsf");

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
          component: () => import("@/views/Console.vue"),
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
export default router;
