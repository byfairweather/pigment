<template inheritAttrs="false">
  <p-popup :open="open" @update:open="$emit('update:open', $event)">
    <p-box class="p-dialog" :class="$attrs.class">
      <div class="wrapper">
        <slot></slot>
      </div>
    </p-box>
  </p-popup>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  name: "p-dialog",
});
</script>
