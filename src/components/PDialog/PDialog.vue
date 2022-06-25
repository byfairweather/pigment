<template>
  <PPopup :open="open" @update:open="$emit('update:open', $event)">
    <PBox class="p-dialog shadow-lg" v-bind="$attrs">
      <PScrollView>
        <div class="p-dialog-content">
          <slot></slot>
        </div>
      </PScrollView>
    </PBox>
  </PPopup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PBox from "../PBox/PBox.vue";
import PPopup from "../PPopup/PPopup.vue";
import PScrollView from "../PScrollView/PScrollView.vue";

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  components: { PBox, PPopup, PScrollView },
  inheritAttrs: false,
  name: "p-dialog",
});
</script>
