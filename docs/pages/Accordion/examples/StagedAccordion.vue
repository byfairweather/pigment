<template>
  <p-accordion v-model:stage="stage">
    <p-accordion-item :complete="true">
      <template #header>Item 1</template>
      Hello World!
      <p-button @click="stage = 2">Next</p-button>
    </p-accordion-item>
    <p-accordion-item :complete="false">
      <template #header>Item 2</template>
      Hello Again!
      <p-button @click="stage = 3">Next</p-button>
    </p-accordion-item>
    <p-accordion-item>
      <template #header>Item 3</template>
      Anyone there?
    </p-accordion-item>
  </p-accordion>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const stage = ref(1);

    return { stage };
  },
});
</script>
