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

// This is a test
const router = createRouter({
  history: createWebHistory(),
  routes,
});

function test() {
  const boom = false;
  const testing = /ab+c/;
  console.log("Another Test");
}

export default router;
