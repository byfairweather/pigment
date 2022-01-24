import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Color from "../pages/styles/Color.vue";
import Typography from "../pages/styles/Typography.vue";
import Grid from "../pages/Grid/Grid.vue";
import Button from "../pages/Button/Button.vue";
import Card from "../pages/Card/Card.vue";
import Spinner from "../pages/Spinner/Spinner.vue";

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
  {
    path: "/styles/button",
    component: Button,
  },
  {
    path: "/styles/card",
    component: Card,
  },
  {
    path: "/styles/spinner",
    component: Spinner,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
