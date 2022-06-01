<template>
  <div class="p-textbox">
    <div class="input" :class="{ disabled, error }">
      <div class="prefix">{{ prefix }}</div>
      <slot name="prefix"></slot>
      <input
        :type="inputType"
        ref="textbox"
        :id="id"
        @input="input($event)"
        size="1"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :disabled="disabled"
      />
      <div class="suffix">{{ suffix }}</div>
      <slot name="suffix"></slot>
    </div>
    <label class="label" :for="id" v-if="label">{{ label }}</label>
    <span class="error-text" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  watch,
} from "vue";

export default defineComponent({
  name: "p-textbox",
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number, Object],
      required: true,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
    },
    autocomplete: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    error: {
      type: String,
    },
  },
  setup(props, context) {
    const id = getCurrentInstance()!.uid.toString();
    const textbox = ref<HTMLInputElement>();
    const inputType = computed(() => {
      if (typeof props.type != "string") return "text";
      return props.type;
    });

    watch(
      () => props.modelValue,
      async () => {
        await nextTick();
        updateValue(props.modelValue);
      },
      { immediate: true }
    );

    function input(event: Event): void {
      let value = (event.target as HTMLInputElement).value;

      context.emit("update:modelValue", value);
      updateValue(value);
    }

    function updateValue(value: any): void {
      if (!textbox.value) return;
      textbox.value.value = value ?? "";
    }

    return {
      id,
      textbox,
      inputType,
      input,
    };
  },
});
</script>
