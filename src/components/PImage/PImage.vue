<template>
  <div class="p-image" :class="{ zoomable }">
    <div class="image" @click.capture.stop="zoom">
      <img v-if="placeholder && loading" :src="placeholder" />
      <img v-show="!loading" @load="load" :src="image" />
    </div>
    <div class="zoom" v-if="zoomed" @click="zoomed = false">
      <img :src="image" />
      <button class="close-button">&times;</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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
    const loading = ref(true);
    const zoomed = ref(false);

    function zoom(): void {
      if (props.zoomable) {
        zoomed.value = true;
      }
    }

    async function load(): Promise<void> {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    }

    return { loading, zoomed, load, zoom };
  },
});
</script>
