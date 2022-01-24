<template>
  <div
    class="p-card"
    :class="{ clickable }"
    :tabindex="clickable ? 0 : undefined"
    :role="clickable ? 'button' : undefined"
  >
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="content">
      <span class="title" v-if="$slots.title">
        <slot name="title"></slot>
      </span>
      <span class="subtitle" v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </span>
      <span class="body" v-if="$slots.body">
        <slot name="body"></slot>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import PSpinner from "../PSpinner/PSpinner.vue";

export default defineComponent({
  name: "p-card",
  setup(props, context) {
    const clickable = computed(() => !!context.attrs.onClick);

    return { clickable };
  },
  components: { PSpinner },
});
</script>
