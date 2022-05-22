<template>
  <div
    class="p-accordion-item"
    :class="{ open: isOpen, selectable: canSelect, complete: isComplete }"
  >
    <div class="header" @click="canSelect && select(id)">
      <slot name="header"></slot>
      <div class="label">
        {{ label }}
      </div>
      <div v-if="!isStepped" class="chevron">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div v-else class="checkmark">
        <i class="fa-solid fa-check"></i>
      </div>
    </div>
    <div class="content" :style="{ height: height + 'px' }">
      <div class="wrapper" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
import { AccordionProvider } from ".";

export default defineComponent({
  name: "p-accordion-item",
  props: {
    label: {
      type: String,
    },
  },
  setup() {
    const accordion = inject(AccordionProvider)!;
    const id = accordion.register();
    const content = ref<HTMLDivElement>();
    const height = ref<number>();
    const isOpen = computed(() => accordion.selectedItems.value.includes(id));
    const canSelect = computed(
      () => !accordion.stepped || id <= (accordion.selectedItems.value[0] ?? 0)
    );
    const isComplete = computed(
      () => accordion.stepped && accordion.selectedItems.value[0] > id
    );

    onMounted(resize);
    watch(() => isOpen.value, resize);

    function resize(): void {
      setTimeout(() => {
        if (!content.value) return;
        const contentHeight = content.value.getBoundingClientRect().height;
        height.value = isOpen.value ? contentHeight : 0;
      }, 0);
    }

    return {
      id,
      content,
      height,
      isOpen,
      canSelect,
      isComplete,
      isStepped: accordion?.stepped,
      select: accordion.select,
    };
  },
});
</script>
