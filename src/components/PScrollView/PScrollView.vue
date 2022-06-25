<template>
  <div class="p-scroll-view" ref="scrollview">
    <div
      class="scroll-fade top"
      :style="{ opacity: scrollFade.top ? 1 : 0 }"
    ></div>
    <div class="wrapper">
      <slot></slot>
    </div>
    <div
      class="scroll-fade bottom"
      :style="{ opacity: scrollFade.bottom ? 1 : 0 }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "p-scroll-view",
  setup() {
    const scrollview = ref<HTMLDivElement>();
    const scrollFade = ref({ top: false, bottom: false });

    watch(
      () => scrollview.value,
      () => {
        if (!scrollview.value) return;
        new ResizeObserver(setScrollfade).observe(scrollview.value);
        scrollview.value.addEventListener("scroll", setScrollfade);
      },
      { immediate: true }
    );

    function setScrollfade(): void {
      if (!scrollview.value) return;
      const scrollTolerance = 20;

      scrollFade.value.top = scrollview.value.scrollTop - scrollTolerance > 0;
      scrollFade.value.bottom =
        scrollview.value.scrollHeight > scrollview.value.offsetHeight &&
        scrollview.value.scrollHeight - scrollview.value.scrollTop >=
          scrollview.value.offsetHeight + scrollTolerance;
    }

    return {
      scrollview,
      scrollFade,
    };
  },
});
</script>
