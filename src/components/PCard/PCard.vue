<template>
  <PBox>
    <div class="p-card">
      <div class="image" v-if="$slots.image">
        <slot name="image"></slot>
      </div>
      <div class="content">
        <span class="title margin-none" v-if="$slots.title">
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
