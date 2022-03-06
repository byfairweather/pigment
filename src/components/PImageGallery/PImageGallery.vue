<template>
  <div class="p-image-gallery" ref="gallery">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from "vue";

export default defineComponent({
  name: "p-image-gallery",
  props: {
    minHeight: {
      type: Number,
      default: 150,
    },
  },
  setup(props, context) {
    const gallery = ref<HTMLElement>();

    onMounted(() => {
      if (gallery.value) {
        window.addEventListener("resize", fitGallery, { passive: true });
        const observer = new MutationObserver(fitGallery);
        observer.observe(gallery.value, {
          attributes: true,
          subtree: true,
          childList: true,
        });
      }
    });

    function fitGallery() {
      if (!gallery.value) return;

      const galleryWidth = gallery.value.offsetWidth;
      const images = Array.from(
        gallery.value.querySelectorAll(".p-image")
      ) as HTMLDivElement[];
      let row: HTMLDivElement[] = [];

      images.forEach((div) => {
        const image = div.querySelector(".image")! as HTMLImageElement;
        const spacing = parseFloat(window.getComputedStyle(div).margin) * 2;
        const rowWidth = getRowWidth(row);
        const imageAspect = image.naturalWidth / image.naturalHeight;
        const imageWidth = props.minHeight * imageAspect + spacing;

        if (imageWidth >= galleryWidth) {
          fitRow(row);
          row = [div];
        } else if (rowWidth + imageWidth > galleryWidth) {
          fitRow(row);
          row = [div];
        } else if (rowWidth + imageWidth <= galleryWidth) {
          row.push(div);
        }
      });

      fitRow(row, false);
    }

    function fitRow(row: HTMLDivElement[], fill = true): void {
      if (!gallery.value) return;

      const spacing = parseFloat(window.getComputedStyle(row[0]).margin) * 2;
      const galleryWidth =
        gallery.value.getBoundingClientRect().width - spacing * row.length;
      const rowAspect = getRowWidth(row) / props.minHeight;
      const rowHeight = fill ? galleryWidth / rowAspect : props.minHeight;

      row.forEach((div, index) => {
        const image = div.querySelector(".image") as HTMLImageElement;
        const imageAspect = image.naturalWidth / image.naturalHeight;

        if (
          div.style.height != rowHeight + "px" ||
          div.style.width != rowHeight * imageAspect + "px"
        ) {
          div.style.height = rowHeight + "px";
          div.style.width = rowHeight * imageAspect + "px";
        }
      });
    }

    function getRowWidth(row: HTMLDivElement[]) {
      return row.reduce((width, div) => {
        const image = div.querySelector(".image") as HTMLImageElement;
        const imageAspect = image.naturalWidth / image.naturalHeight;
        const imageWidth = props.minHeight * imageAspect;
        return width + imageWidth;
      }, 0);
    }

    return { gallery };
  },
});
</script>
