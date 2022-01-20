<template>
  <h2>Spinner</h2>
  <h3>Spinner Sizes</h3>
  <p-vue-example :code="SpinnerSizesCode">
    <SpinnerSizes />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SpinnerSizesCode from "inline:./examples/SpinnerSizes.vue";
import SpinnerSizes from "./examples/SpinnerSizes.vue";

export default defineComponent({
  setup() {
    return { SpinnerSizesCode };
  },
  components: { SpinnerSizes },
});
</script>
