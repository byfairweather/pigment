import { Plugin } from "vue";
import PTextarea from "./PTextarea.vue";

export default {
  install: (app, options) => {
    app.component(PTextarea.name, PTextarea);
  },
} as Plugin;
