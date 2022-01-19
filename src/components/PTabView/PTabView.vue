<template>
  <div class="p tab-view" :id="`tab-view-${id}`">
    <div class="tabs">
      <slot></slot>
    </div>
    <div
      class="view"
      :class="{ open }"
      ref="view"
      :style="{
        height: (selectedTab?.scrollHeight ?? 0) + 'px',
        marginLeft: `-${selectedIndex}00%`,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  ref,
  onMounted,
  getCurrentInstance,
  nextTick,
  computed,
} from "vue";
import { TabViewProvider } from ".";

export default defineComponent({
  name: "p-tab-view",
  props: {
    collapsible: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const id = getCurrentInstance()!.uid;
    const mounted = ref(false);
    const view = ref<HTMLElement>();
    const open = ref(false);
    const selectedTab = ref<HTMLElement>();
    const selectedIndex = computed(() => {
      if (view.value && selectedTab.value) {
        return Array.from(view.value.children).indexOf(selectedTab.value);
      }
    });

    onMounted(() => (mounted.value = true));

    function select(tab: HTMLElement | undefined): void {
      if (selectedTab.value === tab && props.collapsible) {
        tab = undefined;
      }
      selectedTab.value = tab;
      nextTick().then(() => {
        context.emit("change");
        open.value = !!selectedTab.value;
      });
    }

    provide(TabViewProvider, {
      mounted,
      selectedTab,
      viewSelector: `#tab-view-${id} .view`,
      select,
    });

    return {
      id,
      open,
      view,
      selectedTab,
      selectedIndex,
    };
  },
});
</script>
