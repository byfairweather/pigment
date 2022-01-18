<template>
  <div class="p tab" :class="{ selected }" @click="provider?.select(content)">
    {{ label }}
    <slot name="label"></slot>
    <div class="underline"></div>
    <teleport :to="provider?.viewSelector" v-if="provider?.mounted.value">
      <div class="content" ref="content" :class="{ selected }">
        <slot></slot>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed, ref } from "vue";
import { TabViewProvider } from ".";

export default defineComponent({
  name: "p-tab",
  props: {
    label: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    const provider = inject(TabViewProvider);
    const content = ref<HTMLElement>();
    const selected = computed(
      () => provider?.selectedTab.value === content.value
    );

    return {
      content,
      provider,
      selected,
    };
  },
});
</script>
