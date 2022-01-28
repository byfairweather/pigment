import { Plugin } from "vue";
import PFooter from "./PFooter.vue";

export default {
  install: (app, options) => {
    app.component(PFooter.name, PFooter);
  },
} as Plugin;
