<template>
  <div class="p-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-box",
});
</script>
