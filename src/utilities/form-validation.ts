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
