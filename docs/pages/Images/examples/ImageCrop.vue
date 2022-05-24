<template>
  <p-grid class="widths-12-all">
    <p-grid-item>
      <p-image-crop
        :aspect-ratio="aspect"
        image="https://www.nps.gov/common/uploads/cropped_image/primary/D9ADD2C0-AD37-D7BB-AEB8B49FB6F656A7.jpg"
      />
    </p-grid-item>
    <p-grid-item class="width-4-all">
      <p-textbox label="Aspect Ratio" v-model="aspect" />
    </p-grid-item>
  </p-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const open = ref(false);
    const aspect = ref(1.3);

    return { open, aspect };
  },
});
</script>
