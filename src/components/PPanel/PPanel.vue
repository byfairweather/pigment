<template>
  <div class="p-panel">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-panel",
});
</script>
