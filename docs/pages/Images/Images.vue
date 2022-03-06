<template>
  <h2>Images</h2>
  <h3>Image Gallery</h3>
  <p-vue-example :code="ImageGalleryCode">
    <ImageGallery></ImageGallery>
  </p-vue-example>
  <h3>Lazy Images</h3>
  <p-vue-example :code="LazyImagesCode">
    <LazyImages></LazyImages>
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImagesCode from "inline:./examples/LazyImages.vue";
import LazyImages from "./examples/LazyImages.vue";
import ImageGalleryCode from "inline:./examples/ImageGallery.vue";
import ImageGallery from "./examples/ImageGallery.vue";

export default defineComponent({
  name: "Popups",
  setup() {
    return { LazyImagesCode, ImageGalleryCode };
  },
  components: { LazyImages, ImageGallery },
});
</script>
