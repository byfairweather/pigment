<template>
  <div class="p tab-view" :id="`tab-view-${id}`">
    <div class="tabs">
      <slot></slot>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  ref,
  toRef,
  onMounted,
  getCurrentInstance,
  nextTick,
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
    const selectedTab = ref<number>();
    const mounted = ref(false);

    onMounted(() => (mounted.value = true));

    function register(tab: number) {
      nextTick().then(() => {
        if (!selectedTab.value && props.open) {
          select(tab);
        }
      });
    }

    function select(tab: number | undefined): void {
      if (tab == selectedTab.value && props.collapsible) {
        tab = undefined;
      }
      selectedTab.value = tab;
      nextTick().then(() => context.emit("change"));
    }

    provide(TabViewProvider, {
      mounted,
      selectedTab,
      contentSelector: `#tab-view-${id} .content`,
      register,
      select,
    });

    return {
      id,
    };
  },
});
</script>
