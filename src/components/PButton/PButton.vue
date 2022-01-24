<template>
  <button
    class="p-button"
    :class="{ loading }"
    @click.capture.stop="click()"
    @mousedown.prevent
  >
    <div class="label">
      <slot></slot>
    </div>
    <PSpinner v-if="loading" />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PSpinner from "../PSpinner/PSpinner.vue";

export default defineComponent({
  name: "p-button",
  setup(props, context) {
    const loading = ref(false);

    async function click(): Promise<void> {
      if (!loading.value) {
        loading.value = true;

        try {
          await ((context.attrs.onClick as () => unknown) ?? (() => null))();
        } finally {
          loading.value = false;
        }
      }
    }

    return { loading, click };
  },
  components: { PSpinner },
});
</script>
