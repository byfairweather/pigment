<template>
  <button
    class="p-tab"
    :class="{ selected: selected && tabView?.open.value }"
    @click="tabView?.select(content)"
    @mousedown.prevent
  >
    {{ label }}
    <div class="underline"></div>
  </button>
  <teleport :to="tabView?.contentPath" v-if="tabView?.mounted.value">
    <div class="content" :class="{ selected }" ref="content">
      <slot></slot>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, inject, computed, ref, watch } from "vue";
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
    const tabView = inject(TabViewProvider);
    const content = ref<HTMLElement>();
    const selected = computed(
      () => tabView?.selectedTab.value === content.value
    );

    watch(
      () => content.value,
      () => {
        if (content.value) {
          tabView?.register(content.value);
        }
      }
    );

    return {
      content,
      tabView,
      selected,
    };
  },
});
</script>
