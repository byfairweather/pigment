<template>
  <p-grid class="widths-2-all spacing-xs-all">
    <p-grid-item>
      <p-button @click="example('Another Test')">Button</p-button>
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
      <p-button class="grey" @click="example()">Button</p-button>
    </p-grid-item>
    <p-grid-item>&nbsp;</p-grid-item>
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
    <p-grid-item>
      <p-button disabled class="grey" @click="example()">Button</p-button>
    </p-grid-item>
  </p-grid>
  <p-button-group class="margin-top-lg">
    <p-button>Button 1</p-button>
    <p-button>Button 2</p-button>
    <p-button>Button 3</p-button>
  </p-button-group>

  <p-button-group class="collapse margin-top-lg">
    <p-button>Button 1</p-button>
    <p-button>Button 2</p-button>
    <p-button>Button 3</p-button>
  </p-button-group>

  <p-button-group class="vertical margin-top-lg">
    <p-button>Button 1</p-button>
    <p-button>Button 2</p-button>
    <p-button>Button 3</p-button>
  </p-button-group>

  <p-button-group class="vertical collapse margin-top-lg">
    <p-button>Button 1</p-button>
    <p-button>Button 2</p-button>
    <p-button>Button 3</p-button>
  </p-button-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    function example(message: string = "Test"): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          window.alert(message);
        }, 1000);
      });
    }

    return { example };
  },
});
</script>
