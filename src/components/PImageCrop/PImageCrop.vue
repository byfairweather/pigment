<template>
  <div class="p-image-crop">
    <img ref="imageElement" :src="image" @load="initializeCrop()" />
    <div
      ref="cropElement"
      class="crop"
      @mousedown.prevent="startDrag"
      @touchstart.prevent="startDrag"
    >
      <div class="gridlines">
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
        <div class="gridcell" data-handle="m"></div>
      </div>

      <template
        v-for="coordinate in ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw']"
        :key="coordinate"
      >
        <div
          class="handle"
          :class="coordinate"
          :data-handle="coordinate"
          @mousedown.prevent="startDrag"
          @touchstart.prevent="startDrag"
        ></div>
      </template>

      <div
        class="diagonal"
        :style="{ transform: 'rotate(' + getDiagonal() + 'deg)' }"
        v-if="rotatable == 'forward'"
        @mouseout="autoRotate($event)"
      ></div>
      <div
        class="diagonal"
        :style="{ transform: 'rotate(-' + getDiagonal() + 'deg)' }"
        v-if="rotatable == 'backward'"
        @mouseout="autoRotate($event)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "p-image-crop",
  props: {
    aspect: {
      type: Number,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    let activeDragHandle: string | undefined = undefined;
    let aspect = ref();
    let initialMousePosition = { x: 0, y: 0 };
    let initialCrop: CropRect | undefined = undefined;
    let rotatable = ref("");
    const imageElement = ref<HTMLElement>();
    const cropElement = ref<HTMLElement>();

    onMounted(() => {
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", drag);
      document.addEventListener("mouseup", endDrag);
      document.addEventListener("touchend", endDrag);
      window.addEventListener("resize", windowResize);

      watch(
        () => props.aspect,
        () => {
          initializeCrop();
        }
      );
    });

    onBeforeUnmount(() => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("touchend", endDrag);
      window.removeEventListener("resize", windowResize);
    });

    function getDiagonal(): number {
      return Math.atan(aspect.value) * (180 / Math.PI);
    }

    function updateValue(): void {
      const imageSize = getSize(imageElement.value as HTMLElement);
      const cropRect = getRect(cropElement.value as HTMLElement);

      const relativeCrop: CropRect = {
        top: cropRect.top / imageSize.height,
        left: cropRect.left / imageSize.width,
        width: cropRect.width / imageSize.width,
        height: cropRect.height / imageSize.height,
      };

      // Make sure crop doesn't exceed image size
      if (relativeCrop.left + relativeCrop.width > 1) {
        relativeCrop.width -= relativeCrop.left + relativeCrop.width - 1;
      }
      if (relativeCrop.top + relativeCrop.height > 1) {
        relativeCrop.height -= relativeCrop.top + relativeCrop.height - 1;
      }

      context.emit("update:modelValue", relativeCrop);
    }

    function initializeCrop(): void {
      if (cropElement.value) {
        aspect.value = props.aspect ? Number(props.aspect) : undefined;
        const imageSize = getSize(imageElement.value as HTMLElement);
        const originalAspectRatio = imageSize.width / imageSize.height;

        if (
          (originalAspectRatio < 1 && aspect.value > 1) ||
          (originalAspectRatio > 1 && aspect.value < 1)
        ) {
          rotateCrop();
        }

        setCrop({ ...imageSize, left: 0, top: 0 });
      }
    }

    function setCrop(
      cropRect: CropRect,
      constraints: CropConstraints = { count: 0 }
    ) {
      const crop = cropElement.value as HTMLElement;

      bindToFrame(cropRect, constraints);

      crop.style.left = cropRect.left + "px";
      crop.style.top = cropRect.top + "px";
      crop.style.width = cropRect.width + "px";
      crop.style.height = cropRect.height + "px";

      updateValue();
    }

    function bindToFrame(
      cropRect: CropRect,
      constraints: CropConstraints = { count: 0 }
    ): CropRect {
      const imageSize = getSize(imageElement.value as HTMLElement);
      const currentCrop = getRect(cropElement.value as HTMLElement);
      const minSize = 60;
      const leftAdjustment = constraints.left ? 0 : constraints.right ? 1 : 0.5;
      const topAdjustment = constraints.top ? 0 : constraints.bottom ? 1 : 0.5;

      // Lock to aspect ratio: (w+i)/(h-i) = a, solve for i
      const aspectAdjustment = aspect.value
        ? (aspect.value * cropRect.height - cropRect.width) / (1 + aspect.value)
        : 0;
      cropRect.width += aspectAdjustment;
      cropRect.height -= aspectAdjustment;
      cropRect.left -= aspectAdjustment * leftAdjustment;
      cropRect.top += aspectAdjustment * topAdjustment;

      // Restrict size
      if (cropRect.width > imageSize.width) {
        const diff = cropRect.width - imageSize.width;
        cropRect.width -= diff;
        cropRect.height -= diff / aspect.value;
        cropRect.left += diff * leftAdjustment;
        cropRect.top += (diff * leftAdjustment) / aspect.value;
      }
      if (cropRect.height > imageSize.height) {
        const diff = cropRect.height - imageSize.height;
        cropRect.height -= diff;
        cropRect.width -= diff * aspect.value;
        cropRect.top += diff * topAdjustment;
        cropRect.left += diff * topAdjustment * aspect.value;
      }

      if (cropRect.width < minSize) {
        const diff = cropRect.width - minSize;
        cropRect.width -= diff;
        cropRect.height -= diff / aspect.value;
        cropRect.left += diff * leftAdjustment;
        cropRect.top += (diff * leftAdjustment) / aspect.value;
      }
      if (cropRect.height < minSize) {
        const diff = cropRect.height - minSize;
        cropRect.height -= diff;
        cropRect.width -= diff * aspect.value;
        cropRect.top += diff * topAdjustment;
        cropRect.left += diff * topAdjustment * aspect.value;
      }

      // Restrict Position
      const isMinSize = cropRect.height <= minSize || cropRect.width <= minSize;
      const leftRestricted =
        (cropRect.height >= imageSize.height || isMinSize) &&
        (constraints.count || 0) != 0;
      const minLeft = leftRestricted ? currentCrop.left : 0;
      const maxLeft = leftRestricted
        ? currentCrop.left
        : imageSize.width - cropRect.width;
      const topRestricted =
        (cropRect.width >= imageSize.width || isMinSize) &&
        (constraints.count || 0) != 0;
      const minTop = topRestricted ? currentCrop.top : 0;
      const maxTop = topRestricted
        ? currentCrop.top
        : imageSize.height - cropRect.height;
      cropRect.left = clamp(cropRect.left, minLeft, maxLeft);
      cropRect.top = clamp(cropRect.top, minTop, maxTop);

      return cropRect;
    }

    function startDrag(event: MouseEvent | TouchEvent): void {
      const touchEvent = event as unknown as TouchEvent;
      initialCrop = getRect(cropElement.value as HTMLElement);

      // Touch Event
      if (touchEvent.touches) {
        activeDragHandle = (touchEvent.touches[0].target as HTMLElement).dataset
          .handle;
        initialMousePosition = {
          x: touchEvent.touches[0].clientX,
          y: touchEvent.touches[0].clientY,
        };
      }
      // Mouse Event
      else {
        activeDragHandle = (event.target as HTMLElement).dataset.handle;
        initialMousePosition = {
          x: (event as MouseEvent).clientX,
          y: (event as MouseEvent).clientY,
        };
      }

      if (activeDragHandle == "sw" || activeDragHandle == "ne") {
        rotatable.value = "forward";
      }
      if (activeDragHandle == "se" || activeDragHandle == "nw") {
        rotatable.value = "backward";
      }
    }

    function drag(event: MouseEvent | TouchEvent) {
      const touchEvent = event as unknown as TouchEvent;

      if (activeDragHandle) {
        let drag = { clientX: 0, clientY: 0 };

        // Touch Event
        if (touchEvent.touches) {
          drag = touchEvent.touches[0];
        }

        // Mouse event
        else {
          drag = event as MouseEvent;
        }

        const crop = { ...initialCrop } as CropRect;
        const mousePosition = { x: drag.clientX, y: drag.clientY };
        const constraints = getCropConstraints(activeDragHandle);

        if (constraints.count == 0) {
          crop.left -= initialMousePosition.x - mousePosition.x;
          crop.top -= initialMousePosition.y - mousePosition.y;
        }

        if (constraints.left) {
          crop.width -= initialMousePosition.x - mousePosition.x;
        }

        if (constraints.right) {
          crop.width += initialMousePosition.x - mousePosition.x;
          crop.left -= initialMousePosition.x - mousePosition.x;
        }

        if (constraints.top) {
          crop.height -= initialMousePosition.y - mousePosition.y;
        }

        if (constraints.bottom) {
          crop.height += initialMousePosition.y - mousePosition.y;
          crop.top -= initialMousePosition.y - mousePosition.y;
        }

        setCrop(crop, constraints);
      }
    }

    function endDrag(): void {
      rotatable.value = "";
      activeDragHandle = undefined;
    }

    function rotateCrop() {
      const cropRect = getRect(cropElement.value as HTMLElement);
      aspect.value = 1 / aspect.value;
      setCrop(cropRect);
      endDrag();
    }

    function autoRotate(event: MouseEvent): void {
      const touchEvent = event as unknown as TouchEvent;
      let mouse = { clientX: 0, clientY: 0 };
      const edgeTolerance = 10;

      // Touch Event
      if (touchEvent.touches) {
        mouse = touchEvent.touches[0];
      }

      // Mouse Event
      else {
        mouse = event;
      }

      const imageRect = imageElement.value?.getBoundingClientRect() as DOMRect;
      if (
        mouse.clientX > imageRect.x + edgeTolerance &&
        mouse.clientX < imageRect.x + imageRect?.width - edgeTolerance &&
        mouse.clientY > imageRect.y + edgeTolerance &&
        mouse.clientY < imageRect.y + imageRect?.height - edgeTolerance
      ) {
        rotateCrop();
      }
    }

    function windowResize(): void {
      const cropRect = getRect(cropElement.value as HTMLElement);
      setCrop(cropRect);
    }

    function getRect(element: HTMLElement): CropRect {
      const rect = element.getBoundingClientRect();
      return {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight,
      };
    }

    function getSize(element: HTMLElement): ImageSize {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight,
      };
    }

    function getCropConstraints(handle: string): CropConstraints {
      const constraint: { [key: string]: CropConstraints } = {
        n: { bottom: true },
        e: { left: true },
        s: { top: true },
        w: { right: true },
        m: {},
      };

      const constraints = {
        ...constraint[handle.charAt(0)],
        ...constraint[handle.charAt(1)],
      };

      constraints.count = Object.keys(constraints).length;

      return constraints;
    }

    function clamp(value: number, min: number, max: number): number {
      return Math.min(Math.max(value, min), max);
    }
    return {
      imageElement,
      cropElement,
      rotatable,
      initializeCrop,
      rotateCrop,
      autoRotate,
      startDrag,
      drag,
      endDrag,
      getDiagonal,
    };
  },
});

interface CropConstraints {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  count?: number;
}

interface CropRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface ImageSize {
  width: number;
  height: number;
}
</script>
