import { Plugin } from "vue";
import PNavbar from "./PNavbar.vue";
import PNavbarDropdown from "./PNavbarDropdown.vue";
import PNavbarItem from "./PNavbarItem.vue";

export default {
  install: (app, options) => {
    app.component(PNavbar.name, PNavbar);
    app.component(PNavbarDropdown.name, PNavbarDropdown);
    app.component(PNavbarItem.name, PNavbarItem);
  },
} as Plugin;
