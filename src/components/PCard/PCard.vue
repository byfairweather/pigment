<template>
  <PBox class="p-card">
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="content" v-if="$slots.title || $slots.subtitle || $slots.body">
      <h3 class="title margin-none" v-if="$slots.title">
        <slot name="title"></slot>
      </h3>
      <span class="subtitle" v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </span>
      <span class="body" v-if="$slots.body">
        <slot name="body"></slot>
      </span>
    </div>
    <slot></slot>
  </PBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PBox from "../PBox/PBox.vue";

export default defineComponent({
  name: "p-card",
  components: { PBox },
});
</script>
