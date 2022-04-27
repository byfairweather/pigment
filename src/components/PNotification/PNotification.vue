<template>
  <Transition name="p-notification">
    <div
      class="p-notification"
      :style="{ height: height }"
      v-show="open && mounted"
    >
      <div ref="content" class="content">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from "vue";

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
    const height = ref("0px");
    const mounted = ref(false);

    onMounted(() => {
      mounted.value = true;
    });

    watch(
      [() => props.open, () => content.value, () => mounted.value],
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

    return { content, height, mounted };
  },
});
</script>
