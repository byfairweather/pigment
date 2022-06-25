<template>
  <div class="p-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PScrollView from "../PScrollView/PScrollView.vue";

export default defineComponent({
  name: "p-box",
  components: { PScrollView },
});
</script>
