import { nextTick } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import color from "../pages/styles/color.vue";
import typography from "../pages/styles/typography.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/styles/color",
    component: color,
  },
  {
    path: "/styles/typography",
    component: typography,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
