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
        zIndex: zIndex,
      }"
    >
      <slot></slot>
    </div>
  </transition>
  <transition name="shade">
    <div
      class="p-popup-shade"
      :class="{ immersive: !anchor }"
      :style="{ zIndex: zIndex - 1 }"
      @click.stop="close"
      v-if="open"
    >
      <div class="close-button" v-if="!anchor">&times;</div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, PropType, ref, watch } from "vue";
import { popupIndex } from ".";

export default defineComponent({
  props: {
    anchor: {
      type: Object as PropType<HTMLElement>,
    },
    position: {
      type: String,
      default: "center center",
    },
    open: {
      type: Boolean,
      required: true,
    },
  },
  name: "p-popup",
  setup(props, context) {
    const popup = ref<HTMLDivElement>();
    const zIndex = ref(0);
    const xPosition = computed(() => props.position.split(" ")[0] ?? "center");
    const yPosition = computed(() => props.position.split(" ")[1] ?? "center");

    const position = ref<{
      top?: string;
      left?: string;
      width?: string;
    }>({});

    watch(
      () => props.open,
      () => {
        setPosition();

        if (props.open) {
          popupIndex.value += 2;
          zIndex.value = popupIndex.value;

          if (props.anchor) {
            props.anchor.style.zIndex = zIndex.value.toString();
          }
        } else {
          if (props.anchor) {
            props.anchor.style.zIndex = "";
          }
        }
      },
      { immediate: true }
    );
    window.addEventListener("resize", setPosition);
    window.addEventListener("scroll", setPosition, { passive: true });

    function close(): void {
      context.emit("update:open", false);
    }

    async function setPosition() {
      await nextTick();
      props.anchor?.classList.add("p-popup-anchor");
      props.anchor?.classList.remove("open");
      if (!popup.value || !props.open) return;

      const a = props.anchor?.getBoundingClientRect() ?? {
        top: 0,
        height: window.innerHeight * 0.75,
        left: 0,
        width: window.innerWidth,
      };

      const p = {
        top: popup.value.offsetTop,
        height: popup.value.offsetHeight,
        left: popup.value.offsetLeft,
        width: popup.value.offsetWidth,
      };
      props.anchor?.classList.add("open");

      if (yPosition.value == "down") {
        position.value.top = `${a.top + a.height}px`;
      }

      if (yPosition.value == "up") {
        position.value.top = `${a.top - p.height}px`;
      }

      if (yPosition.value == "center") {
        position.value.top = `${a.top + (a.height - p.height) / 2}px`;
      }

      if (xPosition.value == "inside-left") {
        position.value.left = `${a.left}px`;
      }

      if (xPosition.value == "inside-right") {
        position.value.left = `${a.left + (a.width - p.width)}px`;
      }

      if (xPosition.value == "left") {
        position.value.left = `${a.left - p.width}px`;
      }

      if (xPosition.value == "right") {
        position.value.left = `${a.left + a.width}px`;
      }

      if (xPosition.value == "fill") {
        position.value.left = `${a.left}px`;
        position.value.width = `${a.width}px`;
      }

      if (xPosition.value == "center") {
        position.value.left = `${a.left + (a.width - p.width) / 2}px`;
      }
    }

    return {
      popup,
      zIndex,
      position,
      yPosition,
      xPosition,
      close,
    };
  },
});
</script>
