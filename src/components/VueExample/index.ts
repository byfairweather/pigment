import { Plugin } from "vue";
import VueExample from "./VueExample.vue";

export default {
  install: (app, options) => {
    app.component(VueExample.name, VueExample);
  },
} as Plugin;
