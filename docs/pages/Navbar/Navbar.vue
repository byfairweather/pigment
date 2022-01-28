<template>
  <h2>Navbar</h2>
  <h3>Navbar Structure</h3>
  <p-vue-example :code="NavbarStructureCode">
    <NavbarStructure />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarStructureCode from "inline:./examples/NavbarStructure.vue";
import NavbarStructure from "./examples/NavbarStructure.vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    return { NavbarStructureCode };
  },
  components: { NavbarStructure },
});
</script>
