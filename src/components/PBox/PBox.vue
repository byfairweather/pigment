<template>
  <div ref="box" class="p-box">
    <div class="wrapper">
      <div
        class="scroll-fade top"
        :style="{ opacity: scrollFade.top ? 1 : 0 }"
      ></div>
      <slot></slot>
      <div
        class="scroll-fade bottom"
        :style="{ opacity: scrollFade.bottom ? 1 : 0 }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "p-box",
  setup() {
    const box = ref<HTMLDivElement>();
    const scrollFade = ref({ top: false, bottom: false });

    watch(
      () => box.value,
      () => {
        if (!box.value) return;

        new ResizeObserver(setScrollfade).observe(box.value);
        box.value.addEventListener("scroll", setScrollfade);
      },
      { immediate: true }
    );

    function setScrollfade(): void {
      if (!box.value) return;
      const scrollTolerance = 20;

      scrollFade.value.top = box.value.scrollTop - scrollTolerance > 0;
      scrollFade.value.bottom =
        box.value.scrollHeight > box.value.offsetHeight &&
        box.value.scrollHeight - box.value.scrollTop >=
          box.value.offsetHeight + scrollTolerance;
    }

    return {
      box,
      scrollFade,
    };
  },
});
</script>
