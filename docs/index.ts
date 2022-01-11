import { createApp } from "vue";
import router from "./router";
import Docs from "./Docs.vue";
import Pigment from "../src";
import "./styles.scss";

createApp(Docs).use(Pigment).use(router).mount("body");
