<template>
  <h1>Example</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-example",
});
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";

h1 {
  color: $color;
}
</style>
