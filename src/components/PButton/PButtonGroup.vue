<template>
  <div class="p-button-group">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-button-group",
});
</script>
