<template>
  <h2>Buttons</h2>
  <h3>Button Types</h3>
  <p-vue-example :code="ButtonTypesCode">
    <ButtonTypes />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonTypesCode from "inline:./examples/ButtonTypes.vue";
import ButtonTypes from "./examples/ButtonTypes.vue";

export default defineComponent({
  name: "Buttons",
  setup() {
    return { ButtonTypesCode };
  },
  components: { ButtonTypes },
});
</script>
