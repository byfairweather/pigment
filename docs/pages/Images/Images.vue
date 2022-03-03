<template>
  <h2>Images</h2>
  <h3>Lazy Images</h3>
  <p-vue-example :code="LazyImagesCode">
    <LazyImages></LazyImages>
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImagesCode from "inline:./examples/LazyImages.vue";
import LazyImages from "./examples/LazyImages.vue";

export default defineComponent({
  name: "Popups",
  setup() {
    return { LazyImagesCode };
  },
  components: { LazyImages },
});
</script>
