<template>
  <component
    class="p-card"
    :class="{ clickable }"
    :is="clickable ? 'button' : 'div'"
  >
    <PBox>
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
    </PBox>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import PBox from "../PBox/PBox.vue";

export default defineComponent({
  name: "p-card",
  setup(props, context) {
    const clickable = computed(() => !!context.attrs.onClick);

    return { clickable };
  },
  components: { PBox },
});
</script>
