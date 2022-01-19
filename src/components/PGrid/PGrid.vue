<template>
  <div class="p grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-grid",
});
</script>
