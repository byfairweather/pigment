<template>
  <div class="p-checkbox">
    <div
      class="box"
      :class="{ disabled, checked: modelValue }"
      @click="toggle()"
      tabindex="0"
      @keydown.enter.exact.prevent="toggle()"
    >
      <div class="check"></div>
    </div>
    <label class="label" v-if="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "p-checkbox",
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    function toggle(): void {
      context.emit("update:modelValue", !props.modelValue);
    }

    return {
      toggle,
    };
  },
});
</script>
