import { Plugin } from "vue";
import PPanel from "./PPanel.vue";

export default {
  install: (app, options) => {
    app.component(PPanel.name, PPanel);
  },
} as Plugin;
