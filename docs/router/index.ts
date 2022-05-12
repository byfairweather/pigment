import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Color from "../pages/styles/Color.vue";
import Typography from "../pages/styles/Typography.vue";
import Grid from "../pages/Grid/Grid.vue";
import Button from "../pages/Button/Button.vue";
import Card from "../pages/Card/Card.vue";
import Popup from "../pages/Popup/Popup.vue";
import Forms from "../pages/Forms/Forms.vue";
import Navbar from "../pages/Navbar/Navbar.vue";
import Progress from "../pages/Progress/Progress.vue";
import Surfaces from "../pages/Surfaces/Surfaces.vue";
import Images from "../pages/Images/Images.vue";
import Accordion from "../pages/Accordion/Accordion.vue";
import Notifications from "../pages/Notifications/Notifications.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accordion",
    component: Accordion,
  },
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
    path: "/popup",
    component: Popup,
  },
  {
    path: "/images",
    component: Images,
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
    path: "/progress",
    component: Progress,
  },
  {
    path: "/notifications",
    component: Notifications,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
