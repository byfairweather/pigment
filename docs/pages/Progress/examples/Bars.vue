<template>
  <p-grid class="widths-12-all">
    <p-grid-item
      ><p-progress-bar class="sm" :progress="progress"
    /></p-grid-item>
    <p-grid-item
      ><p-progress-bar class="md" :progress="progress"
    /></p-grid-item>
    <p-grid-item
      ><p-progress-bar class="lg" :progress="progress"
    /></p-grid-item>
  </p-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const progress = ref(0);

    setInterval(() => {
      if (progress.value < 1) {
        progress.value += 0.01;
      } else {
        progress.value = 0;
      }
    }, 200);

    return { progress };
  },
});
</script>
