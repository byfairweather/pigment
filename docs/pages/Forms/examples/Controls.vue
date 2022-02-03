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
  </p-grid>
  <p class="margin-top-md" v-if="value.length > 0">Value: {{ value }}</p>
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
