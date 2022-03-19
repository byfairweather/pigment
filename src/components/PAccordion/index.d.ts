import { InjectionKey, Ref } from "vue";
export declare const AccordionProvider: InjectionKey<{
    staged: Ref<boolean>;
    currentItem: Ref<number | undefined>;
    register: () => number;
    select: (item: number | undefined) => void;
}>;