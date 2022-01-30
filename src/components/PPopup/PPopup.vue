<template>
  <teleport to="body">
    <transition name="shade">
      <div class="shade" @click="close()" v-if="isOpen"></div>
    </transition>
  </teleport>
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
  </teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watch } from "vue";

export default defineComponent({
  props: {
    anchor: {
      type: String,
      default: "left beneath",
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
      }
    }

    function close(): void {
      if (isOpen.value) {
        isOpen.value = false;
      }
    }

    watch(
      () => isOpen.value,
      () => {
        nextTick(() => {
          setPosition();
        });
      },
      { immediate: true }
    );

    window.addEventListener("resize", () => {
      nextTick(() => {
        setPosition();
      });
    });

    function setPosition() {
      horizontalAnchor.value = props.anchor.split(" ")[0] ?? "left";
      verticalAnchor.value = props.anchor.split(" ")[1] ?? "beneath";
      console.log(horizontalAnchor + " " + verticalAnchor);

      if (!anchor.value || !popup.value) return;

      if (verticalAnchor.value == "beneath") {
        position.value.top = `${
          anchor.value.offsetTop + anchor.value.offsetHeight
        }px`;
      }

      if (verticalAnchor.value == "above") {
        position.value.top = `${
          anchor.value.offsetTop - popup.value.offsetHeight
        }px`;
      }

      if (verticalAnchor.value == "center") {
        position.value.top = `${
          anchor.value.offsetTop +
          anchor.value.offsetHeight / 2 -
          popup.value.offsetHeight / 2
        }px`;
      }

      if (horizontalAnchor.value == "left") {
        position.value.left = `${anchor.value.offsetLeft}px`;
      }

      if (horizontalAnchor.value == "right") {
        position.value.left = `${
          anchor.value.offsetLeft +
          (anchor.value.offsetWidth - popup.value.offsetWidth)
        }px`;
      }

      if (horizontalAnchor.value == "outside-left") {
        position.value.left = `${
          anchor.value.offsetLeft - popup.value.offsetWidth
        }px`;
      }

      if (horizontalAnchor.value == "outside-right") {
        position.value.left = `${
          anchor.value.offsetLeft + anchor.value.offsetWidth
        }px`;
      }

      if (horizontalAnchor.value == "fill") {
        position.value.left = `${anchor.value.offsetLeft}px`;
        position.value.width = `${anchor.value.offsetWidth}px`;
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
