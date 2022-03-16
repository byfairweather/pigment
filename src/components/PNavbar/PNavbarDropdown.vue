<template>
  <PNavbarItem @click="isOpen = !isOpen">
    <div ref="anchor">
      <slot name="label"></slot>
    </div>
  </PNavbarItem>
  <PPopup
    v-if="anchor"
    :anchor="anchor"
    :position="position"
    v-model:open="isOpen"
    @click="close()"
  >
    <PBox class="p-navbar-dropdown">
      <slot></slot>
    </PBox>
  </PPopup>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PBox from "../PBox/PBox.vue";
import PNavbarItem from "./PNavbarItem.vue";
import PPopup from "../PPopup/PPopup.vue";

export default defineComponent({
  name: "p-navbar-dropdown",
  components: { PBox, PNavbarItem, PPopup },
  props: {
    position: {
      type: String,
      default: "inside-left down",
    },
  },
  setup() {
    const anchor = ref<HTMLElement>();
    const isOpen = ref(false);

    function close() {
      console.log("Close");
      isOpen.value = false;
    }

    return { anchor, isOpen, close };
  },
});
</script>
