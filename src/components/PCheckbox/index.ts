import { Plugin } from "vue";
import PCheckbox from "./PCheckbox.vue";

export default {
  install: (app, options) => {
    app.component(PCheckbox.name, PCheckbox);
  },
} as Plugin;
