<template>
  <div class="p-textbox">
    <div class="input" :class="{ disabled }">
      <div class="prefix" v-if="prefix">{{ prefix }}</div>
      <input
        type="text"
        ref="textbox"
        :id="id"
        @input="input($event)"
        size="1"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :disabled="disabled"
      />
      <div class="suffix" v-if="suffix">{{ suffix }}</div>
    </div>
    <label class="label" :for="id" v-if="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from "vue";

export default defineComponent({
  name: "p-textbox",
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
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
      type: [String, Object],
      default: "text",
    },
    autocomplete: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const id = getCurrentInstance()!.uid.toString();
    const textbox = ref<HTMLInputElement>();

    onMounted(() => {
      watch(() => props.modelValue, updateValue, { immediate: true });
    });

    function input(event: Event): void {
      let value = (event.target as HTMLInputElement)?.value;
      const type = types[props.type as string] || props.type;

      // TODO: Use type validator (see below) and display any relevant error message

      value = type?.formatter ? type.formatter(value) : value;
      context.emit(
        "update:modelValue",
        type?.emitter ? type.emitter(value) : value
      );
      updateValue(value);
    }

    function updateValue(value: string | undefined): void {
      const type = types[props.type as string] || props.type;

      if (textbox.value && type.formatter) {
        textbox.value.value =
          value != undefined ? type.formatter(value.toString()) : "";
      }
    }

    return {
      id,
      textbox,
      input,
    };
  },
});

const types: { [key: string]: InputType } = {
  text: {
    validator: () => true,
    formatter: (value: string) => value,
  },
  uppercase: {
    validator: () => true,
    formatter: (value: string) => value.toUpperCase(),
  },
  number: {
    validator: (value: string) => {
      return !isNaN(Number(value));
    },
    formatter: (value: string) => {
      value = value.replace(/[^\d]/g, "");
      value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      return value;
    },
    emitter: (value: string) => {
      return parseInt(value);
    },
  },
  float: {
    validator: (value: string) => {
      return !isNaN(Number(value));
    },
    formatter: (value: string) => {
      value = value.replace(/[^\d.]/g, "");
      value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      if (value.includes(".")) {
        value = value.split(".", 2).join(".");
      }
      return value;
    },
    emitter: (value: string) => {
      return parseFloat(value.replaceAll(",", ""));
    },
  },
  dollars: {
    validator: (value: string) => {
      return !isNaN(Number(value)) && /^\d+(\.\d\d?)?$/.test(value);
    },
    formatter: (value: string) => {
      value = value.replace(/[^.\d]/g, "");
      const dollars = value.includes(".")
        ? value.substring(0, value.indexOf("."))
        : value;
      const cents = value.includes(".") ? value.substr(value.indexOf(".")) : "";
      value =
        dollars.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +
        cents.replace(/^(\.?\d?\d?).*$/g, "$1");
      return value;
    },
    emitter: (value: string) => {
      return parseFloat(value);
    },
  },
  "credit-card-number": {
    validator: (value: string) => {
      return true;
    },
    formatter: (value: string) => {
      value = value.replace(/[^\d]/g, "");

      // AMEX
      if (value.startsWith("34") || value.startsWith("37")) {
        value = value.replace(/^([0-9]{4})/g, "$1  ");
        value = value.replace(/^([0-9]{4}) {2}([0-9]{6})/g, "$1  $2  ");
        value = value.replace(
          /^([0-9]{4}) {2}([0-9]{6}) {2}([0-9]{5})(.*)/g,
          "$1  $2  $3"
        );
      }

      // Visa, Mastercard, Discover
      if (
        value.startsWith("4") ||
        value.startsWith("5") ||
        value.startsWith("2") ||
        value.startsWith("6")
      ) {
        value = value.replace(/([0-9]{4})/g, "$1  ");
        value = value.replace(/^(([0-9]{4} {2}){3}[0-9]{4}).*$/g, "$1");
      }

      return value.trimEnd();
    },
  },
  "credit-card-cvc": {
    validator: (value: string) => {
      return true;
    },
    formatter: (value: string) => {
      value = value.replace(/[^.\d]/g, "");
      value = value.replace(/^(\d{3,4}).*$/g, "$1");

      return value;
    },
  },
  "credit-card-expiration": {
    validator: (value: string) => {
      return true;
    },
    formatter: (value: string) => {
      const backspacing = value.endsWith("/");
      value = value.replace(/[^\d]/g, "");
      value = value.replace(/^([\d]{2})$/g, backspacing ? "$1" : "$1 / ");
      value = value.replace(/^([0-9]{2})([0-9]{1,2}).*$/g, "$1 / $2");

      return value;
    },
  },
};

interface InputType {
  validator?: (value: string) => boolean | string;
  formatter?: (value: string) => string;
  emitter?: (value: string) => unknown;
}
</script>
