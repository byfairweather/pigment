<template>
  <div class="p-footer">
    <PPanel>
      <PGrid class="content">
        <PGridItem class="links width-4-all width-6-md width-12-sm">
          <slot name="links"></slot>
        </PGridItem>
        <PGridItem class="brand width-4-all width-12-md">
          <slot name="brand"></slot>
        </PGridItem>
        <PGridItem class="contact width-4-all width-6-md width-12-sm">
          <slot name="contact"></slot>
        </PGridItem>
      </PGrid>
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
