import { createApp } from "vue";
import Docs from "./docs.vue";
import Pigment from "../src";

createApp(Docs).use(Pigment).mount("body");
