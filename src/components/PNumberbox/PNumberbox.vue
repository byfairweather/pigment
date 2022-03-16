<template>
  <div class="p-numberbox">
    <div class="input" :class="{ disabled, error }">
      <PButton
        class="decrease"
        :class="{ danger: error }"
        @click="decrease"
        :disabled="disabled"
      >
        -
      </PButton>
      <input
        type="number"
        ref="numberbox"
        :id="id"
        @input="input($event)"
        :disabled="disabled"
      />
      <PButton
        class="increase"
        :class="{ danger: error }"
        @click="increase"
        :disabled="disabled"
      >
        +
      </PButton>
    </div>
    <label class="label" :for="id" v-if="label">{{ label }}</label>
    <span class="error-text" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, watch } from "vue";
import PButton from "../PButton/PButton.vue";

export default defineComponent({
  name: "p-numberbox",
  components: { PButton },
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  setup(props, context) {
    const id = "p-numberbox-" + getCurrentInstance()!.uid.toString();
    const numberbox = ref<HTMLInputElement>();

    watch(() => props.modelValue, updateValue, { immediate: true });

    function input(event: Event): void {
      let value = parseInt((event.target as HTMLInputElement)?.value);
      context.emit("update:modelValue", value);
    }

    function updateValue(value: number): void {
      if (numberbox.value) {
        numberbox.value.value = value.toString();
      }
    }

    function decrease(): void {
      context.emit("update:modelValue", props.modelValue - 1);
    }

    function increase(): void {
      context.emit("update:modelValue", props.modelValue + 1);
    }

    return {
      id,
      numberbox,
      input,
      increase,
      decrease,
    };
  },
});
</script>
