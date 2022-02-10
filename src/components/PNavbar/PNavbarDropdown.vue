<template>
  <PNavbarItem>
    <PPopup :anchor="$props.anchor">
      <slot name="label"></slot>
      <template #popup>
        <PBox class="p-navbar-dropdown">
          <slot></slot>
        </PBox>
      </template>
    </PPopup>
  </PNavbarItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PBox from "../PBox/PBox.vue";
import PNavbarItem from "./PNavbarItem.vue";
import PPopup from "../PPopup/PPopup.vue";

export default defineComponent({
  name: "p-navbar-dropdown",
  components: { PBox, PNavbarItem, PPopup },
  props: {
    anchor: {
      type: String,
    },
  },
});
</script>
