<template>
  <h2>Form</h2>
  <h3>Controls</h3>
  <p-vue-example :code="ControlsCode">
    <Controls />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControlsCode from "inline:./examples/Controls.vue";
import Controls from "./examples/Controls.vue";

export default defineComponent({
  name: "Grid",
  setup() {
    return { ControlsCode };
  },
  components: { Controls },
});
</script>
