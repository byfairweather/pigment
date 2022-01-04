import { createApp } from "vue";
import Docs from "./docs.vue";
import Pigment from "../src";
import router from "./router";

createApp(Docs).use(router).use(Pigment).mount("body");
