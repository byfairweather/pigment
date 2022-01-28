import { Plugin } from "vue";
import PApp from "./PApp.vue";

export default {
  install: (app, options) => {
    app.component(PApp.name, PApp);
  },
} as Plugin;
