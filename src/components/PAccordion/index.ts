import { InjectionKey, Ref } from "vue";

export const AccordionProvider: InjectionKey<{
  staged: boolean;
  selectedItems: Ref<number[]>;
  register: () => number;
  select: (id: number) => void;
}> = Symbol();
