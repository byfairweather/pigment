<template>
  <h1>Color</h1>
  <p-vue-example :code="ColorTableText">
    <ColorTable />
  </p-vue-example>

  <ul>
    <li class="text-white background-black">Text White</li>
    <li class="text-light background-black">Text Light</li>
    <li class="text-dark">Text Dark</li>
    <li class="text-black">Text Black</li>
    <li class="text-primary">Text Primary</li>
    <li class="text-success">Text Success</li>
    <li class="text-warning">Text Warning</li>
    <li class="text-danger">Text Danger</li>
  </ul>

  <ul>
    <li class="background-white">Background White</li>
    <li class="background-light">Background Light</li>
    <li class="background-dark text-white">Background Dark</li>
    <li class="background-black text-white">Background Black</li>
    <li class="background-primary text-white">Background Primary</li>
    <li class="background-success text-white">Background Success</li>
    <li class="background-warning text-white">Background Warning</li>
    <li class="background-danger text-white">Background Danger</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorTableText from "inline:./examples/ColorTable.vue";
import ColorTable from "./examples/ColorTable.vue";

export default defineComponent({
  name: "Color",
  setup() {
    return { ColorTableText };
  },
  components: { ColorTable },
});
</script>
