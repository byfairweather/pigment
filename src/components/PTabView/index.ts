import { InjectionKey, Ref } from "vue";

export const TabViewProvider: InjectionKey<{
  mounted: Ref<boolean>;
  open: Ref<boolean>;
  selectedTab: Ref<HTMLElement | undefined>;
  contentPath: string;
  register: (tab: HTMLElement) => void;
  select: (tab: HTMLElement | undefined) => void;
}> = Symbol();
