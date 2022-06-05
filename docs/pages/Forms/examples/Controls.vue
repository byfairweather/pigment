<template>
  <p-grid class="widths-4-all">
    <p-grid-item>
      <p-textbox
        label="Label"
        placeholder="Placeholder"
        v-model="stringValue"
        autocomplete="name"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Prefix/Suffix"
        prefix="$"
        suffix="lbs"
        placeholder="Placeholder"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Label"
        placeholder="Placeholder"
        error="Error"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        error="Error"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Prefix/Suffix"
        prefix="$"
        suffix="lbs"
        placeholder="Placeholder"
        error="Error"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Label"
        placeholder="Placeholder"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        v-model="stringValue"
      />
    </p-grid-item>

    <p-grid-item>
      <p-checkbox label="Label" v-model="boolValue" />
      <p-checkbox label="Label" :disabled="true" v-model="boolValue" />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Label"
        placeholder="Placeholder"
        error="Error"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        error="Error"
        v-model="stringValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-checkbox label="Label" error="Error" v-model="boolValue" />
      <p-checkbox
        label="Label"
        error="Error"
        :disabled="true"
        v-model="boolValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-select
        label="Label"
        placeholder="Placeholder"
        :options="options"
        :value="valueMapper"
        :display="displayMapper"
        v-model="numberValue"
      />
    </p-grid-item>
    <p-grid-item>
      <p-select
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        :options="options"
        :value="valueMapper"
        :display="displayMapper"
        v-model="numberValue"
      />
    </p-grid-item>
    <p-grid-item></p-grid-item>
    <p-grid-item>
      <p-numberbox label="Label" :min="-5" :max="5" v-model="numberValue" />
    </p-grid-item>
    <p-grid-item>
      <p-numberbox label="Label" :disabled="true" v-model="numberValue" />
    </p-grid-item>
    <p-grid-item></p-grid-item>
    <p-grid-item>
      <p-numberbox label="Label" error="Error" v-model="numberValue" />
    </p-grid-item>
    <p-grid-item>
      <p-numberbox
        label="Label"
        error="Error"
        :disabled="true"
        v-model="numberValue"
      />
    </p-grid-item>
  </p-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Grid",
  setup() {
    const stringValue = ref("a");
    const numberValue = ref(1);
    const boolValue = ref(true);
    const options = [
      {
        name: "Honda",
        value: 1,
        other: "ignore-me",
      },
      {
        name: "Ford",
        value: 2,
        other: "ignore-me",
      },
      {
        name: "General Motors",
        value: 3,
        other: "ignore-me",
      },
    ];

    const displayMapper = (o: { name: string }) => o.name;
    const valueMapper = (o: { value: string }) => o.value;

    return {
      stringValue,
      numberValue,
      boolValue,
      options,
      displayMapper,
      valueMapper,
    };
  },
});
</script>
