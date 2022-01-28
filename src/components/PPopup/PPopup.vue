<template>
  <div ref="anchor" class="anchor">
    <slot></slot>
  </div>
  <teleport to="body">
    <transition name="popup">
      <div
        class="p-popup"
        :class="`${verticalAnchor} ${horizontalAnchor} ${open && 'open'}`"
        ref="popup"
        v-if="open"
        :style="{
          left: position.left,
          top: position.top,
          width: position.width,
        }"
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
    open: {
      type: Boolean,
      default: false,
    },
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

    const position = ref<{
      top?: string;
      left?: string;
      width?: string;
    }>({});

    watch(
      () => props.open,
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

    return { anchor, popup, position, verticalAnchor, horizontalAnchor };
  },
});
</script>
