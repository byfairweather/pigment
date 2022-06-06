<template>
  <Transition name="p-notification">
    <div
      class="p-notification"
      :style="{ height: height + 'px' }"
      v-show="open && mounted"
      @load="setHeight"
    >
      <div ref="notification" class="notification">
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
    const notification = ref<HTMLDivElement>();
    const height = ref(0);
    const mounted = ref(false);

    onMounted(() => {
      mounted.value = true;
    });

    watch([() => props.open, () => notification.value], setHeight, {
      immediate: true,
    });

    function setHeight(): void {
      nextTick(() => {
        if (notification.value) {
          height.value = props.open ? notification.value?.scrollHeight : 0;
        }
      });
    }

    return { notification, height, mounted, setHeight };
  },
});
</script>
