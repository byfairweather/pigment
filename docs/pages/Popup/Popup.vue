<template>
  <h2>Popups</h2>
  <p-vue-example :code="PopupCode">
    <Popup></Popup>
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PopupCode from "inline:./examples/Popup.vue";
import Popup from "./examples/Popup.vue";

export default defineComponent({
  name: "Popups",
  setup() {
    return { PopupCode };
  },
  components: { Popup },
});
</script>
