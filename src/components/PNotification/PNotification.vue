<template>
  <Transition name="p-notification">
    <div class="p-notification" :style="{ height: height }" v-show="open">
      <div ref="content" class="content">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watch } from "vue";

export default defineComponent({
  name: "p-notification",
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const content = ref<HTMLDivElement>();
    const height = ref();

    watch(
      [() => props.open, () => content.value],
      () => {
        nextTick(() => {
          if (content.value) {
            height.value = props.open
              ? content.value?.scrollHeight + "px"
              : "0px";
          }
        });
      },
      { immediate: true }
    );

    return { content, height };
  },
});
</script>
