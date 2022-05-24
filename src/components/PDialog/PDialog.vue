<template>
  <p-popup :open="open" @update:open="$emit('update:open', $event)">
    <p-box class="p-dialog" v-bind="$attrs">
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
