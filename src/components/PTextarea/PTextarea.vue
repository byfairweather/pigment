<template>
  <div class="p-textarea">
    <div class="input" :class="{ disabled: disabled }">
      <textarea
        ref="textarea"
        @input="input($event)"
        :rows="lines"
        :placeholder="placeholder"
        :disabled="disabled"
      ></textarea>
    </div>
    <label class="label" v-if="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "p-textarea",
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    lines: {
      type: Number,
      default: 4,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const textarea = ref<HTMLInputElement>();

    watch(() => props.modelValue, updateValue, { immediate: true });

    function input(event: Event): void {
      let value = (event.target as HTMLInputElement)?.value;
      context.emit("update:modelValue", value);
    }

    function updateValue(value: string | undefined): void {
      if (textarea.value) {
        textarea.value.value = value ?? "";
      }
    }

    return {
      textarea,
      input,
    };
  },
});
</script>
