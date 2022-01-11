import { Plugin } from "vue";
import VueExample from "./components/VueExample.vue";

export default {
  install: (app, options) => {
    app.component("p-vue-example", VueExample);
  },
} as Plugin;
