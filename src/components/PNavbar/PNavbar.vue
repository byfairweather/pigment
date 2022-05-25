<template>
  <PPanel class="p-navbar">
    <nav>
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="start">
        <slot name="start"></slot>
      </div>
      <div class="end">
        <slot name="end"></slot>
      </div>
      <div class="mobile">
        <PNavbarDropdown position="inside-right down">
          <template #label>
            <i class="fa-solid fa-bars"></i>
          </template>
          <slot name="mobile"></slot>
        </PNavbarDropdown>
      </div>
    </nav>
  </PPanel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PNavbarDropdown from "./PNavbarDropdown.vue";
import PPanel from "../PPanel/PPanel.vue";

export default defineComponent({
  name: "p-navbar",
  components: { PNavbarDropdown, PPanel },
});
</script>
