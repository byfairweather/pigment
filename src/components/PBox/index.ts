import { Plugin } from "vue";
import PBox from "./PBox.vue";

export default {
  install: (app, options) => {
    app.component(PBox.name, PBox);
  },
} as Plugin;
