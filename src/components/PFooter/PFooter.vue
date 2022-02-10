<template>
  <div class="p-footer">
    <PPanel>
      <slot></slot>
    </PPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PGrid from "../PGrid/PGrid.vue";
import PGridItem from "../PGrid/PGridItem.vue";
import PPanel from "../PPanel/PPanel.vue";
import PNavbar from "../PNavbar/PNavbar.vue";

export default defineComponent({
  name: "p-footer",
  components: { PGrid, PGridItem, PPanel, PNavbar },
});
</script>
