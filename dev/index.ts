import { createApp } from "vue";
import Dev from "./dev.vue";
import Pigment from "../src";
import "./styles.scss";

createApp(Dev).use(Pigment).mount("body");
