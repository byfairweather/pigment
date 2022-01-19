import { Plugin } from "vue";
import PVueExample from "./PVueExample.vue";

export default {
  install: (app, options) => {
    app.component(PVueExample.name, PVueExample);
  },
} as Plugin;
