import { ref } from "vue";

const popupZIndex = ref(100000);

export function getNewPopupLayer() {
  const zIndex = (popupZIndex.value += 10);
  return zIndex;
}
