<template>
  <p-grid class="widths-3-all spacing-xs-all">
    <p-grid-item>
      <p-button @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button class="success" @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button class="warning" @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button class="danger" @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button disabled @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button disabled class="success" @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button disabled class="warning" @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>
      <p-button disabled class="danger" @click="example()">Button</p-button>
    </p-grid-item>
  </p-grid>
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
