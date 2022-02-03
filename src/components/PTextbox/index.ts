import { Plugin } from "vue";
import PTextbox from "./PTextbox.vue";

export default {
  install: (app, options) => {
    app.component(PTextbox.name, PTextbox);
  },
} as Plugin;
