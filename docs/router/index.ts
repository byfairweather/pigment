import { nextTick } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import color from "../pages/styles/color.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/styles/color",
    component: color,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
