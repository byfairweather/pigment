<template>
  <div class="p-box">
    <div class="wrapper" :class="$attrs.class">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-box",
  inheritAttrs: false,
});
</script>
