<template>
  <div class="p-navbar-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-navbar-item",
});
</script>
