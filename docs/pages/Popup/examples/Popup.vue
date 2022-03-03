<template>
  <p-grid class="widths-3-all spacing-xs-all">
    <p-grid-item>
      <p-button @click="open = true">Popup</p-button>
      <p-popup v-model:open="open" position="center center">
        <p-box>Hello World</p-box>
      </p-popup>
    </p-grid-item>
  </p-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const open = ref(false);

    return { open };
  },
});
</script>
