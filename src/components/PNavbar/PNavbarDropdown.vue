<template>
  <PNavbarItem>
    <PPopup :anchor="anchor">
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
import { defineComponent, ref, toRef } from "vue";
import PBox from "../PBox/PBox.vue";
import PNavbarItem from "./PNavbarItem.vue";
import PPopup from "../PPopup/PPopup.vue";

export default defineComponent({
  name: "p-navbar-dropdown",
  props: {
    anchor: {
      type: String,
    },
  },
  setup(props) {
    let anchor = toRef(props, "anchor");

    return { anchor };
  },
  components: { PBox, PNavbarItem, PPopup },
});
</script>
