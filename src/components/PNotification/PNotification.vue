<template>
  <Transition name="p-notification">
    <div
      class="p-notification"
      :style="{ height: height + 'px' }"
      v-show="open"
    >
      <div ref="notification" class="notification">
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
    const notification = ref<HTMLDivElement>();
    const height = ref(0);

    watch(
      [() => props.open, () => notification.value],
      () => {
        nextTick(() => {
          if (notification.value) {
            height.value = props.open ? notification.value?.scrollHeight : 0;
          }
        });
      },
      { immediate: true }
    );

    return { notification, height };
  },
});
</script>
