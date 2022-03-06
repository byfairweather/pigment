<template>
  <h2>Progress UI</h2>
  <h3>Bars</h3>
  <p-vue-example :code="BarsCode">
    <Bars />
  </p-vue-example>
  <h3>Spinners</h3>
  <p-vue-example :code="SpinnersCode">
    <Spinners />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarsCode from "inline:./examples/Bars.vue";
import Bars from "./examples/Bars.vue";
import SpinnersCode from "inline:./examples/Spinners.vue";
import Spinners from "./examples/Spinners.vue";

export default defineComponent({
  setup() {
    return { BarsCode, SpinnersCode };
  },
  components: { Bars, Spinners },
});
</script>
