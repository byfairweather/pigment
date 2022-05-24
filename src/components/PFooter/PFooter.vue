<template>
  <div class="p-footer">
    <PPanel>
      <slot></slot>
    </PPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PPanel from "../PPanel/PPanel.vue";

export default defineComponent({
  name: "p-footer",
  components: { PPanel },
});
</script>
