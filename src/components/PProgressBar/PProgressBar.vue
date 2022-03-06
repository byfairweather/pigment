<template>
  <div class="p-progress-bar">
    <div class="bar" :style="{ width: `${progress * 100}%` }">
      <span class="label">{{ Math.floor(progress * 100) }}%</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-progress-bar",
  props: {
    progress: {
      type: Number,
      default: true,
    },
  },
});
</script>
