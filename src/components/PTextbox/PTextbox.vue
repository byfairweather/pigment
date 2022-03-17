<template>
  <div class="p-textbox">
    <div class="input" :class="{ disabled, error }">
      <div class="prefix" v-if="prefix">{{ prefix }}</div>
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
      <div class="suffix" v-if="suffix">{{ suffix }}</div>
      <div
        v-if="type == 'password'"
        class="reveal-password"
        @click="revealPassword = !revealPassword"
        @mousedown.prevent
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"
          />
        </svg>
      </div>
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
    error: {
      type: String,
    },
  },
  setup(props, context) {
    const id = getCurrentInstance()!.uid.toString();
    const textbox = ref<HTMLInputElement>();
    const revealPassword = ref(false);
    const inputType = computed(() => {
      if (typeof props.type != "string") return "text";
      if (revealPassword.value) return "text";
      return props.type;
    });

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
      inputType,
      revealPassword,
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
