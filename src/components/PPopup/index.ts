import { Plugin } from "vue";
import PPopup from "./PPopup.vue";

export default {
  install: (app, options) => {
    app.component(PPopup.name, PPopup);
  },
} as Plugin;
