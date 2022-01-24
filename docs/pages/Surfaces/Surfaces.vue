<template>
  <h2>Surface Styles</h2>
  <h3>Shadows</h3>
  <p-vue-example :code="ShadowsCode">
    <Shadows />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShadowsCode from "inline:./examples/Shadows.vue";
import Shadows from "./examples/Shadows.vue";

export default defineComponent({
  setup() {
    return { ShadowsCode };
  },
  components: { Shadows },
});
</script>
