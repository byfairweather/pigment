import { createApp } from "vue";
import Dev from "./dev.vue";
import Pigment from "../src";

createApp(Dev).use(Pigment).mount("body");
