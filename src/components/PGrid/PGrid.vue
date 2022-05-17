<template>
  <div class="p-grid">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-grid",
});
</script>
