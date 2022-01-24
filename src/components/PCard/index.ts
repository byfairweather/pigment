import { Plugin } from "vue";
import PCard from "./PCard.vue";

export default {
  install: (app, options) => {
    app.component(PCard.name, PCard);
  },
} as Plugin;
