<template>
  <transition name="popup">
    <div
      class="p-popup"
      :class="`${yPosition} ${xPosition} ${open && 'open'}`"
      v-if="open"
      ref="popup"
      tabindex="1"
      :style="{
        left: position.left,
        top: position.top,
        width: position.width,
      }"
    >
      <slot></slot>
    </div>
  </transition>
  <teleport to="body">
    <transition name="shade">
      <div class="shade" v-if="open" @click.stop="close"></div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType, ref, watch } from "vue";

export default defineComponent({
  props: {
    anchor: {
      type: Object as PropType<HTMLElement>,
      required: true,
    },
    position: {
      type: String,
      default: "inside-left down",
    },
    open: {
      type: Boolean,
      required: true,
    },
  },
  name: "p-popup",
  setup(props, context) {
    const anchor = ref<HTMLDivElement>();
    const popup = ref<HTMLDivElement>();
    const yPosition = ref("");
    const xPosition = ref("");

    const position = ref<{
      top?: string;
      left?: string;
      width?: string;
    }>({});

    watch(() => props.open, setPosition, { immediate: true });
    window.addEventListener("resize", setPosition);
    window.addEventListener("scroll", setPosition, { passive: true });

    function close(): void {
      context.emit("update:open", false);
    }

    async function setPosition() {
      if (!props.open && props.anchor.style) {
        props.anchor.style.position = "";
        props.anchor.style.zIndex = "";
        return;
      }
      await nextTick();
      if (!props.anchor || !popup.value || !props.open) return;

      xPosition.value = props.position.split(" ")[0] ?? "inside-left";
      yPosition.value = props.position.split(" ")[1] ?? "down";

      const a = props.anchor;
      const p = popup.value;
      a.style.position = "relative";
      a.style.zIndex = "99999";

      if (yPosition.value == "down") {
        position.value.top = `${
          a.offsetTop + a.offsetHeight - window.scrollY
        }px`;
      }

      if (yPosition.value == "up") {
        position.value.top = `${
          a.offsetTop - p.offsetHeight - window.scrollY
        }px`;
      }

      if (yPosition.value == "center") {
        position.value.top = `${
          a.offsetTop + (a.offsetHeight - p.offsetHeight) / 2 - window.scrollY
        }px`;
      }

      if (xPosition.value == "inside-left") {
        position.value.left = `${a.offsetLeft - window.scrollX}px`;
      }

      if (xPosition.value == "inside-right") {
        position.value.left = `${
          a.offsetLeft + (a.offsetWidth - p.offsetWidth) - window.scrollX
        }px`;
      }

      if (xPosition.value == "left") {
        position.value.left = `${
          a.offsetLeft - p.offsetWidth - window.scrollX
        }px`;
      }

      if (xPosition.value == "right") {
        position.value.left = `${
          a.offsetLeft + a.offsetWidth - window.scrollX
        }px`;
      }

      if (xPosition.value == "fill") {
        position.value.left = `${a.offsetLeft - window.scrollX}px`;
        position.value.width = `${a.offsetWidth}px`;
      }

      position.value.left;
    }

    return {
      anchor,
      popup,
      position,
      yPosition,
      xPosition,
      close,
    };
  },
});
</script>
