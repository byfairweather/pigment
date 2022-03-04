<template>
  <div class="p-image" :class="{ zoomable }" ref="component">
    <div class="image" @click.capture.stop="zoom">
      <img
        v-if="placeholder && !loaded"
        class="placeholder"
        :src="placeholder"
      />
      <img v-if="visible" v-show="loaded" @load="loaded = true" :src="image" />
    </div>
    <div class="zoom" v-if="zoomed" @click="zoomed = false">
      <img :src="image" />
      <button class="close-button" aria-label="Close">&times;</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "p-image",
  props: {
    image: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    zoomable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const loaded = ref(false);
    const visible = ref(false);
    const zoomed = ref(false);
    const component = ref<HTMLElement>();

    window.addEventListener("scroll", checkViewport, { passive: true });
    onMounted(() => {
      checkViewport();
    });

    function checkViewport() {
      if (!component.value) return;

      const rect = component.value.getBoundingClientRect();
      visible.value = rect.top <= window.innerHeight + 500;
    }

    function zoom(): void {
      if (props.zoomable) {
        zoomed.value = true;
      }
    }

    return { component, loaded, visible, zoomed, zoom };
  },
});
</script>
