<template>
  <nav class="p-navbar">
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
      <NavbarDropdown anchor="right">
        <template #label>☰</template>
        <slot name="mobile"></slot>
      </NavbarDropdown>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarDropdown from "./PNavbarDropdown.vue";

export default defineComponent({
  name: "p-navbar",
  components: { NavbarDropdown },
});
</script>
