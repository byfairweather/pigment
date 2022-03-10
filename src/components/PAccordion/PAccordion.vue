<template>
  <div class="p-accordion">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, toRef, watch } from "vue";
import { AccordionProvider } from ".";

export default defineComponent({
  name: "p-accordion",
  props: {
    stage: {
      type: Number,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const staged = computed(() => props.stage != undefined);
    let currentItem = ref<number>();
    let items = 0;

    watch(
      () => props.stage,
      () => {
        currentItem.value = props.stage;
      }
    );

    function register(): number {
      const item = ++items;

      if (item == 1) {
        select(item);
      }

      return item;
    }

    function select(id: number | undefined): void {
      if (staged.value && (!id || !props.stage || props.stage < id)) return;
      context.emit("update:stage", id);
      currentItem.value = id;
    }

    provide(AccordionProvider, {
      staged,
      currentItem,
      register,
      select,
    });

    return;
  },
});
</script>
