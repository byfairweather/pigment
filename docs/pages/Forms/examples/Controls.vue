<template>
  <p-grid class="widths-4-all">
    <p-grid-item>
      <p-textbox label="Label" placeholder="Placeholder" v-model="value" />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Prefix/Suffix"
        prefix="$"
        suffix="lbs"
        placeholder="Placeholder"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Label"
        placeholder="Placeholder"
        error="Error"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        error="Error"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textbox
        label="Prefix/Suffix"
        prefix="$"
        suffix="lbs"
        placeholder="Placeholder"
        error="Error"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textarea label="Label" placeholder="Placeholder" v-model="value" />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        v-model="value"
      />
    </p-grid-item>

    <p-grid-item>
      <p-checkbox label="Label" v-model="value" />
      <p-checkbox label="Label" :disabled="true" v-model="value" />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Label"
        placeholder="Placeholder"
        error="Error"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-textarea
        label="Disabled"
        :disabled="true"
        placeholder="Placeholder"
        error="Error"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-checkbox label="Label" error="Error" v-model="value" />
      <p-checkbox
        label="Label"
        error="Error"
        :disabled="true"
        v-model="value"
      />
    </p-grid-item>
    <p-grid-item>
      <p-select
        label="Label"
        placeholder="Placeholder"
        :options="options"
        :value="valueMapper"
        :display="displayMapper"
        v-model="value"
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
        v-model="value"
      />
    </p-grid-item>
  </p-grid>
  <span class="margin-top-md" v-if="value">Value: {{ value }}</span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Grid",
  setup() {
    const value = ref("");
    const options = [
      {
        name: "a",
        value: 1,
        other: "ignore-me",
      },
      {
        name: "b",
        value: 2,
        other: "ignore-me",
      },
      {
        name: "c",
        value: 3,
        other: "ignore-me",
      },
    ];

    const displayMapper = (o: { name: string }) => o.name;
    const valueMapper = (o: { value: string }) => o.value;

    return { value, options, displayMapper, valueMapper };
  },
});
</script>
