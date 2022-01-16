import { InjectionKey, Ref, Plugin } from "vue";
import TabView from "./TabView.vue";
import Tab from "./Tab.vue";

export default {
  install: (app, options) => {
    app.component(TabView.name, TabView);
    app.component(Tab.name, Tab);
  },
} as Plugin;

export const TabViewProvider: InjectionKey<{
  mounted: Ref<boolean>;
  selectedTab: Ref<HTMLElement | undefined>;
  viewSelector: string;
  select: (tab: HTMLElement | undefined) => void;
}> = Symbol();
