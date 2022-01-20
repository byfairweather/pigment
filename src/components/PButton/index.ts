import { Plugin } from "vue";
import PButton from "./PButton.vue";

export default {
  install: (app, options) => {
    app.component(PButton.name, PButton);
  },
} as Plugin;
