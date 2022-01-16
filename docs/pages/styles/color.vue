<template>
  <h2>Color Palette</h2>
  <p-vue-example :code="ColorTableText">
    <ColorTable />
  </p-vue-example>
  <h2>Text Helpers</h2>
  <p-vue-example :code="TextColorsText">
    <TextColors />
  </p-vue-example>
  <h2>Background Helpers</h2>
  <p-vue-example :code="BackgroundColorsText">
    <BackgroundColors />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorTableText from "inline:./examples/ColorTable.vue";
import ColorTable from "./examples/ColorTable.vue";
import TextColorsText from "inline:./examples/TextColors.vue";
import TextColors from "./examples/TextColors.vue";
import BackgroundColorsText from "inline:./examples/BackgroundColors.vue";
import BackgroundColors from "./examples/BackgroundColors.vue";

export default defineComponent({
  name: "Color",
  setup() {
    return { ColorTableText, TextColorsText, BackgroundColorsText };
  },
  components: { ColorTable, TextColors, BackgroundColors },
});
</script>
