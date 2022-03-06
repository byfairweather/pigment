<template>
  <div class="p-image-crop">
    <img class="image" v-show="loaded" @load="loaded = true" :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "p-image-crop",
  props: {
    aspect: {
      type: Number,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const loaded = ref(false);

    return { loaded };
  },
});
</script>
