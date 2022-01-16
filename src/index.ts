import { Plugin } from "vue";

// Components
import TabView from "./components/TabView/TabView.vue";
import Tab from "./components/TabView/Tab.vue";
import VueExample from "./components/VueExample/VueExample.vue";

export default {
  install: (app, options) => {
    // TODO: Can we delegate this to the component index.ts files?
    app.component(VueExample.name, VueExample);
    app.component(TabView.name, TabView);
    app.component(Tab.name, Tab);
  },
} as Plugin;
