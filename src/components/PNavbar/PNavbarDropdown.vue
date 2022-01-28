<template>
  <PNavbarItem @click="toggle()">
    <PPopup :anchor="anchor" :open="isOpen">
      <slot name="label"></slot>

      <template #popup>
        <PBox class="p-navbar-dropdown" @click="close()">
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
    let isOpen = ref<boolean>(false);

    function toggle(): void {
      console.log("Toggle");
      isOpen.value ? close() : open();
    }

    function open(): void {
      if (!isOpen.value) {
        console.log("Open!");
        isOpen.value = true;
      }
    }

    function close(): void {
      if (isOpen.value) {
        isOpen.value = false;
      }
    }

    return { isOpen, toggle, open, close, anchor };
  },
  components: { PBox, PNavbarItem, PPopup },
});
</script>
