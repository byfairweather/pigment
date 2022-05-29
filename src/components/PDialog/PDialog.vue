<template>
  <p-popup :open="open" @update:open="$emit('update:open', $event)" immersive>
    <p-box class="shadow-lg p-dialog" v-bind="$attrs">
      <slot></slot>
    </p-box>
  </p-popup>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  inheritAttrs: false,
  name: "p-dialog",
});
</script>
