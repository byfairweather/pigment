import { Plugin } from "vue";
import PSpinner from "./PSpinner.vue";

export default {
  install: (app, options) => {
    app.component(PSpinner.name, PSpinner);
  },
} as Plugin;
