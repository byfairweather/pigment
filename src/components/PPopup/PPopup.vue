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
      <div
        class="p-popup-shade"
        :class="{ immersive: !anchor }"
        v-if="open"
        @click.stop="close"
      >
        <div class="close-button" v-if="!anchor">&times;</div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, PropType, ref, watch } from "vue";

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
    const xPosition = computed(() => {
      return props.position.split(" ")[0] ?? "center";
    });
    const yPosition = computed(() => {
      return props.position.split(" ")[1] ?? "center";
    });

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
      await nextTick();
      props.anchor?.classList.add("p-popup-anchor");
      props.anchor?.classList.remove("open");
      if (!popup.value || !props.open) return;

      const a = props.anchor ?? {
        offsetTop: window.scrollY,
        offsetHeight: window.innerHeight * 0.75,
        offsetLeft: window.scrollX,
        offsetWidth: window.innerWidth,
      };
      const p = popup.value;
      props.anchor?.classList.add("open");

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

      if (xPosition.value == "center") {
        position.value.left = `${
          a.offsetLeft + (a.offsetWidth - p.offsetWidth) / 2 - window.scrollX
        }px`;
      }

      position.value.left;
    }

    return {
      popup,
      position,
      yPosition,
      xPosition,
      close,
    };
  },
});
</script>
