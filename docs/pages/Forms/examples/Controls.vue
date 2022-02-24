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
  </p-grid>
  <span class="margin-top-md" v-if="value.length > 0">Value: {{ value }}</span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Grid",
  setup() {
    const value = ref("");

    return { value };
  },
});
</script>
