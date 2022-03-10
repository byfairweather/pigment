<template>
  <div class="p-accordion-item" :class="{ open, complete }">
    <div class="header" @click="toggle()">
      <div class="label">
        <slot name="header"></slot>
      </div>
      <div v-if="!staged" class="chevron"></div>
      <div v-if="staged && complete" class="checkmark"></div>
    </div>
    <div class="content" ref="content" :style="{ height: height + 'px' }">
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  ref,
  watch,
} from "vue";
import { AccordionProvider } from ".";

export default defineComponent({
  name: "p-accordion-item",
  setup(props, context) {
    const accordion = inject(AccordionProvider)!;
    const id = accordion.register();
    const content = ref<HTMLDivElement>();
    const open = computed(() => accordion?.currentItem.value == id);
    const height = ref<number>();
    const complete = computed(
      () =>
        accordion?.staged.value &&
        accordion.currentItem.value &&
        id < accordion.currentItem.value
    );

    watch(() => open.value, resize);

    onMounted(() => {
      resize();
    });

    function resize(): void {
      nextTick(() => {
        if (!content.value) return;
        height.value = open.value ? content.value.scrollHeight : 0;
      });
    }

    function toggle(): void {
      accordion.select(open.value ? undefined : id);
    }

    return {
      complete,
      content,
      height,
      open,
      id,
      staged: accordion?.staged,
      toggle,
    };
  },
});
</script>
