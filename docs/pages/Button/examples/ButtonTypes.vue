<template>
  <p-button @click="example()">Button</p-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    function example(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }

    return { example };
  },
});
</script>
