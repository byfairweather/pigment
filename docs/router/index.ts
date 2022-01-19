import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Color from "../pages/styles/Color.vue";
import Typography from "../pages/styles/Typography.vue";
import Grid from "../pages/Grid/Grid.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/styles/color",
    component: Color,
  },
  {
    path: "/styles/typography",
    component: Typography,
  },
  {
    path: "/styles/grid",
    component: Grid,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
