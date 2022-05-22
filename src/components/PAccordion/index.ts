import { InjectionKey, Ref } from "vue";

export const AccordionProvider: InjectionKey<{
  stepped: boolean;
  selectedItems: Ref<number[]>;
  register: () => number;
  select: (id: number) => void;
}> = Symbol();
