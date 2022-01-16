<template>
  <div
    class="p tab"
    ref="tab"
    :class="{ selected }"
    @click="provider?.select(id)"
  >
    {{ label }}
    <slot name="label"></slot>
    <div class="underline"></div>
    <teleport
      :to="provider?.contentSelector"
      v-if="selected && provider?.mounted"
    >
      <slot></slot>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed, getCurrentInstance } from "vue";
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
    const id = getCurrentInstance()!.uid;
    const provider = inject(TabViewProvider);
    const selected = computed(() => provider?.selectedTab.value == id);

    provider?.register(id);

    return {
      id,
      provider,
      selected,
    };
  },
});
</script>
