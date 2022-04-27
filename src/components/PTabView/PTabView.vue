<template>
  <div class="p-tab-view" :id="`tab-view-${id}`">
    <div class="tabs">
      <slot></slot>
    </div>
    <div
      class="view"
      :class="[animation]"
      ref="view"
      :style="{ height: viewHeight }"
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
    const tabs = new Array<HTMLElement>();
    const selectedTab = ref<HTMLElement>();
    const viewHeight = ref<string>();
    const animation = ref<string>();

    onMounted(() => {
      mounted.value = true;
      const viewObserver = new MutationObserver(resize);
      if (view.value) {
        viewObserver.observe(view.value, {
          attributes: true,
          subtree: true,
          childList: true,
        });
      }
    });

    function register(tab: HTMLElement): void {
      tabs.push(tab);

      if (props.open && !selectedTab.value) {
        select(tab);
      }
    }

    function select(tab: HTMLElement | undefined): void {
      if (
        (selectedTab.value === tab && props.collapsible) ||
        tab == undefined
      ) {
        open.value = !open.value;
        resize();
        return;
      }

      animation.value = undefined; // Reset the previous animation

      if (
        selectedTab.value &&
        open.value &&
        tabs.indexOf(tab) < tabs.indexOf(selectedTab.value)
      ) {
        animation.value = "slide-left";
      } else if (
        selectedTab.value &&
        open.value &&
        tabs.indexOf(tab) > tabs.indexOf(selectedTab.value)
      ) {
        animation.value = "slide-right";
      } else {
        animation.value = undefined;
      }

      selectedTab.value = tab;
      open.value = true;
      context.emit("change");
    }

    function resize(): void {
      nextTick(() => {
        const height = open.value ? selectedTab.value?.scrollHeight ?? 0 : 0;
        viewHeight.value = height + "px";
      });
    }

    provide(TabViewProvider, {
      mounted,
      open,
      selectedTab,
      contentPath: `#tab-view-${id} .view`,
      register,
      select,
    });

    return {
      id,
      view,
      viewHeight,
      animation,
    };
  },
});
</script>
