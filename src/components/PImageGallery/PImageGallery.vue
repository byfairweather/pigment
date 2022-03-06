<template>
  <div class="p-image-gallery" ref="gallery">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "p-image-gallery",
  props: {
    minHeight: {
      type: Number,
      default: 100,
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

      const galleryWidth = getGalleryWidth();
      const images = Array.from(
        gallery.value.querySelectorAll(".p-image")
      ) as HTMLDivElement[];
      let row: HTMLDivElement[] = [];

      images.forEach((div) => {
        const image = div.querySelector(".image")! as HTMLImageElement;
        const rowWidth = getRowWidth(row);
        const imageAspect = image.naturalWidth / image.naturalHeight;
        const imageWidth = props.minHeight * imageAspect + getSpacing();

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
      if (row.length == 0) return;

      const width = getGalleryWidth();
      const spacing = getSpacing() * (row.length - 1);
      const rowAspect = getRowWidth(row, false) / props.minHeight;
      const rowHeight = fill ? (width - spacing) / rowAspect : props.minHeight;

      row.forEach((div) => {
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

    function getRowWidth(row: HTMLDivElement[], spacing = true): number {
      if (row.length == 0) return 0;

      const width = row.reduce((width, div) => {
        const image = div.querySelector(".image") as HTMLImageElement;
        const imageAspect = image.naturalWidth / image.naturalHeight;
        const imageWidth = props.minHeight * imageAspect;
        return width + imageWidth;
      }, 0);

      return width + (spacing ? getSpacing() * (row.length - 1) : 0);
    }

    function getGalleryWidth(): number {
      if (!gallery.value) return 0;

      const galleryStyle = window.getComputedStyle(gallery.value);
      const spacing = parseFloat(galleryStyle.margin) * -2;
      return gallery.value.getBoundingClientRect().width - spacing;
    }

    function getSpacing(): number {
      if (!gallery.value) return 0;

      const galleryStyle = window.getComputedStyle(gallery.value);
      return parseFloat(galleryStyle.margin) * -2;
    }

    return { gallery };
  },
});
</script>
