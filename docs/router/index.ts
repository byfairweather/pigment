import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Color from "../pages/styles/Color.vue";
import Typography from "../pages/styles/Typography.vue";
import Grid from "../pages/Grid/Grid.vue";
import Button from "../pages/Button/Button.vue";
import Card from "../pages/Card/Card.vue";
import Forms from "../pages/Forms/Forms.vue";
import Navbar from "../pages/Navbar/Navbar.vue";
import Spinner from "../pages/Spinner/Spinner.vue";
import Surfaces from "../pages/Surfaces/Surfaces.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/color",
    component: Color,
  },
  {
    path: "/typography",
    component: Typography,
  },
  {
    path: "/surfaces",
    component: Surfaces,
  },
  {
    path: "/grid",
    component: Grid,
  },
  {
    path: "/button",
    component: Button,
  },
  {
    path: "/card",
    component: Card,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/navbar",
    component: Navbar,
  },
  {
    path: "/spinner",
    component: Spinner,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
