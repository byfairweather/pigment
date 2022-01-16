<template>
  <div class="p tab" :class="{ selected }" @click="provider?.select(tab)">
    {{ label }}
    <slot name="label"></slot>
    <div class="underline"></div>
    <teleport :to="provider?.viewSelector" v-if="provider?.mounted.value">
      <div class="content" ref="tab">
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
    const tab = ref<HTMLElement>();
    const provider = inject(TabViewProvider);
    const selected = computed(() =>
      provider?.selectedTab.value?.isSameNode(tab.value ?? null)
    );

    return {
      tab,
      provider,
      selected,
    };
  },
});
</script>
