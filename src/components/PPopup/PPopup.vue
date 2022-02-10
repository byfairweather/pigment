<template>
  <div ref="anchor" class="anchor" :class="{ open: isOpen }" @click="toggle()">
    <slot></slot>
  </div>
  <teleport to="body">
    <transition name="popup">
      <div
        class="p-popup"
        :class="`${verticalAnchor} ${horizontalAnchor} ${isOpen && 'open'}`"
        ref="popup"
        v-if="isOpen"
        :style="{
          left: position.left,
          top: position.top,
          width: position.width,
        }"
        @click="close()"
      >
        <slot name="popup"></slot>
      </div>
    </transition>
    <transition name="shade">
      <div class="shade" @click="close()" v-if="isOpen"></div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";

export default defineComponent({
  props: {
    anchor: {
      type: String,
      default: "inside-left down",
    },
  },
  name: "p-popup",
  setup(props) {
    const anchor = ref<HTMLDivElement>();
    const popup = ref<HTMLDivElement>();
    const verticalAnchor = ref("");
    const horizontalAnchor = ref("");
    let isOpen = ref<boolean>(false);

    const position = ref<{
      top?: string;
      left?: string;
      width?: string;
    }>({});

    function toggle(): void {
      isOpen.value ? close() : open();
    }

    function open(): void {
      if (!isOpen.value) {
        isOpen.value = true;
        setPosition();
      }
    }

    function close(): void {
      if (isOpen.value) {
        isOpen.value = false;
      }
    }

    window.addEventListener("resize", setPosition);

    async function setPosition() {
      await nextTick();

      horizontalAnchor.value = props.anchor.split(" ")[0] ?? "inside-left";
      verticalAnchor.value = props.anchor.split(" ")[1] ?? "down";

      if (!anchor.value || !popup.value) return;
      const a = anchor.value;
      const p = popup.value;

      if (verticalAnchor.value == "down") {
        position.value.top = `${a.offsetTop + a.offsetHeight}px`;
      }

      if (verticalAnchor.value == "up") {
        position.value.top = `${a.offsetTop - p.offsetHeight}px`;
      }

      if (verticalAnchor.value == "center") {
        position.value.top = `${
          a.offsetTop + (a.offsetHeight - p.offsetHeight) / 2
        }px`;
      }

      if (horizontalAnchor.value == "inside-left") {
        position.value.left = `${a.offsetLeft}px`;
      }

      if (horizontalAnchor.value == "inside-right") {
        position.value.left = `${
          a.offsetLeft + (a.offsetWidth - p.offsetWidth)
        }px`;
      }

      if (horizontalAnchor.value == "left") {
        position.value.left = `${a.offsetLeft - p.offsetWidth}px`;
      }

      if (horizontalAnchor.value == "right") {
        position.value.left = `${a.offsetLeft + a.offsetWidth}px`;
      }

      if (horizontalAnchor.value == "fill") {
        position.value.left = `${a.offsetLeft}px`;
        position.value.width = `${a.offsetWidth}px`;
      }
    }

    return {
      anchor,
      popup,
      position,
      verticalAnchor,
      horizontalAnchor,
      isOpen,
      toggle,
      open,
      close,
    };
  },
});
</script>
