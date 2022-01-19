<template>
  <div class="p grid-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-grid-item",
});
</script>
