import { Plugin } from "vue";
import PGrid from "./PGrid.vue";
import PGridItem from "./PGridItem.vue";

export default {
  install: (app, options) => {
    app.component(PGrid.name, PGrid);
    app.component(PGridItem.name, PGridItem);
  },
} as Plugin;
