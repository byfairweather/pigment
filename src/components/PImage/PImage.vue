<template>
  <div
    class="p-image"
    :class="{ zoomable: zoom }"
    ref="component"
    @contextmenu.prevent.stop
  >
    <div class="wrapper" @click="zoom && (isZoomed = true)">
      <img v-if="placeholder && !isLoaded.image && lazy" :src="placeholder" />
      <img
        class="image"
        v-if="!lazy || isVisible"
        v-show="isLoaded.image"
        :src="image"
        @load="isLoaded.image = true"
      />
    </div>
    <PPopup v-model:open="isZoomed" immersive>
      <div class="zoom shadow-lg">
        <img :src="zoom" @load="isLoaded.zoom = true" />
      </div>
      <PProgressSpinner class="spinner lg" v-if="!isLoaded.zoom" />
    </PPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import PPopup from "../PPopup/PPopup.vue";
import PProgressSpinner from "../PProgressSpinner/PProgressSpinner.vue";

export default defineComponent({
  name: "p-image",
  components: { PPopup, PProgressSpinner },
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
    const component = ref<HTMLElement>();
    const isVisible = ref(false);
    const isZoomed = ref(false);
    const isLoaded = ref({
      image: false,
      zoom: false,
    });

    window.addEventListener("scroll", checkViewport, { passive: true });
    watch(() => component.value, checkViewport, { immediate: true });

    function checkViewport() {
      if (!component.value || isVisible.value) return;

      const scrollBuffer = 250;
      const rect = component.value.getBoundingClientRect();
      isVisible.value = rect.top <= window.innerHeight + scrollBuffer;
    }

    return { component, isLoaded, isVisible, isZoomed };
  },
});
</script>
