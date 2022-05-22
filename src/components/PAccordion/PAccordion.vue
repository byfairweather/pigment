<template>
  <div class="p-accordion">
    <div class="wrapper">
      <slot :next="nextStage" :previous="previousStage" :select="select"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import { AccordionProvider } from ".";

export default defineComponent({
  name: "p-accordion",
  props: {
    multiselect: {
      type: Boolean,
      default: false,
    },
    preselect: {
      type: [Number, Array],
    },
    stepped: {
      type: Boolean,
    },
  },
  setup(props) {
    const selectedItems = ref(new Array<number>());
    let items = 0;

    provide(AccordionProvider, {
      stepped: props.stepped,
      selectedItems,
      register,
      select,
    });

    function register(): number {
      const id = items++;

      if (
        Array.isArray(props.preselect)
          ? props.preselect.includes(id)
          : props.preselect == id
      ) {
        select(id);
      }

      return id;
    }

    function select(id: number): void {
      if (id < 0 || id >= items) return;

      const index = selectedItems.value.indexOf(id);
      if (props.multiselect) {
        index == -1
          ? selectedItems.value.push(id)
          : selectedItems.value.splice(index, 1);
      } else {
        selectedItems.value = index == -1 ? [id] : [];
      }
    }

    function nextStage(): void {
      select(Math.max(0, ...selectedItems.value) + 1);
    }

    function previousStage(): void {
      select(Math.max(0, ...selectedItems.value) - 1);
    }

    return {
      select,
      nextStage,
      previousStage,
    };
  },
});
</script>
