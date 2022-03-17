<template>
  <div
    class="p-image"
    :class="{ zoomable: zoom }"
    ref="component"
    @contextmenu.stop.prevent
  >
    <div class="wrapper" @click.capture.stop="zoomIn">
      <img
        class="placeholder"
        v-if="placeholder && !loaded && lazy"
        :src="placeholder"
      />
      <img
        class="image"
        v-if="visible || !lazy"
        v-show="loaded"
        @load="loaded = true"
        :src="image"
      />
    </div>
    <PPopup v-model:open="zoomed">
      <img class="zoom-image" :src="zoom" @contextmenu.stop.prevent />
    </PPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import PPopup from "../PPopup/PPopup.vue";

export default defineComponent({
  name: "p-image",
  components: { PPopup },
  props: {
    lazy: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    zoom: {
      type: String,
    },
  },
  setup(props, context) {
    const loaded = ref(false);
    const visible = ref(false);
    const zoomed = ref(false);
    const component = ref<HTMLElement>();

    window.addEventListener("scroll", checkViewport, { passive: true });
    watch(
      () => component.value,
      () => checkViewport(),
      { immediate: true }
    );

    watch;

    function checkViewport() {
      if (!component.value || visible.value) return;

      const rect = component.value.getBoundingClientRect();
      visible.value = rect.top <= window.innerHeight + 500;
    }

    function zoomIn(): void {
      if (props.zoom) {
        zoomed.value = true;
      }
    }

    return { component, loaded, visible, zoomed, zoomIn };
  },
});
</script>
