<template>
  <div class="p-navbar-item" @mousedown.prevent>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-navbar-item",
});
</script>
