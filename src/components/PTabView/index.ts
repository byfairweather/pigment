import { InjectionKey, Ref, Plugin } from "vue";
import PTabView from "./PTabView.vue";
import PTab from "./PTab.vue";

export default {
  install: (app, options) => {
    app.component(PTabView.name, PTabView);
    app.component(PTab.name, PTab);
  },
} as Plugin;

export const TabViewProvider: InjectionKey<{
  mounted: Ref<boolean>;
  selectedTab: Ref<HTMLElement | undefined>;
  viewSelector: string;
  select: (tab: HTMLElement | undefined) => void;
}> = Symbol();
