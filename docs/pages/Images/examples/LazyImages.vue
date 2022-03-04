<template>
  <p-grid class="widths-3-all spacing-xs-all">
    <p-grid-item>
      <p-image
        zoomable
        image="https://www.nps.gov/common/uploads/cropped_image/primary/D9ADD2C0-AD37-D7BB-AEB8B49FB6F656A7.jpg"
        placeholder="https://www.hikespeak.com/img/Washington/Palouse/Palouse_Falls_State_Park_WA_Waterfall_5310.jpg"
      />
    </p-grid-item>
  </p-grid>
  <br />
  <p-image
    style="margin-top: 2000px"
    zoomable
    image="https://www.nps.gov/common/uploads/cropped_image/primary/D9ADD2C0-AD37-D7BB-AEB8B49FB6F656A7.jpg"
    placeholder="https://www.hikespeak.com/img/Washington/Palouse/Palouse_Falls_State_Park_WA_Waterfall_5310.jpg"
  />
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
