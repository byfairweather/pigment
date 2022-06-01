<template>
  <PTextbox
    class="p-numberbox"
    type="number"
    :modelValue="stringValue"
    @update:modelValue="update($event)"
    :label="label"
    :disabled="disabled"
    :error="error"
  >
    <template #prefix>
      <button class="decrease" @click="decrease()">
        <i class="fa-solid fa-minus"></i>
      </button>
    </template>
    <template #suffix>
      <button class="increase" @click="increase()">
        <i class="fa-solid fa-plus"></i>
      </button>
    </template>
  </PTextbox>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import PTextbox from "../PTextbox/PTextbox.vue";

export default defineComponent({
  name: "p-numberbox",
  components: { PTextbox },
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
    const stringValue = ref("");
    const error = computed(() => {
      const value = Number(props.modelValue);

      if (props.max != undefined && props.max < value) {
        return `Maximum is ${props.max}`;
      }

      if (props.min != undefined && props.min > value) {
        return `Minimum is ${props.min}`;
      }
    });

    watch(
      () => props.modelValue,
      () => {
        stringValue.value = props.modelValue.toString();
      },
      { immediate: true }
    );

    function decrease(): void {
      const number = Number(props.modelValue) - 1;
      const value = Math.max(props.min ?? Number("-Infinity"), number);
      context.emit("update:modelValue", value);
    }

    function increase(): void {
      const number = Number(props.modelValue) + 1;
      const value = Math.min(props.max ?? Number("Infinity"), number);
      context.emit("update:modelValue", value);
    }

    function update(value: string): void {
      context.emit("update:modelValue", Number(value));
    }

    return {
      stringValue,
      error,
      increase,
      decrease,
      update,
    };
  },
});
</script>
