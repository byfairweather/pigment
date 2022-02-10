<template>
  <div
    class="p-checkbox"
    :class="{ disabled, checked: modelValue }"
    @click="toggle()"
    @keydown.enter.exact.prevent="toggle()"
  >
    <div
      class="checkbox"
      role="checkbox"
      :aria-checked="modelValue"
      :aria-labelledby="`label-${id}`"
      :tabindex="disabled ? -1 : 0"
    >
      <div class="check" v-if="modelValue"></div>
    </div>
    <label v-if="label" class="label" :id="`label-${id}`">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  name: "p-checkbox",
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const id = getCurrentInstance()?.uid;

    function toggle(): void {
      if (!props.disabled) {
        context.emit("update:modelValue", !props.modelValue);
      }
    }

    return {
      id,
      toggle,
    };
  },
});
</script>
