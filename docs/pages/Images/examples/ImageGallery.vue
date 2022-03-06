<template>
  <p-image-gallery>
    <template v-for="(image, index) in images" :key="index">
      <p-image :zoom="image" :image="image"></p-image>
    </template>
  </p-image-gallery>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, context) {
    const images = [
      "https://via.placeholder.com/300x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x300",
      "https://via.placeholder.com/500x800",
      "https://via.placeholder.com/200x300",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/500x1000",
      "https://via.placeholder.com/1000x500",
      "https://via.placeholder.com/1000x500",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/200x300",
      "https://via.placeholder.com/300x400",
    ].sort((a, b) => Math.random() - 0.5);

    return { images };
  },
});
</script>
